import styles from './home-cards.module.css';

export default function TaskCard() {
    return(
        <div className={`
            ${styles.card}
            ${styles['task-card']}
        `}>
            <h3>Complete ByteDance Report</h3>
            <div className={styles['task-info']}>
                <div className={styles['task-date']}>
                    <h3>Due:</h3>
                    <h3>1/15</h3>
                </div>
                <div className={styles['task-options']}>
                    <p>View Details</p>
                    <button className={styles['mark-complete-btn']}>
                        Mark as Complete
                    </button>
                </div>
            </div>
        </div>
    );
}