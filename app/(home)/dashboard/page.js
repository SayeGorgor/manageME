'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

import TaskCard from '@/components/cards/task-card';
import EventCard from '@/components/cards/event-card';
import NoteCard from '@/components/cards/note-card';
import AddNoteWindow from '@/components/popup-windows/add-note-window';

import Spinner from '@/public/icons/spinner_animation.svg';

import { useOrg } from '@/lib/providers/current-org-provider';
import { 
    fetchEvents, 
    fetchUserTasks, 
    fetchNotes,
    fetchCurrentUser
} from '@/lib/client-actions';
import InviteMemberPopUp from '@/components/popup-windows/invite-member-popup';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
    const { currentOrg, setCurrentOrg } = useOrg();

    //Cached Queries
    const { data: user } = useQuery({
        queryKey: ['user'],
        queryFn: fetchCurrentUser,
        staleTime: 1000 * 60 * 5
    });
    
    const { data: notes } = useQuery({
        queryKey: ['notes', user?.id],
        queryFn: () => fetchNotes(user.id),
        enabled: !!user?.id,
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        keepPreviousData: true,
    });

    //States
    const [tasks, setTasks] = useState([]);
    const [events, setEvents] = useState([]);
    const [loadingDashCards, setLoadingDashCards] = useState(true);
    const [showAddNoteWindow, setShowAddNoteWindow] = useState(false);
    const [showInvitePopup, setShowInvitePopup] = useState(false);
    const [hasError, setHasError] = useState(false);

    //Use Effect
    //Populate Home Page Cards on Load and Org Switch
    useEffect(() => {
        (async() => {
            setLoadingDashCards(true);
            
            try {
                const fetchedTasks = await fetchUserTasks(currentOrg.org.id);
                setTasks(fetchedTasks);
                const fetchedEvents = await fetchEvents(currentOrg.org.id);
                setEvents(fetchedEvents);
                console.log('Events: ', events);
                setLoadingDashCards(false);
                console.log('Tasks: ', tasks);
            } catch(error) {
                setLoadingDashCards(false);
                setHasError(true);
                console.log('Error: ', error);
            }
        })()
    }, [currentOrg]);

    return(
        <main className={styles.page}>
            <section className={styles['tasks-section']}>
                <h2>Tasks</h2>

                <ul className={styles['card-list']}>
                    {loadingDashCards ? 
                        <Spinner className={styles.spinner} />
                        :
                        tasks.length === 0 ? 
                            <div className={styles['no-tasks-text-wrapper']}>
                                <p className={
                                    styles['no-tasks-text']
                                }>
                                    No Current Open Tasks
                                </p>
                            </div>
                            :
                            tasks?.slice(0, 3).map(task => (
                                <li key={task.id}>
                                    <TaskCard 
                                        content={task.content} 
                                        deadline={task.deadline}
                                        title={task.title}
                                    />
                                </li>
                            ))
                    }
                </ul>

                <a href='#'>View All</a>
            </section>

            <section className={styles['tasks-section']}>
                <h2>Upcoming Events</h2>

                <ul className={styles['card-list']}>
                    {loadingDashCards ? 
                        <Spinner className={styles.spinner} />
                        :
                        events.length === 0 ? 
                            <div className={styles['no-tasks-text-wrapper']}>
                                <p className={
                                    styles['no-tasks-text']
                                }>
                                    No Current Events
                                </p>
                            </div>
                            :
                            events?.slice(0, 3).map(event => (
                                <li key={event.id}>
                                    <EventCard 
                                        content={event.content} 
                                        date={event.date}
                                        name={event.name}
                                        startTime={event['start_time']}
                                        endTime={event['end_time']}
                                    />
                                </li>
                            ))
                    }
                </ul>

                <a href='#'>View All</a>
            </section>

            <section className={styles['tasks-section']}>
                <AddNoteWindow 
                    showAddNoteWindow={showAddNoteWindow}
                    setShowAddNoteWindow={setShowAddNoteWindow}
                    user={user}
                />

                <div className={styles['notes-header-container']}>
                    <h2>Notes</h2>
                    <button 
                        className={styles['add-note-btn']}
                        onClick={() => setShowAddNoteWindow(true)}
                    >
                        +
                    </button>
                </div>

                <ul className={styles['card-list']}>
                    {loadingDashCards ? 
                        <Spinner className={styles.spinner} />
                        :
                        notes?.length === 0 ? 
                            <div className={styles['no-tasks-text-wrapper']}>
                                <p className={
                                    styles['no-tasks-text']
                                }>
                                    No Current Notes
                                </p>
                            </div>
                            :
                            notes?.slice(0, 3).map(note => (
                                <li key={note.id}>
                                    <NoteCard 
                                        content={note.content} 
                                        title={note.title}
                                        orgID={note['org_id']}
                                        createdAt={note['created_at']}
                                        remindAt={note.deadline}
                                    />
                                </li>
                            ))
                    }
                </ul>
                
                <a href='#'>View All</a>
            </section>

            <div className={styles['bottom-buttons-container']}>
                <InviteMemberPopUp 
                    showInvitePopup={showInvitePopup}
                    setShowInvitePopup={setShowInvitePopup}
                />

                <Link 
                    href='/members' 
                    className={'view-team-members-btn'}
                >
                    View Team Members
                </Link>

                <button 
                    className={'invite-member-btn'}
                    onClick={() => setShowInvitePopup(true)}
                >
                    Invite Member
                </button>
            </div>
        </main>
    );
}