import React from 'react'
import {Bar} from 'app/components'

export default class index extends React.Component {
  state = {

  };

  render() {
    const {history} = this.props;
    return (
      <div className="column-between">
        <Bar history={history} />
        <span className="example-enter">1334</span>
      </div>
    )
  }
}
