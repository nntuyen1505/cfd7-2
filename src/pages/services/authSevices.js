import { api } from "./config";
import { handleResponse } from "./config";

const AuthSevices = {
    login(user) {
        const urlLogin = `${api}/elearning/v4/login`
        const optionLogin = {
            method: "POST",

            headers: { "Content-Type": "application/json" },

            body: JSON.stringify(user),
        }
        return fetch(urlLogin, optionLogin).then((res) => { return res.json() });
    },
    updateInfo(dataUpdateInfo) {
        let token = JSON.parse(localStorage.getItem("token"))?.accessToken

        const urlUpdateInfo = `${api}/elearning/v4/profile/update`;
        const optionUpdateInfo = {
            method: "POST",
            body: JSON.stringify(dataUpdateInfo),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        return fetch(urlUpdateInfo, optionUpdateInfo).then((res) => handleResponse(res, urlUpdateInfo, optionUpdateInfo))
    }



}
export default AuthSevices