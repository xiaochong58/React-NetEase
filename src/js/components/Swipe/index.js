import React from "react"
import {Link} from "react-router-dom"
import {Img} from '../index'
import Slider from 'react-slick'

const Item = ({data}) =>
  data.link.indexOf('http://') > -1 ?
    <a href={data.link} className="relative block">
      <Img style={{backgroundSize:'1.4rem auto'}} imgUrl={data.img} />
    </a> :
    <Link to={data.link} className="relative block">
      <Img style={{backgroundSize:'1.4rem auto'}} imgUrl={data.img} />
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
      <div className="relative">
        <span
          style={{height:'0.6rem', lineHeight:'0.6rem'}}
          className="absolute z-index10 bottom0 width100 plr20 c-white bg-rgba4">
          <em
            style={{paddingRight: '0.9rem'}}
            className="text-overflow-1">
            {this.state.title}</em>
        </span>
        <Item data={data[0]} />
      </div>
      )
    }
    return (
      <div className="relative">
        <span
          style={{height:'0.6rem', lineHeight:'0.6rem'}}
          className="absolute z-index10 bottom0 width100 plr20 c-white bg-rgba4">
          <em
            style={{paddingRight: '0.9rem'}}
            className="text-overflow-1">
            {this.state.title}</em>
        </span>
        <Slider afterChange={this.afterChange} {...rest}>
          {data.map((item,index) => <div key={index}><Item data={item}/></div>)}
        </Slider>
      </div>
    )
  }
}
