import React from 'react'
import ItemCourse from '../../components/ItemCouse/index.jsx'


export  function ListCourse({h2title,topdes, subtitle,maintitle,list}) {
    return (
      <section className="section-courseoffline">
          <div className="container">
              {
                  topdes ? (
                    <h2 className="main-title">
                         {h2title}
                    </h2>
                  ) : null
              }
              {
                  topdes ? (
                    <p className="top-des">
                         {topdes}
                    </p>
                  ) : null
              }

            <div className="textbox">
              {
                subtitle ? (
                  <h3 class="sub-title">{subtitle}</h3>
                  ) : null
              }
              <h2 className="main-title">{maintitle}</h2>
            </div>
            <div className="list row">
            {
                list.map(function(item, index){
                  return <ItemCourse {...item} key={item.id}/>                 
                })
              }
              
            </div>
          </div>
        </section>
    )
}
