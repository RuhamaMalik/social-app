import './SignIn.css';
import {Link} from 'react-router-dom'
const SignIn = () => {
    return (
        <>

            <form action="">
                <h1>Sign in</h1>
                <input type="text" placeholder='Enter your email' />
                <input type="password" placeholder='Enter your password' />
                <button>Sign in</button>
                <a href="#">Forgot your password?</a>
                <div className="gray-bar"></div>
                <p>Don’t have a free account yet?</p>
               <Link to='/signup' > <button>Create your account</button> </Link>
            </form>

        </>
    )
}

export default SignIn
