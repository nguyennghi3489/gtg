import { SubTitle, Text } from "@/components/share/typography";
import styles from "./style.module.css";

export const ConsultingContent = () => {
    return (
        <div>
            <Text>
                Our technology consulting services aim to help clients identify
                and resolve specific business and technology challenges, drive
                technology excellence and help address legacy platform
                challenges. We provide a comprehensive assessment report on the
                existing application and help our clients build a transformation
                roadmap. We devise a technology plan for achieving the target
                architecture and assist our clients with its execution.
            </Text>
            <SubTitle className={styles.subTitle}>Core Banking</SubTitle>
            <Text>
                We provide a complete assessment of the core banking platform
                and establish a client-specific strategy that is most efficient.
                Our end-to-end implementation management ensures that you
                transition to the target state smoothly.
            </Text>
            <SubTitle className={styles.subTitle}>Technology Strategy</SubTitle>
            <Text>
                We build and implement the right technology strategy for your
                business, ensuring technology alignment to business vision and
                goals and making it future-ready and efficient.
            </Text>
            <SubTitle className={styles.subTitle}>
                Technology Optimisation
            </SubTitle>
            <Text>
                We assist in application portfolio optimisation through tech
                efficiency and mitigating risk using a structured review of the
                portfolio to drive down the cost.
            </Text>
            <SubTitle className={styles.subTitle}>
                Architecture Services
            </SubTitle>
            <Text>
                Find the best modernisation strategy for your legacy
                application. We design modern, highly scalable and cloud-native
                applications. Future-proof your platform with modern
                architecture and stay compliant.
            </Text>
        </div>
    );
};
