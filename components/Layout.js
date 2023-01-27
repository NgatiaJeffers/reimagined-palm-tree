import Head from "next/head";

import NavbarLayout from "./Navbar/Navbar";
import Footer from "./Footer.js";

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Faraja Support Cancer - Trust Fund Supoort</title>
            </Head>
                <NavbarLayout />
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    )
}