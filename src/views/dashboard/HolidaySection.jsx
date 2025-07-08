import React from 'react';
import styles from './HolidaySection.module.css';

const HolidaySection = () => {
  return (
    <section className={styles.holidaySection}>
      <h2 className={styles.title}>You Are On Holiday</h2>
      
      <div className={styles.leaveBoard}>
        <h3>Leave Board</h3>
        <p><strong>Paid</strong></p>
        <p><strong>Taker:</strong> 2</p>
      </div>
      
      <div className={styles.pickSection}>
        <h3>Pick</h3>
        <p><strong>Balance:</strong> 8</p>
        <p><strong>Taker:</strong> 0</p>
      </div>
      
      <div className={styles.cancelSection}>
        <h3>Cancel</h3>
        <button className={styles.applyButton}>Apply Leave</button>
      </div>
    </section>
  );
};

export default HolidaySection;