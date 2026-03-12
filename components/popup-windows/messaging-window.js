'use client';

import { useState } from 'react';
import styles from './messaging-window.module.css';

import CloseWindowIcon from '@/public/icons/close_window_icon.svg';
import MessagingIcon from '@/public/icons/messaging_icon.svg';

export default function MessagingWindow() {
    //States
    const [showMessagingWindow, setShowMessagingWindow] = useState(true);

    return(
        <>
            <div className={`
                ${styles.body}
                ${showMessagingWindow ? styles.visible : ''}
            `}>
                <CloseWindowIcon 
                    className={styles['close-window-icon']} 
                    onClick={() => setShowMessagingWindow(false)}
                />
                <h2>Window Visible</h2>
            </div>
            
            <div 
                className={`
                    ${styles['closed-window']}
                    ${!showMessagingWindow ? styles.visible : ''}
                `}
                onClick={() => setShowMessagingWindow(true)}
            >
                <MessagingIcon className={styles['messaging-icon']} />
            </div>
        </>
    );
}