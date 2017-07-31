import {
    USER_LOGIN,
    USER_ERROR
} from './actionTypes';

// Const Error
const ERROR_EMPTY = "Both email and password must be filled.";
const ERROR_WRONG = 'Email or password is wrong.';

// Mockup data for login demo
const token = 'access_token';
const email = 'demo@demo.com';
const password = '123456';

const login = credentials => {
    var error = null;
    if (!credentials.email || !credentials.password) {
        error = ERROR_EMPTY;
    }
    if (credentials.email != email || credentials.password != password) {
        error = ERROR_WRONG;
    }

    if (error != null) {
        return {
            type: USER_ERROR,
            error: error
        };
    }

    localStorage.setItem('token', token);
    localStorage.setItem('email', credentials.email);
    return {
        type: USER_LOGIN,
        email: credentials.email
    };
};

export default login;