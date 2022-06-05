import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "~/components/Sidebar";
import View from "~/components/View";
import MainLayout from "~/layouts/MainLayout";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Just Chill</title>
        <meta name="description" content="Chill out, relax and have an open mind" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles["container"]}>
        <Sidebar />
        <View />
      </section>
    </MainLayout>
  );
};

export default Home;
