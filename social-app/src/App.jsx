import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/signup/Signup';
import SignIn from './pages/signIn/SignIn';
import Home from "./pages/home/Home";
import { useSelector, useDispatch } from 'react-redux';
import ErrorComponent from "./components/error/ErrorComponent";
import { usersData } from "./userData";
import { setAllUser } from "./store/userSlice";
import { addPost } from "./store/postsSlice";

const allUsersPosts = [];
usersData.map((user, index) => {
  user.posts.map((post, index) => {
    allUsersPosts.push(post)
  });
});


function App() {
  const dispatch = useDispatch(); // store all users
  dispatch(setAllUser(usersData));
dispatch(addPost(allUsersPosts))
  const currentUser = useSelector((state => { //extract current user
    return state.user
  }))


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
