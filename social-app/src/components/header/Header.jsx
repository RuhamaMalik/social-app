import styles from './Header.module.css';
import message from '../../assets/Svg/message.svg';
import bell from '../../assets/Svg/bell.svg';

const Header = () => {
    return (
        <>
            <div className={styles.headerContainer}>
                <h2>Social <span>World</span></h2>
                <div className={styles.icons}>
                    <img src={bell} alt="bell icon" />
                    <img src={message} alt="message icon" />
                </div>
            </div>
        </>
    )
}

export default Header
