import React from "react";
import Link from "next/link";

interface IHeader {
  username: string;
}
const Header = ({ username }: IHeader) => {
  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <Link href="/" passHref>
            <button type="button" className="btn btn-primary">
              Home
            </button>
          </Link>
        </div>
        {username ? (
          <>
            <div className="col-md-3">
              <Link href="/logout" passHref>
                <button type="button" className="btn btn-primary">
                  logout
                </button>
              </Link>
            </div>
            <div className="col-md-3">
              <Link href="/reset" passHref>
                <button type="button" className="btn btn-primary">
                  reset
                </button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className="col-md-3">
              <Link href="/register" passHref>
                <button type="button" className="btn btn-primary">
                  register
                </button>
              </Link>
            </div>
            <div className="col-md-3">
              <Link href="/login" passHref>
                <button type="button" className="btn btn-primary">
                  login
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
      <div className="row">
        <span>状态:</span>
        <span>{username ? `已经登录:${username} ` : "未登录"}</span>
      </div>
    </div>
  );
};
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   await console.log("context: ", context.req.headers.cookie);
//   return { name: "1" };
// };

export default Header;
