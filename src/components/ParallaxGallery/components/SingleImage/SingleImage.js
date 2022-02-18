import { useEffect, useRef } from "react";
import styles from "./SingleImage.module.scss";
import Image from "next/image";

const SingleImage = ({ name, src }) => {
  const imageContainer = useRef();

  useEffect(() => {
    requestAnimationFrame(() => parallaxScrolling());
  }, []);

  const data = {
    ease: 0.1,
    current: 0,
    previous: 0,
    rounded: 0,
  };

  const parallaxScrolling = () => {
    data.current = window.scrollY;
    data.previous += (data.current - data.previous) * data.ease;
    data.rounded = Math.round(data.previous * 100) / 1200;

    imageContainer.current.style.transform = `translate3d(-50%, -${data.rounded}px, 0)`;

    requestAnimationFrame(() => parallaxScrolling());
  };

  return (
    <div className={styles.imageWrapper}>
      <div className={styles.innerWrapper} ref={imageContainer}>
        <Image src={src} alt={name} layout="fill" className={styles.image} />
      </div>
    </div>
  );
};

export default SingleImage;
