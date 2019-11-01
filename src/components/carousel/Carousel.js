/* eslint-disable react/no-array-index-key */
import React from "react"

import { StyledCarousel } from "../carousel/Carousel.styled.js"

const Carousel = ({ siteTitle }) => {
  return (
    <StyledCarousel>
      <div>
        <img
          src={require("../../data/images/EricBanner1.jpg")}
          alt="EricRyanSwanson"
        />
      </div>
    </StyledCarousel>
  )
}

Carousel.defaultProps = {
  siteTitle: ``,
}

export default Carousel
