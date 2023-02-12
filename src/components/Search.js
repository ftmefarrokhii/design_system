import list from "../data";
import Cards from "./card";
import { useState } from "react";
import Amazon from "./amazon";

const Search = ()=>{
    const[searchTerm,setSearchTerm]=useState('')
    return(
        <Amazon>
            <input type="search" name="" className="searchinput" placeholder="search here..."
             onChange={event =>{setSearchTerm(event.target.value)}}></input>
            {list.filter((item)=>{
                if(searchTerm ===''){return item}
                else if(item.title.toLowerCase().includes(searchTerm.toLowerCase())){return item}
            }).map((item) => {
                return (<Cards key={item.id} item={item}  />)
            })}
        </Amazon>
    )

}
export default Search;