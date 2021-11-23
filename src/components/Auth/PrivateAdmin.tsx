import React from "react";
import { Navigate } from "react-router-dom";
// import { isAuthenticate } from "../../util";

type Props = {
  children: React.ReactNode;
};
const PrivateAdmin = (props: Props) => {
  // const { user } = isAuthenticate();
  // Nếu user lấy từ localStorage không phải là admin thì redirect về login
  // Ngược lại thì render nội dung bên trong component PrivateAdmin - (Children)
  // return user.id !== 1 ? <Navigate to="/signin" /> : props.children;
};
export default PrivateAdmin;
