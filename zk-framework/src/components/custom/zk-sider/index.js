/**
 * 滑块组件
 * @Author: Vinson
 * @Date: 2020-08-12 12:03:19
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-07 21:31:19
 */


import React from 'react';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';

import zkJsEvent from 'zkJsEvent';
import styles from "./styles.less";
const { Sider } = Layout

class CInitSider extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			collapsed: false,
			mouseDown: false, // 鼠标在 目标div上按下状态 true 有按下，否则没有按下
			mouseMove: false, // 目标div 移动状态 true 有移动，否则没有移动
			initTop: 60,
			initLeft: 0,
			startX: 0,
			startY: 0,
			top: 60,
			left: 0,
		}
	}

	toggle = (e)=>{
		this.setState({ collapsed: !this.state.collapsed });
	}

	// 计算偏移量
	computeOffset = (x, y)=>{
		let offset = { x: 0, y: 0 }
		offset.y = y - this.state.startY

		let maxX = 234
		maxX = -1

		offset.x = x - this.state.startX

		if (maxX > 0) {
			offset.x = offset.x > maxX ? maxX : offset.x
		}
		return offset
	}

	// 鼠标在div上按下
	mouseDown = (e)=>{
		this.setState({ mouseDown: true, startX: e.clientX, startY: e.clientY });
	}
	// 鼠标在div上松开
	mouseUp = (e)=>{
		if (this.state.mouseDown == true) { // 在 目标 div 上有按下
			if (this.state.mouseMove == false) {
				this.setState({ collapsed: !this.state.collapsed });
			}
			this.setState({ mouseDown: false, mouseMove: false })
			this.setState({ top: this.state.top, left: this.state.initLeft, initTop: this.state.top })
		}
	}
	mouseMove = (e)=>{
		if (this.state.mouseDown == true) {// 在 目标 div 上有按下
			this.setState({ mouseMove: true })
			let offset = this.computeOffset(e.clientX, e.clientY)
			this.setState({ top: this.state.initTop + offset.y, left: this.state.initLeft + offset.x })

		}
	}

	render() {

		let { miniName, className, children } = this.props;

		if (this.state.collapsed) {
			// 绑定鼠标松开事件
			zkJsEvent.eventBinding(window, 'mouseup', this.mouseUp, false)
			// 绑定鼠标移动事件
			zkJsEvent.eventBinding(window, 'mousemove', this.mouseMove, false)
			return (
				<div className={`${styles.sliderClose}  ${this.state.mouseMove ? "" : styles.sliderCloseTransition}`}
					style={{ top: this.state.top + 'px', left: this.state.left + 'px' }}
					// onClick = {this.toggle}
					onMouseDown={this.mouseDown}
				// onMouseMove = {this.mouseMove}
				// onMouseUp = {this.mouseUp}
				// onMouseOut = {this.mouseOut}
				>
					<span>{miniName}</span>
				</div>
			)
		} else {
			// 移除鼠标松开事件
			zkJsEvent.eventRemove(window, 'mouseup', this.mouseUp, false)
			// 移除鼠标移动事件
			zkJsEvent.eventRemove(window, 'mousemove', this.mouseMove, false)
			return (
				<Sider className={`${styles.slider} ${className ? className : ""}`}
					trigger={null}
					collapsed={this.state.collapsed}
					// collapsible
					// onCollapse={this.onCollapse}
				>
					{ this.state.collapsed ?
						<MenuUnfoldOutlined className={`${styles.trigger} ${styles.trigger_open}`} onClick={this.toggle} />
						: <MenuFoldOutlined className={`${styles.trigger} ${styles.trigger_open}`} onClick={this.toggle} />
					}
					{children}
				</Sider>
			)
		}
	}
}

// 定义属性
CInitSider.propTypes = {
	// ...Sider.propTypes,     // 原生定义的属性
	miniName: PropTypes.string, // 滑块最小化时显示的名称
	className: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.element, PropTypes.object, PropTypes.string]), // 子节点
	
}
// 定义属性默认值
CInitSider.defaultProps = {
	// ...Sider.defaultProps, // 原生定义的属性 
	miniName: "Navigation", // // 滑块最小化时显示的名称，默认 Navigation
	// className: " ",
}

export default CInitSider;
