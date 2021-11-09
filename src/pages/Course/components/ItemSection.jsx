import React from 'react'

export default function ItemSection({img,name,description,avatar, teacher, register}) {
    return (
      <div className="col-md-4 course">
        <div className="wrap">
          <a className="cover" href="#">
            <img src={img} alt="" />
          </a>
          <div className="info">
            <a className="name" href="#">
              {name}
            </a>
            <p className="des">
              {description}
            </p>
          </div>
          <div className="bottom">
            <div className="teacher">
              <div className="avatar">
                <img src={avatar} alt="" />
              </div>
              <div className="name">{teacher}</div>
            </div>
            <div className="register-btn">{register}</div>
          </div>
        </div>
    </div>
    )
}
