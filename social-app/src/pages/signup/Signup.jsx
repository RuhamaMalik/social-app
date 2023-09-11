import styles from './Signup.module.css';
import signUp from '../../assets/images/signUp.svg'
import { Button } from '@mui/material'
const Signup = () => {
  return (
    <>
      <div className={styles.main}>

        <div className={styles.greenbox}>
          <h1>The best way to communicate with your <span>friends</span></h1>
          <img src={signUp} alt="" />
        </div>

        <div className={styles.form}>

          <div className={styles.head}>
            <h1>Create your Social World Account</h1>
            <p>Personal Information</p>
          </div>

          <div className={styles.inputs}>

            <div className={styles.input}>
              <p>First Name</p>
              <input type="text" placeholder='Your first name'/>

              <p>Title</p>
              <input type="text" placeholder='Your title'/>

              <p>Your Mobile Number</p>
              <input type="number" placeholder='+92'/>

              <p>Set Password</p>
              <input type="password" placeholder='Password'/>
            </div>

            <div className={styles.input}>
              <p>Last Name</p>
              <input type="text" placeholder='Your last name'/>

              <p>Username</p>
              <input type="text" placeholder='Enter username'/>

              <p>Email Address</p>
              <input type="email" placeholder='Enter your email'/>

              <p>Confirm Password</p>
              <input type="password" placeholder='Confirm Password'/>
            </div>
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
