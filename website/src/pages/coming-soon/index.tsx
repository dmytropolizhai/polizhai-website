import './index.scss'

import { DateToDeploy, SourceList,
    ThemeButton,
    type SourceProps } from './ui/'
import { Source } from "./ui/Source/Source.tsx";

export const ComingSoon = () => {
    const sources: SourceProps[] = [
        { id: 0, title: "Telegram", iconSrc: "/assets/telegram.svg", href: "https://t.me/dmytro_polizhai_channel" },
        { id: 1, title: "Github", iconSrc: "/assets/github.svg", href: "https://github.com/DmytroPolizhai/polizhai-website" },
        { id: 2, title: "Figma", iconSrc: "/assets/figma.svg", href: "https://www.figma.com/design/bfokLBp3dx80zyfwxk5RKH/Website"},
    ]

    return (
        <section id="coming-soon">
            <DateToDeploy>01 AUGUST</DateToDeploy>
            <SourceList>
                {sources.map((source: SourceProps) => (
                    <Source key={source.id} {...source}/>
                ))}
            </SourceList>

            <ThemeButton darkIcon='assets/moon.svg' lightIcon='assets/sun.svg' />
        </section>
    );
}