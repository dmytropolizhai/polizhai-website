import './styles/welcome-page.css'
import backgroundElements from '@shared/assets/images/background-elements.png'

import { NavigationBar } from "@widgets/NavigationBar/NavigationBar.tsx";
import { BackgroundImage } from "@ui/BackgroundImage/BackgroundImage.tsx";

import FontChangingText from "@widgets/FastChangingText/FontChangingText.tsx";
import Layout from "@ui/Layout/Layout.tsx";

export const WelcomePage = () => {
    return (
        <Layout className="welcome-page">
            <BackgroundImage source={backgroundElements} />
            <Layout className="welcome-page-header">
                <p className="welcome-page-header__title">
                    “Make it <FontChangingText text="run" />, make it <FontChangingText text="text" />”
                </p>
                <NavigationBar />
            </Layout>
        </Layout>
    );

}