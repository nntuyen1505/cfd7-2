
import { useEffect, useState } from "react";
import { ListCourse } from "../../components/ListCourse";
import Loading from "../../components/Loading";
import courseSevices from "../services/courseSevices";
import Action from "./components/Action";
import Banner from "./components/Banner";
import Different from "./components/Different";

import Gallery from "./components/Gallery";
import Testimonial from "./components/Testimonial";
import { useDispatch, useSelector } from "react-redux";
import store from "../../store";
import { fetchHome } from "../../store/actions/authActions";
import { useTranslate } from "../../core";

export default function Home() {

const dispatch = useDispatch()
const {data,loading} =useSelector((store)=>store.course)


/*Redux- thunk */
useEffect((data) => {
  if(!data){
    dispatch(fetchHome(data))
  }
}, [])
/*Redux- thunk */



/*Call  API Page Home */
  // const [state, setState] = useState({
  //   loading: true,
  //   data: {},
  // });
  // useEffect(async () => {
  //   let data = await courseSevices.home()
  //   if (data) {
  //     setState({
  //       loading: false,
  //       data: data,
  //     });
  //   }
  // }, []);
/*Call  API Page Home */
const {t}= useTranslate()

  if(loading){
    return <Loading/>
  }

  return (
    <main className="homepage" id="main">
      <Banner />
      <ListCourse
        maintitle="Khóa học Offline"
        topdes={t("The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal")}
        list={data.offline}
      />
      <ListCourse maintitle="Khóa học Online" list={data.online} />
      <Different />
      <Testimonial review={data.review} />
      <Gallery gallery={data.gallery} />
      <Action />
    </main>
  );
}

