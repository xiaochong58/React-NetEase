import React from "react"

export default ({history}) => {
  function goBack() {
    history.action === 'PUSH' ? history.go(-1) : history.push('')
  }

  return (
    <div
      className="bg-default between-center"
      style={{height:'1.08rem', padding:'0 0.54rem', borderBottom:'1px solid #d9d9d9'}}
    >
      <i onClick={goBack} className="i-arrow-left font-40 c-666" />
      <div className="radius-4 bg-main ptb12 plr20 font-30 c-white line-height-single">311跟帖</div>
    </div>
  )
}

