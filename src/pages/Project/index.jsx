import React from 'react'
import ProjectList from './components/ProjectList'

export default function Project() {
  var projectList=[
    {
      name:'furnitown',
      makeby:'Hoàn thành với Trần Nghĩa',
      img: 'img/project/project (1).jpg'

    },{
      name:'kymco',
      makeby:'Hoàn thành với Huỳnh Tiến Tài',
      img: 'img/project/project (2).jpg'
    },{
      name:'gboxmb',
      makeby:'Hoàn thành bởi Nguyễn Văn Tuấn',
      img: 'img/project/project (3).jpg'
    },{
      name:'wooder',
      makeby:'Hoàn thành bởi Nguyễn Đức Huy',
      img: 'img/project/project (4).jpg'
    },{
      name:'gboxmb',
      makeby:'Hoàn thành bởi Nguyễn Văn Tuấn',
      img: 'img/project/project (5).jpg'
    },{
      name:'furnitown',
      makeby:'Hoàn thành với Trần Nghĩa',
      img: 'img/project/project (6).jpg'
    },{
      name:'wooder',
      makeby:'Hoàn thành với Trần Nghĩa',
      img: 'img/project/project (1).jpg'
    },{
      name:'kymco',
      makeby:'Hoàn thành với Trần Nghĩa',
      img: 'img/project/project (2).jpg'
    }
  ]
    return (
      <main className="projectpage" id="main">
        <section className="section-1">
          <div className="container">
            <h2 className="main-title">dự án</h2>
            <p className="top-des">
              Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt elementum sem non
              luctus
            </p>
            <div className="list row">
              {
                projectList.map(function(item,index){
                  return <ProjectList img={item.img} name={item.name} makeup={item.makeby} />
                })
              }
            </div>
            <div className="bottom">
              <div className="btn overlay round btn-more">
                tải thêm
              </div>
            </div>
          </div>
        </section>
      </main>
    )
}
