import styles from "../styles/Home.module.scss";
import ParallaxGallery from "../components/ParallaxGallery/ParallaxGallery";
import imagesData from "../assets/data";

const Home = () => {
  return (
    <div className={styles.app}>
      <div className={styles.container}>
        <h1 className={styles.title}>Parallax Gallery</h1>
        <ParallaxGallery images={imagesData.images} />
      </div>
    </div>
  );
};

export default Home;
