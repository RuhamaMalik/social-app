import styles from './Home.module.css';
import { useEffect, useRef, useState } from 'react';
import { useSearchParams, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../../store/userSlice';
import Header from '../../components/header/Header';
import PostCard from '../../components/cards/postcard/PostCard';
import Modal from '../../components/modal/Modal';
import Profile from '../profile/Profile';
import PhotoGallery from './../photos/PhotoGallery';

const Home = () => {
  const dispatch = useDispatch();
  const [allPosts, setAllPosts] = useState([]);

  const currentUser = useSelector((state) => { // get current user
    return state.user.user
  });
  const allUsersData = useSelector((state) => { // get all user
    return state.user.allUsers
  })

  useEffect(() => {
    const newAllPosts = [];

    allUsersData.forEach((user) => {
      user.posts.forEach((post) => {
        newAllPosts.push({
          post: post,
          profileImage: user.profileImage,
          username: user.username,
        });
      });
    });
    setAllPosts(newAllPosts);
  }, [allUsersData, currentUser]);

  // set Side Tabs content
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "0";
  const changeTab = (tab) => {
    searchParams.set("tab", tab);
    setSearchParams(searchParams);
    toggleTabs()
  };

  // HomeBar
  const [showTabs, setShowTabs] = useState(false);
  const tabsRef = useRef(null);

  const toggleTabs = () => {
    setShowTabs(!showTabs);

    if (tabsRef.current) {
      tabsRef.current.classList.add('show');
    }
  };

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  // logout

  const logout = () => {
    window.location = '/';
    setTimeout(() => {
      dispatch(clearUser());
    }, "1500")

  }
  return (
    <>

      <Header />
      <div className={styles.homeBar}><span onClick={toggleTabs}>&#x2630;</span></div>

      <div className={styles.layout}>

        {/* Side Navigation Bar / child 1*/}
        <div ref={tabsRef} className={`${styles.tabs} ${showTabs ? styles.show : ''}`}>
          <NavLink className={`${styles.link} ${currentTab === "0" ? styles.activeLink : ""}`} onClick={() => { changeTab("0") }} > Home </NavLink>
          <NavLink className={`${styles.link} ${currentTab === "1" ? styles.activeLink : ""}`} onClick={() => changeTab("1")}> Friends</NavLink>
          <NavLink className={`${styles.link} ${currentTab === "2" ? styles.activeLink : ""}`} onClick={() => changeTab("2")}> Photos</NavLink>
          <NavLink className={`${styles.link} ${currentTab === "3" ? styles.activeLink : ""}`} onClick={() => changeTab("3")}> Videos</NavLink>
          <NavLink className={`${styles.link} ${currentTab === "4" ? styles.activeLink : ""}`} onClick={() => changeTab("4")}> Marketplace</NavLink>
          <NavLink className={`${styles.link} ${currentTab === "5" ? styles.activeLink : ""}`} onClick={() => changeTab("5")}> Feeds</NavLink>
          <NavLink className={`${styles.link} ${currentTab === "6" ? styles.activeLink : ""}`} onClick={() => changeTab("6")}> Profile</NavLink>
          <NavLink className={`${styles.link}`} onClick={logout}> Logout</NavLink>
        </div>


        <div className={styles.content}> {/* Content / child 2*/}


          {
            currentTab === "0" ? (

              <>
                <div className={styles.addPost}>
                  <div className={styles.textField} onClick={handleOpenModal} >
                    <img src={currentUser.profileImage} alt="profileImg" />
                    <div>What's on your mind?</div>
                  </div>

                  <Modal isOpen={isModalOpen} onClose={handleCloseModal} />

                </div>
                {allPosts.map((post, index) => (
                  <PostCard key={index} postData={post.post} username={post.username} profileImage={post.profileImage} />

                ))}

              </>
            ) : currentTab === "1" ? (
              <><h1>Friends</h1></>
            ) : currentTab === "2" ? (
              <>
                {/* {  navigate('/photos')} */}
                <PhotoGallery />
              </>
            ) : currentTab === "3" ? (
              <><h1>Videos</h1></>
            ) : currentTab === "4" ? (
              <><h1>Marketplace</h1></>
            ) : currentTab === "5" ? (
              <><h1>Feeds</h1></>
            ) : currentTab === "6" ? (
              <Profile />
            ) : (
              <></>
            )}

        </div>
        <div className={styles.friends}> {/* Side Navigation Bar Friends / child 3*/}
          <h4>Friends</h4>
        </div>
      </div>
    </>

  )
}

export default Home
