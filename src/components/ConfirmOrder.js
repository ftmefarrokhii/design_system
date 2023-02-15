import OrderList from "./OrderList";
import mock from "./Mock";
import "../styles/amazon.css";
import { Fragment } from "react";
import { useState } from "react";
import "../styles/amazon.css";

const ConfirmOrder=()=>{
    const[confirm,setConfirm]=useState(false);
    const confirmHandler=()=>{
        setConfirm(true);
        alert("this order confirmed")
    }
    
        return(
        <Fragment>
            <div className="details">
            <h1>Lists Of Oredrs</h1>
            {!confirm && <div style={{display:"flex"}}>
            
            {mock.map((item) => (
                <OrderList key={item.id} item={item} />
              ))}
            
            </div>}
            <button onClick={confirmHandler}>Confirm Order</button>
            </div>
        </Fragment>
        )

}
export default ConfirmOrder;