import styles from "./nav-bar.module.css";

export const NavBar = () => (
    <header className={styles.header}>
        <div>
            <img src="/gtg-logo.png" />
        </div>
        <ul className={styles.nav}>
            <li>
                <a href="/"> HOME</a>
            </li>
            <li>
                <a href="/about">ABOUT</a>
            </li>
            <li>
                <a href="/services">SERVICES +</a>
            </li>
            <li>ARTICLES</li>
            <li>CONTACT</li>
        </ul>
    </header>
);
