/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 10:11:03
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-11-11 10:50:24
 */

import React from 'react';
import { Spin } from 'antd'

const FWrapSpin = (props)=>{
	// className = { styles.spin_mask } 
	let { forwardRef, ...resProps} = props;
	return <Spin {...resProps} ref = { forwardRef } />
}

// 定义属性
FWrapSpin.propTypes = {
    ...Spin.propTypes
}
// 定义属性默认值 
FWrapSpin.defaultProps = {
	...Spin.defaultProps
}

export default FWrapSpin