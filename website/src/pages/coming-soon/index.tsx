import './index.scss'

import {Links} from "@ui/Links/Links.tsx";
import {Title} from "@ui/Title.tsx"
import {ThemeButton} from "@ui/ThemeButton/ThemeButton.tsx";
import type {Link} from "@shared/type/link.ts";

export const ComingSoon = () => {
    const sources: Link[] = [
        { id: 0, title: "Telegram", iconSrc: "/assets/telegram.svg", href: "https://t.me/dmytro_polizhai_channel" },
        { id: 1, title: "Github", iconSrc: "/assets/github.svg", href: "https://github.com/DmytroPolizhai/polizhai-website" },
        { id: 2, title: "Figma", iconSrc: "/assets/figma.svg", href: "https://www.figma.com/design/bfokLBp3dx80zyfwxk5RKH/Website"},
    ]

    return (
        <section id="coming-soon">
            <Title content="01 AUGUST"></Title>
            <Links data={sources} />
            <ThemeButton />
        </section>
    );
}