import './index.scss'

import { Links } from '@ui/Links/Links.tsx'
import type {Link} from "@shared/type/link.ts";

export const Home = () => {
    const data: Link[] = [
        { id: 1, title: "Telegram", iconSrc: "/assets/telegram.svg", href: "https://t.me/dmytro_polizhai" },
        { id: 2, title: "Instagram", iconSrc: "/assets/instagram.svg", href: "https://instagram.com/dmytro.polizhai" },
    ]

    return (
        <section id="home">
            <div id="introduce">
                <h1 className="title">I’m Dmytro Polizhai</h1>
                <h2 className="description">
                    Website Developer <span className="delimiter">&</span> Designer
                </h2>
                <Links data={data} />
            </div>
        </section>
    )
}