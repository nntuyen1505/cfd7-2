import React from "react";
import { Link } from "react-router-dom";

export function Nav() {
  const handleToggle = () => {
    let body = document.querySelector("body").classList.remove("menu-is-show");
  };

  return (
    <nav className="nav">
      <ul>
        <li className="li_login">
          <Link to="#">Đăng nhập</Link>
          <Link to="#">Đăng ký</Link>
        </li>
        <li className="active">
          <Link to="/" onClick={() => handleToggle()}>
            Trang chủ
          </Link>
        </li>
        <li>
          <Link to="/team" onClick={() => handleToggle()}>
            CFD Team
          </Link>
        </li>
        <li>
          <Link to="/khoa-hoc" onClick={() => handleToggle()}>
            Khóa Học
          </Link>
        </li>
        <li>
          <Link to="/hop-tac" onClick={() => handleToggle()}>
            Liên hệ
          </Link>
        </li>
      </ul>
    </nav>
  );
}
