import type { ThemeMode } from "@shared/type/themeMode.ts";

export type ThemeContextType = {
    mode: ThemeMode;
    toggleTheme: () => void;
}
