import { Button } from "antd";
import styles from "./article-updates.module.css";

export const ArticleVsUpdates = () => (
    <div className={styles.container}>
        <h3 className={styles.headerTitle}>Articles & Updates</h3>
        <div className={styles.articleList}>
            <div className={styles.article}>
                <img className={styles.image} src="/article1.png" />
                <p className={styles.date}>13-Dec,2022</p>
                <h4 className={styles.title}>
                    Ultricies mi vestibulum varius habitant arcu blandit tempus.
                </h4>
            </div>
            <div className={styles.article}>
                <img className={styles.image} src="/article2.png" />
                <p className={styles.date}>13-Dec,2022</p>
                <h4 className={styles.title}>
                    Lorem ipsum dolor sit amet consectetur.
                </h4>
            </div>
            <div className={styles.article}>
                <img className={styles.image} src="/article3.png" />
                <p className={styles.date}>13-Dec,2022</p>
                <h4 className={styles.title}>
                    Viverra ut metus sit mattis ultrices felis aliquam.
                </h4>
            </div>
        </div>
        <Button ghost>VIEW MORE</Button>
    </div>
);
