import './styles/nav-bar.scss'

import { useTheme } from '@mui/material';

export const NavBar = () => {
    const theme = useTheme();
    const styles = { background: theme.palette.background.default }


    return (
        <nav className="nav-bar" style={styles}>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/projects">Projects</a></li>
            </ul>
        </nav>
    )
}