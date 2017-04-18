import React from 'react'
import {Link} from 'react-router-dom'
import {Img} from '../index'
import s from './index.scss'

export default (data) => {
  let item;
  if(data.images.length === 1){
    item = <div className={s.box}>
      <Img
        imgWrapClass={s.singleImgWrap}
        imgClass={s.singleImg}
        imgUrl={data.images[0]}
      />
      <div className={s.right}>
        <div className={s.title}>{data.title}</div>
        <div className={s.foot}>
          <span>{data.tag || ''}</span>
          <span>{data.comments_num}跟帖</span>
        </div>
      </div>
    </div>
  }
  return (
    <Link to={data.link} className={s.root}>
      {item}
    </Link>
  )
}
