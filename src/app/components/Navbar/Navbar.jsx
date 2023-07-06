"use client"
import styles from './navbar.module.css'
import { AiFillDashboard, AiFillSetting, AiOutlineDown } from 'react-icons/ai';
import { BsFillCartCheckFill } from "react-icons/bs";
import { CiUser } from "react-icons/ci";
import { RiFileList2Line } from "react-icons/ri";


const Navbar = (probs) => {
    let {active} = probs
    console.log(active)
  return <nav className={styles.navContainer}>
        <h4 className={styles.logo}>
            PRODUCT ADMIN
        </h4>
        <div className={styles.navLinkContainer}>
            <div className={styles.navLink}>
                <AiFillDashboard className={styles.navIcons} />
                <p className={styles.navItem}>Dashboard</p>
            </div>
            {/* <div className={styles.navLink}>
                <RiFileList2Line className={styles.navIcons}/>
                <div className={styles.navItem}>Reports<AiOutlineDown className={styles.dropDown}/>
                <div className={styles.dropDownLists } >
                    <p className={styles.dropDownItem}>Daily Report </p>
                    <p className={styles.dropDownItem}>Weekly Report</p>
                    <p className={styles.dropDownItem}>Yearly Report</p>
                </div>
                </div>
            </div> */}
            <div className={styles.navLink}>
                <BsFillCartCheckFill className={styles.navIcons}/>
                <p className={styles.navItem}>Product</p>
            </div>
            <div className={styles.navLink}>
                <CiUser className={styles.navIcons} style={{fontWeight:600}}/>
                <p className={styles.navItem}>Accounts</p>
            </div>
            {/* <div className={styles.navLink}>
                <AiFillSetting className={styles.navIcons}/>
                <p className={styles.navItem}>Settings</p>
            </div> */}
        </div>

    

    </nav>
  
}

export default Navbar;