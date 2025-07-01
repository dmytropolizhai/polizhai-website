
type Props = {
    source: string,
    alt?: string,
}

export const BackgroundImage = ({ source, alt }: Props) => {
    return (
        <img
            className="background-image"
            src={source}
            alt={alt}
        />
    );
}