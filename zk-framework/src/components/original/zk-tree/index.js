/*
* @Author: Vinson
* @Date:   2022-04-17 15:28:30
* @Last Modified by:   Vinson
* @Last Modified time: 2022-11-11 10:50:23
* 
* 
* 
*/
import React from 'react';
import { Tree } from 'antd';

const FWrapTree = (props)=>{
	let { forwardRef, ...resProps} = props;
    return (
        <Tree {...resProps} ref = { forwardRef } />
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

FWrapTree.DirectoryTree = Tree.DirectoryTree;

export default FWrapTree;
