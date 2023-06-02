import styles from './css/productodos.module.css';
import producto from '../../assets/Product-2@2x.jpg';
import {data} from './data.js';

const ProductoDos = () => {
  return (
    <>
      <h2 className={`tx-center ${styles.title}`}>TECHNICAL FEATURES</h2>
      <div className={styles.productoContainer}>
        <div className={styles.imagenContainer}>
          <img src={producto} alt="Technical feactures" />
        </div>
        <div className={styles.dataContainer}>
            {data?.map(element =>(
            <div className={styles.item} key={element.id}> 
              <div className={styles.letra}>
                <span>{element.letra}</span>
              </div>
              <span className={styles.text}>{element.text}</span>
            </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default ProductoDos
