import { useState } from "react";

import Layout from "@ui/Layout/Layout.tsx";
import { useRepeater } from "@shared/lib/hooks/useRepeater.ts";

import type { FontFamily } from "@shared/types";

import styles from "./FontChangingText.module.scss";



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
        <Layout className={styles.fastChangingTextWrapper}>
            <span style={style}>
                {text}
            </span>
        </Layout>
    )
}


export default FontChangingText;