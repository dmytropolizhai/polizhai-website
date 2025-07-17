import './theme-button.scss'
import { useThemeMode } from "@shared/hooks/useThemeMode.ts";
import { useState } from "react";

type ThemeButtonProps = {
    title?: string;
};

const MOON = 'assets/moon.svg';
const SUN = 'assets/sun.svg';

export const ThemeButton = ({ title }: ThemeButtonProps) => {
    const { toggleTheme, mode } = useThemeMode(); // Assume this gives "light" | "dark"
    const [icon, setIcon] = useState<string>(mode === "dark" ? SUN : MOON);

    const handleClick = () => {
        toggleTheme();
    setIcon(prev => (prev === SUN ? MOON : SUN));
    };

    return (
        <button className="btn border-hover" onClick={handleClick}>
            <img src={icon} className="icon" alt='icon' />
            {title && <span>{title}</span>}
        </button>
    );
};