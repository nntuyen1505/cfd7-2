import React, { useState, useEffect } from "react";
import Loading from "../../components/Loading";
import { useParams } from "react-router";
import courseSevices from "../services/courseSevices";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { numberWithCommas } from "../../utils/numberWithCommas";

const rgPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

const schema = yup
  .object({
    fullname: yup.string().required("Vui lòng nhập tên!"),

    phone: yup.string().matches(rgPhone, "Vui lòng nhập SĐT!").required(),

    email: yup.string().email().required("Vui lòng nhập vào email!"),

    url: yup.string().url().required("Vui lòng nhập url"),
  })
  .required();

/********************************* */
export default function Register() {
  const { slug } = useParams();

  /*Validate-Form */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (dataRegister) => {
    // console.log(dataRegister)

    // alert(JSON.stringify(dataRegister));

    let res = await courseSevices.register(slug, dataRegister);
  };
  /*Validate-Form */

  const [state, setState] = useState({
    data: {},
    loading: true,
  });

  useEffect(async () => {
    let data = await courseSevices.detail(slug);
    if (data) {
      setState({
        loading: false,
        data: data.data,
      });
    }
  }, [slug]);

  if (state.loading) {
    return <Loading />;
  }
  return (
    <main className="register-course" id="main">
      <section>
        <div className="container">
          <div className="wrap container">
            <div className="main-sub-title">ĐĂNG KÝ</div>
            <h1 className="main-title">{state.data.title}</h1>
            <div className="main-info">
              <div className="date">
                <strong>Khai giảng:</strong> {state.data.close_time}
              </div>
              <div className="time">
                <strong>Thời lượng:</strong> 18 buổi
              </div>
              {state.data?.money && (
                <div className="time">
                  <strong>Học phí:</strong> {numberWithCommas(state.data.money)}
                  VND
                </div>
              )}
            </div>

            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <label>
                <p>
                  Họ và tên<span>*</span>
                </p>
                <input
                  type="text"
                  placeholder="Họ và tên bạn"
                  {...register("fullname")}
                />
              </label>
              <p className="error-text">{errors.fullname?.message}</p>
              <label>
                <p>
                  Số điện thoại<span>*</span>
                </p>
                <input
                  type="text"
                  placeholder="Số điện thoại"
                  {...register("phone")}
                />
              </label>
              <p className="error-text">{errors.phone?.message}</p>

              <label>
                <p>
                  Email<span>*</span>
                </p>
                <input
                  type="text"
                  placeholder="Email của bạn"
                  {...register("email")}
                />
              </label>
              <p className="error-text">{errors.email?.message}</p>
              <label>
                <p>
                  URL Facebook<span>*</span>
                </p>
                <input
                  type="text"
                  placeholder="https://facebook.com"
                  {...register("url")}
                />
              </label>
              <p className="error-text">{errors.url?.message}</p>
              <label className="disable">
                <p>Sử dụng COIN</p>
                <div className="checkcontainer">
                  Hiện có <strong>300 COIN</strong>
                  {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                  {/* Cần ít nhất 200 COIN để giảm giá */}
                  <input type="checkbox" defaultChecked="checked" />
                  <span className="checkmark" />
                </div>
              </label>
              <label>
                <p>Hình thức thanh toán</p>
                <div className="select">
                  <div className="head">Chuyển khoản</div>
                  <div className="sub">
                    <a href="#">Chuyển khoản</a>
                    <a href="#">Thanh toán tiền mặt</a>
                  </div>
                </div>
              </label>
              <label>
                <p>Ý kiến cá nhân</p>
                <input
                  type="text"
                  placeholder="Mong muốn cá nhân và lịch bạn có thể học."
                  name="context"
                  {...register("context")}
                />
              </label>
              <button className="btn main rect" type="submit">
                đăng ký
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

// const phoneRegex=/(84|0[3|5|7|8|9])+([0-9]{8})\b/;
// const emailRegex= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

// const [form, setForm] = useState({});
// const [error, setError] = useState({});

// const handleInputChange = (e) => {
//   let name =e.currentTarget.name
//   let  value=e.currentTarget.value
//   setForm({
//     ...form,
//     /*Lấy đúng name của input và gán cho giá trị value của ô input đó */
//     [name]:value
//   })
// };

// const handleSubmit=()=>{
//   let errorObject = {}
//   if(!form.name){
//     errorObject.name = "Vui lòng nhập tên"
//   }
//   if(!phoneRegex.test(form.phone)){
//     errorObject.phone = "SĐT không đúng định dạng"
//   }
//   if(!emailRegex.test(form.email)){
//     errorObject.email = "Email không đúng định dạng"
//   }
//   if(!urlRegex.test(form.url)){
//     errorObject.url = "URL không đúng định dạng"
//   }
//   setError(errorObject)

//   if(Object.keys(errorObject).length===0){
//     alert("Thành Công")
//   }
// }
