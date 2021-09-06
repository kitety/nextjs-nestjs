import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { postLogin } from "./api/api";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = useCallback(async () => {
    const data = { username, password };

    const res = await postLogin(data);
    if (res.success) {
      toast("登陆成功", {
        position: "top-center",
        autoClose: 5000,
        onClose: () => {
          window.location.reload();
        },
      });
    }
  }, [username, password]);
  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    login();
  };
  return (
    <div>
      <div>login</div>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">userName</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
