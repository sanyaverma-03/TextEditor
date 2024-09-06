import styles from "./index.module.css";

const Button1 = ({ title, onClick,type="button" }) => {
  return (
    <button type={type} className={styles.btn} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button1;
