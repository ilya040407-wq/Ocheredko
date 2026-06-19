from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.response import Response
from .models import *
from .serializers import *

class UserListView(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserProfileview(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes =[TokenAuthentication]
    def get (self, requst):
        serializers = UserSerializer(requst.user)
        return Response(serializers.data)
    
class RegApiView (APIView):
    permission_classes = []
    authentication_classes =[]
    def post(self, requst):
        serializers = UserSerializer(data=requst.data)
        if serializers.is_valid():
            user = serializers.save()
            token, created = Token.objects.get_or_create(user=user)
            return Response ({
                'success':True,
                'token':token.key,
                'user_id':user.id,
                'email':user.email,
            }, status=status.HTTP_201_CREATED)
        return Response(serializers.errors, status=status.HTTP_400_BAD_REQUEST)

class AuthApiView(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        serializers - self.serializer_class(data=request.data, context = {'request':request})
        if not serializers.is_valid():
            return Response ({
                'success':False,
                'massage':'нету этого пользователя',
                'erroes': serializers.errors
            }, status=status.HTTP_401_UNAUTHORIZED)
        user = serializers.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response ({
                'success':True,
                'token':token.key,
                'user_id':user.pk,
                'email':user.email,
            }, status=status.HTTP_201_CREATED)
