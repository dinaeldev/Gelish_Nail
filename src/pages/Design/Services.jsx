import Icon1 from '../../assets/Icon-1.jpg';
import Icon2 from '../../assets/Icon-2.jpg';
import Icon3 from '../../assets/Icon-3.jpg';
import Icon4 from '../../assets/Icon-4.jpg';
import Icon5 from '../../assets/Icon-5.jpg';
import Icon6 from '../../assets/Icon-6.jpg';
import Icon7 from '../../assets/Icon-7.jpg';
import styles from './css/icon.module.css';

const Services = () => {
    return (
        <div className='container'>
            <div className={styles.iconContainer}>
                <div className={styles.iconCard}>
                    <img src={Icon1} />
                    <p>Our supercharged Vortex-powered fan combines quieter operation with maximum dust removal for a whole new class of performance!</p>
                </div>
                <div className={styles.iconCard}>
                    <img src={Icon2} />
                    <p>All day strong - full day of client use, both plug-in and/or portable. High capacity battery provides continuous operation. Unit can be used while charging.</p>
                </div>
                <div className={styles.iconCard}>
                    <img src={Icon3} />
                    <p>Designer magnetic grille makes removal and sanitation a breeze, while the acetone-resistance preserves our sleek finish.</p>
                </div>
                <div className={styles.iconCard}>
                    <img src={Icon4} />
                    <p>Ultra Slim, space-saving design creates an organized workspace with the smallest footprint available in a dust collector— Just 2.16” high and slightly larger than a magazine.</p>
                </div>
                <div className={styles.iconCard}>
                    <img src={Icon5} />
                    <p>Advanced circuitry eliminates inconsistent power levels when used in battery mode.</p>
                </div>
                <div className={styles.iconCard}>
                    <img src={Icon6} />
                    <p>Integrated flip-stand provides an elevated working angle for maximum comfort.</p>
                </div>
                <div className={styles.iconCard}>
                    <img src={Icon7} />
                    <p>Removable and washable filters provide the most economical usage.</p>
                </div>
            </div>
        </div>
    )
}

export default Services
