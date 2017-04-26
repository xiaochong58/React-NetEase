import React from "react"
import s from "./index.scss"

export default (data) =>
  <div style={data.wrapStyle} className={s.root}>
    <img style={data.imgStyle} src={data.imgUrl} alt={data.imgAlt? data.imgAlt : ''}/>
  </div>
