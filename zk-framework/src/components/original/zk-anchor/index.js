/**
 * 锚点封装，统一锚点区域和风格，可覆盖；并不影响原生功能
 * @Author: Vinson
 * @Date: 2020-08-13 23:49:08
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-12-05 10:10:26
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Anchor } from 'antd';

import zkStyles from "./styles.less";

// console.log("[^_^:20210227-2023-001] Anchor: ", Anchor);
// console.log("[^_^:20210227-2023-001] Anchor.prototype: ", Anchor.prototype);

const FWrapAnchor = (props)=>{
	return <Anchor { ...props } />
}
FWrapAnchor.Link = Anchor.Link;
// FWrapAnchor = {...Anchor, ...FWrapAnchor};  // 不能这样写

// 定义属性
FWrapAnchor.propTypes = {
    ...Anchor.propTypes
}
// 定义属性默认值 
FWrapAnchor.defaultProps = {
	...Anchor.defaultProps,
	getContainer: () => document.getElementById("right-content").parentElement,
	affix: true,
	showInkInFixed: true,
	offsetTop: 7,
	className: zkStyles.zk_anchor,
}


export default FWrapAnchor;
