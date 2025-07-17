import React, { useEffect, useMemo, useState } from "react";
import type { ThemeMode } from "@shared/type/themeMode.ts";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { ThemeContext } from "@app/contexts/ThemeContext.tsx";
import { Colors } from "@shared/conts/Colors.ts";


export const ThemeModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [mode, setMode] = useState<ThemeMode>('dark');

    useEffect(() => {
        loadThemeMode();
    }, [])

    const toggleTheme = (): void => {
        const newMode: ThemeMode = mode === "dark" ? "light" : "dark";
        setMode(newMode);
        localStorage.setItem("themeMode", newMode);
    };

    const loadThemeMode = () => {
        const raw = localStorage.getItem("themeMode");
        const newMode: ThemeMode = raw === "light" || raw === "dark" ? raw : "light";

        setMode(newMode);
    }



    const theme = useMemo(() => {
        return createTheme({
            palette: {
                mode,
                background: {
                    default: Colors[mode].background,
                    paper: Colors[mode].surface,
                },
                primary: {
                    main: Colors[mode].primary,
                },
                secondary: {
                    main: Colors[mode].secondary,
                },
                text: {
                    primary: Colors[mode].text.primary,
                    secondary: Colors[mode].text.secondary,
                },
                error: {
                    main: Colors[mode].error,
                },
                success: {
                    main: Colors[mode].success,
                },
                warning: {
                    main: Colors[mode].warning,
                },
            },
        });
    }, [mode]);


    return (
        <ThemeContext.Provider value={{ mode, toggleTheme }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
);
};