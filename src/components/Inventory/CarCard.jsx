import React, { useState } from "react";
import "./CarCard.css"; // 等会给你 CSS

const CarCard = ({ car }) => {
    const [hover, setHover] = useState(false);
    const [imgIndex, setImgIndex] = useState(0);

    const nextImg = () => {
        setImgIndex((prev) => (prev + 1) % car.images.length);
    };

    const prevImg = () => {
        setImgIndex((prev) =>
            prev === 0 ? car.images.length - 1 : prev - 1
        );
    };

    return (
        <div
            className="car-card"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {/* 图片区域 */}
            <div className="car-image-wrapper">
                <img src={car.images[imgIndex]} className="car-image" />

                {hover && (
                    <>
                        <button className="arrow left" onClick={prevImg}>‹</button>
                        <button className="arrow right" onClick={nextImg}>›</button>
                    </>
                )}
            </div>

            {/* 信息区域 */}
            <div className="car-info">
                <div className="car-header">
                    <h2>{car.model}</h2>
                    <span className="price">¥{car.price.toLocaleString()}</span>
                </div>
                <div className="car-subtitle">{car.trim}</div>
                <div className="car-status">{car.status}</div>

                <div className="car-specs">
                    <div>{car.range} 公里（CLTC）</div>
                    <div>{car.topSpeed} 公里/小时 最高车速</div>
                    <div>{car.acceleration} 秒 百公里加速</div>
                </div>

                <ul className="feature-list">
                    {car.features.map((f, i) => (
                        <li key={i}>{f}</li>
                    ))}
                </ul>
            </div>

            {hover && (
                <button className="order-btn">
                    立即订购
                </button>
            )}
        </div>
    );
};

export default CarCard;
