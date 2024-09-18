import React from 'react';
import {AllSigns, ZodiacSigns} from "./components/ZodiacSigns";
import {BrowserRouter, Route, Routes, useParams} from "react-router-dom";
import {Sign} from "./components/Sign";

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={'/'} element={<ZodiacSigns/>}/>
                    <Route path="/signs/:sign" element={<SignWrapper />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

const SignWrapper = () => {
    const { sign } = useParams();
    const signData = AllSigns.find(s => s.signEngName.toLowerCase() === sign?.toLowerCase());

    return signData ? <Sign {...signData} /> : <div>Sign not found</div>;
};

export default App;
