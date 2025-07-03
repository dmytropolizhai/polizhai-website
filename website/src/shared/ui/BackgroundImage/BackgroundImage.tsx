import styles from './BackgroundImage.module.css'

export type BackgroundImageProps = {
    source: string,
    alt?: string,
}

export const BackgroundImage = ({ source, alt }: BackgroundImageProps) => {
    return (
        <img
            className={styles.backgroundImage}
            src={source}
            alt={alt}
        />
    );
}