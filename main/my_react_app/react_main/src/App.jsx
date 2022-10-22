import React, {useState,useEffect} from "react";
import ViewServices from "./components/view_services";
import ViewCategory from "./components/view_category";


function App() {

    return (

        <div className="App">
            <ViewServices/>
            <ViewCategory/>
        </div>

    );
}

export default App;