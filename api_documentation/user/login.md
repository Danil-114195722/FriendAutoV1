# Вход для админа

### _URL:_

```text
http://188.225.36.185/api/user/login/
```

### _Метод:_ POST

<hr>

### _Пример отправки запроса:_

> body 👇 (JSON)

```json5
{
    // логин пользователя
    "username": "admin",
    // пароль
    "password": "123"
}
```

<hr>

### _Пример ответа сервера (JSON):_

```json5
{
    // токен юзера
    "token": "eyJhbGpXVCJ9.eyJpZCI6NSMjMyfQ.yMy6LZ0QA8JsB3LLl0"
}
```

<hr>

### _Статус ответа (при успехе):_ 200
