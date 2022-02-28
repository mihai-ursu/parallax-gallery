import { Fragment } from "react";
import styles from "../styles/Home.module.scss";
import ParallaxGallery from "../components/ParallaxGallery/ParallaxGallery";
import imagesData from "../assets/data";
import Head from "next/head";

const Home = () => {
  return (
    <Fragment>
      <Head>
        <title>Parallax Gallery</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="A parallax galler for React / NextJS."
        />
      </Head>
      <div className={styles.app}>
        <div className={styles.container}>
          <h1 className={styles.title}>Parallax Gallery</h1>
          <ParallaxGallery images={imagesData.images} />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
