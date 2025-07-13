import React, { useMemo, useState } from "react";
import type { ThemeMode } from "@shared/type/ThemeMode.ts";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Colors } from "@shared/conts/Colors.ts";

import { ThemeContext } from "../contexts/ThemeContext.tsx";

export const ThemeModeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [mode, setMode] = useState<ThemeMode>('dark');

    const toggleTheme = () => setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));

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