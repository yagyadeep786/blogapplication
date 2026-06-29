import Card from "../Components/Card.js";
import "./Home.css"
import { ArticalContext } from "../Context/ArticalContext.js";

import { useContext } from "react";
import { Link } from "react-router";

function Home(){

    let {articals}= useContext(ArticalContext);

    return (<>
       
        <div className="nav">
            <h1>Blog Application</h1>
            <div>
               <Link to="/create">
                <button className="btn">Write Blog</button>
               
               </Link>
            </div>
        </div>

        <div className="CardCon">
            {
                articals.map((artical,index)=>{
                   return(
                    <Card data={artical} key={index}/>
                   )
                })
            }
        </div>
    </>)
}

export default Home;