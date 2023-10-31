/*
* @Author: Vinson
* @Date:   2022-12-13 17:32:37
* @Last Modified by:   Vinson
* @Last Modified time: 2022-12-13 17:35:22
*/

import React from 'react';
import { Empty } from "antd";

const FWrapEmpty = (props)=>{
    return (
        <Empty {...props} />
    );
}
// 定义属性
FWrapEmpty.propTypes = {
    ...Empty.propTypes
}
// 定义属性默认值 
FWrapEmpty.defaultProps = {
	...Empty.defaultProps
}

export default FWrapEmpty;