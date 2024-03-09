# Добавление вакансии

### _URL:_

```text
http://188.225.36.185/api/vacancy/add-vacancy/
```

### _Метод:_ POST

<hr>

### _Пример отправки запроса:_

> body 👇 (FormData)

```js
    // название вакансии
    formData.append('title', "Название вакансии");
    // фото
    formData.append('photo', photo);
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
{
    // id вакансии
    "id": 4,
    // название вакансии
    "title": "Чувак",
    // url для фото вакансии
    "photo_url": "http://127.0.0.1:8000/media/vacancy_photos/%D0%A7%D1%83%D0%B2%D0%B0%D0%B0%D0%B0%D0%B0%D0%B0%D0%BA.png"
}
```

<hr>

### _Статус ответа (при успехе):_ 201
