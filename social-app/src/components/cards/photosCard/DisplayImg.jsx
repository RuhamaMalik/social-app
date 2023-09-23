import styles from './DisplayImg.module.css';
import React, { useState } from 'react';

const DisplayImg = ({ image, alt, caption , tt}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (


    <div>

      <div className={styles.imageCard}>
        <img
          className={styles.photosImg}
          src={image}
          alt={alt}
          onClick={() => openModal()} 
        />
      </div>

      {/*  Modal */}
      {modalOpen && (
        <div className={`${styles.modal} ${styles.active}`}>
          <span className={styles.close} onClick={closeModal}>&times;</span>
          <p className={styles.timestamp}>{tt}</p>
          <img className={`${styles.modalContent} ${styles.active}`} src={image} alt={alt} />
          <div className={styles.caption}>
            {caption}
          </div>
        </div>
      )}
    </div>

  )
}

export default DisplayImg
