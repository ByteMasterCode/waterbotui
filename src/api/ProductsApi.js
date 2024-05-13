import axios from 'axios';

const BASE_URL = process.env.REACT_APP_URL

export const fetchProducts = async (lang) => {
    try {
        const token = localStorage.getItem('token');
        const url = `${BASE_URL}api/products-user/?language=${lang}`;

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


export const fetchProductsById = async (Id) => {
    try {
        const token = localStorage.getItem('token');
        const url = `${BASE_URL}api/products/${Id}`;

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
