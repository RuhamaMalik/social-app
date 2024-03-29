import styles from './postcard.module.css';
import shareIcon from '../../../assets/images/shareIcon.png';
import publicIcon from '../../../assets/images/public.png';
import likeIcon from '../../../assets/images/likeIcon.png';
import commentIcon from '../../../assets/images/commentIcon.png';
import { useState } from 'react';
import Modal from './../../modal/Modal';

const PostCard = ({ postData, username, profileImage }) => {
    const { description, timestamp, imageUrl, status, likes, comments, id, userId } = postData;
    const [showMore, setShowMore] = useState(false);
   
    // let description = `A pOwerful earthQuake hit Turkey🇹🇷 and Syria🇸🇾  , killing at least 4000 peOple and 
    // injuring thOusands acrOss both countries. May Allah help and pRotect thOse who aRe effected and 
    // have mercy on everyOne  and grant the dEceased a high plAce in Jannat-ul-FirdOus. 🤲 `

    const toggleShowMore = () => { // show Discription
        setShowMore(!showMore);
    };

    const renderDescription = () => {
        if (description.length <= 196 || showMore) {
            return description + '...';
        } else {
            return description.slice(0, 196) + '...';
        }
    };

    //////////////////// Drop Down
    const [isVisible, setIsVisible] = useState(false);

    const toggleDropdown = () => {
        setIsVisible(!isVisible);
    };
    //////////////////////// Edit
    const [dataToEdit, setDataToEdit] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOptionClick = (postData) => {
        setIsVisible(false);
        setDataToEdit(postData);
        setIsModalOpen(true);

    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Modal dataToEdit={dataToEdit} isOpen={isModalOpen} onClose={handleCloseModal} />

            <div className={styles.cardWrapper}>

                <div className={styles.cardHeader}> {/* Card Header */}
                    <div className={styles.userData}>
                        <img className={styles.profileImg} src={profileImage} alt="profileImg" />

                        <div>
                            <b>{username}</b>
                            <p>{timestamp} . {
                                status === 'Public' ? (
                                    <img src={publicIcon} alt="Public" width="12px" height="11px" />
                                ) : status === 'Private' ? (
                                    <i className="fa-solid fa-lock"></i>
                                ) : status === 'Friends' ? (
                                    <i class="fa-solid fa-user-group"></i>
                                ) : null}
                            </p>
                        </div>

                    </div>
                    <div className={styles.dropdown}>
                        <svg onClick={toggleDropdown} fill="currentColor" viewBox="0 0 24 24" width="1em" height="1em" className={`x1lliihq x1k90msu x2h7rmj x1qfuztq x198g3q0 xlup9mm x1kky2od `}><circle cx="12" cy="12" r="2.5"></circle><circle cx="19.5" cy="12" r="2.5"></circle><circle cx="4.5" cy="12" r="2.5"></circle></svg>
                        {isVisible && (
                            <div className={styles.dropdownContent}>
                                <div onClick={() => handleOptionClick(postData)}>Edit </div>
                            </div>
                        )}
                    </div>
                </div>

                <div className={styles.cardContent}> {/* Card Body/Content */}
                    <div className={styles.descriptiion}>
                        {renderDescription()}
                        {description.length > 196 && (
                            <span onClick={toggleShowMore}> {showMore ? 'See less' : 'See more'} </span>
                        )}
                    </div>
                    <div className={styles.postImg}>
                        <img src={imageUrl} alt="postImg" />
                    </div>
                </div>

                <div className={styles.cardFooter}> {/* Card Footer / Icon session */}
                    {/* <div className={styles.reactions}></div> */}
                    <div className={styles.icons}> <img src={likeIcon} alt="share" /><span>Like</span></div>
                    <div className={styles.icons}> <img src={commentIcon} alt="Comments" /><span>Comments</span></div>
                    <div className={styles.icons}> <img src={shareIcon} alt="share" /><span>Share</span></div>
                </div>

            </div>

        </>
    )
}

export default PostCard
