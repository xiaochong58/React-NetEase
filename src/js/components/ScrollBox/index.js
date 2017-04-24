import React,{PureComponent} from "react";
import ReactIScroll from "react-iscroll";
import {Loading,NotData} from "../";
import iScroll from "iscroll/build/iscroll-probe";
// 相关API查询 https://github.com/schovi/react-iscroll
// 相关API查询 http://iscrolljs.com/

export default class index extends PureComponent {
    state={
        active: true
    };

    options={
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

    style={
        position: 'absolute',
        width: '100%',
        top: '0',
        bottom: '0',
        overflow: 'hidden'
    };

    onScrollEnd=e =>{
        if(e.y<=e.maxScrollY+50){
            this.props.openScrollEnd ? this.setState({active: true}) : this.props.loadMore()
        }else{
            this.props.openScrollEnd && this.setState({active: false})
        }
    };

    componentWillUpdate(nextProps){
        const num1=this.props.children && this.props.children.length && (+this.props.children.length);
        const num2=nextProps.children && nextProps.children.length && (+nextProps.children.length);
        if(!this.props.openScrollEnd && num1>num2){
            this.myScroll.withIScroll((iScroll) =>{
                iScroll.scrollTo(0,0)
            });
        }
    }

    componentDidUpdate(){
        this.props.openScrollEnd && this.state.active && this.goEnd()
    }

    goEnd=() =>{
        this.myScroll.withIScroll((iScroll) =>{
            iScroll.scrollToElement(this.footDiv,300)
        })
    };

    render(){
        const {children,style,className,options,dataNoMore,openScrollEnd,ifNoData} = this.props;
        return (
            <ReactIScroll
                ref={ele => this.myScroll=ele}
                className={className}
                style={Object.assign({},this.style,style)}
                iScroll={iScroll}
                options={Object.assign({},this.options,options)}
                onScrollEnd={this.onScrollEnd}
            >
                <div>
                    <div>
                        {children}
                    </div>
                    {!openScrollEnd && (dataNoMore ? (children ? <NotData text="没有更多数据啦！"/> : <NotData text={ifNoData}/>) : <Loading />)}
                    {!openScrollEnd && <div style={{height: '0.2rem'}}/> }
                    {openScrollEnd && <div ref={ele => this.footDiv=ele}/>}
                </div>
            </ReactIScroll>
        )
    }
}
