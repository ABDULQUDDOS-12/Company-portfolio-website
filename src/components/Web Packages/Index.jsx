import React,{useEffect} from 'react'
import styles from './Index.module.css'
import AOS from 'aos'
import 'aos/dist/aos.css';
const Index = () => {
    useEffect(() => {

        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          easing: 'ease-in-out', // Animation timing function
        }); // Initialize AOS
      }, []);
    return (
        <div className={styles.mainContainer}>
            <div data-aos="zoom-in-up" className={styles.mainHeading}>
                <h1>Web <span>packages</span> We Offer</h1>
            </div>
            <div data-aos="zoom-in-up" className={styles.mainTextContainer}>
             <p>We believes in catering unique services in competitive pricing structures. We have some fabulous packages carefully crafted for every services offered to offer the premium quality within your budget.</p>
            </div>
            <div data-aos="zoom-in-up" className={styles.buttonsContainer}>
            <button>Website Design</button>
            <button>E-commerce</button>
            <button>Wordpress</button>
            <button>Branding</button>
            <button>Logo</button>
            <button>Video Animation</button>
            <button>SEO</button>
            </div>
        </div>
    )
}

export default Index