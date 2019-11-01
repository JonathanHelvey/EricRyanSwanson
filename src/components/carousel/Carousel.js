import React from "react"
import { Link } from "gatsby"
import { StyledCarousel } from "../carousel/Carousel.styled.js"

const Carousel = ({ siteTitle }) => {
  return (
    <StyledCarousel>
      <div>
        <img
          src={require("../../data/images/EricBanner1.jpg")}
          alt="EricRyanSwanson"
        />
        <h1>
          <Link to="/" className="siteTitle">
            Eric {siteTitle}
          </Link>
        </h1>
      </div>
    </StyledCarousel>
  )
}

export default Carousel
