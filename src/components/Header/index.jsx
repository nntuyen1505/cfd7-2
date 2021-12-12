import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";
import { useSelector, useDispatch } from "react-redux";
import { openLoginAction } from "../../store/actions/authActions";
import { useTranslate } from "../../core";

export function Header({ openLogin }) {
  /* Redux */

  const dispatch = useDispatch()
  let { user } = useSelector((store) => store.auth);

  /* Redux */

  // let { user, logout, toggleLogin } = useAuth();

  const toggleMenu = ()=>{
    document.body.classList.toggle('menu-is-show')
  }

  /*Test prosp component*/
  // const showLogin3=(show)=>{
  //    openLogin(show)
  // }
  /*Test prosp component*/

  const {selectLang}=  useTranslate()
  const changeLang =(ev)=>{
    let value= ev.currentTarget.value
    selectLang(value)
  }

  return (
    <header id="header">
      <div className="wrap">
        <div className="menu-hambeger" onClick={toggleMenu}>
          <div className="button">
            <span />
            <span />
            <span />
          </div>
          <span className="text">menu</span>
        </div>
        <Link to="/" className="logo">
          <img src="img/logo.svg" alt="" />
          <h1>CFD</h1>
        </Link>
        <div className="right">




          <select name="" id=""  onChange={changeLang}>
            <option value="en">English</option>
            <option value="vn">Viet Nam</option>
          </select>



          {user ? (
            <div className="have-login">
              <div className="account">
                <Link to="#" className="info">
                  <div className="name">{user.name}</div>
                  <div className="avatar">
                    <img src={user?.avatar} alt="" />
                  </div>
                </Link>
              </div>
              <div className="hamberger"></div>
              <div className="sub">
                <Link to="/thong-tin-ca-nhan/khoa-hoc">Khóa học của tôi</Link>
                <Link to="/thong-tin-ca-nhan">Thông tin tài khoản</Link>
                <Link
                  to="/"
                  onClick={(e) => {
                    // logout();
                    e.preventDefault();

                    dispatch({type:"LOGOUT_SUCCESS"})
                  }}
                >
                  Đăng xuất
                </Link>
              </div>
            </div>
          ) : (
            <div className="not-login bg-none">
              <Link
                to="#"
                className="btn-register"
                onClick={(e) => {
                  e.preventDefault();

                  // toggleLogin(true)

                  // showLogin3(true)

                  // dispatch(({type:"OPEN_LOGIN"}))
                  dispatch(openLoginAction())
                }}
              >
                Đăng nhập
              </Link>
              <Link to="login.html" className="btn main btn-open-login">
                Đăng ký
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
