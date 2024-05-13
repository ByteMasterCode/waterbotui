import React from 'react';
import Content from "./content/Content";

import Header from "./Header/Header";
const MainComponent = () => {
    return (
        <div className="flex flex-col bg-gray-800 h-screen">
            <Header/>
            <main className="flex-1 p-4 md:p-8"><Content/></main>
            {/*<footer className="bg-gray-800 text-white py-4">Footer</footer>*/}
        </div>
    );
};

export default MainComponent;
