import { Carousel } from "antd";
import styles from "./feedback.module.css";

export const Feedback = () => (
    <div className={styles.container}>
        <h3 className={styles.headerTitle}>Feedback</h3>
        <div className={styles.carousel}>
            <Carousel>
                <div className={styles.item}>
                    <img className={styles.image} src="/comas.png" />
                    <h3 className={styles.name}>Guillaume Apithy</h3>
                    <p className={styles.role}>
                        Leading Digital Payment & eMoney Company
                    </p>
                    <p className={styles.comment}>
                        Lorem ipsum dolor sit amet consectetur. Aliquet varius
                        consectetur purus ultricies magna in mollis. Ac non
                        tortor vitae congue elit urna tellus id. Turpis ut
                        interdum tellus consectetur. Curabitur lorem molestie
                        dignissim lacus duis eu velit in ullamcorper.
                    </p>
                </div>
                <div className={styles.item}>
                    <img className={styles.image} src="/comas.png" />
                    <h3 className={styles.name}>Guillaume Apithy</h3>
                    <p className={styles.role}>
                        Leading Digital Payment & eMoney Company
                    </p>
                    <p className={styles.comment}>
                        Lorem ipsum dolor sit amet consectetur. Aliquet varius
                        consectetur purus ultricies magna in mollis. Ac non
                        tortor vitae congue elit urna tellus id. Turpis ut
                        interdum tellus consectetur. Curabitur lorem molestie
                        dignissim lacus duis eu velit in ullamcorper.
                    </p>
                </div>
            </Carousel>
        </div>
    </div>
);
