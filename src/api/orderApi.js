import axios from 'axios';

const BASE_URL = process.env.REACT_APP_URL

export const makeOrder = async (orderData) => {
    try {
        // Получаем токен из локального хранилища
        const token = localStorage.getItem('token');

        // URL для запроса создания заказа
        const url = `${BASE_URL}api/makeOrder`;

        // Добавляем токен в заголовок запроса для авторизации
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        // Отправляем запрос на сервер с данными заказа и авторизационным заголовком
        const response = await axios.post(url, orderData, config);

        // Проверяем успешность запроса
        if (response.status === 201) {
            console.log(response)
            return response.data;
        }
    } catch (error) {
        console.error('Ошибка при создании заказа:', error);
        throw error;
    }
};
