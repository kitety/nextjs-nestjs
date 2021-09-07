import { useRouter } from "next/dist/client/router";
import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { postResetPwd } from "./api/api";

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
        autoClose: 500,
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
            value={oldPassword}
            onChange={(e) => setOldPwd(e.target.value)}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">NewPassword</label>
          <input
            value={newPassword}
            onChange={(e) => setNewPwd(e.target.value)}
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
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
