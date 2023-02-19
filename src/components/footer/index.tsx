import { Button } from "antd";
import styles from "./footer.module.css";

export const Footer = () => (
    <div className={styles.container}>
        <div className={styles.footerItem}>
            <div className={styles.information}>
                <p className={styles.date}>FEEL FREE TO CONTACT US</p>
                <p className={styles.phone}>+84 234567890</p>
                <p className={styles.mail}>support@gtgsortware.vn</p>
                <ul className={styles.logoList}>
                    <li>
                        <img className={styles.logo} src="/fb-logo.png" />
                    </li>
                    <li>
                        <img className={styles.logo} src="/in-logo.png" />
                    </li>
                    <li>
                        <img className={styles.logo} src="/tw-logo.png" />
                    </li>
                </ul>
            </div>
            <ul className={styles.services}>
                <li className={styles.heading}>Services</li>
                <li>Consulting</li>
                <li>Application Development</li>
                <li>Maintenance and Enhancement Services</li>
            </ul>
            <ul className={styles.links}>
                <li className={styles.heading}>More Links</li>
                <li>About</li>
                <li>Services</li>
                <li>Articles</li>
                <li>Contact</li>
            </ul>
        </div>
        <p className={styles.copyright}>
            © 2023 GTG Sortware . All Rights Reserved.
        </p>
    </div>
);
