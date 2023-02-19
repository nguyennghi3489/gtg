import { Button } from "antd";
import styles from "./expert-solution.module.css";

export const ExpertSolution = () => (
    <div className={styles.container}>
        <img src="/expert-solution.png" />
        <div className={styles.contentBox}>
            <h3 className={styles.title}>
                Transform Your Business with Our Expert Solutions and Services!
            </h3>
            <p className={styles.content}>
                Welcome to our company, where innovation meets expertise.
            </p>
            <Button ghost>ABOUT US</Button>
        </div>
    </div>
);
