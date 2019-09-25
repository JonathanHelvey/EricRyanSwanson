import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../components/header.css"

const Header = ({ siteTitle }) => (
  <div>
    <header className="headerIMG">
      <div>
        <div className="hamdiv">
          <div>
            <button className="hamButton">
              <img
                className="hamburger"
                src={require("../data/social-icons/whitehamburger.jpg")}
                alt="hamburgerMenu"
              />
            </button>
          </div>
        </div>
        <div>
          <h1>
            <Link to="/" className="siteTitle">
              {siteTitle}
            </Link>
          </h1>
        </div>{" "}
        <img
          className="swanlogo"
          src={require("../data/assets/swanlogo2.png")}
        />
      </div>
    </header>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
