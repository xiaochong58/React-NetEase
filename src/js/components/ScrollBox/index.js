import React from "react"
import ReactIScroll from "react-iscroll"
import {Loading, NotData} from "../"
import iScroll from "iscroll/build/iscroll-probe"
import _ from 'lodash'
// 相关API查询 https://github.com/schovi/react-iscroll
// 相关API查询 http://iscrolljs.com/

export default class index extends React.PureComponent {
  options = {
    mouseWheel: true,
    scrollbars: true,
    freeScroll: false,
    invertWheelDirection: false,
    // 滑动反向

    click: true,
    // 滑动不触发点击事件

    momentum: true
    // 滑动惯性开启
  };

  style = {
    position: 'absolute',
    width: '100%',
    top: '0',
    bottom: '0',
    overflow: 'hidden'
  };

  onScrollEnd = e => {
    if (e.y <= e.maxScrollY + 50) {
      this.props.loadMore()
    }
  };

  render() {
    const {children, options, dataNoMore, ifNoData} = this.props;
    return (
      <ReactIScroll
        iScroll={iScroll}
        style={this.style}
        options={Object.assign({}, this.options, options)}
        onScrollEnd={_.debounce(this.onScrollEnd, 100)}
      >
        <div>
          <div>
            {children}
          </div>
          {
            dataNoMore
            ? (children ? <NotData text="没有更多数据啦！"/> : <NotData text={ifNoData}/>)
            : <Loading />
          }
        </div>
      </ReactIScroll>
    )
  }
}
