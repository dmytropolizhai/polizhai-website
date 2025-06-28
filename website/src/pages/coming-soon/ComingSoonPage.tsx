
import LoadIndicator from './ui/LoadIndicator/LoadIndicator.tsx'
import Title from "./ui/Title/Title.tsx";

import './styles/coming-soon-page.css'

const ComingSoonPage = () => {
    return (
        <div className="coming-soon-page">
            <Title title="Coming Soon" />
            <LoadIndicator />
        </div>
    )
}
export default ComingSoonPage;

