import styles from './css/home.module.css';
import { UilCube } from '@iconscout/react-unicons'

const Home = () => {
  return (
    <div className={styles.bg}>
      <div className="container">
        <div className={styles.informacion}>
          <div className={styles.col}>
            <div className={styles.item}>
              <UilCube />
              <p>Nombre: </p>
              <p>Jose Dinael Aragon Gil</p>
            </div>
            <div className={styles.item}>
              <UilCube />
              <p>Edad: </p>
              <p>24 Años</p>
            </div>
            <div className={styles.item}>
              <UilCube />
              <p>Puesto: </p>
              <p>Web Developer</p>
            </div>
          </div>
          <div className={styles.col}>
            <div className={styles.item}>
              <UilCube />
              <p>Fecha de nacimiento: </p>
              <p>12 de Septiembre de 1998</p>
            </div>
            <div className={styles.item}>
              <UilCube />
              <p>Pasa tiempos: </p>
              <p>Jugar VideoJuegos y Programar</p>
            </div>
            <div className={styles.item}>
              <UilCube />
              <p>Lenguajes de programación: </p>
              <p>JavaScript, C#, Java, Python, PHP</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
