'use client';

import { useState } from 'react';
import styles from './messaging-window.module.css';

import CloseWindowIcon from '@/public/icons/close_window_icon.svg';
import MessagingIcon from '@/public/icons/messaging_icon.svg';
import ExpandIcon from '@/public/icons/expand_icon.svg';
import MinimizeIcon from '@/public/icons/minimize_icon.svg';

export default function MessagingWindow() {
    //States
    const [showMessagingWindow, setShowMessagingWindow] = useState(false);
    const [showExpandedList, setShowExpandedList] = useState(false);

    return(
        <>
            <div className={`
                ${styles.body}
                ${showMessagingWindow ? styles.visible : ''}
            `}>
                <div className={styles['title-banner']}>
                    <h2>Messages</h2>
                    <CloseWindowIcon 
                        className={styles['close-window-icon']} 
                        onClick={() => setShowMessagingWindow(false)}
                    />
                </div>
                <main>
                    <section className={`
                        ${styles['contact-list-section']}
                        ${showExpandedList ? styles.expanded : ''}
                    `}>
                        <ul className={styles['contact-list']}>
                            <li>
                                <header className={styles['contact-section-header']}>
                                    <div className={styles['contact-section-header-title-section']}>
                                        <button className={`
                                            ${styles['expansion-toggle-btn']}
                                            ${showExpandedList ? styles.visible : ''}
                                        `}>
                                            <ExpandIcon 
                                                className={`
                                                    ${styles['expansion-toggle-btn-icon']}
                                                    ${showExpandedList ? '' : styles.visible}
                                                `}
                                                onClick={() => setShowExpandedList(true)}
                                            />
                                            <MinimizeIcon 
                                                className={`
                                                    ${styles['expansion-toggle-btn-icon']}
                                                    ${showExpandedList ? styles.visible : ''}
                                                `}
                                                onClick={() => setShowExpandedList(false)}
                                            />
                                        </button>
                                        <h3 className={
                                            showExpandedList ? styles.visible : ''
                                        }>
                                            Contacts
                                        </h3>
                                    </div>
                                    <form className={`
                                        ${styles['search-box-form']}
                                        ${showExpandedList ? styles.visible : ''}
                                    `}>
                                        <input 
                                            name='contact-search-input' 
                                            type='text'
                                            required
                                        />
                                    </form>
                                </header>
                            </li>
                            <li>
                                <div className={`
                                    ${styles['contact-banner']}
                                    ${showExpandedList ? styles.expanded : ''}
                                `}>
                                    <div className={styles.pfp}>
                                        CK
                                    </div>
                                    <p className={`
                                        ${showExpandedList ? styles.visible : ''}
                                    `}>
                                        Cristin Khor
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className={`
                                    ${styles['contact-banner']}
                                    ${showExpandedList ? styles.expanded : ''}
                                `}>
                                    <div className={styles.pfp}>
                                        HH
                                    </div>
                                    <p className={`
                                        ${showExpandedList ? styles.visible : ''}
                                    `}>
                                        Huey Huynh
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <section className={styles['messaging-section']}>
                        <h2>Messaging Section</h2>
                    </section>
                </main>
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