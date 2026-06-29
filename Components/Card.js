import "./Card.css"
import { Link } from "react-router";

function Card({data}){

    return(
        <Link to={"/artical/"+data.id} style={{textDecoration:"none", color:"inherit"}}>
        
        <div className="card">
            <div className="cardTop" style={{backgroundImage:"./upload/"+data.file}}></div>
            <div className="cardButtom">
                <div className="sub">
                    <h2>{data.title}</h2>
                    <p>{data.type}</p>
                    <p>{data.date}</p>
                </div>
                <div  
                 dangerouslySetInnerHTML={{
          __html: data.text,
        }}
        className="articalText"
                >
                </div>

            </div>
        </div>
        </Link>
    )
}


export default Card;