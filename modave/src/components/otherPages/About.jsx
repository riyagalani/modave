import React, { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <section className="flat-spacing about-us-main pb_0">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="about-us-features wow fadeInLeft">
              <img
                className="lazyload"
                data-src="/images/section/about.jpg"
                alt="image-team"
                src="/images/section/about.jpg"
                width={930}
                height={618}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-us-content">
              <h3 className="title wow fadeInUp">
              Welcome to Purchase Bazar — your all-in-one online shopping destination.
              </h3>
              <div className="widget-tabs style-3">
                <ul className="widget-menu-tab wow fadeInUp">
                  <li
                    className={`item-title ${activeTab == 1 ? "active" : ""} `}
                    onClick={() => setActiveTab(1)}
                  >
                    <span className="inner text-button">Introduction</span>
                  </li>
                  {/* <li
                    className={`item-title ${activeTab == 2 ? "active" : ""} `}
                    onClick={() => setActiveTab(2)}
                  >
                    <span className="inner text-button">Our Vision</span>
                  </li>
                  <li
                    className={`item-title ${activeTab == 3 ? "active" : ""} `}
                    onClick={() => setActiveTab(3)}
                  >
                    <span className="inner text-button">
                      What Sets Us Apart
                    </span>
                  </li>
                  <li
                    className={`item-title ${activeTab == 4 ? "active" : ""} `}
                    onClick={() => setActiveTab(4)}
                  >
                    <span className="inner text-button">Our Commitment</span>
                  </li> */}
                </ul>
                <div className="widget-content-tab wow fadeInUp">
                  <div
                    className={`widget-content-inner ${
                      activeTab == 1 ? "active" : ""
                    } `}
                  >
                    <p>
                    At Purchase Bazar, we believe shopping should be simple, exciting, and accessible to everyone. That’s why we’ve created a platform where you can find everything you need, from the latest electronics and stylish apparel to home essentials, health products, and more — all in one place. <br/>
                    </p>
                  </div>
                  <div
                    className={`widget-content-inner ${
                      activeTab == 2 ? "active" : ""
                    } `}
                  >
                    <p> 
                      Welcome to Modave Store, your premier destination for
                      fashion-forward clothing and accessories. We pride
                      ourselves on offering a curated selection of rare and
                      beautiful items sourced both locally and globally. Our
                      mission is to bring you the latest trends and timeless
                      styles, ensuring every piece reflects quality and
                      elegance. Discover the perfect addition to your wardrobe
                      at Modave Store.
                    </p>
                  </div>
                  <div
                    className={`widget-content-inner ${
                      activeTab == 3 ? "active" : ""
                    } `}
                  >
                    <p>
                      Welcome to Modave Store, your premier destination for
                      fashion-forward clothing and accessories. We pride
                      ourselves on offering a curated selection of rare and
                      beautiful items sourced both locally and globally. Our
                      mission is to bring you the latest trends and timeless
                      styles, ensuring every piece reflects quality and
                      elegance. Discover the perfect addition to your wardrobe
                      at Modave Store.
                    </p>
                  </div>
                  <div
                    className={`widget-content-inner ${
                      activeTab == 4 ? "active" : ""
                    } `}
                  >
                    <p>
                      Welcome to Modave Store, your premier destination for
                      fashion-forward clothing and accessories. We pride
                      ourselves on offering a curated selection of rare and
                      beautiful items sourced both locally and globally. Our
                      mission is to bring you the latest trends and timeless
                      styles, ensuring every piece reflects quality and
                      elegance. Discover the perfect addition to your wardrobe
                      at Modave Store.
                    </p>
                  </div>
                </div>
              </div>
              <a href="#" className="tf-btn btn-fill wow fadeInUp">
                <span className="text text-button">Read More</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
