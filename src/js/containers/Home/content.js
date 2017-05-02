import React from 'react'
import {Bar, Post, LoveBtn} from 'app/components'

export default class index extends React.Component {
  state = {
    data:{
      title: '善良大方空间啊楼上的房间阿三地方了健康',
      source: '环球时报-环球网',
      date: '2017-04-06 12:34',
      content: '受到法律阿斯兰地方空间啊访客数量单价啊来福士的空间啊说服力的空间啊法律上的困境螺丝扣搭街坊啊付款记录的'
    }
  };

  render() {
    const {history} = this.props;
    const {data} = this.state;
    return (
      <div className="column-between full-height">
        <Bar history={history} />
        <div className="equal plr30 overflow-y">
          <h1 className="font-42 bold ptb30 line-height-paragraph">
            {data.title}
          </h1>
          <h3 className="font-24 c-aaa">
            <span style={{paddingRight:'3ch'}}>{data.source}</span>
            {data.date}
          </h3>
          <div
            className="font-36 line-height-paragraph ptb30"
            dangerouslySetInnerHTML={{__html: data.content}}
          />
          <LoveBtn />
        </div>
        <Post />
      </div>
    )
  }
}
