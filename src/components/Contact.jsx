import React from "react";
import styles from "./Contact.module.css";
import photo from "../img/contato.jpg";
import Head from "./Head";

const Contact = () => {
  return (
    <section className={`${styles.contact} animeLeft`}>
      <Head title="Store | Contato" description="Entre em contato." />
      <img src={photo} alt="Máquina de escrever" />
      <div>
        <h1>Entre em contato</h1>
        <ul className={styles.data}>
          <li>email@gmail.com</li>
          <li>(00) 00000-0000</li>
          <li>Rua Ali Perto, 000</li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
