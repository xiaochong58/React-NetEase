import React from 'react'
import s from './index.scss'


export default class index extends React.PureComponent {
  state={
    focus: false,
    hasValue: false
  };

  onFocus = () => {
    this.setState({focus: true})
  };

  onBlur = () => {
    this.setState({focus: false})
  };

  onInput = (e) => {
    const hasValue = !!e.target.value.trim();
    this.setState({hasValue: hasValue});
  };
  render() {
    const {focus, hasValue} = this.state;
    return (
      <div style={{height: '1.12rem'}} className="bg-f4 border-top plr30 flex align-items-center">
        <div className={`equal mr20 relative ${(focus || hasValue) ? '' : s.box}`}>
          <input
            className={`equal font-34 bg-f4 reset width100 ${(focus || hasValue) ? s.inputActive : s.input}`}
            placeholder={focus ? "" : "写跟帖"}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onInput={this.onInput}
          />
        </div>
        {
          !focus && !hasValue && <i className="i-chat font-28 c-main mr10" />
        }
        {
          !focus && !hasValue &&
          <span
            style={{marginBottom:'0.06rem'}}
            className="font-28 c-main"
          >26455</span>
        }
        {
          (focus || hasValue) &&
          <button
            className={`reset font-34 bg-f4 ${hasValue ? 'c-active' : 'c-aaa'}`}
            onClick={() => alert('发帖！')}
          >发送</button>
        }
      </div>
    )
  }
}

