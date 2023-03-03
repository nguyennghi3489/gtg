import { Button } from "antd";
import { Heading1 } from "../typography";
import styles from "./style.module.css";

export const GradientContainer = () => (
    <div className={styles.container}>
        <img src="/about-poster.png" />
        <div className={styles.content}>
            <Heading1 className={styles.text}>About us</Heading1>
        </div>
    </div>
);
