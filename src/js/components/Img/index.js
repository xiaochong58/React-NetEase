import React from "react"
import s from "./index.scss"

export default (data) =>
  <div style={data.style} className={s.root}>
    <img src={data.imgUrl} alt={data.imgAlt? data.imgAlt : ''}/>
  </div>
