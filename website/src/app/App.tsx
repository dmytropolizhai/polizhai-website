import './styles/app.scss'

import { useTheme } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import { Home } from '@pages/home';
import { ComingSoon } from "@pages/coming-soon";


function App() {
    const theme = useTheme();
    const styles = { background: theme.palette.background.default }

    return (
        <BrowserRouter>
            <div className="App" style={styles}>
                <main className="App-main">
                    <Routes>
                        <Route path="/" element={<Home />}/>
                        <Route path="/pages/oming-soon" element={<ComingSoon/>}/>
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
