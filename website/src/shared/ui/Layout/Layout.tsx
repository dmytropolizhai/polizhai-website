import type { ReactNode } from "react";

type Props = {
    className: string,
    children: ReactNode;
}

export const Layout = ({ children, className}: Props) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}
export default Layout;