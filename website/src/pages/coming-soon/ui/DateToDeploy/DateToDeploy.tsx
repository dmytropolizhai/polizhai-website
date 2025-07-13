import './date-to-deploy.scss'

import { type PropsWithChildren } from "react";
import { useTheme } from "@mui/material";

export const DateToDeploy = ({ children }: PropsWithChildren) => {
    const theme = useTheme();

    return (
        <h1 style={{ color: theme.palette.primary.main }}>
            {children}
        </h1>
    )
}

export default DateToDeploy;