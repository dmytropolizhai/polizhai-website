import './floating-image.scss'
import { Image, type ImageProps } from "@ui/Image/Image.tsx";


type FloatingImageProps = Omit<Readonly<ImageProps>, "style">

export const FloatingImage = (props: FloatingImageProps) => {
    return (
        <Image className="floating-image" {...props} />
    )
}