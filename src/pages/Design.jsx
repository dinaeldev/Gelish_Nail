//Assets
import styles from './css/design.module.css';

//parts components
import ProductoUno from './Design/ProductoUno';
import ProductoDos from './Design/ProductoDos';
import SuperCharged from './Design/SuperCharged';
import Services from './Design/Services';
import ItemDetail from './Design/ItemDetail';

const Design = () => {
  return (
    <>
      <div className='container'>
        <h1 className="helvetica-h1">VORTEX Nail Dust Collector</h1>
        <div className={styles.banner}></div>
        <div className={styles.beforeBanner}>
          <h3>THE POWER OF <span className='blue-text'>CLEANER AIR</span></h3>
          <p>The new standard in salon comfort! The <span>Gelish VORTEX™ </span>has a smart, space-saving design with unparalleled airborne particle and dust collection, delivering cleaner air for you and your clients without compromising the speed of your e-file service.</p>
        </div>
        <section>
          <ProductoUno />
        </section>
        <section>
          <ProductoDos />
          <div className={styles.specs}>
            <h3>PORTABLE NAIL DUST COLLECTOR SPECIFICATIONS:</h3>
            <p><span>UNIT</span> WIDTH: 210 mm / 8.27 INCHES • HEIGHT: 76 mm / 2.1 INCHES • DEPTH: 302.7 mm / 11.92 INCHES • WEIGHT: 995 G / 35 OZ. (2.2 LBS)</p>
            <p><span>FILTER</span> WIDTH: 176 mm / 6.93 INCHES • HEIGHT: 252 mm / 9.92 INCHES</p>
          </div>
        </section>
      </div>
      <section>
        <SuperCharged />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <ItemDetail />
      </section>
      <section className={styles.videoContainer}>
        
        <iframe className={styles.video} src="https://www.youtube.com/embed/ezV3SVewMkQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen poster="/videobg.png"></iframe>
        
      </section>
    </>
  )
}

export default Design
