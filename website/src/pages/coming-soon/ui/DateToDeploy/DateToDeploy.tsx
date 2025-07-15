import './date-to-deploy.scss'

import { type PropsWithChildren } from "react";
import { useTheme } from "@mui/material";

export const DateToDeploy = ({ children }: PropsWithChildren) => {
    const theme = useTheme();
    const styles = {
        color: theme.palette.primary.main
    }

    return (
        <h1 style={styles}>
            {children}
        </h1>
    )
}

export default DateToDeploy;