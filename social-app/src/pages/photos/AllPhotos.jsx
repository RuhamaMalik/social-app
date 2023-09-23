import styles from './Photos.module.css'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DisplayImg from '../../components/cards/photosCard/DisplayImg';


const AllPhotos = () => {
  const currentUser = useSelector((state) => { // get current user
    return state.user.user
  });

  return (
    <>
      <div className={styles.all}>
        <DisplayImg image={currentUser.profileImage} alt={`profileImage`} caption='profileImage' />
        <DisplayImg image={currentUser.profileCover} alt={`profileCover`} caption='profileCover' />

        {currentUser.posts.map((post, index) => (
          <DisplayImg key={index} caption={post.description} image={post.imageUrl} alt={`Post ${index}`} tt={post.timestamp} />
        ))}
      </div>



    </>
  )
}

export default AllPhotos
