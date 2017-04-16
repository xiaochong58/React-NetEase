import React from "react"
import {Link} from "react-router-dom"
import {Img} from '../index'
import Slider from 'react-slick'
import s from './index.scss'

const Item = ({data}) =>
  data.link.indexOf('http://') > -1 ?
    <a href={data.link} className={s.link}>
      <Img imgWrapClass={s.imgWrap} imgClass={s.img} imgUrl={data.img} />
    </a> :
    <Link to={data.link} className={s.link}>
      <Img imgWrapClass={s.imgWrap} imgClass={s.img} imgUrl={data.img} />
    </Link>;


export default class Index extends React.PureComponent {
  state = {
    title:''
  };

  componentDidMount(){
    const {data} = this.props;
    this.setState(() => ({title: data[0].title || ''}))
  }

  afterChange = (i) => {
    const {data} = this.props;
    this.setState(() => ({title: data[i].title || ''}))
  };

  render() {
    const {data, ...rest} = this.props;
    if(data.length === 1) {
      return (
      <div className={s.root}>
        <span className={s.title}><em className={s.text}>{this.state.title}</em></span>
        <Item data={data[0]} />
      </div>
      )
    }
    return (
      <div className={s.root}>
        <span className={s.title}><em className={s.text}>{this.state.title}</em></span>
        <Slider afterChange={this.afterChange} {...rest}>
          {data.map((item,index) => <div key={index}><Item data={item}/></div>)}
        </Slider>
      </div>
    )
  }
}
