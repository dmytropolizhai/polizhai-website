import type { ThemeContextType } from "@shared/type/ThemeContextType.ts";
import { createContext } from 'react';

export const ThemeContext =
    createContext<ThemeContextType | undefined>(undefined);


