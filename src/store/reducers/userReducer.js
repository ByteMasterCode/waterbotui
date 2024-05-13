// В файле userReducer.js
import { LOGIN_USER, LOGOUT_USER } from '../actions/userAction'; // Исправлен импорт

const initialState = {
    isLogin: false,
    user: {}
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                isLogin: true,
                user: action.payload
            };
        case LOGOUT_USER: // Добавлен case для выхода пользователя
            return {
                ...state,
                isLogin: false,
                user: {}
            };
        default:
            return state;
    }
};

export default userReducer;
