"use client";

import {useEffect} from "react";
import Image from "next/image";
import saveTheDate from "../public/img/savethedate-onryane.jpg";
import styles from "./page.module.css";

export default function SaveTheDate() {
    // Inject Tally Embed Script for seamless address collection
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://tally.so/widgets/embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (<div className={styles.container}>
        {/* Hero: full-viewport background photo with overlaid header + date */}
        <section className={styles.hero}>
            <div className={styles.heroMedia}>
                <Image
                    src={saveTheDate}
                    alt="Ryan and Anneline"
                    className={styles.heroImage}
                    fill
                    priority
                    placeholder="blur"
                    sizes="100vw"
                />
            </div>

            <div className={styles.heroOverlay}>
                <header className={styles.heroHeader}>
                    <p className={styles.subtitle}>SAVE THE DATE</p>
                    <h1 className={styles.names}>Ryan + Anneline</h1>
                </header>

                <div className={styles.heroDetails}>
                    <h2>10.25.2026</h2>
                    <p className={styles.location}>Santa Ana, CA</p>
                </div>

                <div className={styles.scrollCue} aria-hidden="true">
                    <svg viewBox="0 0 48 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <polyline points="1,1 24,6 47,1" stroke="currentColor" strokeWidth="2"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
            </div>
        </section>

        <main className={styles.main}>

            <section className={styles.saveTheDateNotice}>
                <p>
                    We’ve found our perfect coordinates, and we’re not wasting a
                    single frame!
                    <br/><br/>
                    We would love nothing more than to have you in the picture with us.
                    If you’re planning to celebrate by our side, please drop your address below so we can pin you on
                    our map.
                </p>
            </section>

            {/* Embedded Tally Form Section */}
            <section className={styles.guestInfoSection}>
                <div className={styles.guestInfoCard}>
                    <iframe
                        data-tally-src="https://tally.so/r/XxyyE4?transparentBackground=1&dynamicHeight=1"
                        loading="lazy"
                        width="100%"
                        height="680"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                        title="Guest Information Form"
                    ></iframe>
                    <div className={styles.tallyBadgeCover} aria-hidden="true"/>
                </div>
            </section>

            <footer className={styles.footer}>
                <p>
                    You’ve reached the end of the page! We know this is in short notice and so we hope you can make
                    it! <br/>
                    Full wedding experience, registry, and official RSVP portal coming soon.
                </p>
                <p className={styles.copywright}>&copy; 2026 | ane & ryan | two dots on a map</p>
            </footer>
        </main>
    </div>);
}
