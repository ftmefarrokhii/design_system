import Cart from "./cart";

const OrderList = ({item,cart})=>{
    const { title, code, price,amount } = item;

    return(
        <div className="details">
        <p>{item.title}</p>
        <p>Code : {code}</p>
        <p>Price : {price}Rs</p>
        <p>amount:{amount}</p>
      </div>
    )

}

export default OrderList;