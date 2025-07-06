import './background-image.scss'

export type BackgroundImageProps = {
    source: string,
    alt?: string,
}
export const BackgroundImage = ({ source, alt }: BackgroundImageProps) => {
    return (
        <img
            className="background-image"
            src={source}
            alt={alt}
        />
    );
}