from django.conf import settings
from django.core.mail import EmailMessage
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response
from .models import User, Feedback
from .serializers import UserSerializer, FeedbackSerializer
import smtplib


def _smtp_configured():
    return (
        'smtp.EmailBackend' in settings.EMAIL_BACKEND
        and settings.EMAIL_HOST_USER
        and settings.EMAIL_HOST_PASSWORD
    )


def _smtp_error_message(exc):
    if isinstance(exc, smtplib.SMTPAuthenticationError):
        return (
            'Ошибка авторизации SMTP. Для Mail.ru нужен пароль приложения: '
            'https://help.mail.ru/mail/security/protection/external'
        )
    return f'Не удалось отправить письмо: {exc}'


class UserListView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAuthenticated]


class UserProfileview(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [TokenAuthentication]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)


class RegApiView(APIView):
    permission_classes = [AllowAny]
    authentication_classes = []

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            token, _created = Token.objects.get_or_create(user=user)
            return Response(
                {
                    'success': True,
                    'token': token.key,
                    'user_id': user.id,
                    'email': user.email,
                },
                status=status.HTTP_201_CREATED,
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AuthApiView(ObtainAuthToken):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        data = request.data.copy()
        if not data.get('username') and data.get('email'):
            data['username'] = data['email']

        serializer = self.serializer_class(data=data, context={'request': request})
        if not serializer.is_valid():
            return Response(
                {
                    'success': False,
                    'message': 'Неверный email или пароль',
                    'errors': serializer.errors,
                },
                status=status.HTTP_401_UNAUTHORIZED,
            )

        user = serializer.validated_data['user']
        token, _created = Token.objects.get_or_create(user=user)
        return Response(
            {
                'success': True,
                'token': token.key,
                'user_id': user.pk,
                'email': user.email,
            },
            status=status.HTTP_200_OK,
        )


class FeedbackApiView(APIView):
    permission_classes = [AllowAny]
    authentication_classes = []

    def post(self, request):
        if not _smtp_configured():
            return Response(
                {
                    'success': False,
                    'message': (
                        'SMTP не настроен на сервере. '
                        'Добавьте EMAIL_HOST_USER и EMAIL_HOST_PASSWORD в переменные окружения Render.'
                    ),
                },
                status=status.HTTP_503_SERVICE_UNAVAILABLE,
            )

        serializer = FeedbackSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        data = serializer.validated_data
        feedback = Feedback.objects.create(
            name=data['name'],
            email=data['email'],
            message=data['message'],
        )

        subject = f'Обратная связь: {data["name"]}'
        message = (
            f'Имя: {data["name"]}\n'
            f'Email: {data["email"]}\n\n'
            f'Сообщение:\n{data["message"]}'
        )

        try:
            email = EmailMessage(
                subject=subject,
                body=message,
                from_email=settings.DEFAULT_FROM_EMAIL,
                to=[settings.FEEDBACK_RECIPIENT],
                reply_to=[data['email']],
            )
            email.send(fail_silently=False)
            feedback.email_sent = True
            feedback.save(update_fields=['email_sent'])
        except Exception as exc:
            return Response(
                {
                    'success': False,
                    'message': _smtp_error_message(exc),
                    'saved': True,
                },
                status=status.HTTP_503_SERVICE_UNAVAILABLE,
            )

        return Response(
            {'success': True, 'message': 'Сообщение успешно отправлено на почту'},
            status=status.HTTP_200_OK,
        )
