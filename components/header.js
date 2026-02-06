'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useOrg } from '@/lib/providers/current-org-provider';
import styles from './header.module.css';

import { fetchCurrentUser, fetchOrgs } from '@/lib/client-actions';

import IconPopup from './icon-popup';

import DefaultPfp from '@/public/icons/default_pfp.svg';
import ChoiceArrow from '@/public/icons/choice_arrow_icon.svg';

export default function Header() {
    const orgDropdownRef = useRef(null);

    const { currentOrg, setCurrentOrg } = useOrg();

    const { data: user } = useQuery({
        queryKey: ['user'],
        queryFn: fetchCurrentUser,
        staleTime: 1000 * 60 * 5
    });

    const { data: memberships } = useQuery({
        queryKey: ['memberships', user?.id],
        queryFn: () => fetchOrgs(user.id),
        enabled: !!user?.id,
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
    });

    //States
    const [showIconPopupWindow, setShowIconPopupWindow] = useState(false);
    const [showOrgDropdownMenu, setShowOrgDropdownMenu] = useState(false);
    
    //Functions
    const handleIconClick = (e) => {
        e.stopPropagation();
        setShowIconPopupWindow(true);
    }

    const handleOrgDropdownClick = (e) => {
        e.stopPropagation();
        setShowOrgDropdownMenu(true);
    }

    const selectOrg = (e, org) => {
        e.stopPropagation();
        setCurrentOrg(org);
        setShowOrgDropdownMenu(false);
    }

    //Effects
    //Close dropdown menu on outside click
    useEffect(() => {
        const handleOutsideOrgDropdownClick = (e) => {
            if(orgDropdownRef.current && !orgDropdownRef.current.contains(e.target)) {
                setShowOrgDropdownMenu(false);
            }
        }

        const handleScroll = () => {
            if(orgDropdownRef.current) {
                setShowOrgDropdownMenu(false);
            }
        }

        if(showOrgDropdownMenu) {
            window.addEventListener('click', handleOutsideOrgDropdownClick);
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            window.removeEventListener('click', handleOutsideOrgDropdownClick);
            window.addEventListener('scroll', handleScroll);
        }
    }, [showOrgDropdownMenu]);

    //Load orgs on launch
    useEffect(() => {
        (async() => {
            if(!user?.id) return;

            try {
                console.log('User ID: ', user.id);
                // const orgs = await fetchOrgs(user.id);
                console.log('Orgs: ', memberships);
            } catch(error) {
                console.log('Error: ', error);
            }
        })()
    }, [user?.id]);

    return(
        <header className={styles.body}>
            <h2>manageME</h2>
            <ul className={styles['nav-options-list']}> 
                <li>
                    <Link href='/signup' className={styles['nav-option']}>Enroll Company</Link>
                </li>

                <li>
                    <div 
                        className={`
                            ${styles['nav-option']}
                            ${styles['organization-dropdown']}
                        `}
                        onClick={handleOrgDropdownClick}
                    >
                        <div className={styles['organization-img']}>A</div>
                        {currentOrg.org.name}
                        <ChoiceArrow className={styles['choice-arrow']} />

                        <ul 
                            className={`
                                ${styles['org-list']}
                                ${showOrgDropdownMenu ? styles.visible : ''}
                            `}
                            ref={orgDropdownRef}
                        >
                            {memberships?.map((membership, index) => (
                                <li key={membership.org.id}>
                                    <div 
                                        className={`
                                            ${styles['org-option-card']}
                                            ${index === 0 ? styles['top-li'] : ''}
                                        `}
                                        onClick={(e) => selectOrg(e, membership)}
                                    >
                                        <div className={styles['organization-img']}>
                                            {membership.org.name.charAt(0).toUpperCase()}
                                        </div>
                                        {membership.org.name}
                                    </div>
                                </li>
                            ))}

                            <li>
                                <div className={styles['add-org-btn']}>
                                    <p className={styles['plus-sign']}>+</p>
                                    <p>Add New Org</p>
                                </div>
                            </li>

                        </ul>
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