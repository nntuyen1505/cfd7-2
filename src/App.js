import { Header, Nav, Footer } from "./components";
import Demo from "./pages/Demo";
import Home from "./pages/Home";
import Course from "./pages/Course";
import CourseDetail from "./pages/CourseDetail";
import Project from "./pages/Project";
import Profile from "./pages/Profile";
import Team from "./pages/Team";
import Register from "./pages/Register";
import Email from "./pages/Email";
import Faq from "./pages/Faq";
import Introduce from "./pages/Introduce";
import Cooperate from "./pages/Cooperate";
import Payment from "./pages/Payment";
import Page404 from "./pages/Page404";
import "./asset/custom.scss";
import { createContext, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginModal from "./pages/LoginModal";
import PrivateRouter from "./components/PrivateRouter";
import AuthSevices from "./pages/services/authSevices";
import store from "./store";
import { Provider } from "react-redux";

export const Context = createContext();

function App() {
  /*Vi du localstorage  */

  // let ob={

  //   name: "an"
  // }
  // localStorage.setItem("name",JSON.stringify(ob))

  // let a=  JSON.parse(localStorage.getItem("name"))

  // console.log(a)

  // console.log(ob)

  /*Vi du localstorage  */

  const [openLogin, setOpenLogin] = useState(false);

  const toggleLogin = (flag) => {
    if (openLogin === "undefined") {
      setOpenLogin(!openLogin);
    } else {
      setOpenLogin(flag);
    }
  };

  /* Call API Login-Authorization */

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("data")) || null
  );

  const login = async (user) => {
    let dataLogin = await AuthSevices.login(user);

    if (dataLogin.data) {
      setUser(dataLogin.data);
    } else {
      return dataLogin.error;
    }
/*Khi đăng nhập thành công -> sẽ gửi lên browser 1 accessToken */
    localStorage.setItem("token",JSON.stringify(dataLogin.data.token))
    localStorage.setItem("data", JSON.stringify(dataLogin.data));
  };

  const logout = () => {
    setUser(null);

    localStorage.removeItem("data");
  };

  /* Call API Login-Authorization */

  /*test props function */

  const [showLogin, setShowLogin] = useState(false);

  const openLoginApp = (show) => {
    setShowLogin(show);
  };

  /*test props function */

  return (
    <BrowserRouter>
    <Provider store={store}>
      <Context.Provider value={{ user, login, logout, openLogin, toggleLogin }}>
        <Header openLogin={openLoginApp} />
        <Nav />
        {!user && <LoginModal PropsShowLogin={showLogin} />}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/gioi-thieu" component={Introduce} />
          <Route path="/khoa-hoc" component={Course} />
          <Route path="/chi-tiet-khoa-hoc/:slug" component={CourseDetail} />
          <Route path="/san-pham" component={Project} />
          <PrivateRouter path="/thong-tin-ca-nhan" component={Profile} />
          <Route path="/faq" component={Faq} />
          <Route path="/email" component={Email} />
          <Route path="/hop-tac" component={Cooperate} />
          <Route path="/thanh-toan" component={Payment} />
          <Route path="/dang-ky/:slug" component={Register} />
          <Route path="/team" component={Team} />
          <Route path="/demo" component={Demo} />
          <Route component={Page404} />
        </Switch>
        <Footer />
      </Context.Provider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;

// const login = (user) => {
//   const userLogin = {
//     ...user,
//     name: "NGUYỄN NGỌC TUYỂN",
//     avatar: "img/avatar1.png",
//   };
//   localStorage.setItem("gui_len", JSON.stringify(userLogin));
//   setUser(userLogin);
// };
