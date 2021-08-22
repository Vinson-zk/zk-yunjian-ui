/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 11:12:02
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-02 08:05:32
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Row } from 'antd';

const FWrapRow = (props)=>{
	return <Row {...props} />
}

// 定义属性
FWrapRow.propTypes = {
    ...Row.propTypes
}
// 定义属性默认值 
FWrapRow.defaultProps = {
	...Row.defaultProps
}

export default FWrapRow;