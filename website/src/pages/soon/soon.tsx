import styles from './soon.module.css'

import LoadingIndicator from '@ui/ProgressBar/ProgressBar.tsx'
import Layout from "@ui/Layout/Layout.tsx";
import { IconButton } from "@widgets/IconButton/IconButton.tsx";

import { GithubIcon } from "@shared/consts";
import { deployDate } from "@shared/consts/deployDate.ts";

import { openNewTab } from "@shared/lib/helpers/WindowManager.ts";
import { DateCountdown } from "@widgets/DateCountdown/DateCountdown.tsx";
import Title from "@ui/Title/Title.tsx";


export const ComingSoonPage = () => {
    return (
        <Layout className={styles.soonPage}>
            <Layout className={styles.container}>
                <LoadingIndicator />
                <DateCountdown targetDate={deployDate} type="minutes" targetComponent={Title}/>
            </Layout>
            <Layout className={styles.linksContainer}>
                <IconButton icon={GithubIcon} onClick={() => {
                    openNewTab("https://github.com/DmytroPolizhai/dmytropolizhai.github.io");
                }} />
            </Layout>
        </Layout>
    );
};
