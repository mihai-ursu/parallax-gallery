import styles from "./SingleImage.module.scss";
import Image from "next/image";

const SingleImage = ({ name, src }) => {
  return (
    <div className={styles.imageWrapper}>
      <div className={styles.innerWrapper}>
        <Image src={src} alt={name} layout="fill" className={styles.image} />
      </div>
    </div>
  );
};

export default SingleImage;
