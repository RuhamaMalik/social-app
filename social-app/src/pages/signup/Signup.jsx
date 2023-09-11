import styles from './Signup.module.css';
import signUp from '../../assets/images/signUp.svg';
import defaultProfImg from '../../assets/images/user.jpg'
import { Button } from '@mui/material';
import { useState } from 'react';

const Signup = () => {

  const [fName, setFname] = useState('');
  const [lName, setLname] = useState('');
  const [pasword, setPasword] = useState('');
  const [cPassword, setCPassword] = useState('');
  const [email, setEmail] = useState('');
  const [contactNum, setContactNum] = useState('');
  const [username, setUsername] = useState('');
  const [title, setTitle] = useState('');



  return (
    <>
      <div className={styles.main}>

        <div className={styles.greenbox}> {/* child 1 */}
          <h1>The best way to communicate with your <span>friends</span></h1>
          <img src={signUp} alt="" />
        </div>

        <div className={styles.form}>   {/* child 2 */}

          <div className={styles.head}>
            <h1>Create your Social World Account</h1>
            <p>Personal Information</p>
          </div>

          <div className={styles.inputs}>
            <div className={styles.input}> {/* col1 */}
              <p>First Name</p>
              <input type="text" value={fName} onChange={(e)=>setFname(e.target.value)} placeholder='Your first name' />

              <p>Title</p>
              <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder='Your title' />

              <p>Your Mobile Number</p>
              <input type="number" value={contactNum} onChange={(e)=>setContactNum(e.target.value)} placeholder='+92' />

              <p>Set Password</p>
              <input type="password" onChange={(e)=>setPasword(e.target.value)} value={pasword} placeholder='Password' />

            </div>

            <div className={styles.input}>  {/* col2 */}
              <p>Last Name</p>
              <input type="text" value={lName} onChange={(e)=>setLname(e.target.value)} placeholder='Your last name' />

              <p>Username</p>
              <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='Enter username' />

              <p>Email Address</p>
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your email' />

              <p>Confirm Password</p>
              <input type="password" value={cPassword} onChange={(e)=>setCPassword(e.target.value)} placeholder='Confirm Password' />
            </div>
          </div>

          <div className={styles.profile}>
            <p>Upload Profile Image</p>
            <div className={styles.profImg}>
              <img src={defaultProfImg} alt="" />
            </div>
            <button className={styles.btn1}>Upload</button>
            <button className={styles.btn2}>Create Your Account</button>

          </div>

        </div>


      </div>

      {/* <h1>SignUp</h1>
    <Button variant="contained" color="secondary">
        Login
    </Button> */}
    </>
  )
}

export default Signup
