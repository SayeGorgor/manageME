'use client';

import { useState } from "react";
import styles from "./page.module.css";
import LoginForm from "@/components/forms/login-form";
import FaceBookLogo from '@/public/icons/facebook_logo.svg';
import GoogleLogo from '@/public/icons/google_logo.svg';

export default function Landing() {
  const [loggingIn, setLogginIn] = useState(true);

  return (
      <>
        {/* <Header /> */}
        <main className={styles.main}>

          <section className={`
            ${styles.hero}
            ${loggingIn ? styles['logging-in'] : styles['signing-up']}
          `}>
            <div className={styles['hero-text']}>
              <h1>manageME</h1>
              <h3>The one stop tool for all your management needs</h3>
            </div>
            <div className={styles['switch-options']}>
              <p>Don't have an account? Click the button below to create one!</p>
              <button 
                className={styles['switch-options-btn']}
                onClick={() => setLogginIn(!loggingIn)}
              >
                Sign Up
              </button>
            </div>
          </section>

          <section className={`
            ${styles['auth-section']}
            ${loggingIn ? styles['logging-in'] : styles['signing-up']}
          `}>
            <h2>Log In</h2>
            <LoginForm />
            {/* <a href='#' className={styles['sign-in-link']}>
                Dont have an account? Sign Up!
            </a> */}
            <div className={styles.divider}>
                <hr />
                <p>Or</p>
                <hr />
            </div>
            <ul className={styles['oauth-options-list']}>
              <li>
                <div className={styles['oauth-option']}>
                  <GoogleLogo className={styles.logo} />
                  <p>Sign In With Google</p>
                </div>
              </li>
              <li>
                <div className={styles['oauth-option']}>
                  <FaceBookLogo className={styles.logo} />
                  <p>Sign In With Facebook</p>
                </div>
              </li>
            </ul>
          </section>
        </main>
      </>
  );
}
