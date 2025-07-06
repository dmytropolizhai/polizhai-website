import Layout from "@ui/Layout/Layout.tsx";

import './memo.scss';

const Memo = () => {
    return (
        <Layout id="memo">
            <h1 className="title">
                <span className="title-line">"Make it <span className="highlighted">run</span>, </span>
                <span className="title-line">make it <span className="highlighted">right</span>"</span>
            </h1>
            {/* Or use FontChangingText instead of "run" if needed: */}
            {/* <h1 className={styles.title}>
                Make it <FontChangingText text="run," />
                <br className={styles.mobileBreak} />
                Make it right
            </h1> */}
        </Layout>
    );
};

export default Memo;
