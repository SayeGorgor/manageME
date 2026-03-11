import styles from './invite-member-popup.module.css';
import CloseWindowIcon from '@/public/icons/close_window_icon.svg';

export default function InviteMemberPopUp(props) {
    const { showInvitePopup, setShowInvitePopup } = props;

    return(
        <>
            <div 
                className={`
                    ${styles.body}
                    ${showInvitePopup ? styles.visible : ''}
                `}
                
            >
                <CloseWindowIcon 
                    className={styles['close-window-icon']} 
                    onClick={() => setShowInvitePopup(false)}
                />
                <h2>Invite Member</h2>
                <form className={styles['notes-form']}>
                    <label className={styles['title-label']}>
                        New Member Email:
                        <input 
                            name='email' 
                            type='email'
                            required
                        />
                    </label>
                    <label className={styles['details-label']}>
                        Extra Details:
                        <textarea 
                            name='message'
                            rows={6}
                        />
                    </label>
                    <button type='submit'>Create Note</button>
                </form>
            </div>
            <div 
                className={`
                    ${styles.overlay}
                    ${showInvitePopup ? styles.visible : ''}
                `}
                onClick={() => setShowInvitePopup(false)}
            ></div>
        </>
    )
}