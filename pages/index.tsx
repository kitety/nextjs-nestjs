import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <button type="button" className="btn btn-success">
        （成功）Success
      </button>
    </div>
  );
};

export default Home;
