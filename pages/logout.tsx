import { useRouter } from "next/dist/client/router";
import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../lib/request";
import { postLogout } from "./api/api";
export { getServerSideProps } from "./common/getServerSideProps";

const Login = () => {
  const router = useRouter();

  const logout = useCallback(async () => {
    const res = await postLogout();

    if (res.success) {
      toast("退出成功", {
        position: "top-center",
        autoClose: 500,
        onClose: () => {
          router.push("/");
        },
      });
    }
  }, [router]);
  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    logout();
  };
  return (
    <div>
      <div>logout</div>
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Logout
      </button>
    </div>
  );
};

export default Login;
