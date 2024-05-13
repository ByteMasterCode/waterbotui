import axios from 'axios';

const BASE_URL = process.env.REACT_APP_URL

const fetchCategories = async (lang) => {
    try {
        const token = localStorage.getItem('token');
        const url = `${BASE_URL}api/category-lang/${lang}`;

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


export const fetchCategoriesById= async (lang,Id) => {
    try {
        const token = localStorage.getItem('token');
        const url = `${BASE_URL}api/category-user-id/${Id}`;

        // Добавляем токен в заголовок запроса для авторизации
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        const response = await axios.get(url, config);

        if (response.status === 200) {
            return response;
        }
    } catch (error) {
        console.error('Error while fetching categories:', error);
        throw error;
    }
};

export default fetchCategories;

export const fetchCategoriesType = async (lang) => {
    try {
        const token = localStorage.getItem('token');
        const url = `${BASE_URL}api/category-type-user/?language=${lang}`;

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


export const fetchCategoriesTypeByID = async (ID) => {
    try {
        const token = localStorage.getItem('token');
        const url = `${BASE_URL}api/category-type-id/${ID}`;

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


