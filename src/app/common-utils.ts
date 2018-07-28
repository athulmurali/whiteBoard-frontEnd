import {TOKEN_NAME} from './constants/http';

export const saveAuthToken = (token) => {
  localStorage.setItem(TOKEN_NAME, token);

};
export const removeAuthToken = () => {
  localStorage.removeItem(TOKEN_NAME);
};

