import React from 'react';
import Header from './header';
import Footer from './footer';
import styles from './layout.module.scss';
const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};
export default Layout;
