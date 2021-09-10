import type { NextPage } from "next";
export { getServerSideProps } from "./common/getServerSideProps";

const Home: NextPage = () => {
  return (
    <div>
      <button type="button" className="btn btn-success">
        首页
      </button>
    </div>
  );
};

export default Home;
