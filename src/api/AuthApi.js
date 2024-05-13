import axios from 'axios';


const  BASE_URL =process.env.REACT_APP_URL
// Функция для выполнения входа пользователя
const loginApi = async (userData) => {
    try {
        // Формируем URL для запроса на сервер, используя переменную APP_URL из .env
        const url = `${BASE_URL}api/login`;
        console.log(url)
        // Отправляем запрос на сервер
        const response = await axios.post(url, userData); // Отправляем userData напрямую

        // Проверяем успешность запроса
        if (response.status === 200) {
            // Извлекаем токен из ответа сервера
            const { token } = response.data;
            const { user } = response.data;
            localStorage.setItem('user',user.fullname)
            localStorage.setItem('login',true)
            // Сохраняем токен в localStorage под именем 'token'
            localStorage.setItem('token', token);
            localStorage.setItem('user_id',user.id)

            // Возвращаем токен для дальнейшего использования (если нужно)
            return response.data;
        }
    } catch (error) {
        localStorage.setItem('login',false)
        // Обрабатываем ошибку (если нужно)
        console.error('Error while logging in:', error);
        throw error; // Можно выбросить ошибку для дальнейшей обработки в компоненте
    }
};

export default loginApi;

export const registerApi = async (userData) => {
    try {
        const url = `${BASE_URL}api/register`;

        const response = await axios.post(url, userData);

        if (response.status === 200) {
            const { token } = response.data;
            const { user } = response.data;
            localStorage.setItem('user', user.fullname);
            localStorage.setItem('token', token);
            return response.data;
        }
    } catch (error) {
        console.error('Error while registering:', error);
        throw error;
    }
};


