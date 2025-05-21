import React from "react";
import styles from "./Contact.module.css";
import { FaPhone, FaEnvelope, FaLine} from "react-icons/fa6";
import useInView from '../../hooks/useInView';

function Contact() {
  const [contactRef, isContactInView] = useInView({ threshold: 0.1 });

  return (
      <div id="contact" className={styles.contact_con}>
      <h2 className={styles.contact_title} >Contact Me</h2>
        <div 
          ref={contactRef}
          className={`${styles.contact_list} ${isContactInView ? styles.animate : ''}`}
        >
            <div className={styles.contact_items}>
              <FaPhone className={styles.contact_icon}/>
              <h3>091-705-5775</h3>
            </div>
            <div className={styles.contact_items}>
              <FaEnvelope className={styles.contact_icon}/> <br/>
              <h3 className={styles.contact_email}>myty.2543@gmail.com</h3>
            </div>
            <div className={styles.contact_items}>
              <FaLine className={styles.contact_icon}/>
              <h3>Line id: mity_35</h3>
            </div>
        </div>
      </div>
  );
}

export default Contact;
