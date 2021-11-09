import React from 'react'
import AccordionList from './components/AccordionList'

export default function Faq() {
    return (
        <main className="faqpage" id="main">
        <div className="container">
          <section>
            <h2 className="main-title">Câu hỏi thường gặp</h2>
            <div className="row">
                <AccordionList title_main="Thông tin chung"/>
                <AccordionList title_main="Đăng ký, thanh toán và điểm thưởng"/>
            </div>
          </section>
        </div>
      </main>
    )
}

