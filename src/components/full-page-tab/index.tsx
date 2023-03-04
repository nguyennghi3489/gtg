import { Button } from "antd";
import { useMemo, useState } from "react";
import { SubTitle, Text, Title } from "../share/typography";
import styles from "./style.module.css";
import { ApplicationContent } from "./tab-items/application-development";
import { ConsultingContent } from "./tab-items/Consulting";
import { MaintenanceContent } from "./tab-items/maintenance";

export const FullPageTab = () => {
    const [activeTab, setActiveTab] = useState(0);
    const tabItems = useMemo(
        () => [
            {
                imageUrl: "/consulting-poster.png",
                body: <ConsultingContent />,
            },
            {
                imageUrl: "/application-development-poster.png",
                body: <ApplicationContent />,
            },
            {
                imageUrl: "/maintenance-poster.png",
                body: <MaintenanceContent />,
            },
        ],
        []
    );
    const currentTab = tabItems[activeTab];

    return (
        <div>
            <img src={"/maintenance-poster.png"} className={styles.tabPoster} />
            <div className={styles.tabBody}>
                <div className={styles.tabControls}>
                    <button
                        className={`${styles.tabButton} ${
                            activeTab === 0 && styles.active
                        }`}
                        onClick={() => setActiveTab(0)}
                    >
                        Consulting
                    </button>
                    <button
                        className={`${styles.tabButton} ${
                            activeTab === 1 && styles.active
                        }`}
                        onClick={() => setActiveTab(1)}
                    >
                        Application Development
                    </button>
                    <button
                        className={`${styles.tabButton} ${
                            activeTab === 2 && styles.active
                        }`}
                        onClick={() => setActiveTab(2)}
                    >
                        Maintenance and Enhancement Services
                    </button>
                </div>
                <div className={styles.tabContent}>
                    {" "}
                    <MaintenanceContent />
                </div>
            </div>
        </div>
    );
};
