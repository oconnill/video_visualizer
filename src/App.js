import React from 'react';
import './App.scss';
import "../node_modules/video-react/dist/video-react.css";
import LiveChart from "./Components/LiveChart/LiveChart";


function App() {
    return (
        <div className="App">
            <LiveChart/>
        </div>
    );
}

export default App;
