import styles from './css/itemdetail.module.css';
import productouno from '../../assets/Product-5@2x.jpg';
import productodos from '../../assets/Product-6@2x.jpg';

const ItemDetail = () => {
  return (
    <div className={`container ${styles.contenedor}`}>
        <div className={styles.card}>
            <img src={productouno}  />
            <h4>VORTEX PORTABLE & RECHARGEABLE</h4>
            <p>NAIL DUST COLLECTOR</p>
            <span>1168209 (US), 1168210 (UK)</span>
            <span>1168211 (EU), 1168212 (AU)</span>
        </div>
        <div className={styles.card}>
            <img src={productodos}  />
            <h4>VORTEX NAIL DUST COLLECTOR</h4>
            <p>WASHABLE FILTER REPLACEMENT</p>
            <div>For use with Gelish® Vortex Nail Dust Collector. Removable and washable filter provides the most economical usage.</div>
            <span>1168213</span>
        </div>
    </div>
  )
}

export default ItemDetail
