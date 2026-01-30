'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './header.module.css';

import IconPopup from './icon-popup';

import DefaultPfp from '@/public/icons/default_pfp.svg';
import ChoiceArrow from '@/public/icons/choice_arrow_icon.svg';

export default function Header() {
    const [showIconPopupWindow, setShowIconPopupWindow] = useState(false);
    
    //Functions
    const handleIconClick = (e) => {
        e.stopPropagation();
        setShowIconPopupWindow(true);
    }

    return(
        <header className={styles.body}>
            <h2>manageME</h2>
            <ul className={styles['nav-options-list']}> 
                <li>
                    <Link href='/signup' className={styles['nav-option']}>Enroll Company</Link>
                </li>
                <li>
                    <div className={`
                        ${styles['nav-option']}
                        ${styles['organization-dropdown']}
                    `}>
                        <div className={styles['organization-img']}>A</div>
                        Amazon
                        <ChoiceArrow className={styles['choice-arrow']} />
                    </div>
                </li>
                <li>
                    <div 
                        className={styles['pfp-wrapper']}
                        onClick={handleIconClick}
                    >
                        <DefaultPfp className={styles.pfp} />
                    </div>
                    <IconPopup 
                        showIconPopupWindow={showIconPopupWindow} 
                        setShowIconPopupWindow={setShowIconPopupWindow}
                    />
                </li>
            </ul>
        </header>
    );
}