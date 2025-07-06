import { lazy, Suspense } from "react";
import ProgressBar from "@ui/ProgressBar/ProgressBar.tsx";

const WelcomePage = lazy(() => import('@pages/welcome/'))

function App() {
  return (
        <div className="App">
            <header className="App-header" >
            </header>
            <main className="App-main">
                <Suspense fallback={<ProgressBar />}>
                    <WelcomePage />
                </Suspense>
            </main>
        </div>
  );
}

export default App;
