import { useState } from 'react'
import styles from './css/burger.module.css';
import { Link } from 'react-router-dom';

const BurgerMenu = () => {
    const [active, setActive] = useState(false);

    const activateMenu = () => {
        setActive(!active);
    };
    return (
        <>
            <div className={styles.menuContainer}>
                <div className={styles.menuburger}
                    onClick={() => activateMenu()}>
                    <div className={styles.burger}></div>
                    <div className={styles.burger}></div>
                    <div className={styles.burger}></div>
                </div>
            </div>
            <div
                className={active ? `${styles.active} ${styles.menubar}` : `${styles.desactive} ${styles.menubar}`}>
                <nav className={active ? `${styles.active} ${styles.navegacion}` : `${styles.desactive} ${styles.navegacion}`}>
                    <Link onClick={() => activateMenu()} to={'/'}>Home</Link>
                    <Link onClick={() => activateMenu()} to={'/design'}>Design</Link>
                    <Link onClick={() => activateMenu()} to={'/search'}>Search</Link>
                </nav>
            </div>
        </>
    )
}

export default BurgerMenu
