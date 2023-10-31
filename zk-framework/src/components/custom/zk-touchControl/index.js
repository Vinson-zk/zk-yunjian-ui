/*
* @Author: Vinson
* @Date:   2022-11-28 17:51:27
* @Last Modified by:   Vinson
* @Last Modified time: 2022-12-01 09:01:04
*/
import React from 'react';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

import zkJsEvent from 'zkJsEvent';
import styles from "./styles.less";

class CInitTouchControl extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			mouseDown: false, // 鼠标在 目标div上按下状态 true 有按下，否则没有按下
			mouseMove: false, // 目标div 移动状态 true 有移动，否则没有移动
			mouseDownPosition: {x:0, y: 0}, // 鼠标按下位置
			startMovePosition: undefined,      // 鼠标开始移动时的位置
			position: props.position, 
			className: "",
			style:{x:"left", y:"top"},
		}

		if(this.state.position.x === undefined){
			this.state.position.x = 0;
		}
		if(this.state.position.y === undefined){
			this.state.position.y = 66;
		}

		if(props.vector.x === -1){
			this.state.style.x = 'right';
		}
		if(props.vector.y === -1){
			this.state.style.y = 'bottom';
		}


		let _className = styles.zk_touch;
		if(props.schema === "nav"){
			_className = `${_className} ${styles.zk_nav_touch}`;
			switch(props.navDirection){
				case 'left': 
					_className = `${_className} ${styles.zk_nav_touch_left}`;
					break;
				case 'top': 
					_className = `${_className} ${styles.zk_nav_touch_top}`;
					break;
				case 'right': 
					_className = `${_className} ${styles.zk_nav_touch_right}`;
					break;
				case 'bottom': 
					_className = `${_className} ${styles.zk_nav_touch_bottom}`;
					break;
			}
		}else{
			_className = `${_className} ${styles.zk_default_touch}`;
			
		}
		
		this.state.className = _className;

	};

	f_touch = (e)=>{
		if(this.props.onTouch instanceof Function){
    		this.props.onTouch.call(this, e, this.props.data);
    	}
	};

	// 计算偏移量
	f_computeOffset = (x, y)=>{
		let offset = { x: x - this.state.mouseDownPosition.x, y: y - this.state.mouseDownPosition.y };
		return offset
	};
	// 计算位置
	f_computePosition = (offsetX, offsetY)=>{
		let position = {x: this.state.startMovePosition.x + offsetX*this.props.vector.x, y: this.state.startMovePosition.y + offsetY*this.props.vector.y};
		let maxRang = this.props.maxRang;
		if(maxRang.left != undefined && position.x < maxRang.left){
			position.x = maxRang.left;
		}
		if(maxRang.right != undefined && position.x > maxRang.right){
			position.x = maxRang.right;
		}
		if(maxRang.top != undefined && position.y < maxRang.top){
			position.y = maxRang.top;
		}
		if(maxRang.bottom != undefined && position.y > maxRang.bottom){
			position.y = maxRang.bottom;
		}
		// console.log("[^_^:20221130-1823-001] ", position, maxRang);
		return position;
	};
	// 鼠标在div上按下
	f_mouseDown = (e)=>{
		this.setState({ mouseDown: true, mouseDownPosition: {x:e.clientX, y: e.clientY}, startMovePosition: this.state.position });
		// 绑定鼠标移动事件
		zkJsEvent.eventBinding(window, 'mousemove', this.f_mouseMove, false);
	};
	// 鼠标在div上松开
	f_mouseUp = (e)=>{
		if(this.state.mouseDown === true) { // 在 目标 div 上有按下
			let state = { mouseDown: false, mouseMove: false };
			if(this.props.originPosition.x != undefined || this.props.originPosition.y != undefined){
				let position = this.state.position;
				if(this.props.originPosition.x != undefined) position.x = this.props.originPosition.x;
				if(this.props.originPosition.y != undefined) position.y = this.props.originPosition.y;
				state["position"] = position;
			}	
			this.setState(state);		
		}
		// 移除鼠标移动事件
		zkJsEvent.eventRemove(window, 'mousemove', this.f_mouseMove, false);
	};
	// 鼠标移动
	f_mouseMove = (e)=>{
		if (this.state.mouseDown == true) {// 在 目标 div 上有按下
			this.setState()
			let state = { mouseMove: true };
			let offset = this.f_computeOffset(e.clientX, e.clientY)
			state["position"] = this.f_computePosition(offset.x, offset.y);
			this.setState(state)
		}
	};
	// 鼠标进入
	f_mouseover = e=>{
		if(this.props.onMouseover instanceof Function){
    		this.props.onMouseover.call(this, e, this.props.data);
    	}
	};
	// 鼠标离开
	f_mouseout = e=>{
		if(this.props.onMouseout instanceof Function){
    		this.props.onMouseout.call(this, e, this.props.data);
    	}
	};

	render() {

		let { isShow, className, children } = this.props;

		if(isShow){
			return;
		}

		let style = {};
		style[this.state.style.x] = this.state.position.x + 'px';
		style[this.state.style.y] = this.state.position.y + 'px';

		let _className = this.state.className;
		if(!this.state.mouseMove){
			_className = `${_className} ${styles.zk_nav_move_transition}`;
		}
		_className = `${_className} ${className?className:""}`;

		// console.log("[^_^:20221129-1354-001] _className: ", _className);
		// console.log("[^_^:20221129-1354-001] style: ", style);
		// console.log("[^_^:20221129-1354-001] this.state: ", this.state);

		return (
			<div className={`${_className}`} style={ style }
				onClick = {this.f_touch}
				onMouseDown={this.f_mouseDown}
				onMouseOver = {this.f_mouseover}
				onMouseOut = {this.f_mouseout}
				// onMouseMove = {this.mouseMove}
				// onMouseUp = {this.mouseUp}
			>
				{children}
			</div>
		)
	}

	// 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        // 绑定鼠标 松开 事件
		zkJsEvent.eventBinding(window, 'mouseup', this.f_mouseUp, false);
    }

    componentWillUnmount(){
    	// 移除鼠标 松开 事件
		zkJsEvent.eventRemove(window, 'mouseup', this.f_mouseUp, false);
    }
}

// 定义属性
CInitTouchControl.propTypes = {
	className: PropTypes.string,
	isShow: PropTypes.bool.isRequired,
	position: PropTypes.object.isRequired,
	maxRang: PropTypes.object.isRequired,
	originPosition: PropTypes.object.isRequired,
	vector: PropTypes.object.isRequired,    // oneOf([{x:1, y:1}, {x:-1, y:1}, {x:1, y:-1}, {x:-1, y:-1}])  
	navDirection: PropTypes.oneOf(["left", "right", "top", "bottom"]).isRequired,
	schema: PropTypes.oneOf(["default", "nav"]).isRequired, // default, nav
	// data:
	onTouch: PropTypes.func,
	onMouseover: PropTypes.func,
	onMouseout: PropTypes.func,
}
// 定义属性默认值
CInitTouchControl.defaultProps = {
	isShow: true,
	position: {x:0, y: 66},  // 位置
	maxRang: {top: undefined, right: undefined, bottom: undefined, left: undefined}, // 允许移动的范围
	originPosition: {x: undefined, y:undefined}, // 移动后，鼠标松开时，回归的位置，未定义时，表示允许松开鼠标时，停留在当前位置
	vector: {x:1, y:1},      // 方向，x: 1-left; -1-right; y: 1-top; -1-bottom
	navDirection: "left",  // 方向类
	schema: 'default',  // default, nav
}


export default CInitTouchControl;







