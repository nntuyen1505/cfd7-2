import React, { useState, useEffect } from "react";
import { ListCourse } from "../../components/ListCourse";
import Loading from "../../components/Loading";
import courseSevices from "../services/courseSevices";
import { useSelector, useDispatch } from "react-redux";
import { fetchHome } from "../../store/actions/authActions";

export default function Course() {
  /*Redux */
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior:"smooth"
    })
  },[])
  const dispatch = useDispatch();
  const { data, loading } = useSelector((store) => store.course);
   console.log(data)
   useEffect((data) => {
    if (!data) {
      dispatch(fetchHome(data));
    }
  }, []);

  /*Redux */

  //  const [state,setState] = useState({
  //    loading:true,
  //    data:{}
  //  })
  //  useEffect(async() => {
  //   let data=await courseSevices.home()
  //   if(data){
  //     setState({
  //       loading:false,
  //       data:data
  //     })
  //   }
  //  }, [])
  if (loading) {
    return <Loading />;
  }

  return (
    <main className="homepage" id="main">
      <ListCourse
        h2title="KHÓA HỌC CFD"
        topdes="The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less"
        subtitle="KHÓA HỌC"
        maintitle="ONLINE"
        list={data.offline}
      />
      <ListCourse subtitle="KHÓA HỌC" maintitle="ONLINE" list={data.online} />
    </main>
  );
}
