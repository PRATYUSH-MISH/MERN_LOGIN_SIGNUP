import React from "react";
import { useLocation } from 'react-router-dom';

function Home() {
    const location = useLocation();
//
    const { id } = location.state || { id: "Guest" };
    return (
        <div className="homepage">
            <h1>Hello {id} and welcome to the home</h1>
        </div>
    );
}

export default Home;
