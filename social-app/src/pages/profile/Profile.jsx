import { useState } from 'react';
import PostCard from '../../components/cards/postcard/PostCard';
import styles from './Profile.module.css';
import { useSelector } from 'react-redux';
import Modal from '../../components/modal/Modal';


const Profile = () => {
    const [showDetails, setShowDetails] = useState(false)
    const currentUser = useSelector(state => {
        return state.user.user;
    })

    const [isModalOpen, setIsModalOpen] = useState(false);  //Modal

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div>
                <div className={styles.profileCover}>
                    <img src={currentUser.profileCover} alt="Profile Cover" />
                    <p className={styles.editCover}>✎</p>
                </div>
                <div className={styles.profileImg}>
                    <img src={currentUser.profileImage} alt=" User Profile Image" />
                    <p>✎</p>
                    {/* <p> 📷</p> */}
                </div>

                <div className={styles.userDetails}>
                    <h3> {currentUser.username} </h3>
                    <p>{currentUser.bio}</p>

                    {showDetails && <>
                        <div className={styles.details}>
                            <b>Contact:</b>  <span>{currentUser.mobileNumber}</span>
                            <b>Email:</b>  <span>{currentUser.email}</span>
                            <b>Followers:</b> <span>{currentUser.followers}</span>
                            <b>Following:</b> <span>{currentUser.following}</span>
                            <b> Location :</b> <span>Lives in {currentUser.location}</span>
                        </div>
                        <div className={styles.editProfileBtn}><span>Edit profile ✎</span></div>
                    </>
                    }
                    <div className={styles.info}><span onClick={() => setShowDetails(!showDetails)}>{showDetails ? 'show less' : 'show more'}</span>...</div>
                </div>

            </div>

            <div className={styles.addPost}>
                <div className={styles.textField} onClick={handleOpenModal} >
                    <img src={currentUser.profileImage} alt="profileImg" />
                    <div>What's on your mind?</div>
                </div>
                <Modal isOpen={isModalOpen} onClose={handleCloseModal} />
            </div>
            <div className={styles.posts}>
                {currentUser.posts.map((post, index) => (

                    <PostCard key={index} postData={post} username={currentUser.username} profileImage={currentUser.profileImage} />
                ))}
            </div>

        </>
    )
}

export default Profile
