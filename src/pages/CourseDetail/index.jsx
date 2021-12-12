import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Loading from "../../components/Loading";
import { fetchCourseDetail } from "../../store/actions/authActions";
import courseSevices from "../services/courseSevices";
import Banner from "./components/Banner";
import Content from "./components/Content";


export default function CourseDetail() {

/*Redux */

  const {slug} = useParams()

  const {data,loading} = useSelector((store) => store.course)

  const dispatch= useDispatch()

  useEffect(() => {
    dispatch(fetchCourseDetail(slug))
  }, [slug])

  console.log(data)

/*Redux */

  // const { slug } = useParams();
  // const [state, setState] = useState({
  //   loading: true,
  //   dataDetail: {},
  // });
  // useEffect(async () => {
  //   let dataDetail = await courseSevices.detail(slug);
  //   if(dataDetail){
  //     setState({
  //       ...state,
  //       loading:false,
  //       dataDetail:dataDetail.data
  //     })
  //   }
  // }, [slug]);

  

  if (loading) {
    return <Loading />;
  }
  return (
    <main className="course-detail" id="main">
      <Banner data={data.data}/>
      <Content data={data.data}/>
    </main>
  );
}
