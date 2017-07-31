import {
    USER_LOGIN,
    USER_ERROR
} from '../actions/actionTypes';

const initialState = {
    loggedIn: !! localStorage.getItem('token'),
    token: localStorage.getItem('token'),
    email: localStorage.getItem('email')
};

const user = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return Object.assign({}, state, {
                email: action.email,
                error: null
            });
        case USER_ERROR:
            return Object.assign({}, state, {
                email: null,
                error: action.error
            });
        default:
            return state;
    }
};

export default user;