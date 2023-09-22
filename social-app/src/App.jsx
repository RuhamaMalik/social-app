import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/signup/Signup';
import SignIn from './pages/signIn/SignIn';
import Home from "./pages/home/Home";
import { useSelector, useDispatch } from 'react-redux';
import ErrorComponent from "./components/error/ErrorComponent";
import { usersData } from "./userData";
import { setAllUser } from "./store/userSlice";
import { addPost } from "./store/postsSlice";
import { useEffect, useState } from "react";


function App() {

  const dispatch = useDispatch(); // store all users
  const currentUser = useSelector((state => { //extract current user
    return state.user
  }))

  const [posts, setPosts] = useState(null);

  useEffect(() => {
    // const allUsersPosts = [];
    // usersData.map((user, index) => {
    //   user.posts.map((post, index) => {
    //     allUsersPosts.push(post)
    //   });
    // });
    // setPosts(allUsersPosts)
    dispatch(setAllUser(usersData));
    // dispatch(addPost(posts))

  }, [])



  return (
    <>    <BrowserRouter >
      <Routes>

        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<Signup />} />
        {currentUser.isAuthenticated &&
          <>
            <Route path='/home' element={<Home />} />
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
