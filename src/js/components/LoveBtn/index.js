import React from 'react'

export default class index extends React.PureComponent {
  state={
    isLove: false
  };

  onLove = () => {
    this.setState((preState, props) => ({isLove: !preState.isLove}))
  };

  render() {
    const {isLove} = this.state;
    return (
      <div
        style={{width:'3.6rem', height:'0.84rem'}}
        className={`radius-10 center-center font-32 margin-auto ${isLove ? 'bg-f8 c-main border-all' : 'bg-main c-white'}`}
        onClick={this.onLove}
      >
        <i className={`i-love pr10 ${isLove ? 'bounceIn' : ''}`} /> 111人喜欢
      </div>
    )
  }
}