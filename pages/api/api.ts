import axiosInstance from "../../lib/request";
import { ILoginReq, IRes } from "../@types/base";

export function postLogin(data: {
  username: string;
  password: string;
}): Promise<IRes<ILoginReq>> {
  return axiosInstance.post("/auth/signin", data);
}
export function getUser(): Promise<IRes<{ username: string }>> {
  console.log("username: ", 111);
  return axiosInstance.get("/auth/getUser");
}

export function postLogout(): Promise<IRes<unknown>> {
  return axiosInstance.post("/auth/logout");
}
export function postResetPwd(data: {
  oldPassword: string;
  newPassword: string;
}): Promise<IRes<unknown>> {
  return axiosInstance.post("/auth/reset", data);
}
