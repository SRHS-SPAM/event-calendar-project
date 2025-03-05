from django.shortcuts import render

import os
from urllib.parse import urlencode
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
import json
from django.urls import path, reverse
from rest_framework.decorators import api_view

from django.contrib.auth.backends import BaseBackend
from django.contrib.auth.models import User

class EmailBackend(BaseBackend):
    def authenticate(self, request, email=None, password=None):
        try:
            user = User.objects.get(email=email)
            if user.check_password(password):
                return user
        except User.DoesNotExist:
            return None


# 데이터 검증 및 처리 API
from django.contrib.auth import get_user_model
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
import json

User = get_user_model()

@csrf_exempt
@api_view(['POST', 'OPTIONS'])
def validate_and_process_user(request):
    if request.method == 'POST':
        try:
            # JSON 데이터 파싱
            data = json.loads(request.body)
            action = data.get('action')
            username = data.get('username')
            password = data.get('password')
            email = data.get('email', '')
            birthday = data.get('birthday', '')

            if action == 'register':
                # 회원가입 처리
                if User.objects.filter(email=email).exists():
                    return JsonResponse({'success': False, 'message': "이미 있는 이메일입니다."}, status=400)
                
                user = User.objects.create_user(
                    username=username, 
                    password=password, 
                    email=email
                )
                
                # birthday가 제공되었다면 별도로 설정
                if birthday:
                    user.birthday = birthday
                    user.save()
                
                return JsonResponse({'success': True, 'message': "회원가입에 성공했습니다."}, status=201)

            elif action == 'login':
                # 로그인 처리
                user = authenticate(request, username=email, password=password)
                if user is not None:
                    login(request, user)
                    return JsonResponse({
                        'success': True,
                        'message': "",
                        'user': {
                            'username': user.username,
                            'email': user.email,
                        }
                    }, status=200)
                else:
                    return JsonResponse({'success': False, 'message': "이메일이나 비밀번호가 맞지 않습니다."}, status=401)

        except json.JSONDecodeError:
            return JsonResponse({'success': False, 'message': "JSON 형식이 잘못되었습니다."}, status=400)

    return JsonResponse({'success': False, 'message': "허용되지 않은 요청 방식입니다."}, status=405)

#날짜 보내주는 코드
from django.http import JsonResponse
from datetime import datetime

def get_current_date(request):
    current_date = datetime.now().strftime('%Y-%m-%d')  # 'YYYY-MM-DD' 형식
    return JsonResponse({'current_date': current_date})