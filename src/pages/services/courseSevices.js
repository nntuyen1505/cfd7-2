import { api } from "./config";
import { handleResponse } from "./config";

const courseSevices = {
  home() {
    return fetch(`${api}/elearning/v4/home`).then(handleResponse);
  },
  detail(slug) {
    return fetch(`${api}/elearning/v4/course/${slug}`).then((res) => {
      return res.json();
    });
  },
  register(slug, dataRegister) {
    let token = JSON.parse(localStorage.getItem("token"))?.accessToken;
    const urlRegister = `${api}/elearning/v4/course-register/${slug}`;
    const  optionRegister = {
      method: "POST",

      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify(dataRegister),
    }

    return fetch(urlRegister, optionRegister).then((res)=>handleResponse(res, urlRegister, optionRegister));
  },
};
export default courseSevices;
