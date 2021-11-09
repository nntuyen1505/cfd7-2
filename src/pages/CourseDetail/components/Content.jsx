import React from "react";
import { Link } from "react-router-dom";


export default function Content({ data }) {
  return (
    <section className="section-2">
      <div className="container">
        <p className="des">{data.long_description}</p>
        <h2 className="title">giới thiệu về khóa học</h2>
        <div className="cover">
          <img src={data.thumbnail.link} alt="" />
          <p className="short_description">{data.short_description}</p>
        </div>
        <h3 className="title">nội dung khóa học</h3>
        {data.content.map((e, i) => (
          <div className="accordion" key={i}>
            <div className="accordion__title">
              <div className="date">Ngày {i + 1}</div>
              <h3>{e.title}</h3>
            </div>
            <div className="content">{e.content}</div>
          </div>
        ))}

        <h3 className="title">yêu cầu cần có</h3>
        <div className="row row-check">
          {
            data.required.map((e,i)=>
            <div className="col-md-6" key={i}>{e.content}</div>
            )
          }
        </div>
        <h3 className="title">hình thức học</h3>
        <div className="row row-check">
          {data.benefits.map((e, i) => (
            <div className="col-md-6" key={i}>
              {e.content}
            </div>
          ))}
        </div>
        <h3 className="title">
          <div className="date-start">lịch học</div>
          <div className="sub">
            *Lịch học và thời gian có thể thống nhất lại theo số đông học viên.
          </div>
        </h3>
        <p>
          <strong>Ngày bắt đầu: </strong>
          {data.close_time}
          <br />
          <strong>Thời gian học: </strong> {data.schedule}
        </p>
        <h3 className="title">Người dạy</h3>
        <div className="teaches">
          <div className="teacher">
            <div className="avatar">
              <img src={data.teacher.avatar.link} alt="" />
            </div>
            <div className="info">
              <div className="name">{data.teacher.title}</div>
              <div className="title">
               {data.teacher.position}
              </div>
              <p className="intro">
               {data.teacher.description}
              </p>
              <p>
                <strong>Website:</strong> <Link href="#">{data.teacher.website}</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="user">
            <img src="img/user-group-icon.png" alt="" /> 20 bạn đã đăng ký
          </div>
          <Link to={"/dang-ky/" + data.slug} className="btn main btn-register round">đăng ký</Link>
          <div className="btn-share btn overlay round btn-icon">
            <img src="img/facebook.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
