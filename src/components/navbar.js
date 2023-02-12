import {React , useState }from "react";
import "../styles/navbar.css";
import { CgProfile} from "react-icons/cg";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

const Navbar = ({ setShow, size }) => {
    
  return (
    <nav> 
      <div className="nav_box">
      
        <span className="my_shop" onClick={() => setShow(true)}>
          Amazon
        </span>
        <div className="loginicon">
          <span ><Link to='/login' className="login"><CgProfile/></Link></span>
        </div>
        
        <div className="cart" onClick={() => setShow(false)}>
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
        <div><HamburgerMenu /></div>
      </div>
    </nav>
  );
};

export default Navbar;
