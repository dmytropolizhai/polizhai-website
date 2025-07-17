import './index.scss'
import { Link, LinkList, type LinkProps } from "@pages/coming-soon/ui";

export const Home = () => {
    const data: LinkProps[] = [
        { id: 1, title: "Telegram", iconSrc: "/assets/telegram.svg", href: "https://t.me/dmytro_polizhai_channel" },
        { id: 1, title: "Instagram", iconSrc: "/assets/instagram.svg", href: "https://instagram.com/dmytro.polizhai" },
    ]

    return (
        <section id="home">
            <div id="introduce">
                <h1 className="title">I’m Dmytro Polizhai</h1>
                <h2 className="description">
                    Website Developer <span className="delimiter">&</span> Designer
                </h2>
                <LinkList>
                    {data.map((source: LinkProps) => (
                        <Link key={source.id} {...source}/>
                    ))}
                </LinkList>
            </div>
        </section>
    )
}