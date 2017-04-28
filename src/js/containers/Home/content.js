import React from 'react'
import {Bar} from 'app/components'

export default class index extends React.Component {
  state = {

  };

  render() {
    const {history} = this.props;
    return (
      <div className="column-between full-height">
        <Bar history={history} />
        <div className="equal plr30 bg-default overflow-y">
          <h1 className="font-42 bold ptb30 line-height-paragraph">
            舍得浪费空间啊士大舍得浪费空间啊士大夫看见了
          </h1>
          <h3 className="font-24 c-aaa"><span style={{paddingRight:'3ch'}}>环球时报-环球网</span>2017-04-06 12:34</h3>

        </div>
        <div>底部</div>
      </div>
    )
  }
}
