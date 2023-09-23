import React, { useState } from 'react';
import AllPhotos from './AllPhotos';
import Albums from './Albums';
import styles from './Photos.module.css'
function PhotoGallery() {
  const [activeTab, setActiveTab] = useState('allPhotos');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.PhotoGallery}>
      <div className={styles.tabs}>
        <p
          onClick={() => handleTabChange('allPhotos')}
          className={activeTab === 'allPhotos' ? `${styles.active} `: ''} > AllPhotos </p>

        <p
          onClick={() => handleTabChange('albums')}
          className={activeTab === 'albums' ? 'active' : ''} > Albums  </p>
      </div>

      <div className={styles.galleryItems}>
        {activeTab === 'allPhotos' && <AllPhotos />}
        {activeTab === 'albums' && <Albums />}
      </div>
    </div>
  );
}

export default PhotoGallery;
