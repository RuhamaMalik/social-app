import React, { useState } from 'react';
import './Modal.css';
import profileImg from '../../assets/images/profile.jpg';
import galleryIcon from '../../assets/images/gallery.png';
import happyEmojiIcon from '../../assets/images/happyEmojiIcon.png';
import userTag from '../../assets/images/userTag.png';
import gifIcon from '../../assets/images/gifIcon.png';
import location from '../../assets/images/location.png';

const Modal = ({ isOpen, onClose, onShake }) => {

    const [selectedOption, setSelectedOption] = useState('Public');
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setDropdownVisible(false);
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
                                {selectedOption} &#x25BC;
                                {dropdownVisible && (
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
                    {/* <textarea rows="4" placeholder="What's on your mind? &#128540;"></textarea> */}
                    <textarea rows="4" placeholder="What's on your mind? &#128578;"></textarea>
                </div>
                <div className="modalIcons">
                    <img src={galleryIcon} alt="" />
                    <img src={happyEmojiIcon} alt="" />
                    <img src={location} alt="" />
                    <img src={userTag} alt="" />
                    <img src={gifIcon} alt="" />
                </div>
               
                    <button type="submit">Create</button>


            </div>
        </div>
    );
};

export default Modal;
