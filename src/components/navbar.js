import {React , useState }from "react";
import "../styles/navbar.css";
import { BsSearch } from "react-icons/bs";
import { CgProfile} from "react-icons/cg";
import { Link } from "react-router-dom";
import list from "../data";
import Cards from "./card";
// import Offcanvas from 'react-bootstrap/Offcanvas';
// import { GiHamburgerMenu} from "react-icons/gi";

const Navbar = ({ setShow, size }) => {
    // const [namayesh, setNamayesh] = useState(false);
    // const handleClose = () => setNamayesh(false);
    // const handleNamayesh = () => setNamayesh(true);
    const[searchTerm,setSearchTerm]=useState('');
    

  return (
    <nav>
      
      <div className="nav_box">
      
        <span className="my_shop" onClick={() => setShow(true)}>
          Amazon
        </span>
        <div className="loginicon">
          <span ><Link to='/login' className="login"><CgProfile/></Link></span>
        </div>
        {/* <div className="pro_searchdiv">
        <div className="loginicon">
          <span ><Link to='/login' className="login"><CgProfile/></Link></span>
        </div>
        <span>
          <div className="search_div">
          <BsSearch className="iconsearch"/>
          <input type="search" name="" className="searchinput" placeholder="search here..." onChange={event =>{setSearchTerm(event.target.value)}}></input>
          {searchTerm && 
          list.filter((item)=>{
            if(searchTerm ===''){return item}
            else if(item.title.toLowerCase().includes(searchTerm.toLowerCase())){return item}
            }).map((item) => {
            return (<Cards key={item.id} item={item}  />)
          })}
          {list.filter((item)=>{
                if(searchTerm ===''){return item}
                else if(item.title.toLowerCase().includes(searchTerm.toLowerCase())){return item}
            }).map((item) => {
                return (<Cards key={item.id} item={item}  />)
            })}
          </div> 
        </span>
        </div> */}
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>

          {/* <div className="rightheader">
                <button className="menubtn" onClick={handleNamayesh}><GiHamburgerMenu/></button>
                <Offcanvas show={namayesh} onHide={handleClose}>
                   <Offcanvas.Header closeButton>
                   <Offcanvas.Title>دسته بندی ها</Offcanvas.Title>
                   </Offcanvas.Header>
                     <Offcanvas.Body>
                     <div>shalvar</div>
                     <div>bsxjk</div>
                     </Offcanvas.Body>
                </Offcanvas>
                
            </div> */}
          
      </div>
    </nav>
  );
};

export default Navbar;
