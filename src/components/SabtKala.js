import { Fragment, useState } from "react";
import { Link ,useHistory} from "react-router-dom";
import list from "../data";
import Cards from "./card";

const SabtKala =()=>{
    let history = useHistory();
    const [image, setImage] = useState(null)

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

    const submithandler = e =>{
        e.preventDefault();
        console.log(list);
        list.push({id:id,title:title,code:code,price:price,amount:amount,img:image});        
    }

    return(
    <div className="file-upload">
        <h2 style={{textAlign:"center"}}>اطلاعات کالا را وارد کنید</h2>
        <form className="" encType= "multipart /form-data">
            <div className="custom-form-group" >
                <input className="forminput" type="text" name="id" placeholder="Enter Id..." value={id} onChange={handlechange}/>
            </div>
            <div className="custom-form-group" >
                <input className="forminput" type="text" name="title" placeholder="Enter Title..." value={title} onChange={handlechange}/>
            </div>
            <div className="custom-form-group">
                <input className="forminput" type="text" name="code" placeholder="Enter Code..." value={code} onChange={handlechange}/>
            </div>
            <div className="custom-form-group">
                <input className="forminput" type="text" name="price" placeholder="Enter Price..." value={price} onChange={handlechange}/>
            </div>
            <div className="custom-form-group">
                <input className="forminput" type="text" name="amount" placeholder="Enter Amount..." value={amount} onChange={handlechange}/>
            </div>

            <div className="custom-form-group">
                <input className="forminput" type="file" name="img" placeholder="image" value={imgtest} onChange={onImageChange}/>
                <img src={image} alt="preview image" />

            </div>

            

            <Link to='/register' ><button type="submit" onClick={submithandler} className="btn-submit">Submit</button></Link>
        </form>

        <button onClick={() => history.push('/')}>Back</button>

        
       
        
    </div>


    )
}

export default SabtKala;