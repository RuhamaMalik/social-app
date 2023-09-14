import styles from './Home.module.css';
import { useSearchParams } from "react-router-dom";
import Header from '../../components/header/Header';
import { NavLink } from 'react-router-dom';
import PostCard from '../../components/cards/postcard/PostCard';

const Home = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get("tab") || "0";
  const changeTab = (tab) => {
    searchParams.set("tab", tab);
    setSearchParams(searchParams);
  };

  return (
    <>
      <Header />
      <div className={styles.layout}>

        <div className={styles.tabs}> {/* Side Navigation Bar / child 1*/}
          <NavLink className={`${styles.link} ${currentTab === "0" ? styles.activeLink : ""}`} onClick={() => changeTab("0")} > Home </NavLink>
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
               <h1>Home</h1>
               <PostCard />
               <PostCard />
               <PostCard />
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
