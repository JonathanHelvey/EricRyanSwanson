/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from "react"

import { StyledCarousel } from "../carousel/Carousel.styled.js"

const Carousel = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `You clicked ${count} times`
  })
  return (
    <StyledCarousel>
      <div>
        <img
          src={require("../../data/images/EricBanner1.jpg")}
          alt="EricRyanSwanson"
        />
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    </StyledCarousel>
  )
}

Carousel.defaultProps = {
  siteTitle: ``,
}

export default Carousel
