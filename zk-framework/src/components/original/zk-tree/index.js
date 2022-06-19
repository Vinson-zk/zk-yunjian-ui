/*
* @Author: Vinson
* @Date:   2022-04-17 15:28:30
* @Last Modified by:   Vinson
* @Last Modified time: 2022-04-19 22:10:04
* 
* 
* 
*/
import React from 'react';
import { Tree } from 'antd';

const FWrapTree = (props)=>{
    return (
        <Tree {...props} />
    );
}
// 定义属性
FWrapTree.propTypes = {
    ...Tree.propTypes
}
// 定义属性默认值 
FWrapTree.defaultProps = {
	...Tree.defaultProps
}

export default FWrapTree;
