import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import AuthSevices from "../../services/authSevices";

const rgPhone = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;

const infoSchema = yup.object().shape({
  name: yup.string().required("Vui lòng nhập tên!"),

  phone: yup.string().matches(rgPhone, "Vui lòng nhập SĐT!").required(),

  url: yup.string().url().required("Vui lòng nhập url"),

  avatar: yup.string().url().required("Vui lòng nhập Link avatar"),
});

export function AccountInformation() {
  /*Validate-Form */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(infoSchema) });
  const onSubmit = async (dataUpdateInfo) => {
    // console.log(dataUpdateInfo)
    // alert(JSON.stringify(dataUpdateInfo));
    alert("Thành Công!");
    let res = await AuthSevices.updateInfo(dataUpdateInfo);
  };

  return (
    <form className="tab1" onSubmit={handleSubmit(onSubmit)}>
      <label>
        <p>
          Họ và tên<span>*</span>
        </p>
        <input type="text" placeholder="Nguyễn Văn A" {...register("name")} />
      </label>
      {errors.name && <p className="error-text"> {errors.name.message}</p>}

      <label>
        <p>
          Số điện thoại<span>*</span>
        </p>
        <input type="text" placeholder="0949******" {...register("phone")} />
      </label>
      {errors.phone && <p className="error-text"> {errors.phone.message}</p>}

      <label>
        <p>
          Email<span>*</span>
        </p>
        <input
          defaultValue="vuong.dang@dna.vn"
          disabled
          type="text"
          {...register("email")}
        />
      </label>

      <label>
        <p>
          Link Avatar<span>*</span>
        </p>
        <input type="text" placeholder="Link IMG" {...register("avatar")} />
      </label>
      {errors.avatar && <p className="error-text"> {errors.avatar.message}</p>}

      <label>
        <p>
          Facebook<span>*</span>
        </p>
        <input type="text" placeholder="Facebook url" {...register("url")} />
      </label>
      {errors.url && <p className="error-text"> {errors.url.message}</p>}

      <label>
        <p>
          Skype<span>*</span>
        </p>
        <input type="text" placeholder="Skype url" {...register("skype")} />
      </label>

      <button className="btn main rect" type="submit">
        LƯU LẠI
      </button>
    </form>
  );
}
