import './button.scss'
import type { ReactNode } from "react";

type Props = {
    children?: ReactNode,
    className?: string,
    tabIndex?: number,
    onClick?: () => void,
}

export const Button = (props: Props) => {
    return (
        <button
            tabIndex={props.tabIndex}
            onClick={props.onClick}
            className={props.className ?? "button"}
        >{props.children}</button>
    )
}