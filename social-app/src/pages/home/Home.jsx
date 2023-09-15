import styles from './Home.module.css';
import { useSearchParams } from "react-router-dom";
import Header from '../../components/header/Header';
import { NavLink } from 'react-router-dom';
import PostCard from '../../components/cards/postcard/PostCard';
import profileImg from '../../assets/images/profile.jpg';
import { useEffect, useRef, useState } from 'react';
import Modal from '../../components/modal/Modal';

const Home = () => {
  const [posts, setPosts] = useState([]); //postData
  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  console.log(posts);

  const [searchParams, setSearchParams] = useSearchParams();  // set Side Tabs content
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
        </div>


        <div className={styles.content}> {/* Content / child 2*/}


          {
            currentTab === "0" ? (

              <>
                <div className={styles.addPost}>
                  <div className={styles.textField} onClick={handleOpenModal} >
                    <img src={profileImg} alt="profileImg" />
                    <div>What's on your mind?</div>
                  </div>
                  <Modal onFormSubmit={addPost} isOpen={isModalOpen} onClose={handleCloseModal} onShake={handleModalShake} />
                </div>
                {posts.map((post, index) => (
                  <PostCard key={index} postData={post} />
                ))}

                {/* <PostCard />
                <PostCard />
                <PostCard /> */}
              </>
            ) : currentTab === "1" ? (
              <><h1>Friends</h1></>
            ) : currentTab === "2" ? (
              <><h1>Photos</h1></>
            ) : currentTab === "3" ? (
              <><h1>Videos</h1></>
            ) : currentTab === "4" ? (
              <><h1>Marketplace</h1></>
            ) : currentTab === "5" ? (
              <><h1>Feeds</h1></>
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
