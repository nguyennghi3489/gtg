import Head from "next/head";
import styles from "@/styles/About.module.css";
import { NavBar } from "@/components/nav-bar";
import { GradientContainer } from "@/components/share/gradient-container";
import { Heading1, Heading2, Text, Title } from "@/components/share/typography";
import { Button } from "antd";
import { StatisticGroupText } from "@/components/share/statistic-group-text";
import { ArticleList } from "@/components/article-list";
import { Footer } from "@/components/footer";

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
                <GradientContainer />
                <section className={styles.gtg}>
                    <Heading1>GTG Software</Heading1>
                    <div className={styles.gtgIntroduce}>
                        <div>
                            <Text>
                                Welcome to our company, where innovation meets
                                expertise. We specialize in delivering
                                cutting-edge solutions and unparalleled services
                                to the banking, smart factory, digital
                                transformation, and telecommunications
                                industries. Our team of highly skilled
                                professionals, including Solution Architects,
                                Technical Leaders, and Business Consultants,
                                bring a wealth of experience and knowledge to
                                every project. In today's fast-paced,
                                technology-driven world, staying ahead of the
                                curve is essential. That's why we are dedicated
                                to staying on top of the latest advancements and
                                bringing the best of what technology has to
                                offer to our clients. With a proven track record
                                of delivering successful digital banking
                                solutions, digital transformation projects, and
                                telecommunication services, we are the experts
                                you can count on.
                            </Text>
                            <br />
                            <Text>
                                At our company, we believe that success is
                                achieved through a combination of technical
                                excellence and business acumen. That's why our
                                solutions are not only innovative and effective,
                                but also customized to meet the unique needs of
                                each of our clients. We are passionate about
                                delivering results that exceed expectations and
                                are dedicated to helping our clients achieve
                                their goals. We are committed to providing a
                                seamless experience to our clients, from the
                                initial consultation to the final implementation
                                and beyond. Our goal is to build long-lasting
                                relationships and to support our clients in
                                their journey towards success. Whether you're
                                looking to transform your business, overcome
                                challenges, or stay ahead of the curve, we are
                                here to help. Let's work together to drive your
                                business forward!
                            </Text>
                            <Button
                                ghost
                                className={styles.companyProfileButton}
                            >
                                OUR COMPANY PROFILE
                            </Button>
                        </div>
                        <img
                            src="/gtg-about-us.png"
                            className={styles.gtgImage}
                        />
                    </div>
                </section>
                <div className={styles.statistics}>
                    <StatisticGroupText factor="Team Experience" value="50+" />
                    <StatisticGroupText factor="Team Experience" value="234+" />
                    <StatisticGroupText factor="Size" value="57+" />
                </div>
                <section className={styles.articleSection}>
                    <Heading2 className={styles.articleHeading}>
                        We host a skilled engineering team with expertise for
                        developing high-performing, innovative, next-gen fintech
                        platforms and solutions with a combined experience of
                        100 years
                    </Heading2>
                    <ArticleList />
                </section>
                <Footer />
            </main>
        </>
    );
};
export default About;
