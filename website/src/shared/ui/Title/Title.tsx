import styles from './Title.module.css'
import type { ReactNode } from "react";

type Props = {
    children: ReactNode,
};

const Title = ({ children }: Props) => {
    return (
        <h1 className={styles.title}>{children}</h1>
    )
}

export default Title;