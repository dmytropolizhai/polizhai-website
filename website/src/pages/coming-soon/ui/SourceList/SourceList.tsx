import './source-list.scss'

import type { PropsWithChildren } from "react";


export const SourceList = ({ children }: Required<PropsWithChildren>) => {
    return (
        <ul className="source-list">
            {children}
        </ul>
    )
}
