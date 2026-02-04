'use client';

import { useFormState } from 'react-dom';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './login-form.module.css';
import { useMutation } from '@tanstack/react-query';
import { loginAction } from './actions';

export default function LoginForm() {
    const router = useRouter();

    //States
    const [errorMessage, setErrorMessage] = useState('');

    //Functions
    const loginMutation = useMutation({
        mutationFn: loginAction,
        onSuccess: () => {
            router.push('/dashboard');
        },
        onError: (error) => setErrorMessage(error.message)
    });

    const login = (e) => {
        e.preventDefault();
        setErrorMessage('');
        loginMutation.mutate(new FormData(e.currentTarget));
    }
    
    return(
        <form className={styles['login-form']} onSubmit={login}>
            {loginMutation.isPending ? 
                <p className={styles['loading-message']}>Loading...</p>
                :
                (
                    errorMessage && 
                    <p className={styles['error-message']}>{errorMessage}</p>
                )
            }
            <input 
                name='email' 
                type='email' 
                placeholder='Email'
                autoComplete='email'
                required
            />
            <div className={styles['password-wrapper']}>
                <input 
                    name='password' 
                    type='password' 
                    placeholder='Password'
                    autoComplete='current-password'
                    required
                />
                <a href='#' className={styles['forgot-password-link']}>
                    Forgot Password
                </a>
            </div>
            <button className={styles['login-btn']} type='submit'>
                Log In
            </button>
        </form>
    );
}