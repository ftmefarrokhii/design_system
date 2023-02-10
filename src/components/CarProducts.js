import "../images/lbs2.jpeg";
import React from 'react';
import Carousel from 'react-grid-carousel';
import lbs4 from '../images/lbs2.jpeg';
import "../styles/CarProducts.css"
const CarProducts=()=>{
    
    return(
        <Carousel containerStyle={{width:"100vw"}} cols={5} rows={1} gap={5} loop showDots={true} autoplay={3000} arrowLeft={true}>
            <Carousel.Item>
            <div className="item">
                <div> <img width="250px" src={lbs4} alt="first slide"/></div>
                <div className="info">
                    <span>11</span>
                    <span>&75574</span>
                    <button>add to cart</button>
                </div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="item">
                <div> <img width="250px" src={lbs4} alt="first slide"/></div>
                <div className="info">
                    <span>12</span>
                    <span>&75574</span>
                </div>
            </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="item">
                <div> <img width="250px" src={lbs4} alt="first slide"/></div>
                <div className="info">
                    <span>13</span>
                    <span>&75574</span>
                </div>
            </div>
            </Carousel.Item>
        <Carousel.Item>
            <div className="item">
                <div> <img width="250px" src={lbs4} alt="first slide"/></div>
                <div className="info">
                    <span>14</span>
                    <span>&75574</span>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="item">
                <div> <img width="250px" src={lbs4} alt="first slide"/></div>
                <div className="info">
                    <span>15</span>
                    <span>&75574</span>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="item">
                <div> <img width="250px" src={lbs4} alt="first slide"/></div>
                <div className="info">
                    <span>16</span>
                    <span>&75574</span>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="item">
                <div> <img width="250px" src={lbs4} alt="first slide"/></div>
                <div className="info">
                    <span>17</span>
                    <span>&75574</span>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="item">
                <div> <img width="250px" src={lbs4} alt="first slide"/></div>
                <div className="info">
                    <span>18</span>
                    <span>&75574</span>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="item">
                <div> <img width="250px" src={lbs4} alt="first slide"/></div>
                <div className="info">
                    <span>19</span>
                    <span>&75574</span>
                </div>
            </div>
        </Carousel.Item>
        <Carousel.Item>
            <div className="item">
                <div> <img width="250px" src={lbs4} alt="first slide"/></div>
                <div className="info">
                    <span>20</span>
                    <span>&75574</span>
                </div>
            </div>
        </Carousel.Item>
        
      </Carousel>
    )
}
export default CarProducts;