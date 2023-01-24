import React from 'react'
import styled, { createGlobalStyle } from "styled-components";

export default function Arrow() {
  return (
    <ArrowSvg  width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M1 1L5 5L1 9" stroke="white"/>
</ArrowSvg>

  )
}

const ArrowSvg = styled.svg`
@media (width > 767px){
  display: none
}
  

`





