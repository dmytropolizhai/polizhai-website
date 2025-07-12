import './source.scss'
import { Colors } from "@shared/consts/Colors.ts";

export type SourceProps = {
    id: number,
    title: string,
    iconSrc: string,
    href?: string,
}

export const Source = (props: SourceProps) => {
  return (
      <li>
          <a href={props.href} className="source-container" style={{ background: Colors.dark.surface }}>
              <img className="icon" src={props.iconSrc} alt={`icon for ${props.title}`} />
              <p style={{ color: Colors.dark.primary }}>{props.title}</p>
          </a>
      </li>
  )
}