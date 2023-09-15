import React, { useState } from 'react';
import './Modal.css';
import profileImg from '../../assets/images/profile.jpg';
import galleryIcon from '../../assets/images/gallery.png';
import happyEmojiIcon from '../../assets/images/happyEmojiIcon.png';
import userTag from '../../assets/images/userTag.png';
import gifIcon from '../../assets/images/gifIcon.png';
import location from '../../assets/images/location.png';
import defaultImg from '../../assets/images/defaultImg.png';

const Modal = ({ isOpen, onClose, onShake, onFormSubmit }) => {
    // Form Controll/Collect Data
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    const handleImageSelect = (event) => {
        const file = event.target.files[0];

        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
        }
    };

    const handleSubmit = (e) => {
        const newPost = {
            description,
            image: image || defaultImg,
            status,
        };
        //   console.log(newPost);
        onFormSubmit(newPost);
        setDescription('');
        setImage(null);
        setStatus('Public');
    };
    // console.log(formData);
    
    const [status, setStatus] = useState('Public');// Drop Down
    const [isVisible, setIsVisible] = useState(false);

    const toggleDropdown = () => {
        setIsVisible(!isVisible);
    };

    const handleOptionClick = (option) => {
        setStatus(option);
        setIsVisible(false);
    };

    return (
        // <div className={`modal ${isOpen ? 'open' : ''}`} onClick={onShake}>
        <div className={`addPostmodal ${isOpen ? 'open' : ''}`} >

            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>

                <div className='modalHeader'>
                    <h2>Add <span className='text-success'>Post</span></h2>
                    <div className='info'>
                        <img src={profileImg} alt="profileImg" />
                        <div className='userName'>
                            <b> Ruhama Malik </b>
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

                <button type="submit" onClick={handleSubmit}>Create</button>

            </div>
        </div>
    );
};

export default Modal;
