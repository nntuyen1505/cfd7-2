import React, { useState } from "react";
import Modal from "../Modal";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "../../hook/useAuth";
import { useSelector, useDispatch } from "react-redux";
import AuthSevices from "../services/authSevices";
import { closeLoginAction, errorLogin, fetchLogin, loginSuccess } from "../../store/actions/authActions";

const LoginSchema = yup
  .object({
    username: yup.string().email().required("Email không đúng định dạng!"),
    password: yup
      .string()
      .min(6, "Mật khẩu phải phải nhiều hơn 6 ký tự")
      .max(32, "Mật khẩu không được lớn hơn 32 ký tự")
      .required(),
  })
  .required();

export default function LoginModal({ PropsShowLogin, closelogin }) {

  /*Redux */
  const  dispatch= useDispatch()

  const {user,openLogin,error} = useSelector((store)=>store.auth)
  // console.log(openLogin)

  // const[error, setError]=useState('')

  const onSubmit = async (dataFormLogin) => {

    dispatch(fetchLogin(dataFormLogin))

/***************************/
    // let dataLogin = await AuthSevices.login(dataFormLogin);

    // console.log(dataLogin);

    // if (dataLogin.data) {
    //   dispatch(loginSuccess(dataLogin.data))
    // } else if(dataLogin.error){
    //   dispatch(errorLogin(dataLogin.error))
    // }


    // if (dataLogin.data) {
    //   dispatch({
    //     type:"LOGIN_SUCCESS",
    //     payload: dataLogin.data
    //   })
    // } else if(dataLogin.error){
    //   dispatch({
    //     type:"ERROR_LOGIN",
    //     payload: dataLogin.error
    //   })
    // }
/***************************/

    /*Khi đăng nhập thành công -> sẽ gửi lên browser 1 accessToken */
    // localStorage.setItem("token", JSON.stringify(dataLogin.data.token));
    // localStorage.setItem("data", JSON.stringify(dataLogin.data));
      
  };

  /*Redux */
  

  // const [errorLogin,  setErrorLogin]=useState('')

  // let { login, openLogin, toggleLogin } = useAuth();

  /*Validate-Form */

  /*Test CloseLogin */
 const  closeLogin3=(offShow)=>{
    closelogin(offShow)
  }
  /*Test CloseLogin */

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });

  // const onSubmit = async (data) => {
  //   // alert(JSON.stringify(data));
  //   // console.log(data);

  //  let res=  await login(data)

  //     if( res ){
  //       setErrorLogin(res)
  //     }else{
  //       toggleLogin(false);
  //     }
      
  // };
  /*Validate-Form */

  return (

    <Modal>
      <div
        className="popup-form popup-login"

        // style={{ display: PropsShowLogin ? "flex" : "none" }}

        style={{display:openLogin?"flex":"none"}}

        // onClick={()=>toggleLogin(false)}
        
        onClick={()=>dispatch(closeLoginAction())}
      >
        <div className="wrap" onClick={(e) => e.stopPropagation()}>
          {/* login-form */}
          <form
            className="ct_login"
            style={{ display: "block" }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <h2 className="title">Đăng nhập</h2>

           <p className="error-login">{error}</p>

            <input
              type="text"
              placeholder="Email / Số điện thoại"
              {...register("username")}
            />
            <p className="error-login">{errors.username?.message}</p>
            <input
              type="password"
              placeholder="Mật khẩu"
              {...register("password")}
            />
            <p className="error-login">{errors.password?.message}</p>
            <div className="remember">
              <label className="btn-remember">
                <div>
                  <input type="checkbox" />
                </div>
                <p>Nhớ mật khẩu</p>
              </label>
              <a href="#" className="forget">
                Quên mật khẩu?
              </a>
            </div>
            <button className="btn rect main btn-login" type="submit">
              đăng nhập
            </button>
            {/* <div className="text-register" style={{}}>
              <strong>hoặc đăng ký bằng</strong>
            </div>
            <div>
              <div className="btn btn-icon rect white btn-google">
                <img src="img/google.svg" alt="" /> Google
              </div>
            </div> */}
            <div
              className="close"
              onClick={(e) => {
                e.preventDefault();
                // toggleLogin(false);   

                // closeLogin3(false);
                
                dispatch(closeLoginAction())
              }}
            >
              <img src="img/close-icon.png" alt="" />
            </div>
          </form>
          {/* email form */}
          {/* <div className="ct_email">
            <h2 className="title">Đặt lại mật khẩu</h2>
            <input type="text" placeholder="Email" />
            <div className="btn rect main btn-next">Tiếp theo</div>
            <div className="back" />
            <div className="close">
              <img src="img/close-icon.png" alt="" />
            </div>
          </div> */}
        </div>
      </div>
    </Modal>
  );
}
