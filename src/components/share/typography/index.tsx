import { interpolateAs } from "next/dist/shared/lib/router/router";
import { FC, ReactNode } from "react";
import styles from "./style.module.css";

interface TypographyPros {
    children: ReactNode;
    className?: string;
}
export const Text: FC<TypographyPros> = ({ children, className }) => {
    return <p className={`${styles.text} ${className}`}>{children}</p>;
};

export const Heading1: FC<TypographyPros> = ({ children, className }) => {
    return <h1 className={`${styles.h1} ${className}`}>{children}</h1>;
};

export const Heading2: FC<TypographyPros> = ({ children, className }) => {
    return <h2 className={`${styles.h2} ${className}`}>{children}</h2>;
};

export const Title: FC<TypographyPros> = ({ children, className }) => {
    return <h5 className={`${styles.title} ${className}`}>{children}</h5>;
};
