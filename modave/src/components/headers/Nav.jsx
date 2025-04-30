import { Link, useLocation } from "react-router-dom";
import React from "react";

import { products } from "@/data/products";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard1 from "../productCards/ProductCard1";
import {
  demoItems,
  otherPageLinks,
  shopFeatures,
} from "@/data/menu";

export default function Nav() {
  const { pathname } = useLocation();
  return (
    <>
      {" "}
      <li
        className={`menu-item ${
          [...demoItems].some(
            (elm) => elm.href.split("/")[1] == pathname.split("/")[1]
          )
            ? "active"
            : ""
        } `}
      >
        <a href="/home-electronic" className="item-link">
          Home
          {/* <i className="icon icon-arrow-down" /> */}
        </a>
        {/* <div className="sub-menu mega-menu">
          <div className="container">
            <div className="row-demo">
              {demoItems.slice(0, 12).map((item, index) => (
                <div
                  className={`demo-item ${
                    pathname.split("/")[1] === item.href.split("/")[1]
                      ? "active"
                      : ""
                  }`}
                  key={item.href}
                >
                  <Link to={item.href}>
                    <div className="demo-image position-relative">
                      <img
                        className="lazyload"
                        data-src={item.src}
                        alt={item.alt}
                        src={item.src}
                        width={273}
                        height={300}
                      />
                      {item.label.length > 0 && (
                        <div className="demo-label">
                          {item.label.map((label, labelIndex) => (
                            <span
                              key={labelIndex}
                              className={`demo-${label.toLowerCase()}`}
                            >
                              {label}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <span className="demo-name">{item.name}</span>
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-center view-all-demo">
              <a href="#modalDemo" data-bs-toggle="modal" className="tf-btn">
                <span className="text">View All Demos</span>
              </a>
            </div>
          </div>
        </div> */}
      </li>
      {/*  shop root */}
      <li
        className={`menu-item ${
          pathname.split("/")[1] === "categories-top-1" ? "active" : ""
        }`}
      >
        <a href="/shop-categories-top" className="item-link">
          Shop
        </a>
      </li>
      {/*  product root */}
      <li className="menu-item">
        <a href="/home-electronic" className="item-link">
          Products
        </a>
      </li>
      {/* <li
        className={`menu-item position-relative ${
          [...blogLinks].some(
            (elm) => elm.href.split("/")[1] == pathname.split("/")[1]
          )
            ? "active"
            : ""
        } `}
      >
        <a href="#" className="item-link">
          Blog
          <i className="icon icon-arrow-down" />
        </a> <div className="sub-menu submenu-default">
          <ul className="menu-list">
            {blogLinks.map((link, index) => (
              <li
                key={index}
                className={`menu-item-li ${
                  pathname.split("/")[1] == link.href.split("/")[1]
                    ? "active"
                    : ""
                } `}
              >
                <Link to={link.href} className="menu-link-text">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div> 
      </li> */}
      <li
        className={`menu-item position-relative ${
          [...otherPageLinks].some(
            (elm) => elm.href.split("/")[1] == pathname.split("/")[1]
          )
            ? "active"
            : ""
        } `}
      >
        <a href="/about-us" className="item-link">
          About Us
          {/* <i className="icon icon-arrow-down" /> */}
        </a>
        {/* <div className="sub-menu submenu-default">
          <ul className="menu-list">
            {otherPageLinks.map((link, index) => (
              <li
                key={index}
                className={`menu-item-li ${
                  pathname.split("/")[1] == link.href.split("/")[1]
                    ? "active"
                    : ""
                } `}
              >
                <Link to={link.href} className="menu-link-text">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div> */}
      </li>
      <li className="menu-item">
        <a href="/contact-02" className="item-link">
          Contact Us
        </a>
      </li>
    </>
  );
}
