import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/signup/Signup';
import SignIn from './pages/signIn/SignIn';
import Home from "./pages/home/Home";

function App() {
  return (
    <>    <BrowserRouter >
      <Routes>

        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </BrowserRouter>


    </>

  );
}

export default App;
