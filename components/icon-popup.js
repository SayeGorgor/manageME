'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import styles from './icon-popup.module.css';

export default function IconPopup({ showIconPopupWindow, setShowIconPopupWindow }) {
    const router =  useRouter();
    const popupRef = useRef(null);

    //Functions
    const logout = () => {
        router.push('/');
    }

    //Effects
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if(popupRef.current && !popupRef.current.contains(e.target)) {
                setShowIconPopupWindow(false);
            }
        }

        const handleScroll = () => {
            if(popupRef.current) {
                setShowIconPopupWindow(false);
            }
        }

        if(showIconPopupWindow) {
            window.addEventListener('click', handleOutsideClick);
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            window.removeEventListener('click', handleOutsideClick);
            window.addEventListener('scroll', handleScroll);
        }
    }, [showIconPopupWindow]);
    
    return(
        <div 
            className={`
                ${styles.body}
                ${showIconPopupWindow ? styles.visible : ''}
            `}
            ref={popupRef}
        >
            <ul className={styles['options-list']}>
                <li>
                    <div className={styles.option}>Manage Account</div>
                </li>
                <li>
                    <div 
                        className={styles.option}
                        onClick={logout}
                    >Log Out</div>
                </li>
            </ul>
        </div>
    );
}