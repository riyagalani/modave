import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useContextElement } from "@/context/Context";
import CountdownTimer from "../common/Countdown";
export default function ProductCard3({ product }) {
  const [currentImage, setCurrentImage] = useState(product.imgSrc);

  const {
    setQuickAddItem,
    addToWishlist,
    isAddedtoWishlist,
    addToCompareItem,
    isAddedtoCompareItem,
    setQuickViewItem,
    addProductToCart,
    isAddedToCartProducts,
  } = useContextElement();

  useEffect(() => {
    setCurrentImage(product.imgSrc);
  }, [product]);
  return (
    <div
      className={`card-product wow fadeInUp ${
        product.isOnSale ? "on-sale" : ""
      } ${product.sizes ? "card-product-size" : ""}`}
    >
      <div className="card-product-wrapper">
        <Link to={`/product-detail/${product.id}`} className="product-img">
          <img
            className="lazyload img-product"
            src={currentImage}
            alt={product.title}
            width={600}
            height={800}
          />
          <img
            className="lazyload img-hover"
            src={product.imgHover}
            alt={product.title}
            width={600}
            height={800}
          />
        </Link>
        {product.hotSale && (
          <div className="marquee-product bg-main">
            <div className="marquee-wrapper">
              <div className="initial-child-container">
                <div className="marquee-child-item">
                  <p className="font-2 text-btn-uppercase fw-6 text-white">
                    Hot Sale 25% OFF
                  </p>
                </div>
                <div className="marquee-child-item">
                  <span className="icon icon-lightning text-critical" />
                </div>
                <div className="marquee-child-item">
                  <p className="font-2 text-btn-uppercase fw-6 text-white">
                    Hot Sale 25% OFF
                  </p>
                </div>
                <div className="marquee-child-item">
                  <span className="icon icon-lightning text-critical" />
                </div>
                <div className="marquee-child-item">
                  <p className="font-2 text-btn-uppercase fw-6 text-white">
                    Hot Sale 25% OFF
                  </p>
                </div>
                <div className="marquee-child-item">
                  <span className="icon icon-lightning text-critical" />
                </div>
                <div className="marquee-child-item">
                  <p className="font-2 text-btn-uppercase fw-6 text-white">
                    Hot Sale 25% OFF
                  </p>
                </div>
                <div className="marquee-child-item">
                  <span className="icon icon-lightning text-critical" />
                </div>
                <div className="marquee-child-item">
                  <p className="font-2 text-btn-uppercase fw-6 text-white">
                    Hot Sale 25% OFF
                  </p>
                </div>
                <div className="marquee-child-item">
                  <span className="icon icon-lightning text-critical" />
                </div>
              </div>
            </div>
            <div className="marquee-wrapper">
              <div className="initial-child-container">
                <div className="marquee-child-item">
                  <p className="font-2 text-btn-uppercase fw-6 text-white">
                    Hot Sale 25% OFF
                  </p>
                </div>
                <div className="marquee-child-item">
                  <span className="icon icon-lightning text-critical" />
                </div>
                <div className="marquee-child-item">
                  <p className="font-2 text-btn-uppercase fw-6 text-white">
                    Hot Sale 25% OFF
                  </p>
                </div>
                <div className="marquee-child-item">
                  <span className="icon icon-lightning text-critical" />
                </div>
                <div className="marquee-child-item">
                  <p className="font-2 text-btn-uppercase fw-6 text-white">
                    Hot Sale 25% OFF
                  </p>
                </div>
                <div className="marquee-child-item">
                  <span className="icon icon-lightning text-critical" />
                </div>
                <div className="marquee-child-item">
                  <p className="font-2 text-btn-uppercase fw-6 text-white">
                    Hot Sale 25% OFF
                  </p>
                </div>
                <div className="marquee-child-item">
                  <span className="icon icon-lightning text-critical" />
                </div>
                <div className="marquee-child-item">
                  <p className="font-2 text-btn-uppercase fw-6 text-white">
                    Hot Sale 25% OFF
                  </p>
                </div>
                <div className="marquee-child-item">
                  <span className="icon icon-lightning text-critical" />
                </div>
              </div>
            </div>
          </div>
        )}
        {product.isOnSale && (
          <div className="on-sale-wrap">
            <span className="on-sale-item">-{product.salePercentage}</span>
          </div>
        )}
        {product.sizes && (
          <div className="variant-wrap size-list">
            <ul className="variant-box">
              {product.sizes.map((size) => (
                <li key={size} className="size-item">
                  {size}
                </li>
              ))}
            </ul>
          </div>
        )}
        {product.countdown && (
          <div className="variant-wrap countdown-wrap">
            <div className="variant-box">
              <div
                className="js-countdown"
                data-timer={product.countdown}
                data-labels="D :,H :,M :,S"
              >
                <CountdownTimer />
              </div>
            </div>
          </div>
        )}
  
      </div>
      <div className="card-product-info">
        <Link to={`/product-detail/${product.id}`} className="title link">
          {product.title}
        </Link>
        <div className="box-rating">
          <ul className="list-star">
            {Array.from({ length: product.rating }).map((_, i) => (
              <li key={i} className="icon icon-star" />
            ))}
          </ul>
          <span className="text-caption-1 text-secondary"></span>
        </div>
        <span className="price">
          {product.oldPrice && (
            <span className="old-price">${product.oldPrice.toFixed(2)}</span>
          )}{" "}
          ${product.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
