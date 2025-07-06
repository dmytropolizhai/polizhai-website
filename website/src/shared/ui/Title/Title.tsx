import './title.scss'
import type { CSSProperties, ReactNode } from "react";

type Props = {
    isUpperCase?: boolean,
    children: ReactNode,
};

const Title = ({ children, isUpperCase }: Props) => {
    const innerStyle: CSSProperties = {
        textTransform: isUpperCase ? 'uppercase' : 'none',
    };

    return (
        <h1 style={innerStyle} className="title">
            {children}
        </h1>
    );
};


export default Title;