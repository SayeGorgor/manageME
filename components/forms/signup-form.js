'use client';

import { useState } from 'react';
import styles from './signup-form.module.css';

export default function SignupForm() {
    const [errorMessage, setErrorMessage] = useState('');
    const signupAction = async(formData) => {
        setErrorMessage('');
        const res = await fetch('/api/auth/signup', {
            method: "POST",
            body: formData
        });

        const data = await res.json();

        console.log('Data: ', data);

        if(data.error) {
            setErrorMessage(data.error);
            return;
        };
    }

    return(
        <form className={styles.body} action={signupAction}>
            {errorMessage && 
            <p className={styles['error-message']}>{errorMessage}</p>}
            <div className={styles['name-inputs']}>
                <input 
                    name='first_name' 
                    type='text' 
                    placeholder='First Name' 
                    autoComplete='given-name'
                    required
                />

                <input 
                    name='last_name' 
                    type='text' 
                    placeholder='Last Name' 
                    autoComplete='family-name'
                    required
                />
            </div>

            <input 
                name='email' 
                type='email' 
                placeholder='Email' 
                autoComplete='email'
                required
            />

            {/* <input 
                name='invite-code' 
                type='text' 
                placeholder='Invite Code' 
                required
            /> */}

            <input 
                name='password' 
                type='password' 
                placeholder='Password' 
                autoComplete='new-password'
                required
            />

            <input 
                name='password_confirm' 
                type='password' 
                placeholder='Confirm Password' 
                autoComplete='off'
                required
            />

            <button type='submit' className={styles['signup-btn']}>Sign Up</button>
        </form>
    );
}