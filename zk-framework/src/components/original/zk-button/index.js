/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 09:12:24
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-02 08:10:45
 */

import React from 'react';
import { Button } from 'antd';

import styles from "./styles.less";

// console.log("[^_^:20210227-2024-001] Button: ", Button);
// console.log("[^_^:20210227-2024-001] Button.prototype: ", Button.propertyIsEnumerable());

const FWrapButton = (props)=>{
	return <Button className={styles.button} {...props} />
}
// FWrapButton = {...Button, ...FWrapButton};
// console.log("[^_^:20210227-2024-001] FWrapButton: ", FWrapButton);
FWrapButton.Group = Button.Group;

// 定义属性
FWrapButton.propTypes = {
    ...Button.propTypes
}
// 定义属性默认值 
FWrapButton.defaultProps = {
	...Button.defaultProps
}

export default FWrapButton;

