import { FC } from "react";
import styles from "./style.module.css";

interface StatisticGroupTextProps {
    factor: string;
    value: string;
}
export const StatisticGroupText: FC<StatisticGroupTextProps> = ({
    factor,
    value,
}) => {
    return (
        <div className={styles.container}>
            <p className={styles.value}>{value}</p>
            <h6 className={styles.factor}>{factor}</h6>
        </div>
    );
};
