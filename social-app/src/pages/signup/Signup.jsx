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
          <h1>Create your Social World Account</h1>
          <p>Personal Information</p>

          <div className={styles.inputs}>
            <p>First Name</p>
            <input type="text" />
          </div>

          <div className={styles.inputs}>
            <p>First Name</p>
            <input type="text" />
          </div>

          <div className={styles.inputs}>
            <p>First Name</p>
            <input type="text" />
          </div>

          <div className={styles.inputs}>
            <p>First Name</p>
            <input type="text" />
          </div>

          <div className={styles.inputs}>
            <p>First Name</p>
            <input type="text" />
          </div>

          <div className={styles.inputs}>
            <p>First Name</p>
            <input type="text" />
          </div>

          <div className={styles.inputs}>
            <p>First Name</p>
            <input type="text" />
          </div>

          <div className={styles.inputs}>
            <p>First Name</p>
            <input type="text" />
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
