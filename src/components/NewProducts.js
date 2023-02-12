import "../images/lbs2.jpeg";
import React from 'react';
import Carousel from 'react-grid-carousel';
import lbs4 from '../images/lbs2.jpeg';
import "../styles/CarProducts.css"
import { Fragment } from "react";

const NewProducts=({item,handleClick })=>{
   
    return(<Fragment>
        <h1>newest</h1>
        {/* containerStyle={{width:"100vw"}} */}
        <Carousel  cols={5} rows={1} gap={5} loop showDots={true} autoplay={3000} arrowLeft={true}>
            <Carousel.Item>
            
            
            <div className="item">
                <div> <img width="250px" src={lbs4} alt="first slide"/></div>
                <div className="info">
                    <span>Code : 11</span>
                    <span>&75574</span>
                </div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
           
            <div className="item">
                <div> <img width="250px" src={lbs4} alt="first slide"/></div>
                <div className="info">
                    <span>Code : 12</span>
                    <span>&75574</span>
                </div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="item">
                <div> <img width="250px" src={lbs4} alt="first slide"/></div>
                <div className="info">
                    <span>Code : 13</span>
                    <span>&75574</span>
                </div>
            </div>
            </Carousel.Item>
        <Carousel.Item>
            <div className="item">
                <div> <img width="250px" src={lbs4} alt="first slide"/></div>
                <div className="info">
                    <span>Code : 14</span>
                    <span>&75574</span>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="item">
                <div> <img width="250px" src={lbs4} alt="first slide"/></div>
                <div className="info">
                    <span>Code : 15</span>
                    <span>&75574</span>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="item">
                <div> <img width="250px" src={lbs4} alt="first slide"/></div>
                <div className="info">
                    <span>Code : 16</span>
                    <span>&75574</span>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="item">
                <div> <img width="250px" src={lbs4} alt="first slide"/></div>
                <div className="info">
                    <span>Code : 17</span>
                    <span>&75574</span>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="item">
                <div> <img width="250px" src={lbs4} alt="first slide"/></div>
                <div className="info">
                    <span>Code : 18</span>
                    <span>&75574</span>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="item">
                <div> <img width="250px" src={lbs4} alt="first slide"/></div>
                <div className="info">
                    <span>Code : 19</span>
                    <span>&75574</span>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="item">
                <div> <img width="250px" src={lbs4} alt="first slide"/></div>
                <div className="info">
                    <span>Code : 20</span>
                    <span>&75574</span>
                </div>
            </div>
        </Carousel.Item>
        
      </Carousel></Fragment>
    )
}
export default NewProducts;