import instance from "./instance";

export const signup = (user:any) => {
    const url = "/register";
    return instance.post(url, user);
  };
  export const signin = (user:any) => {
    const url = "/signin";
    return instance.post(url, user);
  };
  