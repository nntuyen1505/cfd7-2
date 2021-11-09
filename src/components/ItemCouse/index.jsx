import React from "react";
import { Link, generatePath } from "react-router-dom";

export default function ItemCourse(props) {
  return (
    <div className="col-md-4 course">
      <div className="wrap">
        <Link className="cover" to={"/chi-tiet-khoa-hoc/" + props.slug}>
          <img src={props.thumbnail.link} alt="" />
          {props.course_status === "da-ket-thuc" && (
            <span className="badge b1">Đã kết thúc</span>
          )}
          {props.course_status === "sap-khai-gian" && (
            <span className="badge b2">Sắp khai giảng</span>
          )}
          {props.course_status === "dang-dien-ra" && (
            <span className="badge b3">Đang diễn ra</span>
          )}
          <div className="hover">
            <div className="top">
              <div className="user">
                <img src="img/icon-user-white.svg" alt="" /> 20
              </div>
              <div className="heart">
                <img src="img/icon-heart.svg" alt="" /> 20
              </div>
            </div>
            <div className="share">
              <img src="img/icon-viewmore.svg" alt="" />
            </div>
          </div>
        </Link>
        <div className="info">
          <Link className="name" to="#">
            {props.title}
          </Link>
          <p className="des">{props.short_description}</p>
        </div>
        <div className="bottom">
          <div className="teacher">
            <div className="avatar">
              <img src={props.teacher.avatar.link} alt="" />
            </div>
            <div className="name">{props.teacher.title}</div>
          </div>
          {/* <Link to={"/dang-ky/"+props.slug} className="register-btn">Đăng Ký</Link> */}
          <Link to={generatePath("/dang-ky/:slug", props)} className="register-btn"> Đăng Ký  </Link>
        </div>
      </div>
    </div>
  );
}
