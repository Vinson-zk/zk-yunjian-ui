/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2025-01-24 09:53:27
* @Last Modified by: vinson
* @Last Modified time: 2025-01-24 13:47:03
*/

import React from 'react';
import { Card } from 'antd';

const FWrapCard = (props)=>{
	return <Card {...props} />
}

FWrapCard.Grid = Card.Grid;
FWrapCard.Meta = Card.Meta;

// 定义属性
FWrapCard.propTypes = {
    ...Card.propTypes
}
// 定义属性默认值 
FWrapCard.defaultProps = {
	...Card.defaultProps
}

export default FWrapCard;

