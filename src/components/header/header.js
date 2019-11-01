/* eslint-disable react/no-array-index-key */
// eslint-disable-next-line react/no-array-index-key
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useRef } from "react"
import { useOnClickOutside } from "../hooks/ClickOutside"
import "../../components/header/header.css"
import BurgerMenu from "../../components/burger/Burger"
import Menu from "../../components/menu/Menu"
import Carousel from "../carousel/Carousel"

const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))
  return (
    <div>
      {/* <div style={{ height: "1rem", backgroundColor: "black" }}></div> */}
      <header className="headerIMG">
        <div className="hamdiv">
          <div ref={node}>
            <Carousel />
            <BurgerMenu open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
          </div>
        </div>
        <div>
          <h1>
            <Link to="/" className="siteTitle">
              {siteTitle}
              <img
                className="swanlogo"
                src={require("../../data/assets/swanlogo2.png")}
                alt="swanlogo"
              />
            </Link>
          </h1>
        </div>
      </header>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
