import { portfolioFiles } from "@/lib/portfolio";
import FadeOnScroll from "./components/FadeOnScroll/FadeOnScroll.component";
import LoadingWithContent from "./components/Loading/LoadingWithContent/LoadingWithContent.component";
import styles from "./page.module.scss";

export default function Home() {
    return (
        <>
            <div className={styles.leftBanner}>ABOUT ME</div>
            <div className={styles.rightBanner}>DREAMS X REALITY</div>

            <LoadingWithContent>
                <div className={styles.page}>
                    <FadeOnScroll>
                        <h1>DREAMS.</h1>
                    </FadeOnScroll>
                    <div className={styles["content-wrapper"]}>
                        <div className="content-section">
                            <div className={styles.gridGallery}>
                                {portfolioFiles.map((src, index) => (
                                    <FadeOnScroll key={`Gallery ${index}`}>
                                        <div className={styles.imageContainer}>
                                            <img
                                                src={src}
                                                alt={`Gallery ${index + 1}`}
                                                className={styles.image}
                                                loading="lazy"
                                            />
                                        </div>
                                    </FadeOnScroll>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </LoadingWithContent>
        </>
    );
}
