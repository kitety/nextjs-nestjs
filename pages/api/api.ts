import axiosInstance from "../../lib/request";
import { ILoginReq, IRes } from "../@types/base";
import qs from "qs";

export function postLogin(data: {
  username: string;
  password: string;
}): Promise<IRes<ILoginReq>> {
  return axiosInstance.post("/auth/signin", data);
}
export function postRegister(data: {
  username: string;
  password: string;
}): Promise<IRes<ILoginReq>> {
  return axiosInstance.post("/auth/signup", data);
}
export function getUser(): Promise<IRes<{ username: string }>> {
  return axiosInstance.get("/auth/getUser");
}
export function getUserByJwt(data: {
  jwt: string;
}): Promise<IRes<{ username: string }>> {
  return axiosInstance.post(`/auth/getUserByJwt`, data);
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
