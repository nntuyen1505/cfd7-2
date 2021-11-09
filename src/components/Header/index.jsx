import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";

export function Header({openLogin}) {

  let { user, logout, toggleLogin } = useAuth();

  // const showLogin3=(show)=>{
  //    openLogin(show)
  // }

  return (
    <header id="header">
      <div className="wrap">
        <div className="menu-hambeger">
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
                    logout();
                    e.preventDefault();
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

                  toggleLogin(true)

                  // showLogin3(true)
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
