/*
* @Author: Vinson
* @Date:   2022-10-27 19:35:15
* @Last Modified by:   Vinson
* @Last Modified time: 2022-12-29 20:26:12
*/

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Button } from 'antd';

import zkPopoverPanelStyles from './styles.less';

const offsetPosition = {x:3, y:3}

const f_calculateLeft = (x, width)=>{
	if(x + width > window.innerWidth){
		x = x - width + offsetPosition.x;
	}else{
		x = x - offsetPosition.x;
	}
	return x < 0 ? 0 : x;
}

const f_calculateTop = (y, height)=>{
	if(y + height > window.innerHeight){
		y = y - height + offsetPosition.y;
	}else{
		y = y - offsetPosition.y;
	}
	return y < 0 ? 0 : y;
}

/*****************************************************/
/* panel content children 子组件添加 data 属性 */
const f_getChildren = (children, data)=>{
  if(children instanceof Array){
    return children.map((item, index)=>{
      if(item.type){
        return <item.type {...item.props} key = {index} data = {data} />
      }else{
        return item;
      }
    });
  }else{
    if(children.type){
      return <children.type {...children.props} data = {data} />
    }else{
      return children;
    }
  }
}

/*****************************************************/
/* panel content */

class CInitPopoverPanelContent extends React.Component {
  
  thisRef = {current:null};

  constructor(props) {
    super(props);
    this.state = { }
    this.thisRef = props.ref?props.ref:React.createRef();
  }

  render() {
  	let { position, width, height, children, ref, className, data, ...resProps } = this.props;
  	// console.log("[^_^:20221110-1745-001] ", position, width, height);
  	
  	className = className?className:"";
  	// if(this.thisRef.current != null){
  	// 	width = width === undefined?this.thisRef.current.clientWidth:width;
  	// 	height = height === undefined?this.thisRef.current.clientHeight:height;
  	// }
  	// console.log("[^_^:20221110-1745-002] ", position, width, height);

  	let left = f_calculateLeft(position.x, width);
  	let top = f_calculateTop(position.y, height);
  	// console.log("[^_^:20221110-1745-003] ", left, top, width, height);

  	// , "backgroundColor":"#606060"
  	let style = {};
  	if(width){ style["width"] = width + "px"; }
  	if(height){ style["height"] = height + "px"; }
  	style["left"] = left + "px";
  	style["top"] = top + "px";

    return <div { ...resProps } 
    	className = {`${zkPopoverPanelStyles.zk_pp_panel} ${className}`} 
    	ref = {this.thisRef} 
    	// onClick = {e=>{
    	// 	console.log("[^_^:20221111-0907-001] CInitPopoverPanelContent.div onclick", e);
    	// 	zkJsEvent.eventCancelPropagation(e);
    	// 	zkJsEvent.eventCancelDefault(e);
    	// }}
    	style = {style} 
    >
	    {f_getChildren(children, data)}
    </div>
  }

  componentDidMount() {

    // let thisDom = ReactDOM.findDOMNode(this);
    // console.log("[^_^:20221110-1719-001] CInitPopoverPanelContent.componentDidMount 1", this.thisRef.current);
    // console.log("[^_^:20221110-1719-001] CInitPopoverPanelContent.componentDidMount 1.clientWidth", this.thisRef.current.clientWidth);
    // console.log("[^_^:20221110-1719-001] CInitPopoverPanelContent.componentDidMount 1.clientHeight", this.thisRef.current.clientHeight);
    // console.log("[^_^:20221110-1719-002] CInitPopoverPanelContent.componentDidMount", thisDom);

    zkJsEvent.eventBinding(this.thisRef.current, "click", e=>{
    	// console.log("[^_^:20221111-0130-001] CInitPopoverPanelContent.componentDidMount");
    	zkJsEvent.eventCancelPropagation(e); // 冒泡
    	zkJsEvent.eventCancelDefault(e); // 捕获
    });
  }

  componentWillUnmount(){
  	// let thisDom = ReactDOM.findDOMNode(this);
	  zkJsEvent.eventRemove(this.thisRef.current, "click", e=>{});
  }

}

/*****************************************************/
/* panel button */
class CInitPopoverButton extends React.Component {
	
  thisRef = {current:null};

  constructor(props) {
    super(props);
    this.state = { }
    this.thisRef = props.forwardedRef?props.forwardedRef:React.createRef();
  }

  render() {
  	let { className, onClick, ...resProps } = this.props;
	  return <div ref = {this.thisRef} className = {`${className} ${zkPopoverPanelStyles.zk_pp_panel_button}`} {...resProps} />
  }

  componentDidMount() {
  	let { onClick } = this.props;
    zkJsEvent.eventBinding(this.thisRef.current, "click", e=>{
    	// console.log("[^_^:20221111-0904-001] CInitPopoverButton.componentDidMount");
    	if(onClick instanceof Function){
    		onClick.call(this.thisRef.current, e, this.props.data);
    	}
    });
  }

  componentWillUnmount(){
	  zkJsEvent.eventRemove(this.thisRef.current, "click", e=>{});
  }
}
// 定义属性 
CInitPopoverButton.propTypes = {
  // key: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

/*****************************************************/
/* panel */
const FInitPopoverPanel = props=>{
  let { isShow, forwardRef, ...resProps} = props;
  return (isShow?<CInitPopoverPanelContent {...resProps} ref = {forwardRef} />:"")
}
FInitPopoverPanel.PanelButton = CInitPopoverButton;

// 定义属性 
FInitPopoverPanel.propTypes = {
	isShow: PropTypes.bool.isRequired,
	position: PropTypes.object.isRequired,
	height: PropTypes.number,
	width: PropTypes.number,
  // data: PropTypes.object,
}
// 定义属性默认值
FInitPopoverPanel.defaultProps = {
	isShow: true,
	width: 105,
	height: 104,
}

export default FInitPopoverPanel;




