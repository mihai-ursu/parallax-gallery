import { Fragment } from "react";
import styles from "./ParallaxGallery.module.scss";
import SingleImage from "./components/SingleImage/SingleImage";

const ParallaxGallery = (props) => {
  const { images } = props;

  return (
    <div className={styles.gallery}>
      {images.map((image) => {
        return (
          <Fragment key={image.name}>
            <SingleImage {...image} />
          </Fragment>
        );
      })}
    </div>
  );
};

export default ParallaxGallery;
