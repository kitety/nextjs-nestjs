import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../lib/request";
import { postLogout } from "./api/api";

const Login = () => {
  const logout = useCallback(async () => {
    const res = await postLogout();
    console.log("res: ", res);
    toast("退出成功", {
      position: "top-center",
      autoClose: 5000,
      onClose: () => {
        window.location.reload();
      },
    });
  }, []);
  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    logout();
  };
  return (
    <div>
      <div>logout</div>
      <form>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Logout
        </button>
      </form>
    </div>
  );
};

export default Login;
