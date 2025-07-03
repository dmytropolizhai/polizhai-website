import type { ReactNode, CSSProperties } from "react";

type Props = {
    className?: string,
    id?: string,
    style?: CSSProperties;
    children: ReactNode;
}

export const Layout = ({ children, id, className, style}: Props) => {
    return (
        <div style={style} className={className} id={id}>
            {children}
        </div>
    )
}
export default Layout;