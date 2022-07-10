import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./Views/Dashboarde";
import Connection from "./Views/Connection";
import Queries from "./Views/Queries";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        {/*<MainLayout>*/}
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="dashboard" element={<Dashboard/>}/>
            <Route path="connection" element={<Connection/>}/>
            <Route path="queries" element={<Queries/>}/>
        </Routes>
        {/*</MainLayout>*/}
    </BrowserRouter>
    // <App />
    // <React.StrictMode>
    //     <BrowserRouter>
    //         <Routes>
    //             <Route path="/" element={<App />} />
    //             <Route path="connection" element={<Connection />} />
    //             <Route path="queries" element={<Queries />} />
    //         </Routes>
    //     </BrowserRouter>
    // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
