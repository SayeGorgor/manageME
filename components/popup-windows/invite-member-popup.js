import { useState } from 'react';
import styles from './invite-member-popup.module.css';

import { useOrg } from '@/lib/providers/current-org-provider';
import { createInvite } from '../forms/actions';

import CloseWindowIcon from '@/public/icons/close_window_icon.svg';

export default function InviteMemberPopUp(props) {
    const { showInvitePopup, setShowInvitePopup } = props;
    const { currentOrg } = useOrg();

    //States
    const [message, setMessage] = useState('');
    const [hasError, setHasError] = useState(false);

    //Functions
    const sendInvite = async(e) => {
        e.preventDefault();
        setMessage('');
        setHasError(false);

        const email = document.getElementById('email').value;
        const emailConfirm = document.getElementById('email-confirm').value;

        if(email !== emailConfirm) {
            setHasError(true);
            setMessage('Emails do not match');
            return;
        }

        const { data: invite, error } = await createInvite({
            orgID: currentOrg.org.id, 
            formData: new FormData(e.currentTarget)
        });
        if(error) {
            setHasError(true);
            setMessage(error.message ?? 'Could Not Send Invite');
            return;
        }

        setMessage('Invite Sent!');
        console.log('Invite: ', invite);
    }

    const closeWindow = () => {
        const form = document.querySelector('#invite-form');
        setShowInvitePopup(false);
        form.reset();
        setHasError(false);
        setMessage('');
    }

    return(
        <>
            <div className={`
                ${styles.body}
                ${showInvitePopup ? styles.visible : ''}
            `}>

                <CloseWindowIcon 
                    className={styles['close-window-icon']} 
                    onClick={closeWindow}
                />

                <h2>Invite Member</h2>

                {
                    message && 
                    <p className={`
                        ${styles.message}
                        ${hasError ? styles.error : ''}
                    `}>
                        {message}
                    </p>
                }

                <form 
                    id='invite-form'
                    className={styles['invite-form']} 
                    onSubmit={sendInvite}
                >

                    <label className={styles['email-label']}>
                        New Member Email:
                        <input 
                            id='email'
                            name='email' 
                            type='email'
                            required
                        />
                    </label>

                    <label className={styles['confirm-email-label']}>
                        Confirm Email:
                        <input 
                            id='email-confirm'
                            name='email-confirm' 
                            type='email'
                            required
                        />
                    </label>

                    <button type='submit'>Send Invitation</button>
                </form>
            </div>

            <div 
                className={`
                    ${styles.overlay}
                    ${showInvitePopup ? styles.visible : ''}
                `}
                onClick={closeWindow}
            ></div>
        </>
    )
}