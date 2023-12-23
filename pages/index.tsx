import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import homeStyles from "@/styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>fluorjo</title>
      </Head>
      <section className={homeStyles.headingMd}>
        <p>[Introduction]</p>
        <p>website~!!!~</p>
      </section>
      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>blog</h2>
        <ul className={homeStyles.list}></ul>
      </section>
    </div>
  );
};

export default Home;
