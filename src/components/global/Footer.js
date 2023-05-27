import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link
        className={styles.copyright}
        target={`_blank`}
        href={`https://www.joyserquina.com`}>
        Joy of All Trades &copy; 2019
      </Link>
    </footer>
  )
}

export default Footer;
