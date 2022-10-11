import React from "react";
import Head from "next/head";
import NavInfo from "./Navigation/NavInfo";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Next JS Restaurant</title>
        <meta name="description" content="Restaurant app made in Next JS" />
        <meta name="author" content="Covaci Alex" />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, React JS, Next JS"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <NavInfo />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
