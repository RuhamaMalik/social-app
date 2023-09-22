import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAllUser, setUser } from '../../store/userSlice';
import './Modal.css';
import galleryIcon from '../../assets/images/gallery.png';
import happyEmojiIcon from '../../assets/images/happyEmojiIcon.png';
import userTag from '../../assets/images/userTag.png';
import gifIcon from '../../assets/images/gifIcon.png';
import location from '../../assets/images/location.png';
import defaultImg from '../../assets/images/defaultImg.png';

const Modal = ({ isOpen, onClose, dataToEdit }) => {
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
    const [pid, setPId] = useState(Math.random().toString(36).substring(2))
    const [timestamp, setTimestamp] = useState("");
    const [comments, setComments] = useState("");
    const [likes, setLikes] = useState("");
    const [userId, setuserId] = useState(currentUser.userId)
    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {  // Edit data Fetch
        if (dataToEdit) {
            setDescription(dataToEdit.description || '');
            setImageUrl(dataToEdit.imageUrl || null);
            setStatus(dataToEdit.status || 'Public');
            setPId(dataToEdit.id || pid);
            setTimestamp(dataToEdit.timestamp);
            setComments(dataToEdit.comments);
            setLikes(dataToEdit.likes);

        }
    }, [dataToEdit]);

    const handleImageSelect = (event) => {
        const file = event.target.files[0];
        if (file) {
            const image = URL.createObjectURL(file);
            setImageUrl(image);
            console.log('Image URL:', imageUrl);  // correct
        }
    };

    const toggleDropdown = () => { // Drop Down// status
        setIsVisible(!isVisible);
    };

    const dropDownOption = (option) => {
        setStatus(option);
        setIsVisible(false);
    };


    useEffect(() => {// TIMEsTAMP
        function formatTimestampToDayMonth(currentDate) {
            const date = new Date(currentDate);
            const options = { day: 'numeric', month: 'short', };
            return new Intl.DateTimeFormat('en-US', options).format(date);
        }
        const currentDate = Date.now();
        const formattedDate = formatTimestampToDayMonth(currentDate);
        setTimestamp(formattedDate);

    }, [])

    // post
    const updatePost = (Post) => {
        if (dataToEdit) {
            const prePost = currentUser.posts.find((post) => post.id === dataToEdit.id);
            const oldPosts = currentUser.posts.filter((post) => post.id !== dataToEdit.id);
            const updatedCurrentUser = {
                ...currentUser,
                posts: [...oldPosts, Post],
            };

            dispatch(setUser(updatedCurrentUser));
            const remainingUsers = allUsers.filter((user) => user.userId !== currentUser.userId);
            const updatedUsers = [...remainingUsers, updatedCurrentUser];
            dispatch(setAllUser(updatedUsers))
        } else {
            const updatedCurrentUser = {
                ...currentUser,
                posts: [...currentUser.posts, Post],
            };
            dispatch(setUser(updatedCurrentUser));

            const remainingUsers = allUsers.filter((user) => user.userId !== currentUser.userId);
            const updatedUsers = [...remainingUsers, updatedCurrentUser];
            dispatch(setAllUser(updatedUsers))
        }



    };

    const handleSubmit = () => { //  collect form data
        const post = {
            userId,
            id: pid,
            imageUrl: imageUrl || defaultImg,
            description,
            likes,
            comments,
            status,
            timestamp,
        }
        updatePost(post)
        setPId(''); setDescription(''); setStatus('Public'); setImageUrl(null); setTimestamp(null)
        onClose();
    }






    return (
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
                                        <div onClick={() => dropDownOption('Public')}>Public</div>
                                        <div onClick={() => dropDownOption('Private')}>Private</div>
                                        <div onClick={() => dropDownOption('Friends')}>Friends</div>
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
                <button type="submit" onClick={handleSubmit}>{dataToEdit ? 'Update' : 'Create'}</button>

            </div>
        </div>
    );
};

export default Modal;
