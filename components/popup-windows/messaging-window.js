'use client';

import { useState } from 'react';
import styles from './messaging-window.module.css';

import CloseWindowIcon from '@/public/icons/close_window_icon.svg';
import MessagingIcon from '@/public/icons/messaging_icon.svg';
import ExpandIcon from '@/public/icons/expand_icon.svg';
import CollapseIcon from '@/public/icons/collapse_icon.svg';
import MaximizeWindowIcon from '@/public/icons/window_maximize_icon.svg';
import MinimizeWindowIcon from '@/public/icons/window_minimize_icon.svg';

export default function MessagingWindow() {
    //States
    const [showMessagingWindow, setShowMessagingWindow] = useState(false);
    const [contactListExpanded, setContactListExpanded] = useState(false);
    const [windowMaximized, setWindowMaximized] = useState(false);

    return(
        <>
            <div className={`
                ${styles.body}
                ${showMessagingWindow ? styles.visible : ''}
                ${windowMaximized ? styles['window-maximized'] : ''}
            `}>
                <div className={styles['title-banner']}>
                    <h2>Messages</h2>
                    <ul className={styles['window-option-btns-list']}>
                        {
                            windowMaximized ? 
                                <button 
                                    className={styles['window-size-toggle-btn']}
                                    onClick={() => setWindowMaximized(false)}
                                >
                                    <MinimizeWindowIcon 
                                        className={styles['window-size-toggle-btn-icon']} 
                                    />
                                </button>
                            :
                                <button 
                                    className={styles['window-size-toggle-btn']}
                                    onClick={() => setWindowMaximized(true)}
                                >
                                    <MaximizeWindowIcon 
                                        className={styles['window-size-toggle-btn-icon']} 
                                    />
                                </button>
                        }
                        <button 
                            className={styles['close-window-btn']}
                            onClick={() => setShowMessagingWindow(false)}
                        >
                            <CloseWindowIcon 
                                className={styles['close-window-btn-icon']} 
                            />
                        </button>
                    </ul>
                </div>
                <main>
                    <section className={`
                        ${styles['contact-list-section']}
                        ${contactListExpanded ? styles.expanded : ''}
                        ${windowMaximized ? styles['window-maximized'] : ''}
                    `}>
                        <ul className={styles['contact-list']}>
                            <li>
                                <header className={styles['contact-section-header']}>
                                    <div className={styles['contact-section-header-title-section']}>
                                        {
                                            !windowMaximized &&
                                                (contactListExpanded ? 
                                                    <button 
                                                        className={`
                                                            ${styles['expansion-toggle-btn']}
                                                            ${contactListExpanded ? styles.expanded : ''}
                                                        `}
                                                        onClick={() => setContactListExpanded(false)}
                                                    >
                                                        <CollapseIcon 
                                                            className={
                                                                styles['expansion-toggle-btn-icon']
                                                            }
                                                        />
                                                    </button>
                                                :
                                                    <button 
                                                        className={styles['expansion-toggle-btn']}
                                                        onClick={() => setContactListExpanded(true)}
                                                    >
                                                        <ExpandIcon 
                                                            className={
                                                                styles['expansion-toggle-btn-icon']
                                                            }
                                                        />
                                                    </button>)     
                                        }
                                        <h3 className={
                                            windowMaximized ?
                                            styles.visible 
                                            :
                                            contactListExpanded ? 
                                                styles.visible 
                                                : 
                                                ''
                                        }>
                                            Contacts
                                        </h3>
                                    </div>
                                    <form className={`
                                        ${styles['search-box-form']}
                                        ${windowMaximized ?
                                            styles.visible 
                                            :
                                            contactListExpanded ? 
                                                styles.visible 
                                                : 
                                                ''
                                        }
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
                                    ${windowMaximized ?
                                        styles.expanded 
                                        :
                                        contactListExpanded ? 
                                            styles.expanded 
                                            : 
                                            ''
                                    }
                                `}>
                                    <div className={styles.pfp}>
                                        CK
                                    </div>
                                    <p className={
                                        windowMaximized ?
                                            styles.visible 
                                            :
                                            contactListExpanded ? 
                                                styles.visible 
                                                : 
                                                ''
                                    }>
                                        Cristin Khor
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className={`
                                    ${styles['contact-banner']}
                                    ${windowMaximized ?
                                        styles.expanded 
                                        :
                                        contactListExpanded ? 
                                            styles.expanded 
                                            : 
                                            ''
                                    }
                                `}>
                                    <div className={styles.pfp}>
                                        HH
                                    </div>
                                    <p className={
                                        windowMaximized ?
                                            styles.visible 
                                        :
                                            contactListExpanded ? 
                                                styles.visible 
                                            : 
                                                ''
                                    }>
                                        Huey Huynh
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </section>
                    <section className={`
                        ${styles['messaging-section']}
                        ${windowMaximized ? styles['window-maximized'] : ''}
                    `}>
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