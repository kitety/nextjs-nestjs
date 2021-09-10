import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { toast } from "react-toastify";
import { IRes } from "../../pages/@types/base";
import { API_SUCCESS_CODE } from "./httpConstants";

const axiosInstance = axios.create({
  timeout: 60 * 1000,
  withCredentials: true,
  baseURL: "http://localhost:3001",
});

// 拦截request
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config;
  },
  () => {
    return Promise.reject({
      code: 1000,
      message: "请求失败",
    });
  }
);

// 拦截响应response
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    const { data } = response;

    const { c, m: errMessage } = data as IRes<AxiosResponse<unknown>>;
    data.success = c === API_SUCCESS_CODE;

    if (!data.success) {
      toast(errMessage, {
        position: "top-center",
        autoClose: 1000,
      });
    }
    // 获取数据成功 返回response
    return data;
  },
  (error: AxiosError) => {
    toast(error.response?.data?.message?.join(), {
      position: "top-center",
      autoClose: 1000,
    });
    return Promise.reject({
      code: 1000,
      message: "请求失败",
    }); //接口1000抛出异常（不走页面逻辑）
  }
);

export default axiosInstance;
