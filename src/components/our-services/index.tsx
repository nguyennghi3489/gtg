import { Button } from "antd";
import styles from "./our-services.module.css";

export const OurServices = () => (
    <div className={styles.container}>
        <h3 className={styles.headerTitle}>Our services</h3>
        <div className={styles.serviceList}>
            <div className={styles.service}>
                <img className={styles.image} src="/consulting.png" />
                <h4 className={styles.title}>Consulting</h4>
                <p className={styles.content}>
                    Business and Technology Solutions through Technical
                    Excellence and Legacy Platform Overhaul - Overcoming
                    Challenges for Maximum Efficiency and Effectiveness.
                </p>
            </div>
            <div className={styles.service}>
                <img
                    className={styles.image}
                    src="/application-development.png"
                />
                <h4 className={styles.title}>Application Development</h4>
                <p className={styles.content}>
                    Modern, Cloud-Native Micro-service Apps for Mission-Critical
                    Agility, with Modernization and Migration Assistance.
                </p>
            </div>
            <div className={styles.service}>
                <img className={styles.image} src="/maintance-enhance.png" />
                <h4 className={styles.title}>
                    Maintenance and Enhancement Services
                </h4>
                <p className={styles.content}>
                    Ensuring the Stability of both Application and
                    Telecommunications Infrastructure for Continuous and Smooth
                    Business Operations.
                </p>
            </div>
        </div>
    </div>
);
