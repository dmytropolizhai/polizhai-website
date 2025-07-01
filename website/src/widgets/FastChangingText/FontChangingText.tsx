import { useRepeater } from "@shared/lib/hooks/useRepeater.ts";
import { useState } from "react";

import './FontChangingText.module.css'

type FastChangingTextProps = {
    text: string
    readonly fonts?: FontFamily[]
}

type FontFamily = "Poppins" | "sans-serif"

const FontChangingText = ({ text, fonts = ["Poppins", "sans-serif"] }: FastChangingTextProps) => {
    const [fontFamilyIndex, setFontFamilyIndex] = useState<number>(0);

    // TODO: Make interval do once for every component
    useRepeater(() => {
        setFontFamilyIndex(prev => (prev + 1) % fonts.length);
    }, 1000);

    const style = {
        fontFamily: fonts[fontFamilyIndex],
    }
    return (
        <span className="fast-changing-text" style={style}>
            {text}
        </span>
    )
}


export default FontChangingText;