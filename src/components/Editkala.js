import Cards from "./card";
import list from "../data";
import "../styles/amazon.css";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const EditKala=()=>{
    const editHandler=()=>{
        console.log("edit button clicked");
    }
    return(<Fragment>
        <section>
        {list.map((item) => (
            
            <div className="cards">
      <div className="image_box">
        <img src={item.img} alt="" />
      </div>
      <div className="details">
        <p>{item.title}</p>
        <p>Code : {item.code}</p>
        <p>Price : {item.price}Rs</p>
        <p>amount : {item.amount}</p>
        <Link to="/edit"><button onClick={editHandler}>edit</button></Link>
        {/* <Link to="/detail"><button onClick={detailHandler}>Show Detail</button></Link>
        <button onClick={AlertHandler}>Remind me if exist</button> */}
      </div>
    </div>
            
        ))}



        
        </section>
        </Fragment>
    )

}

export default EditKala;