# Добавление анкеты

### _URL:_

```text
http://188.225.36.185/api/worksheet/add-worksheet/
```

### _Метод:_ POST

<hr>

### _Пример отправки запроса:_

> body 👇 (JSON)

```json5
{
    // id вакансии, на которую записывается клиент
    "vacancy": 8,
    // имя
    "client_name": "Алексей",
    // фамилия
    "client_surname": "Несповитый",
    // номер телефона (11 цифр и ничего другого)
    "client_phone": "85566778890"
}
```

> headers 👇

```json5
{
    // токен юзера
    "Authorization": "Bearer eyJhbGpXVCJ9.eyJpZCI6NSMjMyfQ.yMy6LZ0QA8JsB3LLl0"
}
```

<hr>

### _Пример ответа сервера (JSON):_

```json5
```

<hr>

### _Статус ответа (при успехе):_ 201
