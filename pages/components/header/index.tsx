import React, {  } from "react";
import Link from "next/link";
import { getUser } from "../../api/api";

const Header = ({ username }: { username?: string }) => {
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
        {/* {username ? ( */}
        <div className="col-md-3">
          <Link href="/logout" passHref>
            <button type="button" className="btn btn-primary">
              logout
            </button>
          </Link>
        </div>
        {/* ) : ( */}
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
        {/* )} */}

        <div className="col-md-3">
          <Link href="/reset" passHref>
            <button type="button" className="btn btn-primary">
              reset
            </button>
          </Link>
        </div>
      </div>
      <div className="row">
        <span>状态:</span>
        <span>{username ? `已经登录:${username} ` : "未登录"}</span>
      </div>
    </div>
  );
};
export async function getServerSideProps() {
  const res = await getUser();
  return {
    props: { username: res.d?.username }, // will be passed to the page component as props
  };
}

export default Header;
