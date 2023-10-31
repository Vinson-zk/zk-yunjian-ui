/**
 * 滑块组件
 * @Author: Vinson
 * @Date: 2020-08-12 12:03:19
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-12-01 18:30:56
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
			// initCollapsed: props.collapsed, // 初始滑块展开收起状态，当外面部的此状态变化时，以外部为准；
			collapsed: props.collapsed, // 当前滑块收起状态；false-未收起；true-收起；
		};
	}

	f_toggle = (e)=>{
		// console.log("[^_^:20221201-1302-001] f_toggle: ", e);
		let collapsed = this.state.collapsed;
		this.setState({ collapsed: !collapsed });
		if(this.props.onCollapsedChange instanceof Function){
    		this.props.onCollapsedChange.call(this, e, !collapsed);
    	}
	};
	
	// 2、调用render方法之前调用，无论是在初始安装还是后续更新。它应该返回一个更新状态的对象，或者返回null以不更新任何状态。
    // static getDerivedStateFromProps(props, state) {
    //     if(props.collapsed != state.initCollapsed){
    //     	state.initCollapsed = props.collapsed;
    //     	if(props.collapsed != state.collapsed){
    //     		state.collapsed = props.collapsed;
    //     	}
    //     }
    //     return true;
    // }

	render() {
		let { isHead, className, children, collapsed, collapsedWidth, ...resProps } = this.props;
		return (
			<Sider { ...resProps } ref = {this.thisRef} className={`${styles.slider} ${className ? className : ""}`}
				trigger={<div>sss</div>}
				collapsed={this.state.collapsed}
				collapsedWidth = { collapsedWidth }
				// collapsible
				// onCollapse={this.onCollapse}
				// onClick = { this.f_eventCancel }
			>
				<div className = { styles.slider_head }>
				{ this.state.collapsed ?
					<MenuUnfoldOutlined className={`${styles.trigger} ${styles.trigger_open}`} onClick={ this.f_toggle } />
					: <MenuFoldOutlined className={`${styles.trigger} ${styles.trigger_open}`} onClick={ this.f_toggle } />
				}
				</div>
				{children}
			</Sider>
		)
	}

	// 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {

    }

    componentWillUnmount(){

    }

}

// 定义属性
CInitSider.propTypes = {
	...Sider.propTypes,     // 原生定义的属性
	className: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.array, PropTypes.element, PropTypes.object, PropTypes.string]), // 子节点
	
}
// 定义属性默认值
CInitSider.defaultProps = {
	...Sider.defaultProps, // 原生定义的属性 
	collapsed: false,
	collapsedWidth: 60, 
}

export default CInitSider;





