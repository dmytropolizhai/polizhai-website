import { type ImgHTMLAttributes, useState } from "react";

export type ImageProps = ImgHTMLAttributes<HTMLImageElement>;

export const Image = (props: ImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <>
            {isLoaded && (
                <div>
                    Loading...
                </div>
            )}
            <img {...props} alt={props.alt} style={{
                opacity: isLoaded ? 1 : 0,
                transition: "opacity 0.3s ease-in-out",
            }} onLoad={() => setIsLoaded(true)} />
        </>
    )
}

export default Image;