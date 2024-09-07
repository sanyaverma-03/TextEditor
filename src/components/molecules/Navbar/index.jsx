import styles from "./index.module.css";
import chatPng from "../../../assets/chat.png";

const Navbar = ({ heading }) => {
  return (
    <div className={styles.navBox}>
      <p className={styles.text1}>{heading}</p>
      <img src={chatPng} alt="Chat Icon" className={styles.chatImage} />
    </div>
  );
};

export default Navbar;
