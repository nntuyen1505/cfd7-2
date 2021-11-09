import React from 'react'
import { Link } from 'react-router-dom'

export function Nav() {
    return (
        <nav className="nav">
        <ul>
          <li className="li_login">
            <Link to="#">Đăng nhập</Link>
            <Link to="#">Đăng ký</Link>
          </li>
          <li className="active">
            <Link to="#">Trang chủ</Link>
          </li>
          <li>
            <Link to="#">CFD Team</Link>
          </li>
          <li>
            <Link to="#">Khóa Học</Link>
          </li>
          <li>
            <Link to="#">Dự Án</Link>
          </li>
          <li>
            <Link to="#">Liên hệ</Link>
          </li>
        </ul>
      </nav>
    )
}
