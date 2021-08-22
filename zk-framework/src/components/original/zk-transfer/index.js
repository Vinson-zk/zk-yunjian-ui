/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 11:05:22
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-02 08:02:53
 */

import React from 'react';
import { Transfer } from "antd";

const FWrapTransfer = (props)=>{
    return (
        <Transfer {...props} />
    );
}
// 定义属性
FWrapTransfer.propTypes = {
    ...Transfer.propTypes
}
// 定义属性默认值 
FWrapTransfer.defaultProps = {
	...Transfer.defaultProps
}

export default FWrapTransfer;

