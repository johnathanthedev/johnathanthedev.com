'use client';

import { useEffect, useState } from 'react';
import styles from './LoadingWithContent.module.scss';
import { LoadingWithContentProps } from './LoadingWithContent.types';

export default function LoadingWithContent({ children }: LoadingWithContentProps) {
    const [isLoading, setIsLoading] = useState(true);
    const [animateFill, setAnimateFill] = useState(false);
    const [slideUpLoading, setSlideUpLoading] = useState(false);
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        const onLoad = () => {
            document.body.style.overflow = 'hidden';

            setAnimateFill(true);

            const lettersCount = "DREAM. BUILD. REPEAT.".length;
            const perLetterDelay = 100;
            const transitionDuration = 300;
            const totalFillDuration = lettersCount * perLetterDelay + transitionDuration;

            setTimeout(() => {
                setSlideUpLoading(true);
            }, totalFillDuration);

            setTimeout(() => {
                document.body.style.overflow = '';
                window.scrollTo(0, 0);
                setIsLoading(false);
                setShowContent(true);
            }, totalFillDuration + 500);
        };

        if (document.readyState === 'complete') {
            onLoad();
        } else {
            window.addEventListener('load', onLoad);
            return () => window.removeEventListener('load', onLoad);
        }
    }, []);

    return (
        <>
            {isLoading && (
                <div
                    className={`${styles.LoadingScreen} ${animateFill ? styles.animateFill : ''} ${slideUpLoading ? styles.slideUp : ''}`}
                >
                    <div className={styles.loadingContent}>
                        <div className={styles.textWrapper}>
                            <img src="/splash.svg" alt="Splash" className={styles.splashImage} />
                        </div>

                        <div className={styles.videoWrapper}>
                            <video
                                src="/loader.webm"
                                autoPlay
                                muted
                                loop
                                playsInline
                                className={styles.loadingVideo}
                            />
                        </div>
                    </div>
                </div>
            )}

            <main
                className={`${styles.pageContent} ${showContent ? styles.slideIn : ''}`}
                style={{ visibility: showContent ? 'visible' : 'hidden' }}
            >
                {children}
            </main>
        </>
    );
}
