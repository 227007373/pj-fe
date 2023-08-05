import styles from './layout.module.scss';
import Link from 'next/link';
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>© 2023</div>
            <nav className={styles.nav}></nav>
            <div className={styles.social}></div>
        </footer>
    );
};

export default Footer;
