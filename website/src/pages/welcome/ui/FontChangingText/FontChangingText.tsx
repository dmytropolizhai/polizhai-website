import "./font-changing-text.scss";

import { useState } from "react";
import { useRepeater } from "@shared/lib/hooks/useRepeater.ts";

import type { FontFamily } from "@shared/types";




type FontChangingTextProps = {
    text: string
    fonts?: FontFamily[]
}

const FontChangingText = ({ text, fonts = ["Poppins", "Georgia"] }: FontChangingTextProps) => {
    const [fontFamilyIndex, setFontFamilyIndex] = useState<number>(0);
    const style = {
        fontFamily: fonts[fontFamilyIndex],
    }

    useRepeater(() => {
        setFontFamilyIndex(prev => (prev + 1) % fonts.length);
    }, 1000);

    return (
        <span className="fast-changing-text__inner" style={style}>
            {text}
        </span>
    )
}


export default FontChangingText;