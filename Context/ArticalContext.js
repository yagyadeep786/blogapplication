import {createContext,useState} from "react"


let ArticalContext= createContext();

function ArticalContextProvider({children}){
    
    let data= JSON.parse(localStorage.getItem("articals"));
    if(data == undefined){
        data=[];
    }
    let [articals,setArticals]= useState(data);

    console.log(articals);
    let val={
        articals,
        setArticals
    }
    
   return(
     <ArticalContext.Provider value={val}>
        {children}
    </ArticalContext.Provider>
   )
}


export {ArticalContext,ArticalContextProvider};