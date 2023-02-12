import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { GiHamburgerMenu} from "react-icons/gi";
import { Link } from 'react-router-dom';
import "../styles/navbar.css";

const HamburgerMenu =()=>{
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return(
        <div className="rightheader">
                <button className="menubtn" onClick={handleShow}><GiHamburgerMenu/></button>
                <Offcanvas show={show} onHide={handleClose}>
                   <Offcanvas.Header closeButton>
                   <Offcanvas.Title>دسته بندی ها</Offcanvas.Title>
                   </Offcanvas.Header>
                     <Offcanvas.Body>
                     <Link to='/newest'><ul>newest</ul></Link>
                     <Link to='/bestselling'><ul >BestSelling</ul></Link>
                     </Offcanvas.Body>
                </Offcanvas>
                
            </div>
        
    )
}
export default HamburgerMenu;