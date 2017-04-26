import React from 'react'
import {Link} from 'react-router-dom'
import {Img} from '../index'
import s from './index.scss'

export default (data) => {
  let item;
  if(data.images.length === 1){
    item = <div className="flex">
      <Img
        style={{width:'2.7rem', height:'1.28rem', backgroundSize:'0.9rem auto', marginRight:'0.27rem'}}
        imgUrl={data.images[0]}
      />
      <div className={s.right}>
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
          style={{flex:'1', backgroundSize:'1rem auto', marginRight: '0.2rem'}}
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
    <Link to={`/content/${data.id}`} className="block bg-default ptb18 plr20 border-bottom">
      {item}
    </Link>
  )
}
