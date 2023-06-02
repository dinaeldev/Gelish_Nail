import producto from '../../assets/Product-1.jpg';
import styles from './css/ProductoUno.module.css';

const ProductoUno = () => {
    return (
        <div className={styles.productoContainer}>
            <div className={styles.textContainer}>
                <h3>ULTRA SLIM & POWERFUL COMFORT DRIVEN <span><br/>GO-ANYWHERE</span></h3>
                <h4>THE NEW STANDARD IN SALON COMFORT</h4>
                <h5>Providing clean, dust-free air is better for you and your clients! In fact, dust exposure can aggravate respiratory conditions, which may cause some clients to avoid nail salons completely. Eliminate airborne dust with the Gelish® VORTEX™ Portable Nail Dust Collector for cleaner air and a healthier salon environment!</h5>
                <h4>VORTEX TECHNOLOGY</h4>
                <h5>Smart, space-saving design with unparalleled airborne particle and dust collection delivering cleaner air for you and your clients without compromising the speed of your e-file service.</h5>
            </div>
            <div className={styles.imagenContainer}>
                <img src={producto} alt="Vortext technology" />
            </div>
        </div>
    )
}

export default ProductoUno
