import { useRouter } from "next/dist/client/router";
import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { postResetPwd } from "./api/api";
export { getServerSideProps } from "./common/getServerSideProps";

const Login = () => {
  const [oldPassword, setOldPwd] = useState("");
  const [newPassword, setNewPwd] = useState("");
  const router = useRouter();

  const reset = useCallback(async () => {
    const data = { oldPassword, newPassword };

    const res = await postResetPwd(data);
    if (res.success) {
      toast("重置成功", {
        position: "top-center",
        autoClose: 500,
        onClose: () => {
          router.push("/");
        },
      });
    }
  }, [oldPassword, newPassword, router]);
  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (oldPassword !== newPassword) {
      reset();
    } else {
      toast("新旧密码一样", {
        position: "top-center",
        autoClose: 1000,
      });
    }
  };
  return (
    <div>
      <div>reset password</div>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">oldPassword</label>
          <input
            type="password"
            value={oldPassword}
            className="form-control"
            id="exampleInputEmail1"
            placeholder="UserName"
            onChange={(e) => setOldPwd(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">NewPassword</label>
          <input
            type="password"
            value={newPassword}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => setNewPwd(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
