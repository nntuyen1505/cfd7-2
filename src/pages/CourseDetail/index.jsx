import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../../components/Loading";
import courseSevices from "../services/courseSevices";
import Banner from "./components/Banner";
import Content from "./components/Content";

export default function CourseDetail() {
  const { slug } = useParams();
  const [state, setState] = useState({
    loading: true,
    dataDetail: {},
  });
  useEffect(async () => {
    let dataDetail = await courseSevices.detail(slug);
    if(dataDetail){
      setState({
        ...state,
        loading:false,
        dataDetail:dataDetail.data
      })
    }
  }, [slug]);
  if (state.loading) {
    return <Loading />;
  }
  return (
    <main className="course-detail" id="main">
      <Banner data={state.dataDetail}/>
      <Content data={state.dataDetail}/>
    </main>
  );
}
