import Link from "next/link"
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link
        className={styles.copyright}
        target={`_blank`}
        href={`https://www.joyserquina.com`}>
        Joy of All Trades &copy; 2019
      </Link>
      <nav>
        <Link
          className={styles.navLink}
          href='/portfolio'
          name='Portolio'>
          Portfolio
        </Link>
        <Link
          className={styles.navLink}
          href='/about'
          name='About'>
          About
        </Link>
        <Link
          className={styles.navLink}
          href='/contact'
          name='Contact'>
          Contact
        </Link>
        <Link
          className={styles.navLink}
          href='/resume'
          name='Resume'>
          Resume
        </Link>
      </nav>
    </footer>
  )
}

export default Footer
