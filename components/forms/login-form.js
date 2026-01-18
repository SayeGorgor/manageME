'use client';

import { useFormState } from 'react-dom';
import { useRouter } from 'next/navigation';
import styles from './login-form.module.css';

export default function LoginForm() {
    const router = useRouter();
    //Functions
    const login = (e) => {
        e.preventDefault();
        router.push('/dashboard');
    }
    return(
        <form className={styles['login-form']} onSubmit={login}>
            <input 
                name='email' 
                type='email' 
                placeholder='Email'
                required
            />
            <div className={styles['password-wrapper']}>
                <input 
                    name='password' 
                    type='password' 
                    placeholder='Password'
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