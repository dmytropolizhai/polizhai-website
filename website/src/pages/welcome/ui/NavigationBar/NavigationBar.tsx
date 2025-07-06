import './nav-bar.scss'

import { type ReactNode, Suspense } from "react";
import ProgressBar from "@ui/ProgressBar/ProgressBar.tsx";

type HeaderProps = {
    href: string;
    children?: ReactNode
}

const Header = (props: HeaderProps) => {
    return (
        <a href={props.href} className="header">
            <span>{props.children}</span>
        </a>
    )
}


export const NavigationBar = () => {
    return (
        <Suspense fallback={<ProgressBar />}>
            <div id="nav-bar">
                <Header href="#memo">Memo</Header>
                <Header href="#approach">My approach</Header>
                <Header href="#projects">Projects</Header>
                <Header href="#education">Education</Header>
                <Header href="#story">My story</Header>
                <Header href="#contacts">Contacts</Header>
                <Header href="#support">Support</Header>
            </div>
        </Suspense>
    )
}

export default NavigationBar;