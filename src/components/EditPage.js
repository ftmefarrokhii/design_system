import { Fragment ,useState} from "react";
import { Link ,useHistory} from "react-router-dom";
import list from "../data";
import EditKala from "./Editkala";

const  EditPage=()=>{
    let history = useHistory();
    const [image, setImage] = useState(null);
    
    const[post,setPost]=useState({
        id:'',
        title:'',
        code:'',
        price:'',
        amount:'',
        imgtest:'',
    });
    const {id,title,code,price,amount,imgtest } = post;
    const handlechange= e=>{
        setPost({
            ...post,
            [e.target.name]:e.target.value
        })
    }
    
    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
          setImage(URL.createObjectURL(event.target.files[0]));
        }
    }

    const Edithandler = e =>{
        e.preventDefault();
        console.log(list);
        console.log(id,title,code,price,amount,image);

    }
    return(<Fragment><div style={{display:"flex"}}>
        {list.slice(0,1).map((item) =>
        <div className="cards">
        <div className="image_box">
          <img src={item.img} alt="" />
        </div>
        <div className="details">
          <p>{item.title}</p>
          <p>Code : {item.code}</p>
          <p>Price : {item.price}Rs</p>
          <p>amount : {item.amount}</p>
          </div></div>
           )}
        <div>
            <form className="" encType= "multipart /form-data">
            <div className="custom-form-group" >
                <input className="forminput" type="text" name="id" placeholder="Edit Id..." value={id} onChange={handlechange}/>
            </div>
            <div className="custom-form-group" >
                <input className="forminput" type="text" name="title" placeholder="Edit Title..." value={title} onChange={handlechange}/>
            </div>
            <div className="custom-form-group">
                <input className="forminput" type="text" name="code" placeholder="Edit Code..." value={code} onChange={handlechange}/>
            </div>
            <div className="custom-form-group">
                <input className="forminput" type="text" name="price" placeholder="Edit Price..." value={price} onChange={handlechange}/>
            </div>
            <div className="custom-form-group">
                <input className="forminput" type="text" name="amount" placeholder="Edit Amount..." value={amount} onChange={handlechange}/>
            </div>

            <div className="custom-form-group">
                <input className="forminput" type="file" name="img" placeholder="image" value={imgtest} onChange={onImageChange}/>
                <img src={image} alt="preview image" />

            </div>

            <Link to='/register' ><button type="submit" onClick={Edithandler} className="btn-submit">Edit</button></Link>
        </form>
        <button className="btn-submit"  onClick={() => history.push('/')}>Back</button>

        </div></div>
        </Fragment>
    )

}
export default EditPage;