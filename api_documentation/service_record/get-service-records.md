# Получение всех записей на услуги

### _URL:_

```text
http://188.225.36.185/api/service-record/get-service-records/
```

### _Метод:_ GET

<hr>

### _Пример отправки запроса:_

> headers 👇

```json5
{
    // токен юзера
    "Authorization": "Bearer eyJhbGpXVCJ9.eyJpZCI6NSMjMyfQ.yMy6LZ0QA8JsB3LLl0"
}
```

<hr>

### _Пример ответа сервера (JSON, массив объектов):_

```json5
[
    {
        // id записи
        "id": 1,
        // марка машины
        "car_brand": "Nissan",
        // номер машины
        "car_number": "H222AA",
        // номер телефона
        "client_phone": "88005553535",
        // время отправки записи на услугу
        "sent_at": "2024-03-08 18:06",
        // информация об услуге, на которую записался клиент
        "service": {
            // название услуги
            "name": "new service 5",
            // цена услуги
            "price": "1500",
            // название категории услуги
            "category_name": "Кузов и прочее"
        }
    },
    {
        "id": 4,
        "car_brand": "Kia",
        "car_number": "A111AA",
        "client_phone": "89608855667",
        "sent_at": "2024-03-08 19:21",
        "service": {
            "name": "new service 6",
            "price": "1200",
            "category_name": "Ремонт КПП"
        }
    }
]
```

<hr>

### _Статус ответа (при успехе):_ 200
