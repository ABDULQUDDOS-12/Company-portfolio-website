import React, { useEffect,useState } from 'react'
import styles from './Index.module.css'
import newstyles from '../Web Packages/Index.module.css'
import banner1 from '../../images/Banner 1.png'
import banner2 from '../../images/Banner 2.png'
import banner3 from '../../images/Banner 3.png'
import banner4 from '../../images/Banner 4.png'
import banner5 from '../../images/Banner 5.png'
import banner6 from '../../images/Banner 6.png'
import { GiCheckMark } from "react-icons/gi";
import AOS from 'aos'
import 'aos/dist/aos.css';
const Index = ({ selectedOption }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
    const cardData = [
        {
            id: 'Basic Package',
            image: banner1,
            title: 'Basic Package',
            checkpoints: [
                '3 page Website',
                '2 Stock Images',
                '1 jQuery Slider Banner',
                'Contact/Query Form',
                '48 to 72 hours TAT',
                'Complete Deployment',
                '100% Satisfaction Guarantee',
                '100% Unique Design Guarantee',
                '100% Money Back Guarantee'
            ]
        },
        {
            id: 'Standard Package',
            image: banner2,
            title: 'Standard Package',
            checkpoints: [
                '5 Page Website',
                '5 Stock Photos',
                '3 Banner Design',
                '1 jQuery Slider Banner',
                'FREE Google Friendly Sitemap',
                'Complete W3C Certified HTML',
                '48 to 72 hours TAT',
                '100% Satisfaction Guarantee',
                '100% Money Back Guarantee',
                'Mobile Responsive will be Additional $200*',
                'CMS will be Additional $250*',
            ]
        },
        {
            id: 'Professional Package',
            image: banner3,
            title: 'Professional Package',
            checkpoints: [
                '10 Unique Pages Website',
                'CMS / Admin Panel Support',
                '8 Stock images',
                '5 Banner Designs',
                'Mobile Responsive',
                '1 jQuery Slider Banner',
                'FREE Google Friendly Sitemap',
                'Complete W3C Certified HTML',
                '48 to 72 hours TAT',
                "Complete Deployment",
                "100% Satisfaction Guarantee",
                "100% Unique Design Guarantee",
                "100% Money Back Guarantee"
            ]
        },
        {
            id: 'Diamond Package',
            image: banner4,
            title: 'Diamond Package',
            checkpoints: [
                'Upto 15 Unique Pages Website',
                'Conceptual and Dynamic Website',
                'Mobile Responsive',
                'Online Reservation/Appointment Tool (Optional)',
                'Online Payment Integration (Optional)',
                'Custom Forms',
                'Lead Capturing Forms (Optional)',
                'Striking Hover Effects',
                'Newsletter Subscription (Optional)',
                'Newsfeed Integration',
                "Social Media Integration",
                "Search Engine Submission",
                "5 Stock Photos",
                "3 Unique Banner Design",
                "1 jQuery Slider Banner",
                "Complete W3C Certified HTML",
                "48 to 72 hours TAT",
                "Complete Deployment",
                "100% Satisfaction Guarantee",
                "100% Unique Design Guarantee",
                "100% Money Back Guarantee"
            ]
        },
    ];
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
        });
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 640); // Adjust the screen width as needed
          };
      
          window.addEventListener('resize', handleResize);
      
          return () => {
            window.removeEventListener('resize', handleResize);
          };
    }, []);
    const filteredCards = isMobile ? cardData.filter((card) => card.id === selectedOption) : cardData;
    return (
        <div className={styles.mainContainer}>
            <div data-aos="zoom-in-up" className={newstyles.mainHeading}>
                <h1>Web <span>packages</span> We Offer</h1>
            </div>
            <div data-aos="zoom-in-up" className={newstyles.mainTextContainer}>
                <p>We believes in catering unique services in competitive pricing structures. We have some fabulous packages carefully crafted for every services offered to offer the premium quality within your budget.</p>
            </div>
        <div className={styles.cardsContainer}>
        
            {filteredCards.map((card,index) => (
                <div key={index} data-aos="zoom-in-up" className={styles.firstCard}>
                    <div className={styles.firstImageContainer}>
                        <img src={card.image} alt="" className={styles.firstImage} />
                    </div>
                    <div className={styles.textHeadingContainer}>
                        <p>{`Plan Includes:`}</p>
                    </div>
                    <hr />
                    <div className={styles.checkPoints}>
                        {card.checkpoints.map((checkpoint, index) => (
                            <span key={index}>
                                <GiCheckMark /> {checkpoint}<br />
                            </span> 
                        ))}
                    </div>
                    <div className={styles.buttonContainer}>
                        <button>CHAT NOW</button>
                        <button>ORDER NOW</button>
                    </div>
                    <div className={styles.lastlineContainer}>
                        <p>Suitable for potential super-startups and brand revamps for companies</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
    )
}

export default Index