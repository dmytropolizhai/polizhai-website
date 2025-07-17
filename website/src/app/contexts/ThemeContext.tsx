import type { ThemeContextType } from "@shared/type/themeContextType.ts";
import { createContext } from 'react';

export const ThemeContext =
    createContext<ThemeContextType | undefined>(undefined);


