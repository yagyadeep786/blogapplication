import { Editor } from 'primereact/editor';
import { useState,useContext,useId, useEffect } from 'react';
import { ArticalContext } from '../Context/ArticalContext.js';
import uniqid from 'uniqid';
import { useNavigate,useParams } from 'react-router';

import "./CreateArtical.css"

function CreateArtical(){


   let {id}= useParams();
   let {articals,setArticals} =useContext(ArticalContext);

   let [text,setText]= useState("");
   let [title,setTitle]= useState("");
   let [type,setType]= useState("");
   let [file,setFile]= useState("");

   console.log(id);

useEffect(()=>{

    if(id != undefined){
      for(let i=0;i<articals.length;i++){
         if(articals[i].id == id){
             console.log("slkfjjsl")
             setText(articals[i].text);
             setTitle(articals[i].title);
             setType(articals[i].type);
         }
      }
    }

},[id])

 


    let navigate= useNavigate();

   function submitHandler(e){
        e.preventDefault();
        
    console.log(text,title,type,file);
    
    if(id != undefined){
        let temp=[];
        for(let i=0;i<articals.length;i++){

            if(articals[i].id == id){
                let artical={
                    id,
                    title,
                    text,
                    type,
                    date: new Date().getDate(),
                }
                temp.push(artical);
            }
            else{
                temp.push(articals[i]);
            }
        }
        localStorage.setItem("articals",JSON.stringify(temp));
        setArticals(temp);
    }

    else{

        let artical= {
            id:uniqid(),
            title,
            type,
            file,
            text,
            date: new Date().getDate(),
        }
        
        setArticals((prev)=> {   
          let newarr=  [...prev,artical];
          localStorage.setItem("articals",JSON.stringify(newarr));
          return newarr;
        });
    }

        navigate("/");

        // setArticals((prev)=>{
        //    return(prev.push(artical));
        // })

   }
    return (
        <>
        {id != undefined ? (<h2>Update Artical Page</h2>): (<h2>Create Artical Page</h2>)}
         <form className='form' onSubmit={submitHandler}>
            <div className="formTop">
                <input type="text" placeholder="Enter Artical Title" onChange={(e)=>{setTitle(e.target.value)}} value={title}></input>
                <div>
                     <p>Select Artical Banner: </p>
                <input type="file" onChange={(e)=>{
                    setFile(e.target.files[0].name)
                    }}></input>
                </div>
                <div>
                    <p>Select Artical Type: </p>
                <select 
                value={type}
                onChange={(e)=>{setType(e.target.value)}}
                >
                    <option value={""}>Select Type of Artical</option>
                    <option value="Tech">Tech</option>
                    <option value="Note">Note</option>
                    <option value="Interview">Interview</option>

                </select>
                </div>
            </div>
            <div className="formButtom">
                 <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }} />
            </div>

            <button type={"submit"}>Submit</button>
         </form>
        </>
    )
}

export default CreateArtical;