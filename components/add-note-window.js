'use client';

import { useEffect, useRef } from 'react';
import styles from './add-note-window.module.css';
import CloseWindowIcon from '@/public/icons/close_window_icon.svg';

export default function AddNoteWindow(props) {
    const { showAddNoteWindow, setShowAddNoteWindow } = props;
    const addNotesRef = useRef(null);

    //Functions
    const closeWindow = () => {
        setShowAddNoteWindow(false);
    }

    //Use Effects
    //Disable Scrolling For Add Notes Menu
    useEffect(() => {
        const handleScroll = () => {
            if(addNotesRef.current) {
                setShowAddNoteWindow(false);
            }
        }

        if(showAddNoteWindow) window.addEventListener('scroll', handleScroll);
        

        return () => window.addEventListener('scroll', handleScroll);
        
    }, [showAddNoteWindow]);

    return(
        <>
            <div 
                className={`
                    ${styles.body}
                    ${showAddNoteWindow ? styles.visible : ''}
                `}
                ref={addNotesRef}
            >
                <CloseWindowIcon 
                    className={styles['close-window-icon']} 
                    onClick={() => setShowAddNoteWindow(false)}
                />
                <h2>Create New Note</h2>
                <form className={styles['notes-form']}>
                    <label className={styles['title-label']}>
                        Note Title:
                        <input 
                            name='title' 
                            type='text'
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
                    ${showAddNoteWindow ? styles.visible : ''}
                `}
                onClick={() => setShowAddNoteWindow(false)}
            ></div>
        </>
    )
}