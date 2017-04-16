import React from "react"
import s from "./index.scss"

export default (data) =>
  <div className={`${s.root} ${data.imgWrapClass ? data.imgWrapClass : ''}`}>
    <img src={data.imgUrl} className={`${s.img} ${data.imgClass}`} alt={data.imgAlt? data.imgAlt : ''}/>
  </div>
