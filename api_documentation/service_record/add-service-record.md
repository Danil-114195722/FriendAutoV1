# Добавление записи на услугу

### _URL:_

```text
http://188.225.36.185/api/service-record/add-service-record/
```

### _Метод:_ POST

<hr>

### _Пример отправки запроса:_

> body 👇 (JSON)

```json5
{
    // id услуги, на которую записывается клиент
    "service": 6,
    // марка машины
    "car_brand": "Kia",
    // номер машины
    "car_number": "A111AA",
    // номер телефона (11 цифр и ничего другого)
    "client_phone": "89608855667"
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
