import styles from './Home.module.css';
import { useSearchParams } from "react-router-dom";
import Header from '../../components/header/Header';
import { NavLink } from 'react-router-dom';
import PostCard from '../../components/cards/postcard/PostCard';
import profileImg from '../../assets/images/profile.jpg';
// import MenuIcon from '@mui/icons-material/Menu';

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
      {/* <div className={styles.homeBar}>{MenuIcon}</div> */}
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
                <div className={styles.addPost} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  <div className={styles.textField} >
                    <img src={profileImg} alt="profileImg" />
                    <div>What's on your mind?</div>
                  </div>
                  {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Launch demo modal
                </button> */}
                  {/* <div className={styles.icons}></div> */}
                </div>

                {/* Modal start */}
                <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                  <div class={`modal-dialog d-flex align-items-center ${styles.postModal}`}>
                    <div class={`modal-content ${styles.h}`}>
                      <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        ...
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Understood</button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Modal End */}

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
