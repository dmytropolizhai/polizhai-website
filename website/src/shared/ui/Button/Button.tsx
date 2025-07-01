import styles from './Button.module.css'
import type { ReactNode } from "react";

type Props = {
    children?: ReactNode,
    className?: string
    onClick?: () => void,
}

export const Button = (props: Props) => {
    return (
        <button
            onClick={props.onClick}
            className={props.className ?? styles.button}
        >{props.children}</button>
    )
}