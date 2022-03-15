
import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./MainContainer.module.css";
const MainContainer = (props) => {
    return(
        <div>
            <div className={styles.main_menu}>
                <Link className={styles.item_ment} to="/">Home</Link>
                <Link className={styles.item_ment} to="/teacher">Teacher List</Link>
                <Link className={styles.item_ment} to="/about">About us</Link>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    )
}

export default MainContainer;