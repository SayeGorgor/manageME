import styles from './home-cards.module.css';

export default function NoteCard(props) {
    const { createdAt, content, title, orgID, remindAt } = props;
    
    const parsedCreatedAt = new Date(createdAt);
    const parsedRemindAt = remindAt ? new Date(remindAt) : null;
    
    return(
        <div className={`
            ${styles.card}
            ${styles['task-card']}
        `}>
            <h3>{title}</h3>
            <div className={styles['task-info']}>
                <div className={styles['task-date']}>
                    <h3>Created</h3>
                    <h3>{`${parsedCreatedAt.getMonth() + 1}/${parsedCreatedAt.getDate()}`}</h3>
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