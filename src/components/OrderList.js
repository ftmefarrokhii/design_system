import Cart from "./cart";

const OrderList = ({item,cart})=>{
    const { title, code, price,amount } = item;
    // const total= price
    // let ans += item.amount * item.price
  

    return(
        <div className="details">
        <p>{item.title}</p>
        <p>Code : {code}</p>
        <p>Price : {price}Rs</p>
        <p>amount:{amount}</p>
        <p>new</p>
        <p>total:{item.amount * item.price}</p>

      </div>
    )

}

export default OrderList;