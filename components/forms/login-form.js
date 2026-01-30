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

    const FormAction = async(formData) => {
        const res = await fetch('/api/auth/login', {
            method: "POST",
            body: formData
        });

        const data = await res.json();

        console.log('Data: ', data);

        if(data.error) {
            console.log(data.error);
            return;
        };

        router.push('/dashboard');
    }
    return(
        <form className={styles['login-form']} action={FormAction}>
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