import styles from "./index.module.scss"
import Layout from "@ui/Layout/Layout.tsx";
import Memo from './ui/Memo/Memo.tsx'

import flatCylinder from './images/flat-cylinder.png'
import cube from './images/cube.png'
import bigPyramid from './images/big-pyramid.png'
import { FloatingImage } from "@widgets/FloatingImage/FloatingImage.tsx";

const WelcomePage = () => {
    return (
        <Layout className={styles.welcomePage}>
            <Layout className={styles.objects}>
                <FloatingImage id={styles.flatCylinder} src={flatCylinder} alt="flat-cylinder" />
                <FloatingImage id={styles.cube} src={cube} alt="cube" />
                <FloatingImage id={styles.bigPyramid} src={bigPyramid} alt="big-pyramid" />
            </Layout>
            <Memo />
        </Layout>
    )
}

export default WelcomePage;