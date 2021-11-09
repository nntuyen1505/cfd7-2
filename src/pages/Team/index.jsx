import React from 'react'

import Member from  './components/Member'
export default function Team() {
    var mentors =[
        {
            img:'img/thumb-member.jpg',
            name: 'trần nghĩa',
            title:'Founder &amp; Creative Front-End Developer',
        },
        {
            img:'img/thumb-member.jpg',
            name: 'đặng thuyền vương',
            title:'Co-Founder &amp; Fullstack Developer'
        },
        {
            img:'img/thumb-member.jpg',
            name: 'đặng thuyền quân',
            title:'Co-Founder &amp; Backend Developer'
        },
        {
            img:'img/thumb-member.jpg',
            name: 'nguyễn đức huy',
            title:'Co-Founder &amp; Front-End Developer'
        }
    ]
    var students=[
        {
            img:'img/thumb-member.jpg',
            name: 'Diệp anh thy',
            title:'CFD1-Offline'
        },{
            img:'img/thumb-member.jpg',
            name: 'huỳnh tiến tài',
            title:'CFD1-Offline'
        },{
            img:'img/thumb-member.jpg',
            name: 'Ngô thành long',
            title:'CFD1-Offline'
        },{
            img:'img/thumb-member.jpg',
            name: 'trần anh tuấn',
            title:'CFD1-Offline'
        },{
            img:'img/thumb-member.jpg',
            name: 'ngô thành long',
            title:'CFD1-Offline'
        },{
            img:'img/thumb-member.jpg',
            name: 'nguyễn thành tùng',
            title:'CFD1-Offline'
        },{
            img:'img/thumb-member.jpg',
            name: 'phạm thành trung',
            title:'CFD1-Offline'
        },
    ];
    return (
        <main className="team" id="main">
        <section>
          <div className="container">
            <div className="top">
              <h2 className="main-title">cfd team</h2>
              <p className="top-des">Lorem ipsum dolor sit amet consectetur adipiscing elit. aliquam tincidunt elementum sem non luctus </p>
            </div>
            <div className="list row">
              {
                  mentors.map(function(item, index){
                    return <div class="item col-md-6 col-sm-6">
                        <Member img={item.img} name={item.name} title={item.title}/>
                    </div>
                    
                  })
              }

{
                  students.map(function(item, index){
                    return <div class="item col-md-3 col-sm-4 col-xs-6">
                        <Member img={item.img} name={item.name} title={item.title}/>
                    </div>
                    
                  })
              }
            </div>
          </div>
        </section>
      </main>
    )
}
