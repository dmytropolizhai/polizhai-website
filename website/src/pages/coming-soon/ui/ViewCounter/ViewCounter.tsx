import './view-counter.css'
import { useViewCounter } from './api/useViewCounter.ts'

export const ViewCounter = () => {
    const viewsCount = useViewCounter();

    return (
        <div className="view-counter__container">
            <h1 className="view-counter__title">Total views: {viewsCount}</h1>
        </div>
    );
}

export default ViewCounter;