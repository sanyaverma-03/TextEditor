import styles from "./index.module.css";



const Navbar = ({heading}) =>{
    return(
        <div className={styles.navBox}>
            <p className={styles.text1}>{heading}</p>
            <p className={styles.text1}>ABC Blogs</p>
            
        </div>
    )
}

export default Navbar;