import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import NavbarLayout from "./Navbar/Navbar";
import Footer from "./Footer.js";
import Loader from "./atoms/loader";

const Layout = ({ children }) => {
    const [ loading, setLoading ] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleStart = () => setLoading(true);
        const handleComplete = () => setLoading(false);

        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleComplete);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off("routerChangeComplete", handleComplete);
            router.events.off("routeChangeError", handleComplete);
        };
    }, [router]);

    return (
        
        <>

            <Head>
                <title>Faraja Support Cancer - Trust Fund Supoort</title>
            </Head>
            <div className="layout">
                <NavbarLayout />
                {loading && <Loader />}
                <main>
                    {children}
                </main>
                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    )
}

export default Layout;