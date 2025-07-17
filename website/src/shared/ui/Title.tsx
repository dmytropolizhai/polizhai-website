import type { Text } from '@shared/type/typography/Text.ts';

import { useTheme } from "@mui/material";

type Props = Readonly<Partial<Text>>;

export const Title = (props: Props) => {
    const theme = useTheme();
    const styles = {
        color: theme.palette.primary.main,
        textTransform: props?.textCase,
        fontSize: props?.size,
        fontWeight: props?.weight,
    }

    return (
        <h1 style={styles}>
            {props.content}
        </h1>
    )
}

export default Title;