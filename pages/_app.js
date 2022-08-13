import Head from "next/head";
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
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

export default MyApp
