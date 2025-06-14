import { portfolioFiles } from "@/lib/portfolio";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FadeOnScroll from "./components/FadeOnScroll/FadeOnScroll.component";
import LoadingWithContent from "./components/Loading/LoadingWithContent/LoadingWithContent.component";
import styles from "./page.module.scss";

export default function Home() {
    return (
        <LoadingWithContent>
            <div className={styles.page}>
                <h1>DREAMS.</h1>
                <div className="content-wrapper">
                    <div className="content-section">
                        <div className={styles.gridGallery}>
                            {portfolioFiles.map((src, index) => (
                                <FadeOnScroll key={`Gallery ${index}`}>
                                    <div
                                        key={index}
                                        className={styles.imageContainer}
                                    >
                                        <img
                                            src={src}
                                            alt={`Gallery ${index + 1}`}
                                            className={styles.image}
                                            loading="lazy"
                                        />
                                        <div className={styles.overlay}>
                                            <FontAwesomeIcon icon={faSearch} className={styles.magnifyingIcon} />
                                        </div>
                                    </div>
                                </FadeOnScroll>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </LoadingWithContent>
    );
}
