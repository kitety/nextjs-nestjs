import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import Header from "./components/header";
import { ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { InferGetServerSidePropsType } from "next";
import { getServerSideProps } from ".";

function MyApp({
  Component,
  pageProps,
}: AppProps<InferGetServerSidePropsType<typeof getServerSideProps>>) {
  console.log("pageProps: ", pageProps);
  const { username } = pageProps?.data?.d || {};
  return (
    <>
      <Head>
        <title>User</title>
        <link
          rel="stylesheet"
          href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css"
        />
      </Head>
      <div className="container">
        <Header username={username} />
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

export default MyApp;
