import AuthSevices from "../../pages/services/authSevices";
import courseSevices from "../../pages/services/courseSevices";
import { ERROR_LOGIN, HOME, CLOSE_LOGIN, LOGIN_SUCCESS, OPEN_LOGIN, UPDATE_INFO, COURSE_DETAIL } from "../type";

export const openLoginAction = () => {
    return { type: OPEN_LOGIN }
}

export const closeLoginAction = () => {
    return { type: CLOSE_LOGIN }
}

export const loginSuccess = (data) => {
    return { type: LOGIN_SUCCESS, payload: data }
}

export const errorLogin = (error) => {
    return { type: ERROR_LOGIN, payload: error }
}

export const updateInfoAction = (data) => {
    return { type: UPDATE_INFO, payload: data }
}

export const fetchLogin = (dataFormLogin) => {
    return async(dispatch) => {

        let dataLogin = await AuthSevices.login(dataFormLogin);

        // console.log(dataLogin);

        if (dataLogin.data) {
            dispatch(loginSuccess(dataLogin.data))
        } else if (dataLogin.error) {
            dispatch(errorLogin(dataLogin.error))
        }
    }
}

/*Page HOME Start*/
export const homeAction = (data) => {
    return { type: HOME, payload: data }
}

export const fetchHome = () => {
        return async(dispatch) => {
            let data = await courseSevices.home()
            if (data) {
                dispatch(homeAction(data))
            }
        }
    }
    /*Page HOME End*/

/*Page CourseDetail Start*/
export const detailAction = (data) => {
    return {
        type: COURSE_DETAIL,
        payload: data
    }
}

export const fetchCourseDetail = (slug) => {
        return async(dispatch) => {
            let data = await courseSevices.detail(slug);
            if (data) {
                dispatch(detailAction(data))
            }
            console.log(data)
        }
    }
    /*Page CourseDetail End*/