import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { signin } from "../../../api/auth";
import { toast } from "react-toastify";

type FormValues = {
    email: String;
    password: string;
}
const Signin : React.FC = () =>{
    const {register,handleSubmit} = useForm<FormValues>();
    const onSubmit : SubmitHandler<FormValues> = (data) =>{
        signin(data)
        .then((res) => {
            toast.success("Oke");
        })
        .catch((error) => toast.error(error.res.data))
    }
    return(
        <>
      <h2>Đăng nhập</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" {...register("email")} placeholder="Email" />
        <input
          type="password"
          {...register("password")}
          placeholder="Password"
        />
        <button>Đăng nhập</button>
      </form>
    </>
    )
}
export default Signin;