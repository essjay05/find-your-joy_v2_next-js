import Image from "next/image"
import Link from "next/link"

import styles from "./Card.module.css"

const Card = ({
  title,
  subtitle,
  imgSrc,
  imgName,
  details,
  ...props
}) => {
  return (
    <Link>
      <div className={styles.cardContainer}>
        <h2>{title}</h2>
        { imgSrc ? 
          <Image
            className={styles.cardImg}
            src={imgSrc}
            alt={imgName ? imgName : ""}/>
          : <></> }
        { subtitle ? 
          <h3 className={styles.subtitle}>
            {subtitle}
          </h3> 
        : <></> }
        { details ? 
          <p className={styles.details}>
            {details}
          </p>
        : <></> }
      </div>
    </Link>
  )
}

export default Card