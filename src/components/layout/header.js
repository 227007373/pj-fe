import Link from 'next/link';
import styles from './layout.module.scss';
import FadeDown from './animations/fadeDown';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '@/contexts/user.context';
const Header = () => {
    const { user, setUser } = useContext(UserContext);
    const [hover, setHover] = useState(false);
    return (
        <header className={styles.header}>
            <FadeDown>
                <div className='container'>
                    <nav className={styles.nav}>
                        <div className={styles.navLeft}>
                            <Link href='/weather'>
                                <a>Weather</a>
                            </Link>
                            <Link href='/total'>
                                <a>Total</a>
                            </Link>
                        </div>
                        <div className={styles.navCenter}>
                            <Link href='/'>
                                <a>Home</a>
                            </Link>
                        </div>
                        <div className={styles.navRight}>
                            <Link href='/data'>
                                <a>Trend</a>
                            </Link>
                            <div className={styles.dropdownWrapper}>
                                <Link href=''>
                                    <a
                                        onClick={() => {
                                            setHover(!hover);
                                        }}
                                    >
                                        Community
                                    </a>
                                </Link>
                                {hover && (
                                    <div className={styles.dropdown}>
                                        <ul>
                                            {user.token.length > 0 ? (
                                                <li>
                                                    <Link href='/logout'>
                                                        <a>logout</a>
                                                    </Link>
                                                </li>
                                            ) : (
                                                <>
                                                    <li>
                                                        <Link href='/register'>
                                                            <a>register</a>
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href='/login'>
                                                            <a>login</a>
                                                        </Link>
                                                    </li>
                                                </>
                                            )}
                                            <li>
                                                <Link href='/discuss'>
                                                    <a>discuss</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    </nav>
                </div>
            </FadeDown>
        </header>
    );
};

export default Header;
