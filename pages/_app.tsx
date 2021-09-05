import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import Header from "./components/header";

function MyApp({ Component, pageProps }: AppProps) {
  console.log("pageProps: ", pageProps);

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
        <Component {...pageProps} />
      </div>
    </>
  );
}
export default MyApp;
