import "../styles/amazon.css";

const OrderList = ({item,cart})=>{

  const { title, code, price, img ,amount} = item;

  return (
    <div className="section">
    <div className="cards">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>Code : {code}</p>
        <p>amount:{amount}</p>
        <p>Price : {price}Rs</p>
        <p>total:{price * amount}</p>

      </div>
      </div>
    </div>)

}

export default OrderList;