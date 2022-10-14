import React, { useEffect, useState } from "react";
import Head from "next/head";
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  const [showing, setShowing] = useState(false);

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
    setShowing(true);
  }, []);

  if (!showing) {
    return null;
  }

  if (typeof window === "undefined") {
    <></>
  } else {
    return (
      <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    );
  }
  
}

export default MyApp;

