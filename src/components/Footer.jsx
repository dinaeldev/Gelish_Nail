import styles from './css/footer.module.css'
import { UilFacebookF } from '@iconscout/react-unicons'
import { UilYoutube } from '@iconscout/react-unicons'
import { UilTwitter } from '@iconscout/react-unicons'
import { UilInstagram } from '@iconscout/react-unicons'
import logo from '../assets/logo_sin_fondo.png';

const Footer = () => {
  return (
    <div className={styles.bgBlack}>
      <div className={`container ${styles.contenido}`}>
        <div className={styles.izquierda}>
          <div className={styles.logo}>
            <img src={logo} />
          </div>
          <div className={styles.text}>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, aliquid rem, officia commodi minima deleniti natus quae iure culpa perspiciatis, neque aperiam reiciendis consequuntur eos dolores qui ratione dicta recusandae.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis optio repellat eligendi dolores nihil suscipit temporibus eaque voluptas numquam commodi dolorum quaerat possimus eius, praesentium libero delectus odit assumenda dignissimos?</p>
          </div>
        </div>
        <div className={styles.contacto}>
          <h3>CONTACT US</h3>
          <div>
            <div className={styles.itemContact}>
              <span>Email:</span>
              <span>Informacion@contacto.com</span>
            </div>
            <div className={styles.itemContact}>
              <span>Tel:</span>
              <span>664-123-4567</span>
            </div>
            <div className={styles.itemContact}>
              <span>Email:</span>
              <span>Informacion@contacto.com</span>
            </div>
          </div>
          <div className={styles.nail}>
              <h3>Nail Alliance- North America, Inc.</h3>
              <p>1545 MoonStone Brea, CA 92821</p>
          </div>
        </div>
      </div>
      <div className={styles.copy}>
        <p>Copyright - Dinael Aragon 2023</p>
        <div className={styles.sociales}>
          <UilYoutube />
          <UilTwitter />
          <UilFacebookF />
          <UilInstagram />
        </div>
      </div>
    </div>
  )
}

export default Footer
