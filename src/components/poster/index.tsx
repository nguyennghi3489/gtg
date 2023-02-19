import { Button } from "antd";
import styles from "./poster.module.css";

export const Poster = () => (
    <div className={styles.container}>
        <img src="/home-poster.png" />
        <div className={styles.content}>
            <h2 className={styles.text}>
                Facilitating Seamless and Effortless Banking Services Across
                Borders.
            </h2>
            <Button ghost>VIEW MORE</Button>
        </div>
    </div>
);
