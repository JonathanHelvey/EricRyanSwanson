/* eslint-disable react/no-array-index-key */
// eslint-disable-next-line react/no-array-index-key

import PropTypes from "prop-types"
import { Link } from "gatsby"
import React, { useState, useRef } from "react"
import { useOnClickOutside } from "../hooks/ClickOutside"
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from "../../global"
import { theme } from "../../theme"
import BurgerMenu from "../../components/burger/Burger"
import Menu from "../../components/menu/Menu"
import Carousel from "../carousel/Carousel"

const Header = ({ siteTitle }) => {
  const [open, setOpen] = useState(false)
  const node = useRef()
  useOnClickOutside(node, () => setOpen(false))
  return (
    <div>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <header>
            <div>
              <div ref={node}>
                <Carousel />
                <BurgerMenu open={open} setOpen={setOpen} />
                <Menu open={open} setOpen={setOpen} />
              </div>
              <h1>
                <Link to="/" className="siteTitle">
                  Eric {siteTitle}
                </Link>
              </h1>
            </div>
          </header>
        </>
      </ThemeProvider>
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
