import React from 'react';
import styles from './styles.module.css';


const ShowRemove = ({props}) => {
  return (
    <div className={styles.wrapper_remove}>
      <div className={styles.show_remove}>{props}</div>
    </div>

  )
}

export default ShowRemove;