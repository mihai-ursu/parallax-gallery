import { Fragment, useRef, useState, useEffect } from "react";
import styles from "./ParallaxGallery.module.scss";
import SingleImage from "./components/SingleImage/SingleImage";

const ParallaxGallery = (props) => {
  const { images } = props;
  const [galleryHeight, setGalleryHeight] = useState(0);
  const gallery = useRef();

  useEffect(() => {
    setGalleryHeight(gallery.current.getBoundingClientRect().height);
  }, []);

  console.log(galleryHeight);

  return (
    <div className={styles.gallery} ref={gallery}>
      {images.map((image) => {
        return (
          <Fragment key={image.name}>
            <SingleImage {...image} galleryHeight={galleryHeight} />
          </Fragment>
        );
      })}
    </div>
  );
};

export default ParallaxGallery;
