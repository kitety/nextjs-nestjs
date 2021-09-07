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
      code: 500,
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
        autoClose: 500,
      });
    }
    // 获取数据成功 返回response
    return data;
  },
  (error: AxiosError) => {
    console.log("error: ", error.response?.data.message);
    toast(error.response?.data?.message, {
      position: "top-center",
      autoClose: 500,
    });
    return Promise.reject({
      code: 500,
      message: "请求失败",
    }); //接口500抛出异常（不走页面逻辑）
  }
);

export default axiosInstance;
