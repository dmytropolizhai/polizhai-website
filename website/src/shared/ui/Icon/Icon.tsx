import styles from './Icon.module.css'

export type IconProps = {
    alt: string;
    src: string;
}

export const Icon = ({ src, alt }: IconProps) => {
    return (
        <img id={styles.icon} src={src} alt={alt}/>
    );
}