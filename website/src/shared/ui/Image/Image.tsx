import type { CSSProperties } from "react";

export type ImageProps = {
    id: string,
    src: string,
    alt: string,
    className?: string,
    style?: CSSProperties,
}

export const Image = (props: ImageProps) => {
    return (
        <img {...props} alt={props.alt}/>
    )
}