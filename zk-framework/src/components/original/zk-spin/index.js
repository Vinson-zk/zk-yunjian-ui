/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 10:11:03
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-02 08:04:23
 */

import React from 'react';
import { Spin } from 'antd'

const FWrapSpin = (props)=>{
	// className = { styles.spin_mask } 
	return <Spin {...props} />
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