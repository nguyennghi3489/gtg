import Head from "next/head";
import styles from "@/styles/About.module.css";
import { NavBar } from "@/components/nav-bar";
import { GradientContainer } from "@/components/share/gradient-container";
import { Heading1, Heading2, Text, Title } from "@/components/share/typography";
import { Button } from "antd";
import { StatisticGroupText } from "@/components/share/statistic-group-text";
import { ArticleList } from "@/components/article-list";
import { Footer } from "@/components/footer";
import { FullPageTab } from "@/components/full-page-tab";

const About = () => {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="What is GTG software company?"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <NavBar />
                <FullPageTab />
                <Footer />
            </main>
        </>
    );
};
export default About;
