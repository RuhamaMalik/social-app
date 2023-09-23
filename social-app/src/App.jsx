import { BrowserRouter, Routes, Route } from "react-router-dom";
import { usersData } from "./userData";
import { setAllUser } from "./store/userSlice";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Signup from './pages/signup/Signup';
import SignIn from './pages/signIn/SignIn';
import Home from "./pages/home/Home";
import ErrorComponent from "./components/error/ErrorComponent";
import PhotoGallery from "./pages/photos/PhotoGallery";

function App() {

  const dispatch = useDispatch(); // store all users
  const currentUser = useSelector((state => { //extract current user
    return state.user
  }))

  useEffect(() => {
    dispatch(setAllUser(usersData));
  }, [])

  return (
    <>    <BrowserRouter >
      <Routes>

        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<Signup />} />
        {currentUser.isAuthenticated &&
          <>
            <Route path='/home' element={<Home />} />
            <Route path="/photos" element={<PhotoGallery />} />

            {/*<Route path="photos" element={<PhotoGallery />}>
                <Route path="allphotos" element={<AllPhotos />} />
                <Route path="albums" element={<Albums />}>
                  <Route path="coverphotos" element={<CoverPhotos />} />
                  <Route path="postimages" element={<PostImages />} />
                  <Route path="profileimages" element={<ProfileImages />} />
                </Route>
              </Route> */}

          </>
        }
        <Route path='*' element={<ErrorComponent errorMsg="Oops, you're not authenticated! 😅" />
        } />

      </Routes>
    </BrowserRouter>


    </>

  );
}

export default App;
