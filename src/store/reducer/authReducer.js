import { CLOSE_LOGIN, ERROR_LOGIN, LOGIN_SUCCESS, OPEN_LOGIN, UPDATE_INFO } from "../type";

const initialState = {
    user: JSON.parse(localStorage.getItem("data")),
    openLogin: false,
    error: ''
}

const authReducer = (state = initialState, action) => {
    // console.log(state, action)
    switch (action.type) {
        case LOGIN_SUCCESS:
            /*Gửi  Thông tin đăng nhập + accessToken */
            localStorage.setItem("data", JSON.stringify(action.payload));
            localStorage.setItem("token", JSON.stringify(action.payload.token));
            return {
                ...state,
                user: action.payload,
            }

        case ERROR_LOGIN:
            /*Gửi  Thông tin đăng nhập + accessToken */
            // localStorage.setItem("data", JSON.stringify(action.payload));
            // localStorage.setItem("token", JSON.stringify(action.payload.token));
            return {
                ...state,
                error: action.payload,
            }


        case UPDATE_INFO:
            localStorage.setItem("data", JSON.stringify(action.payload));
            localStorage.setItem("token", JSON.stringify(action.payload.token));
            return {
                ...state,
                user: action.payload,
            }

        case OPEN_LOGIN:
            return {
                ...state,
                openLogin: true
            }
        case CLOSE_LOGIN:
            return {
                ...state,
                openLogin: false
            }
        case 'LOGOUT_SUCCESS':

            localStorage.removeItem("data");
            localStorage.removeItem("token");
            return {
                ...state,
                user: null,
                openLogin: false
            }
    }

    return state
}
export default authReducer