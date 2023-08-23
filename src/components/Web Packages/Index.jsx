import React from 'react'
import styles from './Index.module.css'
const Index = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.mainHeading}>
                <h1>Web <span>packages</span> We Offer</h1>
            </div>
            <div className={styles.mainTextContainer}>
             <p>We believes in catering unique services in competitive pricing structures. We have some fabulous packages carefully crafted for every services offered to offer the premium quality within your budget.</p>
            </div>
            <div className={styles.buttonsContainer}>
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