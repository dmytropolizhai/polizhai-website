import './link-list.scss'

import type { PropsWithChildren } from "react";


export const LinkList = ({ children }: Required<PropsWithChildren>) => {
    return (
        <ul className="source-list">
            {children}
        </ul>
    )
}
