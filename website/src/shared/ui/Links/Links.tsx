import './link-list.scss'
import './link.scss'

import {useTheme} from "@mui/material";
import type { Link } from "@shared/type/link.ts"

type LinksProps = {
    data: Link[];
}

const LinkElement = (props: Link) => {
    const theme = useTheme();
    const styles = {
        background: theme.palette.background.paper,
    }

    return (
        <li>
            <a className="source-container border-hover" style={styles}
               href={props.href} target="_blank" rel="noopener noreferrer" >
                <img className="icon" src={props.iconSrc} alt={`icon for ${props.title}`} />
                <p style={{ color: theme.palette.primary.main }}>{props.title}</p>
            </a>
        </li>
    )
}
export const Links = ({ data }: LinksProps) => {
    return (
        <ul className="source-list">
            {data.map((source: Link) => (
                <LinkElement key={source.id} {...source}></LinkElement>
            ))}
        </ul>
    )
}
