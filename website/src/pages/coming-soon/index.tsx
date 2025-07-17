import './index.scss'

import { Title, LinkList,
    ThemeButton,
    type LinkProps } from './ui/'
import { Link } from "@ui/Link/Link.tsx";

export const ComingSoon = () => {
    const sources: LinkProps[] = [
        { id: 0, title: "Telegram", iconSrc: "/assets/telegram.svg", href: "https://t.me/dmytro_polizhai_channel" },
        { id: 1, title: "Github", iconSrc: "/assets/github.svg", href: "https://github.com/DmytroPolizhai/polizhai-website" },
        { id: 2, title: "Figma", iconSrc: "/assets/figma.svg", href: "https://www.figma.com/design/bfokLBp3dx80zyfwxk5RKH/Website"},
    ]

    return (
        <section id="coming-soon">
            <Title content="01 AUGUST"></Title>
            <LinkList>
                {sources.map((source: LinkProps) => (
                    <Link key={source.id} {...source}/>
                ))}
            </LinkList>

            <ThemeButton darkIcon='assets/moon.svg' lightIcon='assets/sun.svg' />
        </section>
    );
}