import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";
import '../styles/globals.css';
import "swiper/css"
import 'bootstrap/dist/css/bootstrap.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  const theme = createTheme();
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
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    );
  }
  
}

export default MyApp;

