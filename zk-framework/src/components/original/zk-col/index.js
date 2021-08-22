/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 11:11:18
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-02 08:10:15
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Col } from 'antd';

const FWrapCol = (props)=>{
	return <Col {...props} />
}

// 定义属性
FWrapCol.propTypes = {
    ...Col.propTypes
}
// 定义属性默认值 
FWrapCol.defaultProps = {
	...Col.defaultProps
}

export default FWrapCol;