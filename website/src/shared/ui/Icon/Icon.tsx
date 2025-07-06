import './icon.scss'

export type IconProps = {
    alt: string;
    src: string;
}

export const Icon = ({ src, alt }: IconProps) => {
    return (
        <img className="icon" src={src} alt={alt}/>
    );
}