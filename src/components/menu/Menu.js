/* eslint-disable react/no-array-index-key */
import React from "react"
import { bool } from "prop-types"
import { StyledMenu } from "./Menu.styled"

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">Artist Bio</a>
      <a href="/">Videos</a>
      <a href="/">Photographs</a>
      <a href="/">Resume</a>
      <a href="/">Reviews</a>
      <a href="/">Links</a>
      <a href="/">Contact</a>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu
