import styles from './ErrorComponent.module.css';
import { Link } from 'react-router-dom';

const ErrorComponent = ({ errorMsg }) => {
  return (
    <div className={styles.errorContainer}>
      <div className={styles.error}>
        <h2>{errorMsg}</h2>
        <p>
          It seems like you took a wrong turn. No worries, we're here to help you get back on track.
          To access this awesome feature, please log in or sign up. We promise it's worth it!
        </p>
        <Link to='/'><button>Login</button></Link>
      </div>
    </div>
  );
};

export default ErrorComponent;
