import React from 'react'

export default function AccordionList(props) {
    return (
        <div className="accordion_wrap col-md-8 offset-md-2 col-sm-12">
                <h3 className="accordion__title-main">{props.title_main}</h3>
             
                <div className="accordion">
                  <div className="accordion__title">
                    <h2><strong>CFD là gì?</strong></h2>
                  </div>
                  <div className="content">
                    I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that
                    offers
                    some tangible benefits over alternatives like VueJS for simple page interactions.
                  </div>
                </div>
                <div className="accordion">
                  <div className="accordion__title">
                    <h2><strong>Thành viên sáng lập CFD gồm những ai?</strong></h2>
                  </div>
                  <div className="content">
                    I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that
                    offers
                    some tangible benefits over alternatives like VueJS for simple page interactions.
                  </div>
                </div>
                <div className="accordion">
                  <div className="accordion__title">
                    <h2><strong>Đăng ký khóa học như thế nào?</strong></h2>
                  </div>
                  <div className="content">
                    I'd like to demonstrate a powerful little pattern called “Server-Fetched Partials” that
                    offers
                    some tangible benefits over alternatives like VueJS for simple page interactions.
                  </div>
                </div>
              </div>
    )
}
