import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter,Routes,Route} from "react-router"
import { PrimeReactProvider } from 'primereact/api';

import "./Index.css"

import Home from "./Pages/Home.js";
import CreateArtical from "./Pages/CreateArtical.js";
import { ArticalContextProvider } from "./Context/ArticalContext.js";
import Artical from "./Pages/Artical.js";

let rootEle= document.getElementById("root");

let root= ReactDOM.createRoot(rootEle);


function App(){
    return (
        <>
        <ArticalContextProvider>

         <BrowserRouter>
            <Routes>

                <Route path={"/"} element={<Home/>}></Route>
                <Route path={"/create"} element={<CreateArtical/>}></Route>
                <Route path={"/artical/:id"} element={<Artical/>}></Route>
                <Route path={"/update/:id"} element={<CreateArtical/>}></Route>

            </Routes>
         
         </BrowserRouter>
        </ArticalContextProvider>
        </>
    )
}


root.render(
<>
<PrimeReactProvider>
    <App/>
</PrimeReactProvider>

</>
)
