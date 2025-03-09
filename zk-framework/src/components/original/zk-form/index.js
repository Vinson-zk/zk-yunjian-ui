/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 09:34:49
 * @Last Modified by: vinson
 * @Last Modified time: 2024-08-20 11:15:22
 */
import React from 'react';
import { Form } from 'antd';
import PropTypes from 'prop-types';

const FWrapFormItem = (props)=>{
	// console.log("[^_^:20210301-0750-001] FWrapFormItem: ", props);
	return <Form.Item {...props} />
}
// 定义属性
FWrapFormItem.propTypes = {
    ...Form.Item.propTypes
}
// xs	屏幕 < 576px 响应式栅格，可为栅格数或一个包含其他属性的对象	number | object	-	
// sm	屏幕 ≥ 576px 响应式栅格，可为栅格数或一个包含其他属性的对象	number | object	-	
// md	屏幕 ≥ 768px 响应式栅格，可为栅格数或一个包含其他属性的对象	number | object	-	
// lg	屏幕 ≥ 992px 响应式栅格，可为栅格数或一个包含其他属性的对象	number | object	-	
// xl	屏幕 ≥ 1200px 响应式栅格，可为栅格数或一个包含其他属性的对象	number | object	-	
// xxl 屏幕 ≥ 1600px 响应式栅格，可为栅格数或一个包含其他属性的对象	number | object	-
// 定义属性默认值
FWrapFormItem.defaultProps = {
	...Form.Item.defaultProps,
	labelCol: { // 使用 9:15 为配合 editForm 下栅格分布，正好是 label 占 3 格；
		xs: 8,
		sm: 8,    
	},
	wrapperCol: {
		xs: 16,
		sm: 16,
	},
	// labelCol: { span: 9 },
	// wrapperCol: { span: 15 },
}

/*** 做一层封装，以使用 Form 的其他函数 ***/
// // class FWrapForm extends Form {
// class CWrapForm extends React.Component {
// 	// formRef = React.createRef();
// 	// useImperativeHandle = (ref, ()=>({
// 	//     //getForm就是暴露给父组件的方法
// 	//     getForm: () => formRef,
// 	// }));

// 	//  ref = {this.formRef} 

// 	render() {
// 		const childRef = React.useRef();
// 		console.log("[^_^:20210228-1343-001] form this.props: ", this);
// 		return <Form ref = {childRef} {...this.props} />
// 	}
// }

const FWrapForm = React.forwardRef((props, ref)=>{
	// console.log("[^_^:20210228-1343-001] form this.props: ", props);
	return <Form ref={ref} {...props} />
});

// 定义属性
FWrapForm.propTypes = {
    ...Form.propTypes,
}
// 定义属性默认值 
FWrapForm.defaultProps = {
	...Form.defaultProps,
	scrollToFirstError: true
}

// FWrapForm.Item = Form.Item;
FWrapForm.Item = FWrapFormItem;
FWrapForm.ErrorList = Form.ErrorList;
FWrapForm.List = Form.List;
FWrapForm.Provider = Form.Provider;
FWrapForm.useForm = Form.useForm;

export default FWrapForm;

