import React from 'react'
import {Nav, Brand, Swipe, NewsList} from 'app/components'
export default class index extends React.Component {
  state = {
    banners: [
      {
        img: 'http://placekitten.com/g/750/380',
        title: '澳洲发现最大恐龙脚化石',
        link: '/hot'
      },
      {
        img: 'http://placekitten.com/g/750/380',
        title: '日前朝鲜计划登陆太阳',
        link: '/hot'
      },{
        img: 'http://placekitten.com/g/750/380',
        title: '如果文本很长如果文本很长如果文本很长如果文本很长如果文本很长如果文本很长如果文本很长如果文本很长',
        link: '/hot'
      }
    ],
    news: [
      {
        id: 1,
        link: '/me',
        images: ['http://placekitten.com/g/170/125'],
        title: '美国政府拟检查中国旅客社群信息 遭多团体反对美国政府拟检查中国旅客社群信息 遭多团体反对',
        tag: '新闻热点',
        comments_num: 388
      },{
        id: 2,
        link: '/me',
        images: ['http://placekitten.com/g/170/125'],
        title: '安倍政府启动对美经济外交活动 恐面临综合考验',
        tag: '海外网',
        comments_num: 388
      },{
        id: 3,
        link: '/me',
        images: ['http://placekitten.com/g/320/240', 'http://placekitten.com/g/320/240', 'http://placekitten.com/g/320/240'],
        title: '安倍政府启动对美经济外交活动 恐面临综合考验',
        tag: '海外网',
        comments_num: 388
      },{
        id: 4,
        link: '/me',
        images: ['http://placekitten.com/g/170/125'],
        title: '美国政府拟检查中国旅客社群信息 遭多团体反对美国政府拟检查中国旅客社群信息 遭多团体反对',
        tag: '新闻热点',
        comments_num: 388
      },{
        id: 5,
        link: '/me',
        images: ['http://placekitten.com/g/170/125'],
        title: '安倍政府启动对美经济外交活动 恐面临综合考验',
        tag: '海外网',
        comments_num: 388
      },{
        id: 6,
        link: '/me',
        images: ['http://placekitten.com/g/320/240', 'http://placekitten.com/g/320/240', 'http://placekitten.com/g/320/240'],
        title: '安倍政府启动对美经济外交活动 恐面临综合考验',
        tag: '海外网',
        comments_num: 388
      }
    ]
  };

  render() {
    const settings = {
      dots: true,
      arrows: false,
      speed: 500,
      focusOnSelect: true,
      dotsClass: 'swipe-dots',
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const {banners, news} = this.state;
    return (
      <div>
        <Brand />
        {banners && banners.length > 0 && <Swipe data={banners} {...settings} />}
        {
          news && news.length > 0 &&
          news.map(item => <NewsList key={item.id} {...item} />)
        }
        <Nav />
      </div>
    )
  }
}
