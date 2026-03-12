'use client';

import { useEffect, useRef } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import styles from './add-note-window.module.css';
import CloseWindowIcon from '@/public/icons/close_window_icon.svg';
import { createNoteAction } from '../forms/actions';

export default function AddNoteWindow(props) {
    const { showAddNoteWindow, setShowAddNoteWindow, user } = props;
    const addNotesRef = useRef(null);
    const queryClient = useQueryClient();

    //Functions
    const createNoteMutation = useMutation({
        mutationFn: createNoteAction,
        onSuccess: () => {
            console.log('Create Notes Success!');
            queryClient.invalidateQueries({ queryKey: ['notes'] });
            closeWindow();
        }
    });

    const closeWindow = () => {
        const form = document.querySelector('#notes-form');

        setShowAddNoteWindow(false);
        form.reset();
    }

    const createNote = (e) => {
        e.preventDefault();

        createNoteMutation.mutate({
            userID: user?.id, 
            formData: new FormData(e.currentTarget)
        });
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
                    onClick={closeWindow}
                />
                <h2>Create New Note</h2>
                <form 
                    id='notes-form'
                    className={styles['notes-form']} 
                    onSubmit={createNote}
                >
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
                            name='details'
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
                onClick={closeWindow}
            ></div>
        </>
    )
}