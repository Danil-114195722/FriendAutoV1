"""
Django settings for backend project.

Generated by 'django-admin startproject' using Django 4.1.

For more information on this file, see
https://docs.djangoproject.com/en/4.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/4.1/ref/settings/
"""

import os
from datetime import timedelta

from dotenv import load_dotenv
from pathlib import Path


# загрузка переменных окружения
load_dotenv()


# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.getenv('DJANGO_SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True if os.getenv('DEBUG') == 'True' else False

ALLOWED_HOSTS = os.getenv('ALLOWED_HOSTS').split(' ')


# Application definition
DEFAULT_APPS = (
    # 'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
)
THIRD_PARTY_APPS = (
    'rest_framework',
    'corsheaders',
)
LOCAL_APPS = (
    'core',
    'user',
    'service',
    'vacancy',
    'service_record',
    'worksheet',
)
INSTALLED_APPS = LOCAL_APPS + THIRD_PARTY_APPS + DEFAULT_APPS


MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    # my middleware to check token in Token table
    'core.middlewares.CheckTokenMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'backend.urls'

WSGI_APPLICATION = 'backend.wsgi.application'

IP_OR_DNS_SERVER = os.getenv('IP_OR_DNS_SERVER')

MAIN_ADMIN_USERNAME = os.getenv('MAIN_ADMIN_USERNAME')
MAIN_ADMIN_PASSWORD = os.getenv('MAIN_ADMIN_PASSWORD')


# Database
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': os.getenv('DB_NAME'),
        'USER': os.getenv('DB_USER'),
        'PASSWORD': os.getenv('DB_USER_PASSWORD'),
        'HOST': os.getenv('DB_HOST'),
        'PORT': os.getenv('DB_PORT'),
    }
    # 'default': {
    #     'ENGINE': 'django.db.backends.mysql',
    #     'NAME': os.getenv('MYSQL_DATABASE'),
    #     'USER': os.getenv('DB_USER'),
    #     'PASSWORD': os.getenv('MYSQL_ROOT_PASSWORD'),
    #     'HOST': os.getenv('DB_HOST'),
    #     'PORT': os.getenv('DB_PORT'),
    # }
}


# Password validation
AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]

REST_FRAMEWORK = {
    'EXCEPTION_HANDLER': 'core.exceptions.core_exception_handler',
    'NON_FIELD_ERRORS_KEY': 'error',
    'DEFAULT_AUTHENTICATION_CLASSES': (
        'core.auth_backend.JWTAuthentication',
    ),
}
JWT_EXPIRE = timedelta(days=10)


# development (NOT USE IN PRODUCTION)
CORS_ALLOW_ALL_ORIGINS = True
# Адреса с доступом к кросс-доменным запросам
# CORS_ALLOWED_ORIGINS = [
#    "http://frontend:5050"
# ]

# Разрешение на включение в запрос куки
CORS_ALLOW_CREDENTIALS = True
# Разрешённые методы
CORS_ALLOW_METHODS = (
    "OPTIONS",
    "GET",
    "POST",
    "DELETE",
)


# Internationalization
LANGUAGE_CODE = 'en-us'
TIME_ZONE = 'Europe/Moscow'
USE_I18N = True
USE_TZ = True


# Static files (CSS, JavaScript, Images)
STATIC_URL = 'static/'
STATIC_ROOT = BASE_DIR / 'static'

# Media files (Images)
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media/')

DEFAULT_VACANCY_PHOTO = 'vacancy_photos/default_worker.png'

# Default primary key field type
DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
# my custom "User" model
AUTH_USER_MODEL = 'user.User'
