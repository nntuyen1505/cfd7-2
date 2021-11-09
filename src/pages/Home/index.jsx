
import { useEffect, useState } from "react";
import { ListCourse } from "../../components/ListCourse";
import Loading from "../../components/Loading";
import courseSevices from "../services/courseSevices";
import Action from "./components/Action";
import Banner from "./components/Banner";
import Different from "./components/Different";

import Gallery from "./components/Gallery";
import Testimonial from "./components/Testimonial";
import { useSelector } from "react-redux";
import store from "../../store";

export default function Home() {



const defineRedux = useSelector(store => store)
console.log(defineRedux)


/*Call  API Page Home */
  const [state, setState] = useState({
    loading: true,
    data: {},
  });
  useEffect(async () => {
    let data = await courseSevices.home()
    if (data) {
      setState({
        loading: false,
        data: data,
      });
    }
  }, []);
/*Call  API Page Home */

  if(state.loading){
    return <Loading/>
  }

  return (
    <main className="homepage" id="main">
      <Banner />
      <ListCourse
        maintitle="Khóa học Offline"
        topdes="The readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal"
        list={state.data.offline}
      />
      <ListCourse maintitle="Khóa học Online" list={state.data.online} />
      <Different />
      <Testimonial review={state.data.review} />
      <Gallery gallery={state.data.gallery} />
      <Action />
    </main>
  );
}

