import Head from "next/head";

import NavbarLayout from "./Navbar/Navbar";
import Footer from "./Footer";
import Banner from "./Banner";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Faraja Support Cancer - Trust Fund Supoort</title>
            </Head>
            {/* <header> */}
                <NavbarLayout />
            {/* </header> */}
                <Banner />
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}