import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <Link href="/">
            <button type="button" className="btn btn-primary">
              Home
            </button>
          </Link>
        </div>
        <div className="col-md-3">
          <Link href="/login">
            <button type="button" className="btn btn-primary">
              login
            </button>
          </Link>
        </div>
        <div className="col-md-3">
          <Link href="/register">
            <button type="button" className="btn btn-primary">
              register
            </button>
          </Link>
        </div>
        <div className="col-md-3">
          <button type="button" className="btn btn-primary">
            reset
          </button>
        </div>
      </div>
      <div className="row">
        <strong>状态</strong>
        <strong>未登录</strong>
      </div>
    </div>
  );
};

export default Header;
