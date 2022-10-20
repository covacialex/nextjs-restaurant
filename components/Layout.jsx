import React from "react";
import Head from "next/head";
import NavInfo from "./Navigation/NavInfo";
import Footer from "./Footer";

import { IoMdArrowDropup } from "react-icons/io";

const Layout = ({ children }) => {
  return (
    <div className="main-content">
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

      <a href="#" className="arrow-wrapper">
        <button type="button" className="arrow">
          <IoMdArrowDropup />
        </button>
      </a>
    </div>
  );
};

export default Layout;
