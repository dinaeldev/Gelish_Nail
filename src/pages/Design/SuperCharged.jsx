import styles from './css/supercharged.module.css';
import producto from '../../assets/Product-3.png';
import productoZoom from '../../assets/Product-4.jpg';

const SuperCharged = () => {
    return (
        <div className='bg-gray'>
            <div className={`container ${styles.contenedor}`}>
                <h2>SUPERCHARGED</h2>
                <h3>4300 RPM <span>VORTEX</span> ™ POWER</h3>
                <div className={styles.info}>
                    <div className={styles.infoText}>
                        <p><span>Gelish® Vortex</span> design blends state-of-the-art technology, convenience and economy in a supercharged, go-anywhere cordless and rechargeable dust collector.</p>
                        <p>
                            Our <span>VORTEX™ TECHNOLOGY</span> has a smart, space-saving design with unparalleled airborne particle and dust collection, delivering cleaner air for you and your clients without compromising the speed of your e-file service.
                        </p>
                    </div>
                    <div className={styles.infoImg}>
                        <img src={producto} />
                        <p>A BUILT-IN POWER INDICATOR LIGHT SIGNALS REMAINING POWER:</p>
                        <div className={styles.zoom}>
                            <div className={styles.blue}>
                                <h4>BLUE</h4>
                                <p>100% TO 30% POWER</p>
                            </div>
                            <img src={productoZoom} />
                            <div className={styles.red}>
                                <h4>RED</h4>
                                <p>LESS THAN 30% POWER</p>
                                <span>(TIME TO CHARGE!)</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuperCharged
