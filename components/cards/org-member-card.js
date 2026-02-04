import styles from './org-member-card.module.css';

export default function OrgMemberCard({ name }) {
    return(
        <div className={styles.body}>
            <div className={styles['pfp-container']}>
                <div className={styles.pfp}>
                    {name.charAt(0).toUpperCase()}
                </div>
            </div>
            <h4>{name}</h4>
            <button>Send Message</button>
        </div>
    )
}