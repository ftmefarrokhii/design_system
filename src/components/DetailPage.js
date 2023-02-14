import Cards from "./card";
import list from "../data";
import { useState } from "react";
import CardComment from "./CardComment";
import "../styles/DetailPage.css";

const DetailPage=(handleClick,item)=>{
    const [enteredComment, setEnteredComment] = useState('');
    const[validComment,setValidComment]=useState()

    const commentHandler=(event)=>{
        event.preventDefault();
        setValidComment(enteredComment)
        console.log(enteredComment);
        setEnteredComment('');
    }
    
      const commentChangeHandler = (event) => {
        setEnteredComment(event.target.value);
      };

    return(
        <div className="generaldiv">
            {list.slice(0,1).map((item) => (
            <Cards key={item.id} item={list[0]} handleClick={handleClick} />
             ))}
             <div>
             <CardComment className="input">
      
              <input
                id="comment"
                type="text"
                value={enteredComment}
                placeholder="Enter Your Comment"
                onChange={commentChangeHandler}
              />
              <button onClick={commentHandler} type="submit">Add Comment</button>
            
              </CardComment>
              
              <ul>{validComment}</ul>
              </div>
              
      </div>
    )  
}

export default DetailPage;