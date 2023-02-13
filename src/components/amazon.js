import React, { useState } from "react";
import list from "../data";
import Cards from "./card";
import "../styles/amazon.css";
import { Fragment } from "react";
import { BsSearch } from "react-icons/bs";

const Amazon = ({ handleClick }) => {
  const[searchTerm,setSearchTerm]=useState('');
  const [show, setShow] = useState(false);

  const newlist=[...list];

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Fragment>

          <div style={{width:"400px" , backgroundColor:"rgb(221, 219, 219)",display:"flex",borderRadius: "10px",
          margin:"2rem",marginLeft:"30rem"}}>
          <BsSearch className="iconsearch"/>
          <input type="search" name="" className="searchinput" placeholder="search here..." 
          onChange={event =>{setSearchTerm(event.target.value)}}></input>
          </div>

    <section>
      
      
      {searchTerm && 
          list.filter((item)=>{
            if(searchTerm ===''){return item}
            // else if(searchTerm !== item.title.toLowerCase()){return <p>nothing to show</p>}
            else if(item.title.toLowerCase().includes(searchTerm.toLowerCase())){return item}
            }).map((item) => {
            return (<Cards key={item.id} item={item} handleClick={handleClick} />)
          })}
      {!searchTerm && 
      newlist.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}

    </section>
    
    </Fragment>
  );
};

export default Amazon;
