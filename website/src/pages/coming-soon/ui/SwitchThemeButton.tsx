type SwitchThemeButton = {
    title?: string,
    iconSrc: string,
    iconAlt?: string;
}

export const SwitchThemeButton = (props: SwitchThemeButton) => {
    return (
        <button className="btn">
            <img className="btn-icon" src={props.iconSrc} alt={props.iconAlt}></img>
            {props.title}
        </button>
    )
}