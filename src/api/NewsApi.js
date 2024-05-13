import axios from 'axios';

const BASE_URL = process.env.REACT_APP_URL

export const fetchNewsApi = async (lang) => {
    try {
        const token = localStorage.getItem('token');
        const url = `${BASE_URL}api/news/?language=${lang}`;

        // Добавляем токен в заголовок запроса для авторизации
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        const response = await axios.get(url, config);

        if (response.status === 200) {
            return response.data;
        }
    } catch (error) {
        console.error('Error while fetching categories:', error);
        throw error;
    }
};

