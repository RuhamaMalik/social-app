import PostCard from '../../components/cards/postcard/PostCard';
import styles from './Profile.module.css';
import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';
import Modal from '../../components/modal/Modal';


const Profile = () => {
    
    const currentUser = useSelector(state => {
        return state.user.user;
    })
    // console.log(currentUser);

    const [posts, setPosts] = useState([]); //postData
    const [isModalOpen, setIsModalOpen] = useState(false);

    const addPost = (newPost) => { //create post
        setPosts([...posts, newPost]);
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const handleModalShake = (e) => {
        if (isModalOpen) {
            document.querySelector('.addPostmodal').classList.add('shake');
            setTimeout(() => {
                document.querySelector('.addPostmodal').classList.remove('shake');
            }, 500);
        }
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

                <div className={styles.center}>
                    <h3> {currentUser.username} </h3>
                    <p>{currentUser.bio}</p>
                </div>

            </div>
            <div className={styles.addPost}>
                <div className={styles.textField} onClick={handleOpenModal} >
                    <img src={currentUser.profileImage} alt="profileImg" />
                    <div>What's on your mind?</div>
                </div>
                <Modal onFormSubmit={addPost} isOpen={isModalOpen} onClose={handleCloseModal} onShake={handleModalShake} />
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
