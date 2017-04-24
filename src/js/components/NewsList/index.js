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
  if(data.images.length === 3){
    item = <div>
      <div className={s.titleOther}>{data.title}</div>
      <div className={s.box}>
        {data.images.map((item, index) => <Img
          key={index}
          imgWrapClass={s.imgWrap}
          imgClass={s.img}
          imgUrl={item}
        />)}
      </div>
      <div className={s.footOther}>
        <span>{data.tag || ''}</span>
        <span>{data.comments_num}跟帖</span>
      </div>
    </div>
  }
  return (
    <Link to={`/content/${data.id}`} className={s.root}>
      {item}
    </Link>
  )
}
