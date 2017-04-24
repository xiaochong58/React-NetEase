import React from "react"
import s from "./index.scss"

export default ({history}) => {
  function goBack() {
    history.action === 'PUSH' ? history.go(-1) : history.push('')
  }

  return (
    <div className={s.root}>
      <i onClick={goBack} className={`i-arrow-left ${s.ico}`} />
      <div className={s.right}>311跟帖</div>
    </div>
  )
}

