import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  console.log("pageProps: ", pageProps);

  return (
    <>
      <Head>
        <title>Test</title>
        <link
          href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/5.0.2/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
