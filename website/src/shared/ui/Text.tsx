import { useTheme } from "@mui/material";
import type { PropsWithChildren } from "react";
import type { Text as TextType } from '@shared/type/typography/Text.ts'

type Props = Readonly<PropsWithChildren & Partial<TextType>>;

export const Text = (props: Props) => {
    const theme = useTheme();
    const styles = {
        color: theme.palette.primary.main,
        textTransform: props?.textCase,
        fontSize: props?.size,
        fontWeight: props?.weight,
    }

    return (
        <h2 style={styles}>
            {props.children}
        </h2>
    )
}

export default Text;