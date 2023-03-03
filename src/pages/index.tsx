import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { NavBar } from "@/components/nav-bar";
import { Poster } from "@/components/poster";
import { OurServices } from "@/components/our-services";
import { ExpertSolution } from "@/components/expert-solution";
import { Feedback } from "@/components/feedback";
import { ArticleVsUpdates } from "@/components/article-updates";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="GTG software company homepage"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <NavBar />
                <Poster />
                <OurServices />
                <ExpertSolution />
                <Feedback />
                <ArticleVsUpdates />
                <Footer />
            </main>
        </>
    );
}
