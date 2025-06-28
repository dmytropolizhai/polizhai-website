import '../styles/welcome-page.css'
import backgroundElements from '../background-elements.png'

import { NavigationBar } from "@widgets/nav-bar/ui/NavigationBar.tsx";

export const WelcomePage = () => {
    return (
        <div className="welcome-page">
            <img
                className="welcome-page-background"
                src={backgroundElements}
                alt="background elements"
            />
            <div className="welcome-page-header">
                <p className="welcome-page-header__title">
                    “Make it run, make it right”
                </p>
                <NavigationBar />
            </div>
        </div>
    );

}