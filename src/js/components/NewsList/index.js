import React from 'react'
import {Link} from 'react-router-dom'
import {Img} from '../index'

export default (data) => {
  let item;
  if(data.images.length === 1){
    item = <div className="flex">
      <Img
        wrapStyle={{backgroundSize:'0.9rem auto', marginRight:'0.27rem'}}
        imgStyle={{width:'1.7rem', height:'1.28rem'}}
        imgUrl={data.images[0]}
      />
      <div>
        <div
          style={{height: '0.8rem'}}
          className="c-text font-32 text-overflow-2 line-height-title mb10"
        >{data.title}</div>
        <div className="flex between font-24 c-999">
          <span>{data.tag || ''}</span>
          <span>{data.comments_num}跟帖</span>
        </div>
      </div>
    </div>
  }
  if(data.images.length === 3){
    item = <div>
      <div className="c-text font-32 text-overflow-2 line-height-title mb20">{data.title}</div>
      <div className="flex">
        {data.images.map((item, index) => <Img
          key={index}
          wrapStyle={{flex:'1', backgroundSize:'1rem auto', marginRight: (data.images.length-1 === index) ? "0" : '0.2rem'}}
          imgUrl={item}
        />)}
      </div>
      <div className="flex between font-24 c-999 pt12">
        <span>{data.tag || ''}</span>
        <span>{data.comments_num}跟帖</span>
      </div>
    </div>
  }
  return (
    <Link to={{pathname: `/content/${data.id}`, state:{myID:'fuck'}}} className="block ptb18 plr20 border-bottom">
      {item}
    </Link>
  )
}
