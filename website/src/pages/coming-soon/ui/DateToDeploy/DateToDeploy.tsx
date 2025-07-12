import './date-to-deploy.scss'

import { type PropsWithChildren } from "react";
import { Colors } from "@shared/consts/Colors.ts";


export const DateToDeploy = ({ children }: PropsWithChildren) => {
    return (
        <h1 style={{ color: Colors.dark.primary }}>
            {children}
        </h1>
    )
}

export default DateToDeploy;