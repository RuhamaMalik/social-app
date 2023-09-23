// import styles from './Photos.module.css'
// import folder1 from '../../assets/images/folder1.jpg'
// import folder2 from '../../assets/images/folder2.png'
// import folder3 from '../../assets/images/folder3.png'
// import { useState } from 'react'
// import ProfileImages from './albums/ProfileImages';
// import PostImages from './albums/PostImages';
// import CoverPhotos from './albums/CoverPhotos';

// const Albums = () => {
//   const [activeTab, setActiveTab] = useState('');
// const [content, setContent] = useState(true);
//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//     setContent(false)
//   };

//   return (

//     <div className={styles.albumWrapper}>
// {content=== true && <>
//       <div className={styles.albumTile}  onClick={() => handleTabChange('profile')}>
//         <div className={styles.folderIcon}>
//           <img src={folder1} alt="Profile Icon" />
//         </div>
//         <div className={styles.folderDetails}>
//           <h3 className={styles.folderName}>Profile Photos</h3>
//           <p className={styles.folderDescription}>Your profile pictures.</p>
//         </div>
//       </div>

//       <div className={styles.albumTile}  onClick={() => handleTabChange('cover')}>
//         <div className={styles.folderIcon}>
//           <img src={folder2} alt="Cover Icon" />
//         </div>
//         <div className={styles.folderDetails}>
//           <h3 className={styles.folderName}>Cover Photos</h3>
//           <p className={styles.folderDescription}>Your cover photos.</p>
//         </div>
//       </div>

//       <div className={styles.albumTile}  onClick={() => handleTabChange('post')}>
//         <div className={styles.folderIcon}>
//           <img src={folder3} alt="Post Icon" />
//         </div>
//         <div className={styles.folderDetails}>
//           <h3 className={styles.folderName}>Post Photos</h3>
//           <p className={styles.folderDescription}>Your post images.</p>
//         </div>
//       </div> </> }

//       {activeTab === "profile"? <ProfileImages/>: '' }
//       {activeTab === "cover"? <CoverPhotos/> : '' }
//       {activeTab === "post"? <PostImages/>: '' }

//     </div>


//   )
// }

// export default Albums
import styles from './Photos.module.css';
import folder1 from '../../assets/images/folder1.jpg';
import folder2 from '../../assets/images/folder2.png';
import folder3 from '../../assets/images/folder3.png';
import { useState } from 'react';
import ProfileImages from './albums/ProfileImages';
import PostImages from './albums/PostImages';
import CoverPhotos from './albums/CoverPhotos';

const Albums = () => {
  const [activeTab, setActiveTab] = useState('');
  const [showContent, setShowContent] = useState(true);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setShowContent(false);
  };

  return (
    <div className={styles.albumWrapper}>
      {showContent ? (
        <>
          <div className={styles.albumTile} onClick={() => handleTabChange('cover')}>
            <div className={styles.folderIcon}>
              <img src={folder2} alt="Cover Icon" />
            </div>
            <div className={styles.folderDetails}>
              <h3 className={styles.folderName}>Cover Photos</h3>
              <p className={styles.folderDescription}>Your cover photos.</p>
            </div>
          </div>

         <div className={styles.albumTile} onClick={() => handleTabChange('cover')}>
            <div className={styles.folderIcon}>
              <img src={folder2} alt="Cover Icon" />
            </div>
            <div className={styles.folderDetails}>
              <h3 className={styles.folderName}>Cover Photos</h3>
              <p className={styles.folderDescription}>Your cover photos.</p>
            </div>
          </div>


          <div className={styles.albumTile} onClick={() => handleTabChange('cover')}>
            <div className={styles.folderIcon}>
              <img src={folder2} alt="Cover Icon" />
            </div>
            <div className={styles.folderDetails}>
              <h3 className={styles.folderName}>Cover Photos</h3>
              <p className={styles.folderDescription}>Your cover photos.</p>
            </div>
          </div>
          
        </>
      ) : null}

      {activeTab === 'profile' ? <ProfileImages /> : ''}
      {activeTab === 'cover' ? <CoverPhotos /> : ''}
      {activeTab === 'post' ? <PostImages /> : ''}
    </div>
  );
}

export default Albums;
