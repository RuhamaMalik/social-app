import { useState } from 'react';
import styles from './SignIn.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { usersData } from './../../userData';
import { useDispatch } from 'react-redux'
import { setUser } from '../../store/userSlice';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSignIn = (e) => {
        e.preventDefault()
        const foundUser = usersData.find((user) => user.email === email);
        if (foundUser) {
            console.log(foundUser);
            dispatch(setUser(foundUser));
            navigate('/home');
        } else {
            console.log('NO USER FOUND');
        }
    }
    return (
        <>
            <div className={styles.main}>
                <form onSubmit={handleSignIn}>
                    <h1 className={styles.heading}>Sign in</h1>
                    <input required type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email' />
                    <input required type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter your password' />
                    <button type='submit'>Sign in</button>
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
