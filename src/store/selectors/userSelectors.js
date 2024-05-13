// В файле userSelectors.js
import { createSelector } from 'reselect';

// Получение состояния входа пользователя
const selectUserState = state => state.user;

export const selectIsUserLoggedIn = createSelector(
    [selectUserState],
    user => user.isLogin
);

export const selectUserData = createSelector(
    [selectUserState],
    user => user.user
);
