import React from 'react'

export default function Member({img, name, title}) {
    return (
        <div className="wrap">
            <div className="cover">
                <img src={img} alt="" />
            </div>
            <div className="info">
                <div className="name">
                    {name}
                </div>
                <p className="title">
                    {title}
                </p>
            </div>
        </div>
    )
}
