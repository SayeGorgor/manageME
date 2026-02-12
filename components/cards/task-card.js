import styles from './home-cards.module.css';

export default function TaskCard({ content, deadline, title }) {
    const parsedDeadline = new Date(deadline);
    return(
        <div className={`
            ${styles.card}
            ${styles['task-card']}
        `}>
            <h3>{title}</h3>
            <div className={styles['task-info']}>
                <div className={styles['task-date']}>
                    <h3>Due:</h3>
                    <h3>{`${parsedDeadline.getMonth() + 1}/${parsedDeadline.getDate()}`}</h3>
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