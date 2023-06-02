//Dependencias
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { UilFacebookF } from '@iconscout/react-unicons'
import { UilYoutube } from '@iconscout/react-unicons'
import { UilTwitter } from '@iconscout/react-unicons'
import { UilInstagram } from '@iconscout/react-unicons'
//Assets
import styles from './css/header.module.css';
import Logo from '../assets/logo_sin_fondo.png';

//Burgermenu
import BurgerMenu from './BurgerMenu';

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    // Función para manejar el cambio en el tamaño de la ventana
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    // evento 'resize' al objeto 'window' para saber cuando cambia la pantalla
    window.addEventListener('resize', handleResize);
    // Limpiar el evento cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },);

  return (
    <div className={styles.bgContainer}>
      <div className={styles.sociales}>
        <UilYoutube />
        <UilTwitter />
        <UilFacebookF />
        <UilInstagram />
      </div>
      <div className={`container ${styles.headerContainer}`}>
        <div className={styles.logoContainer}>
          <img src={Logo} alt="Logo Gelish" />
        </div>
        {windowWidth <= 1024 ?
          <BurgerMenu />
          :
          <nav className={styles.navegacion}>
            <Link to={'/'}>Home</Link>
            <Link to={'/design'}>Design</Link>
            <Link to={'/search'}>Search</Link>
          </nav>
        }
      </div>
    </div>

  )
}

export default Header
