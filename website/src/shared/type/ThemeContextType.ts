import type { ThemeMode } from "@shared/type/ThemeMode.ts";

export type ThemeContextType = {
    mode: ThemeMode;
    toggleTheme: () => void;
}
