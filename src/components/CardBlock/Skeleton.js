import React from "react"
import ContentLoader from "react-content-loader"
import styled from "./styled.module.css"


const CardLoader = () => (
  <ContentLoader 
    className={styled.skeletonCard}
    speed={2}
    width={225}
    height={380}
    viewBox="0 0 225 380"
    backgroundColor="#ecebeb"
    foregroundColor="#f3f3f3"
    
  >
    <rect x="0" y="0" rx="0" ry="0" width="225" height="210" /> 
    <rect x="9" y="227" rx="10" ry="10" width="90" height="50" /> 
    <rect x="127" y="228" rx="10" ry="10" width="85" height="50" /> 
    <rect x="9" y="293" rx="7" ry="7" width="205" height="20" /> 
    <rect x="9" y="324" rx="11" ry="11" width="205" height="47" />
  </ContentLoader>
)

export default CardLoader

