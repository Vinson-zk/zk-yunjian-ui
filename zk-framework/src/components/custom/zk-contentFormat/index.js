/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2023-09-22 16:50:00
* @Last Modified by: runoob
* @Last Modified time: 2023-10-08 17:54:04
* 
* 1. 标题、内容
* 2. 自动标题号、上下级标题号
* font-size: min-14px; max 96px; 
*/

import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.less';

// title
const FInitContentTitle = ({children, ...resProps})=>{
	return <div className={styles.zk_content_format_title} {...resProps} ><span>&nbsp;&nbsp;{children}</span></div>;
}
FInitContentTitle.typeName = "FInitContentTitle";

/**
 * @serialNum: -1 时，不显示标题号; 不传入时自动 标题号；其他按传入值显示；
 * @title: 标题，不传时，做为一个版式框；
 * @separator: 标题与标题号分隔符，默认为 '、'；
 * @level: 标题等级从 1 开始，传入时，使用传入值；title 为空时，子内容版式等级不会增加；
 */
const FInitContentFormat = ({level, serialNum, title, separator, className, parentTitle, handleTitleNumFunc, children, ...resProps})=>{

	// console.log("[^_^:20230923-1500-001] FInitContentFormat: ", level, title, parentTitle, children, resProps);

	if(title){
		let titleNum = handleTitleNumFunc.call(this, parentTitle, serialNum, resProps);
		let levelClassName = styles[`zk_content_format_level_${level}`];
		return (
			<div {...resProps} className={`${styles.zk_content_format} ${levelClassName} ${className}`}>
				<FInitContentTitle>{`${titleNum}${separator}${title}`}</FInitContentTitle>
				<div className={`${styles.zk_content_format_content}`}>{f_getContentChildren(titleNum, children, level+1)}</div>
			</div>
		);
	}else{
		return <div {...resProps} className = {className}>{f_getContentChildren(parentTitle, children, level)}</div>;
	}
}
FInitContentFormat.typeName = "FInitContentFormat";

const f_getContentChildren = (parentTitle, children, level)=>{

	if (zkJsUtils.assertObjType(children, Array)) {
		let serialNum = 0;
		return children.map((item, index) => {
			if((zkJsUtils.assertObjType(item, Object)) && item.type.typeName === 'FInitContentFormat'){
				serialNum += 1;
				return <item.type key = {`_zk_content_format_key_${level}_${index}`} 
						parentTitle={parentTitle} serialNum={serialNum} {...item.props} level={level} /> 
				// <item.type 中 level 要放在 item.props 后，防止 item.props 中的属性覆盖
			}else{
				return item;
			}
		})
	} else {
		if((zkJsUtils.assertObjType(children, Object)) && children.type.typeName === 'FInitContentFormat'){
			return <children.type parentTitle={parentTitle} serialNum={1} {...children.props} level={level} />
		}else{
			return children;
		}
	}
}

// 定义属性
FInitContentFormat.propTypes = {
  serialNum: PropTypes.number, 
  title: PropTypes.string,
  separator: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  className: PropTypes.string,
  parentTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  // children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  handleTitleNumFunc: PropTypes.func
}

// 定义属性默认值
FInitContentFormat.defaultProps = {
  separator: '、',
  level: 1,
  className: '',
  handleTitleNumFunc: (parentTitle, serialNum)=>{
  	if(serialNum == -1){
  		return false;
  	}else{
  		if(parentTitle){
  			return parentTitle + '.' + serialNum;
  		}else{
  			return serialNum;
  		}
  	}
  }
}

FInitContentFormat.Title = FInitContentTitle;

export default FInitContentFormat;


