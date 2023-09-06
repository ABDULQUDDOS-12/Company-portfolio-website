import React,{useEffect} from 'react'
import styles from './Index.module.css'
import banner1 from '../../images/Banner 1.png'
import banner2 from '../../images/Banner 2.png'
import banner3 from '../../images/Banner 3.png'
import banner4 from '../../images/Banner 4.png'
import banner5 from '../../images/Banner 5.png'
import banner6 from '../../images/Banner 6.png'
import { GiCheckMark } from "react-icons/gi";
import AOS from 'aos'
import 'aos/dist/aos.css';
const Index = (/*{ selectedOption }*/) => {
    const cardData = [
        {
            id: 'Basic Website Design',
            title: 'Basic Website Package',
            checkpoints:[
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
            id: 'startup',
            title: 'Startup Website Package',
            checkpoints:[
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
            id: 'Professional',
            title: 'Professional Website Package',
            checkpoints:[
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
            id: 'Elite',
            title: 'Elite Website Package',
            checkpoints:[
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
        {
            id: 'buisness',
            title: 'Buisness Website Package',
            checkpoints:[
                '15 to 20 Pages Website',
                'Custom Made, Interactive, Dynamic & High End Design',
                'Custom WP (or) Custom PHP Development',
                '1 jQuery Slider Banner',
                'Up to 10 Custom Made Banner Designs',
                '10 Stock Images',
                'Unlimited Revisions',
                'Special Hoover Effects',
                'Content Management System (CMS)',
                'Online Appointment/Scheduling/Online Ordering Integration (Optional)',
                'Online Payment Integration (Optional)',
                'Multi Lingual (Optional)',
                'Custom Dynamic Forms (Optional)',
                'Signup Area (For Newsletters, Offers etc.)',
                'Search Bar',
                'Live Feeds of Social Networks integration (Optional)',
                'Mobile Responsive',
                'Free Google Friendly Sitemap',
                'Search Engine Submission',
                'Complete W3C Certified HTML',
                'Industry Specified Team of Expert Designers and Developers',
                'Complete Deployment',
                'Dedicated Accounts Manager',
                '100% Satisfaction Guarantee',
                '100% Unique Design Guarantee',
                '100% Money Back Guarantee'


            ]
        },
        {
            id: 'corporate',
            title: 'Corporate Website Package',
            checkpoints:[
               
                    '15 to 20 Pages Website',
                    '15 Seconds 2D Explainer Video',
                    'Voice – Over & Sound Effects',
                    'Professional Script Writing',
                    'Storyboard',
                    'SEO Meta Tags',
                    'Custom Made, Interactive, Dynamic & High End Design',
                    'Custom WP (or) Custom PHP Development',
                    '1 jQuery Slider Banner',
                    'Up to 10 Custom Made Banner Designs',
                    '10 Stock Images',
                    'Unlimited Revisions',
                    'Special Hoover Effects',
                    'Content Management System (CMS)',
                    'Online Appointment/Scheduling/Online Ordering Integration (Optional)',
                    'Online Payment Integration (Optional)',
                    'Multi Lingual (Optional)',
                    'Custom Dynamic Forms (Optional)',
                    'Signup Area (For Newsletters, Offers etc)',
                    'Search Bar',
                    'Live Feeds of Social Networks integration (Optional)',
                    'Mobile Responsive',
                    'Free Google Friendly Sitemap',
                    'Search Engine Submission',
                    'Complete W3C Certified HTML',
                    'Industry Specified Team of Expert Designers and Developers',
                    'Complete Deployment',
                    'Dedicated Accounts Manager',
                    '100% Ownership Rights',
                    '100% Satisfaction Guarantee',
                    '100% Unique Design Guarantee'
            ]
        },
    ];
    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
        }); 
      }, []);
    //   const filteredCards = cardData.filter((card) => card.id === selectedOption);
    return (
        <div className={styles.mainContainer} >
            <div className={styles.cardsContainer}>
           <div  data-aos="zoom-in-up" className={styles.firstCard}>
                    <div className={styles.firstImageContainer}>
                        <img src={banner1} alt="" className={styles.firstImage} />
                    </div>
                    <div className={styles.textHeadingContainer}>
                        <p>Plan Includes:</p>
                    </div>
                    <hr />
                    <div className={styles.checkPoints}>
                        <span><GiCheckMark/> 3 page Website</span><br />
                        <span><GiCheckMark/> 2 Stock Images</span><br />
                        <span><GiCheckMark/> 1 jQuery Slider Banner</span><br />
                        <span><GiCheckMark/> Contact/Query Form</span><br />
                        <span><GiCheckMark/> 48 to 72 hours TAT</span><br />
                        <span><GiCheckMark/> Complete Deployment</span><br />
                        <span><GiCheckMark/> 100% Satisfaction Guarantee</span><br />
                        <span><GiCheckMark/> 100% Unique Design Guarantee</span><br />
                        <span><GiCheckMark/> 100% Money Back Guarantee</span><br />
                    </div>
                    <div className={styles.buttonContainer}>
                        <button>CHAT NOW</button>
                        <button>ORDER NOW</button>
                    </div>
                    <div className={styles.lastlineContainer}>
                        <p>Suitable for potential super-startups and brand revamps for companies</p>
                    </div>
                </div>
               
                <div data-aos="zoom-in-up" className={styles.firstCard}>
                    <div className={styles.firstImageContainer}>
                        <img src={banner2} alt="" className={styles.firstImage} />
                    </div>
                    <div className={styles.textHeadingContainer}>
                        <p>Plan Includes:</p>
                    </div>
                    <hr />
                    <div className={styles.checkPoints}>
                        <span><GiCheckMark /> 5 Page Website</span><br />
                        <span><GiCheckMark /> 5 Stock Photos</span><br />
                        <span><GiCheckMark /> 3 Banner Design</span><br />
                        <span><GiCheckMark /> 1 jQuery Slider Banner</span><br />
                        <span><GiCheckMark /> FREE Google Friendly Sitemap</span><br />
                        <span><GiCheckMark /> Complete W3C Certified HTML</span><br />
                        <span><GiCheckMark /> 48 to 72 hours TAT</span><br />
                        <span><GiCheckMark /> 100% Satisfaction Guarantee</span><br />
                        <span><GiCheckMark /> 100% Money Back Guarantee</span><br />
                        <span><GiCheckMark /> Mobile Responsive will be Additional $200*</span><br />
                        <span><GiCheckMark /> CMS will be Additional $250*</span><br />
                    </div>
                    <div className={styles.buttonContainer}>
                        <button>CHAT NOW</button>
                        <button>ORDER NOW</button>
                    </div>
                    <div className={styles.lastlineContainer}>
                        <p>Suitable for potential super-startups and brand revamps for companies</p>
                    </div>
                </div>
                <div data-aos="zoom-in-up" className={styles.firstCard}>
                    <div className={styles.firstImageContainer}>
                        <img src={banner3} alt="" className={styles.firstImage} />
                    </div>
                    <div className={styles.textHeadingContainer}>
                        <p>Plan Includes:</p>
                    </div>
                    <hr />
                    <div className={styles.checkPoints}>
                        <span><GiCheckMark /> 10 Unique Pages Website</span><br />
                        <span><GiCheckMark /> CMS / Admin Panel Support</span><br />
                        <span><GiCheckMark /> 8 Stock images</span><br />
                        <span><GiCheckMark /> 5 Banner Designs</span><br />
                        <span><GiCheckMark /> Mobile Responsive</span><br />
                        <span><GiCheckMark /> 1 jQuery Slider Banner</span><br />
                        <span><GiCheckMark /> FREE Google Friendly Sitemap</span><br />
                        <span><GiCheckMark /> Complete W3C Certified HTML</span><br />
                        <span><GiCheckMark /> 48 to 72 hours TAT</span><br />
                        <span><GiCheckMark /> Complete Deployment</span><br />
                        <span><GiCheckMark /> 100% Satisfaction Guarantee</span><br />
                        <span><GiCheckMark /> 100% Unique Design Guarantee</span><br />
                        <span><GiCheckMark /> 100% Money Back Guarantee</span><br />
                    </div>
                    <div className={styles.buttonContainer}>
                        <button>CHAT NOW</button>
                        <button>ORDER NOW</button>
                    </div>
                    <div className={styles.lastlineContainer}>
                        <p>Suitable for potential super-startups and brand revamps for companies</p>
                    </div>
                </div>
                <div data-aos="zoom-in-up" className={styles.firstCard}>
                    <div className={styles.firstImageContainer}>
                        <img src={banner4} alt="" className={styles.firstImage} />
                    </div>
                    <div className={styles.textHeadingContainer}>
                        <p>Plan Includes:</p>
                    </div>
                    <hr />
                    <div className={styles.checkPoints}>
                        <span><GiCheckMark /> Upto 15 Unique Pages Website</span><br />
                        <span><GiCheckMark /> Conceptual and Dynamic Website</span><br />
                        <span><GiCheckMark /> Mobile Responsive</span><br />
                        <span><GiCheckMark /> Online Reservation/Appointment Tool (Optional)</span><br />
                        <span><GiCheckMark /> Online Payment Integration (Optional)</span><br />
                        <span><GiCheckMark /> Custom Forms</span><br />
                        <span><GiCheckMark /> Lead Capturing Forms (Optional)</span><br />
                        <span><GiCheckMark /> Striking Hover Effects</span><br />
                        <span><GiCheckMark /> Newsletter Subscription (Optional)</span><br />
                        <span><GiCheckMark /> Newsfeed Integration</span><br />
                        <span><GiCheckMark /> Social Media Integration</span><br />
                         <span><GiCheckMark /> Search Engine Submission</span><br />
                         <span><GiCheckMark /> 5 Stock Photos</span><br />
                          <span><GiCheckMark /> 3 Unique Banner Design</span><br />
                          <span><GiCheckMark /> 1 jQuery Slider Banner</span><br />
                          <span><GiCheckMark /> Complete W3C Certified HTML</span><br />
                          <span><GiCheckMark /> 48 to 72 hours TAT</span><br />
                          <span><GiCheckMark /> Complete Deployment</span><br />
                          <span><GiCheckMark /> 100% Satisfaction Guarantee</span><br />
                          <span><GiCheckMark /> 100% Unique Design Guarantee</span><br />
                          <span><GiCheckMark /> 100% Money Back Guarantee</span><br />
                    </div>
                    <div className={styles.buttonContainer}>
                        <button>CHAT NOW</button>
                        <button>ORDER NOW</button>
                    </div>
                    <div className={styles.lastlineContainer}>
                        <p>Suitable for potential super-startups and brand revamps for companies</p>
                    </div>
                </div>
                <div data-aos="zoom-in-up" className={styles.firstCard}>
                    <div className={styles.firstImageContainer}>
                        <img src={banner5} alt="" className={styles.firstImage} />
                    </div>
                    <div className={styles.textHeadingContainer}>
                        <p>Plan Includes:</p>
                    </div>
                    <hr />
                    <div className={styles.checkPoints}>
                        <span><GiCheckMark /> 15 to 20 Pages Website</span><br />
                        <span><GiCheckMark /> Custom Made, Interactive, Dynamic & High End Design</span><br />
                        <span><GiCheckMark /> Custom WP (or) Custom PHP Development</span><br />
                        <span><GiCheckMark /> 1 jQuery Slider Banner</span><br />
                        <span><GiCheckMark /> Up to 10 Custom Made Banner Designs</span><br />
                        <span><GiCheckMark /> 10 Stock Images</span><br />
                        <span><GiCheckMark /> Unlimited Revisions</span><br />
                        <span><GiCheckMark /> Special Hoover Effects</span><br />
                        <span><GiCheckMark /> Content Management System (CMS)</span><br />
                        <span><GiCheckMark /> Online Appointment/Scheduling/Online Ordering Integration (Optional)</span><br />
                        <span><GiCheckMark /> Online Payment Integration (Optional)</span><br />
                        <span><GiCheckMark /> Multi Lingual (Optional)</span><br />
                        <span><GiCheckMark /> Custom Dynamic Forms (Optional)</span><br />
                        <span><GiCheckMark /> Signup Area (For Newsletters, Offers etc.)</span><br />
                        <span><GiCheckMark /> Search Bar</span><br />
                        <span><GiCheckMark /> Live Feeds of Social Networks integration (Optional)</span><br />
                        <span><GiCheckMark /> Mobile Responsive</span><br />
                        <span><GiCheckMark /> Free Google Friendly Sitemap</span><br />
                        <span><GiCheckMark /> Search Engine Submission</span><br />
                        <span><GiCheckMark /> Complete W3C Certified HTML</span><br />
                        <span><GiCheckMark /> Industry Specified Team of Expert Designers and Developers</span><br />
                        <span><GiCheckMark /> Complete Deployment</span><br />
                        <span><GiCheckMark /> Dedicated Accounts Manager</span><br />
                        <span><GiCheckMark /> 100% Satisfaction Guarantee</span><br />
                        <span><GiCheckMark /> 100% Unique Design Guarantee</span><br />
                        <span><GiCheckMark /> 100% Money Back Guarantee</span><br />
                    </div>
                    <div className={styles.buttonContainer}>
                        <button>CHAT NOW</button>
                        <button>ORDER NOW</button>
                    </div>
                    <div className={styles.lastlineContainer}>
                        <p>Suitable for potential super-startups and brand revamps for companies</p>
                    </div>
                </div>
                <div data-aos="zoom-in-up" className={styles.firstCard}>
                    <div className={styles.firstImageContainer}>
                        <img src={banner6} alt="" className={styles.firstImage} />
                    </div>
                    <div className={styles.textHeadingContainer}>
                        <p>Plan Includes:</p>
                    </div>
                    <hr />
                    <div className={styles.checkPoints}>
                        <span><GiCheckMark /> 15 to 20 Pages Website</span><br />
                        <span><GiCheckMark /> 15 Seconds 2D Explainer Video</span><br />
                        <span><GiCheckMark /> Voice – Over & Sound Effects</span><br />
                        <span><GiCheckMark /> Professional Script Writing</span><br />
                        <span><GiCheckMark /> Storyboard</span><br />
                        <span><GiCheckMark /> SEO Meta Tags</span><br />
                        <span><GiCheckMark /> Custom Made, Interactive, Dynamic & High End Design</span><br />
                        <span><GiCheckMark /> Custom WP (or) Custom PHP Development</span><br />
                        <span><GiCheckMark /> 1 jQuery Slider Banner</span><br />
                        <span><GiCheckMark /> Up to 10 Custom Made Banner Designs</span><br />
                        <span><GiCheckMark /> 10 Stock Images</span><br />
                        <span><GiCheckMark /> Unlimited Revisions</span><br />
                        <span><GiCheckMark /> Special Hoover Effects</span><br />
                        <span><GiCheckMark /> Content Management System (CMS)</span><br />
                        <span><GiCheckMark /> Online Appointment/Scheduling/Online Ordering Integration (Optional)</span><br />
                        <span><GiCheckMark /> Online Payment Integration (Optional)</span><br />
                        <span><GiCheckMark /> Multi Lingual (Optional)</span><br />
                        <span><GiCheckMark /> Custom Dynamic Forms (Optional)</span><br />
                        <span><GiCheckMark /> Signup Area (For Newsletters, Offers etc.)</span><br />
                        <span><GiCheckMark /> Search Bar</span><br />
                        <span><GiCheckMark /> Live Feeds of Social Networks integration (Optional)</span><br />
                        <span><GiCheckMark /> Mobile Responsive</span><br />
                        <span><GiCheckMark /> Free Google Friendly Sitemap</span><br />
                        <span><GiCheckMark /> Search Engine Submission</span><br />
                        <span><GiCheckMark /> Complete W3C Certified HTML</span><br />
                        <span><GiCheckMark /> Industry Specified Team of Expert Designers and Developers</span><br />
                        <span><GiCheckMark /> Complete Deployment</span><br />
                        <span><GiCheckMark /> Dedicated Accounts Manager</span><br />
                        <span><GiCheckMark /> 100% Ownership Rights</span><br />
                        <span><GiCheckMark /> 100% Satisfaction Guarantee</span><br />
                        <span><GiCheckMark /> 100% Unique Design Guarantee</span><br />
                        <span><GiCheckMark /> 100% Money Back Guarantee</span><br />
                    </div>
                    <div className={styles.buttonContainer}>
                        <button>CHAT NOW</button>
                        <button>ORDER NOW</button>
                    </div>
                    <div className={styles.lastlineContainer}>
                        <p>Suitable for potential super-startups and brand revamps for companies</p>
                    </div> 
                </div>
            </div>
        </div>
    )
}

export default Index