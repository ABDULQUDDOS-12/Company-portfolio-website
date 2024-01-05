import React, { useEffect, useState } from "react";
import styles from "./Index.module.css";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaPaypal } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import AOS from "aos";
import "aos/dist/aos.css";
const Index = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      easing: "ease-in-out", // Animation timing function
    }); // Initialize AOS
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/form/contactUs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name,
          phone: formData.phone,
          message: formData.message,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data.msg);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const myStyle = {
    color: 'black',
    marginLeft: '-0.5px',
    marginBottom: '10px',
  };
  const margin = {
    marginBottom: '10px',
  }
  const flex = {
    display: 'flex'
  }
  return (
    <div id="contact" data-aos="zoom-in-up" className={styles.mainContainer}>
      <div className={styles.formContainer}>
        <div className={styles.leftContainer}>
          <form action="" onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Your Phone"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Enter Your Messages"
            ></textarea>
            <button type="submit">Lets Connect</button>
          </form>
        </div>
        <div className={styles.rightContainer}>
          <div className={styles.mainHeading}>
            <h1>
              Get Free <span>Consultancy</span>
            </h1>
          </div>
          <div className={styles.officeContact} style={margin}>
            <h3>HEAD OFFICE</h3>
            <p>Beckerstr.2 1/4 85049 Ingolstadt, Germany</p>
          </div>
          <div className={styles.contactDetails}>
            {/* <FaPhoneFlip className={styles.phoneIcone} /> */}
            <h3>ACCOUNTS</h3>
            <p style={myStyle}><b>Bank Details:</b> Muhammad Talal Feroz <br/>
Bank Name: Sparkasse Köln Bonn<br/>
SWIFT CODE: COLSDE33XXX<br/>
IBAN NO: DE54370501981934343664</p>
<p style={myStyle}><FaPaypal/> <a href="https://www.paypal.me/Talalferoz">Paypal</a></p>
          </div>
          <div className={styles.contactDetails} style={flex}>
            <FaPhoneFlip className={styles.phoneIcone} />
            <p>+4917683508581</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
