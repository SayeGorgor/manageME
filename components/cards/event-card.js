import styles from './home-cards.module.css';

export default function EventCard(props) {
    const { name, date, startTime, endTime, content } = props;

    const parsedDate = new Date(date);

    return(
        <div className={`
            ${styles.card}
            ${styles['event-card']}
        `}>
            <h3>{name}</h3>
            <div className={styles['task-info']}>
                <div className={styles['task-date']}>
                    <h3>Date:</h3>
                    <h3>{`${parsedDate.getMonth() + 1}/${parsedDate.getDate()}`}</h3>
                </div>
                <div className={styles['task-options']}>
                    <p>View Details</p>
                </div>
            </div>
        </div>
    );
}