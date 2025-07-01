import styles from './IconButton.module.css'

import { Icon, type IconProps } from "@ui/Icon/Icon.tsx";
import { Button } from "@ui/Button/Button.tsx";

type Props = {
    icon: IconProps,
    onClick?: () => void,
}

export const IconButton = (props: Props) => {
    return (
        <Button onClick={props.onClick} className={styles.iconButton}>
            <Icon {...props.icon} />
        </Button>
    )
}