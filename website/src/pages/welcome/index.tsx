import './index.scss'

import { lazy, Suspense } from "react";

import ProgressBar from "@ui/ProgressBar/ProgressBar.tsx";
import Layout from "@ui/Layout/Layout.tsx";
import { FloatingImage } from "@widgets/FloatingImage/FloatingImage.tsx";
import { Image } from "@ui/Image/Image.tsx";

import flatCylinder from './images/flat-cylinder.png'
import cube from './images/cube.png'
import bigPyramid from './images/big-pyramid.png'
import helix from './images/helix.png'
import icosahedron from './images/icosahedron.png'
import pyramid from './images/pyramid.png'

const NavigationBar = lazy(() => import('./ui/NavigationBar/NavigationBar'));
const Memo = lazy(() => import('./ui/Memo/Memo.tsx'))



const WelcomePage = () => {
    const isMobile: boolean = false;

    return (
        <Layout className="welcome-page">
            <Layout className="objects">
                <FloatingImage id="flat-cylinder" src={flatCylinder} alt="flat-cylinder" />
                <FloatingImage id="cube" src={cube} alt="cube" />
                <FloatingImage id="big-pyramid" src={bigPyramid} alt="big-pyramid" />
                <Layout className="blur">
                    <Image id="helix" src={helix} alt="helix" />
                    <Image id="icosahedron" src={icosahedron} alt="helix" />
                    <Image id="pyramid" src={pyramid} alt="helix" />
                </Layout>
                {isMobile && (
                    <Image id="m-background-cube" src={cube} alt="cube"/>
                )}
            </Layout>
            <Layout className="container">
                <Suspense fallback={<ProgressBar />}>
                    <Memo />
                    <NavigationBar />
                </Suspense>
            </Layout>
        </Layout>
    )
}

export default WelcomePage;
