import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { signup } from "../../../api/auth";
import { toast } from "react-toastify";

type FormValues = {
  email: string;
  password: string;
};

const Signup: React.FC = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    signup(data)
      .then((response) => {
        toast.success("Đăng ký thành công");
      })
      .catch((error) => toast.error(error.response.data));
  };

  return (
    <>
      <h2>Đăng ký</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" {...register("email")} placeholder="Email" />
        <input
          type="password"
          {...register("password")}
          placeholder="Password"
        />
        <button>Đăng ký</button>
      </form>
    </>
  );
};
export default Signup;
