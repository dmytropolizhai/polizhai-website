import { Image, type ImageProps } from "@ui/Image/Image.tsx";

import styles from './FloatingImage.module.scss'

type FloatingImageProps = Omit<Readonly<ImageProps>, "style">

export const FloatingImage = (props: FloatingImageProps) => {
    return (
        <Image className={styles.floatingImage} {...props} />
    )
}