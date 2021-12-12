import React from 'react'
import { Link } from 'react-router-dom'

export default function Banner({data}) {
    return (
        <section className="banner style2" style={{background: '#cde6fb'}}>
          <div className="container">
            <div className="info">
              <h1>{data?.title}</h1>
              <div className="row">
                <div className="date"><strong>Khai giảng:</strong>{data?.close_time}</div>
                <div className="time"><strong>Thời lượng:</strong> 18 buổi</div>
              </div>
              <Link to={"/dang-ky/"+data?.slug} className="btn white round" style={{colorBtn: '#70b6f1'}}>đăng ký</Link>
            </div>
          </div>
          <div className="bottom">
            <div className="container">
              <div className="video">
                <div className="icon">
                  <img src="img/play-icon-white.png" alt="" />
                </div> <span>giới thiệu</span>
              </div>
              <div className="money">{data?.money} VND</div>
            </div>
          </div>
        </section>
    )
}
