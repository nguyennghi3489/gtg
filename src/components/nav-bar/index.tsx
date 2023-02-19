import styles from "./nav-bar.module.css";

export const NavBar = () => (
    <header className={styles.header}>
        <div>
            <img src="/gtg-logo.png" />
        </div>
        <ul className={styles.nav}>
            <li>HOME</li>
            <li>ABOUT</li>
            <li>SERVICES +</li>
            <li>ARTICLES</li>
            <li>CONTACT</li>
        </ul>
    </header>
);
