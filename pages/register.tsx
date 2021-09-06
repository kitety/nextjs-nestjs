import React, { useCallback, useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "../lib/request";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const register: React.MouseEventHandler<HTMLButtonElement> = useCallback(
    async (e) => {
      e.preventDefault();
      const res = await axiosInstance.post(
        "http://localhost:3001/auth/signup",
        {
          username,
          password,
        }
      );
      console.log("res: ", res);
      toast("登陆成功", {
        position: "top-center",
        autoClose: 5000,
      });
      console.log("username: ", username);
    },
    [username, password]
  );
  return (
    <div>
      <div>register</div>
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
        <button type="submit" className="btn btn-primary" onClick={register}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Register;
