import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useState } from "react";
import logo from "../../assets/image/logo.png";
import mega1 from "../../assets/image/mega-shop.webp";
import mega2 from "../../assets/image/mega-shop-2.webp";
import blog1 from "../../assets/image/blog-1.webp";
import blog2 from "../../assets/image/blog-2.webp";

import {
  FaSearch,
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaAngleDown,
} from "react-icons/fa";

import "./header.css";

function Header() {
  const [active, setActive] = useState(null);

  return (
    <Navbar expand="md" className="custom-navbar py-3">
      <Container>
        <Navbar.Brand href="#" className="d-flex align-items-center gap-2">
          <img src={logo} width="120" alt="logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="mx-auto gap-4">

            {/* SHOP */}
            <NavDropdown
              title={<span>Shop <FaAngleDown size={12} /></span>}
              id="shop"
              show={active === "shop"}
              onMouseEnter={() => window.innerWidth > 768 && setActive("shop")}
              onMouseLeave={() => window.innerWidth > 768 && setActive(null)}
              className="mega-dropdown"
            >
              <Container className="mega-menu">
                <div className="row">
                  <div className="col-md-3">
                    <img src={mega1} alt="promo" className="mega-img" />
                  </div>
                  <div className="col-md-3">
                    <img src={mega2} alt="promo" className="mega-img" />
                  </div>
                </div>
              </Container>
            </NavDropdown>

            {/* BLOG */}
            <NavDropdown
              title={<span>Blog <FaAngleDown size={12} /></span>}
              id="blog"
              show={active === "blog"}
              onMouseEnter={() => window.innerWidth > 768 && setActive("blog")}
              onMouseLeave={() => window.innerWidth > 768 && setActive(null)}
              className="mega-dropdown"
            >
              <Container className="mega-menu">
                <div className="row">
                  <div className="col-md-6">
                    <div className="blog-card mb-4">
                      <img src={blog1} alt="blog" />
                      <div className="blog-overlay">
                        <span>BUSINESS TIPS</span>
                        <h5>THE BEST ICE CREAM YOU’LL NEVER EAT</h5>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="blog-card">
                      <img src={blog2} alt="blog" />
                      <div className="blog-overlay">
                        <span>BUSINESS TIPS</span>
                        <h5>FANCY FIGS? MAKE THIS ICE CREAM</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </Container>
            </NavDropdown>

          </Nav>

          {/* Right Icons */}
          <div className="nav-icons d-none d-md-flex gap-3 mt-3 mt-md-0">
            <FaSearch />
            <FaUser />
            <FaHeart />
            <FaShoppingCart />
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
