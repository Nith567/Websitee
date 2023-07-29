'use client'
import React,{useContext} from 'react'
import { ThemeContext } from '@/app/context/ThemeContextProvider';
import styles from './darkmode.module.css'
function Darkmode() {
    const { toggle,mode } = useContext(ThemeContext);
    return (
      <div className={styles.container} onClick={toggle}>
        <div className={styles.icon}>🌙</div>
        <div className={styles.icon}>🔆</div>
        <div
          className={styles.ball}
          style={mode === "light" ? { left: "2px" } : { right: "2px" }}
        />
      </div>
    );
}

export default Darkmode