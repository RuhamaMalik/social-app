// import './App.css';
import Signup from './pages/signup/Signup';
import SignIn from './pages/signIn/SignIn';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>    <BrowserRouter >
      <Routes>

        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<Signup />} />

      </Routes>
    </BrowserRouter>


    </>

  );
}

export default App;
