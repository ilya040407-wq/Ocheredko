from django.conf import settings
from django.core.mail import send_mail
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response
from .models import User
from .serializers import UserSerializer, FeedbackSerializer


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
        serializer = FeedbackSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        data = serializer.validated_data
        subject = f'Обратная связь: {data["name"]}'
        message = (
            f'Имя: {data["name"]}\n'
            f'Email: {data["email"]}\n\n'
            f'Сообщение:\n{data["message"]}'
        )

        try:
            send_mail(
                subject=subject,
                message=message,
                from_email=settings.DEFAULT_FROM_EMAIL,
                recipient_list=[settings.FEEDBACK_RECIPIENT],
                fail_silently=False,
            )
        except Exception as exc:
            return Response(
                {'success': False, 'message': f'Не удалось отправить письмо: {exc}'},
                status=status.HTTP_503_SERVICE_UNAVAILABLE,
            )

        return Response(
            {'success': True, 'message': 'Сообщение успешно отправлено'},
            status=status.HTTP_200_OK,
        )
