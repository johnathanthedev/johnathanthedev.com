'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './LoadingScreen.module.scss';

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);
    const [animate, setAnimate] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        const onLoad = () => {
            setAnimate(true); // Start fill animation after page fully loaded
        };

        if (document.readyState === 'complete') {
            onLoad();
        } else {
            window.addEventListener('load', onLoad);
            return () => window.removeEventListener('load', onLoad);
        }
    }, []);

    useEffect(() => {
        if (!animate) return;

        // Calculate total animation duration based on letters count and per-letter delay + transition duration
        const lettersCount = "DREAM. BUILD. REPEAT.".length;
        const perLetterDelay = 100; // ms delay between letters (matching CSS)
        const transitionDuration = 300; // ms duration of each letter's fill
        const totalDuration = lettersCount * perLetterDelay + transitionDuration;

        // Hide loading screen after animation completes
        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, totalDuration + 500); // add extra 500ms for fadeout if any

        return () => clearTimeout(timeout);
    }, [animate]);

    if (!isLoading) return null;

    const letters = "DREAM. BUILD. REPEAT.".split("");

    return (
        <div className={styles.LoadingScreen}>
            <h1
                ref={containerRef}
                className={`${styles.fillText} ${animate ? styles.animate : ''}`}
            >
                {letters.map((char, index) => (
                    <span
                        key={index}
                        className={styles.letter}
                        data-letter={char}
                        style={{ ['--delay' as any]: `${index * 0.1}s` }}
                    >
                        {char}
                    </span>
                ))}
            </h1>
        </div>
    );
}
