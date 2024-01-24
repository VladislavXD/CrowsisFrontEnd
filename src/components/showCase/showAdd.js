import React from 'react';
import styles from './styles.module.css';


function ShowAdd({props}){
    return (
      <div className={styles.wrapper_show}>
        <div className={styles.show_add}>{props}</div>
      </div>
    );
  };


export default ShowAdd;