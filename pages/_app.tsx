import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import Header from "./components/header";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { getUser } from "./api/api";
import { GetServerSideProps } from "next";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>User</title>
        <link
          href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>
      <div className="container">
        <Header />
        <Component />
        <ToastContainer
          className="impct-toast"
          position="top-center"
          autoClose={3000}
          hideProgressBar
          newestOnTop
          closeOnClick
          rtl={false}
          draggable={false}
          pauseOnHover
          transition={Slide}
        />
      </div>
    </>
  );
}
// MyApp.getInitialProps = async ({ Component, ctx }) => {
//   console.log("ctx: ", ctx.headers.cookie);
//   let pageProps = {};
//   /** 应用初始化, 一定要在Component.getInitiialProps前面
//    *  因为里面是授权，系统最优先的逻辑
//    *  传入的参数是ctx，里面包含store和req等
//    **/
//   // initialize(ctx);

//   if (Component.getInitialProps) {
//     pageProps = await Component.getInitialProps({ ctx });
//   }
//   return { pageProps };
// };
export const getServerSideProps: GetServerSideProps = async (context) => {
  await console.log("context: ", context.req.headers.cookie);
  console.log("context.req.headers.cookie: ", context.req.headers.cookie);
  const res = await getUser();
  console.log("res: ", res);
  // setUsername(res.d.username);
  return { props: { name: res.d.username } };
};

export default MyApp;
