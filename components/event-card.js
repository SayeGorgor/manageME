import styles from './home-cards.module.css';

export default function EventCard() {
    return(
        <div className={`
            ${styles.card}
            ${styles['event-card']}
        `}>
            <h3>UI/UX Enhancements Conference and Other Shit of that Nature</h3>
            <div className={styles['task-info']}>
                <div className={styles['task-date']}>
                    <h3>1/15</h3>
                </div>
                <div className={styles['task-options']}>
                    <p>View Details</p>
                </div>
            </div>
        </div>
    );
}