import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Modal.css';
// import profileImg from '../../assets/images/profile.jpg';
import galleryIcon from '../../assets/images/gallery.png';
import happyEmojiIcon from '../../assets/images/happyEmojiIcon.png';
import userTag from '../../assets/images/userTag.png';
import gifIcon from '../../assets/images/gifIcon.png';
import location from '../../assets/images/location.png';
import defaultImg from '../../assets/images/defaultImg.png';
import { setAllUser, setUser } from '../../store/userSlice';

// const Modal = ({ isOpen, onClose, onShake, onFormSubmit, dataToEdit }) => {
const Modal = ({ isOpen, onClose}) => {
const dispatch = useDispatch();
    const currentUser = useSelector((state) => {
        return state.user.user
    });
    const allUsers = useSelector((state) => {
        return state.user.allUsers
    });
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState(null);
    const [status, setStatus] = useState('Public');
    const [isVisible, setIsVisible] = useState(false);
    const [id, setId] = useState(0)
    const [timestamp, setTimestamp] = useState(null);
    const [comments, setComments] = useState("");
    const [likes, setLikes] = useState("");

    // useEffect(() => {  // Edit data Fetch
    //     if (dataToEdit) {
    //         setDescription(dataToEdit.description || '');
    //         setImage(dataToEdit.image || null);
    //         setStatus(dataToEdit.status || 'Public');
    //         setUid(dataToEdit.postId || uid)
    //     }
    // }, [dataToEdit]);


    const handleImageSelect = (event) => {
        const file = event.target.files[0];
        if (file) {
            const image = URL.createObjectURL(file);
            setImageUrl(image);
            // console.log('Image URL:', imageUrl);  // correct
        }
    };

    const toggleDropdown = () => { // Drop Down// status
        setIsVisible(!isVisible);
    };

    const handleOptionClick = (option) => {
        setStatus(option);
        setIsVisible(false);
    };





    // if (dataToEdit) {
    //     const editPost = {
    //         description,
    //         image: image || dataToEdit.image, 
    //         status,
    //         postId: uid
    //     };
    //     // console.log('updated image: ' + image);

    //     // console.log('check' + JSON.stringify(editPost, 2, null));
    //     onFormSubmit(editPost);
    //     setDescription('');
    //     // console.log('Image before reset:', image); 
    //     setImage(null);
    //     // console.log(image);

    //     setStatus('Public');
    //     onClose();
    // } else {
    // const newPost = {
    //     description,
    //     image: image || defaultImg,
    //     status,
    //     postId: uid
    // };
    // setUid(() => uid + 1)
    // // onFormSubmit(newPost);
    // setDescription('');
    // setImage(null);
    // setStatus('Public');
    // onClose()
    // };
    function formatTimestampToDayMonth(timestamp) {  // TIMEsTAMP
        const date = new Date(timestamp);
        const options = { day: 'numeric', month: 'short', };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    }
    const timestamps = Date.now();
    const formattedDate = formatTimestampToDayMonth(timestamps);
    const addNewPost = (newPost) => {
        const updatedCurrentUser = {
          ...currentUser,
          posts: [...currentUser.posts, newPost],
        };
      
        const userIndex = allUsers.findIndex((user) => user.userId === currentUser.userId);
        const updatedAllUsers = [...allUsers];
        updatedAllUsers[userIndex] = updatedCurrentUser;
      console.log(updatedAllUsers);
        dispatch(setUser(updatedCurrentUser));
        dispatch(setAllUser(updatedAllUsers));
      };
      
    const handleSubmit = () => { //  collect form data
        setTimestamp(formattedDate);
        const post = {
            userId: currentUser.userId,
            id: Math.random().toString(36).substring(2),
            imageUrl: imageUrl || defaultImg,
            description,
            likes,
            comments,
            status,
            timestamp,
        }
        addNewPost(post)
        setId(''); setDescription(''); setStatus('Public'); setImageUrl(null);
         onClose();
    }






    return (
        // <div className={`modal ${isOpen ? 'open' : ''}`} onClick={onShake}>
        <div className={`addPostmodal ${isOpen ? 'open' : ''}`} >

            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>

                <div className='modalHeader'>
                    <h2>Add <span className='text-success'>Post</span></h2>
                    <div className='info'>
                        <img src={currentUser.profileImage} alt="profileImg" />
                        <div className='userName'>
                            <b>{currentUser.username} </b>
                            <span className="dropdown" onClick={toggleDropdown}>
                                {status} &#x25BC;
                                {isVisible && (
                                    <div className="dropdown-content">
                                        <div onClick={() => handleOptionClick('Public')}>Public</div>
                                        <div onClick={() => handleOptionClick('Private')}>Private</div>
                                        <div onClick={() => handleOptionClick('Friends')}>Friends</div>
                                    </div>
                                )}
                            </span>
                        </div>
                    </div>
                </div>

                <div className=" modalBody">
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows="4" placeholder="What's on your mind? &#128578;"></textarea>
                </div>
                <div className="modalIcons">
                    <label htmlFor="fileInput"><img src={galleryIcon} alt="galleryIcon" /></label>
                    <input id="fileInput" type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImageSelect} />
                    <img src={happyEmojiIcon} alt="HappyEmoji Icon" />
                    <img src={location} alt="Location Icon" />
                    <img src={userTag} alt="usrTag component" />
                    <img src={gifIcon} alt="gif Icon" />
                </div>
                <button type="submit" onClick={handleSubmit}> Create</button>

                {/* <button type="submit" onClick={handleSubmit}>{dataToEdit? 'Update': 'Create'}</button> */}

            </div>
        </div>
    );
};

export default Modal;
