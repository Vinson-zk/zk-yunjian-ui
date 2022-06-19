/*
* @Author: Vinson
* @Date:   2022-04-28 17:24:44
* @Last Modified by:   Vinson
* @Last Modified time: 2022-04-29 09:31:09
* 
* 
* 
*/
import React from 'react';
import { TreeSelect } from 'antd';

const FWrapTreeSelect = (props)=>{
    return (
        <TreeSelect {...props} />
    );
}
// 定义属性
FWrapTreeSelect.propTypes = {
    ...TreeSelect.propTypes
}
// 定义属性默认值 
FWrapTreeSelect.defaultProps = {
	...TreeSelect.defaultProps
}

FWrapTreeSelect.TreeNode = TreeSelect.TreeNode;

export default FWrapTreeSelect;



