import { useParams,useNavigate } from "react-router";
import { useContext } from "react";
import { ArticalContext } from "../Context/ArticalContext";
import "./Artical.css";
function Artical() {
  let { id } = useParams();

  let { articals,setArticals } = useContext(ArticalContext);
  let navigate= useNavigate();

  function DeleteArtical(articalId){
    console.log("artical deleted");
    let temp=[];
    for(let i=0;i<articals.length;i++){
        if(articals[i].id != id){
            temp.push(articals[i]);
        }
    }

    setArticals(temp);
    localStorage.setItem("articals",JSON.stringify(temp));
    window.alert("Artical deleted");
    navigate("/");

  }

return (
     <div className="Artical">
    {
    articals.map((artical,index) => {
      if (artical.id == id) {
        return (
         <div key={index}>
         
            <div className="topArtical"></div>
            <div className="buttomArtical">
              <div className="articalTitle">
                <h2>{artical.title}</h2>
                <p>{artical.type}</p>
                <p>{artical.date}</p>
                <button onClick={()=>{navigate(-1)}}>Back</button>
              </div>
              <div
                className="text"
                dangerouslySetInnerHTML={{
                  __html: artical.text,
                }}
              ></div>
            </div>
            <div className="buttons">
              <button onClick={()=>{DeleteArtical(artical.id)}}>Delete</button>
              <button onClick={()=>{navigate("/update/"+artical.id)}}>Update</button>
            </div>
         </div>
        );
      }
    })
    }
    </div>

)
}

export default Artical;
