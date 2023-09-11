import { useState } from 'react';
import styles from './SignIn.module.css';
import {Link} from 'react-router-dom'
const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
<div className={styles.main}>
            <form action="">
                <h1 className={styles.heading}>Sign in</h1>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email' />
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your password' />
                <button>Sign in</button>
                <a href="#">Forgot your password?</a>
                <div className="gray-bar"></div>
                <p>Don’t have a free account yet?</p>
               <Link to='/signup' > <button>Create your account</button> </Link>
            </form>

            </div>
        </>
    )
}

export default SignIn
