import { useRef, useEffect } from "react";
import ParallaxGallery from "../components/ParallaxGallery/ParallaxGallery";
import styles from "../styles/Home.module.scss";
import imagesData from "../assets/data";
import useWindowSize from "../hooks/useWindowSize";
import Head from "next/head";
import { Fragment } from "react/cjs/react.production.min";

const Home = () => {
  const app = useRef();
  const scrollContainer = useRef();
  const size = useWindowSize();

  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  useEffect(() => {
    requestAnimationFrame(() => smoothScrolling());
  }, []);

  useEffect(() => {
    setBodyHeight();
  }, [size.height]);

  const setBodyHeight = () => {
    document.body.style.height = `${
      scrollContainer.current.getBoundingClientRect().height + 200
    }px`;
  };

  const smoothScrolling = () => {
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 100;
    scrollContainer.current.style.transform = `translate3d(0, -${data.rounded}px, 0)`;

    requestAnimationFrame(() => smoothScrolling());
  };

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
      <div className={styles.app} ref={app}>
        <div className={styles.container} ref={scrollContainer}>
          <h1 className={styles.title}>Parallax Gallery</h1>
          <ParallaxGallery images={imagesData.images} />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
