import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Menu = () => {
  const menus = [
    {
      name: "Buy Magazine",
      link: "/buyMagazine",
    },
    {
      name: "Youtube",
      link: "https://www.youtube.com/@dewaymedia5354",
    },
  ];
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <header id="header">
      <div className="container">
        {/* nav */}
        <div className="d-none d-md-block">
          <div className="d-flex justify-content-between align-items-center">
            <Link to="/">
              <img className="logo" src="/images/logo.png" alt="" />
            </Link>
            <nav>
              <ul>
                <li className="nav-item">
                  <Link className="text-decoration-none" to="/">
                    Home
                  </Link>
                </li>
                {menus.map((menu, index) => (
                  <li className="nav-item" key={index} onClick={handleClose}>
                    <Link
                      className="text-decoration-none"
                      target="_blank"
                      rel="noreferrer"
                      to={menu.link}
                    >
                      {menu.name}
                    </Link>
                  </li>
                ))}

                <li>
                  <button className="nav-subscribe-btn effect">
                    <Link
                      className="text-decoration-none"
                      style={{ color: "white" }}
                      to="/buyMagazine"
                      target="_blank"
                    >
                      Buy Magazine
                    </Link>
                  </button>
                </li>
              </ul>

              <div className="blue-circle"></div>
            </nav>
          </div>
        </div>

        {/* mobile nav */}
        <div className="d-md-none">
          <div className="d-flex justify-content-between align-items-center">
            <Link to="/">
              <img className="logo" src="/images/logo.png" alt="" />
            </Link>
            <button id="mobile-nav-toggler" onClick={handleShow}>
              <img src="/images/menu.png" width="20px" alt="" />
            </button>
          </div>
          <>
            <Offcanvas
              show={show}
              onHide={handleClose}
              placement="end"
              className="d-md-none"
            >
              <Offcanvas.Header className="border-bottom">
                <Offcanvas.Title>Menu</Offcanvas.Title>
                <img
                  onClick={handleClose}
                  src="/images/cancel.png"
                  width="20px"
                  alt=""
                />
              </Offcanvas.Header>
              <Offcanvas.Body>
                <nav id="mobile-nav">
                  <ul className="mobile-nav-ul">
                    <li className="nav-item" onClick={handleClose}>
                      <Link className="text-decoration-none" to="/">
                        Home
                      </Link>
                    </li>
                    {menus.map((menu, index) => (
                      <li
                        className="nav-item"
                        key={index}
                        onClick={handleClose}
                      >
                        <Link
                          className="text-decoration-none"
                          target="_blank"
                          rel="noreferrer"
                          to={menu.link}
                        >
                          {menu.name}
                        </Link>
                      </li>
                    ))}

                    <li>
                      <button className="nav-subscribe-btn ">
                        {" "}
                        <Link
                          className="text-decoration-none"
                          style={{ color: "white" }}
                          to="/buyMagazine"
                          target="_blank"
                        >
                          Buy Magazine
                        </Link>
                      </button>
                    </li>
                  </ul>
                </nav>
              </Offcanvas.Body>
            </Offcanvas>
          </>
        </div>
      </div>
    </header>
  );
};

export default Menu;
