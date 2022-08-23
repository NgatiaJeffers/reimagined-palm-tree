import Head from "next/head";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Banner from "./Banner";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Faraja Support Cancer - Trust Fund Supoort</title>
            </Head>
            <header>
                <Navbar />
            </header>
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