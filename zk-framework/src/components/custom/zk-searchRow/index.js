/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 12:01:03
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-05-18 10:48:31
 */


import React from 'react';
import { Form, Button } from 'antd';
import { SearchOutlined, UndoOutlined } from '@ant-design/icons';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import { zkToolsMsg } from '../../../tools';

import styles from "./styles.less";


/* 保留的一些代码记录
// 给组件的事件添加一些触发时的参数！
const f_getTag = (tag) => {
   if(tag.type != undefined && tag.props != undefined){
	   let tagProps={}
	   for(let key in tag.props){
		   if(typeof tag.props[key] == 'function'){
			   tagProps[key] = (...args)=>tag.props[key](...args, form)
		   }else{
			   tagProps[key] = tag.props[key]
		   }
	   }
	   return <tag.type {...tagProps} />
   }else{
	   return tag;
   }
}

const f_isField = (item)=>{
   return item.props&&item.props.prefixCls&&['ant-input','ant-input-number','ant-select','ant-radio-group','ant-calendar','ant-uploader'].find((key)=>item.props.prefixCls==key)
}

const f_makeElementNode = (elementNode, id, options)=>{
   if(elementNode.type != undefined){
	   if(f_isField(elementNode)){
		   return (
			   <FormItem className = { styles.searchItem } label={label} >
				   {form.getFieldDecorator(id, options)(f_getTag(elementNode))}
			   </FormItem>		
		   )
	   }else{
		   return f_getTag(elementNode)
	   }
   }else{
	   return elementNode;
   }
}
*/

/* 组件主要是统一样式，
1、引入查询行：SearchRow，再从查询行中引入查询item: SearchItem
SearchRow 两个属性：接收 Form 的所有原生属性；
	btnName:    选传；按钮名称是否显示; true-显示；false-不显示； 默认-true
	searchFnc:  选传；查询按钮点击回调函数；searchFnc.call(this, values);
	resetFnc:   选传；重置按钮点击回调函数，不传不显示重置按钮；resetFnc.call(this, values); 注：在回高前会先调用，form.resetFields();

SearchItem：三个属性：接收 Form.Item 的所有原生属性；
	id:           必传，唯一标识，将做为 Form 组件的 getFieldDecorator 函数的 id, 及 Item 的 key
	fieldOptions: 选传，将做为 Form 组件的 getFieldDecorator 函数的操作项 operations，默认 {}
	label:        选传，说明标签，不传不显示

示例：
	见 Demo      
*/

// const labelCol = {
// 	xs: { span: 24 },
// 	sm: { span: 6 },
// };
// const wrapperCol =  {
// 	xs: { span: 24 },
// 	sm: { span: 10 },
// };

const FInitSearchItem = ({ className, ...props }) => {
	return <Form.Item className={`${styles.searchItem} ${className}`} {...props} />
}

FInitSearchItem.propTypes = {
	...Form.Item.propTypes,
}

FInitSearchItem.defaultProps = {
	...Form.Item.defaultProps,
}

/*** 查询行 ***/
// class CInitSearchRow extends Form {
class CInitSearchRow extends React.Component {

	// formRef = null;
	formRef = React.createRef();

	constructor(props) {
		super(props);
		this.state = {
            isResetForm: false, // 是否需要重置 form 
            defaultValues: props.filter || props.initialValues,
        }
	}

	render() {
		let { className, searchFunc, resetFunc, showBtnName, children, intl, forwardedRef, initialValues, filter, ...props } = this.props;

		// 查询函数 
		const f_search = (values) => {
			if (searchFunc instanceof Function) {
				searchFunc.call(this, values);
			}
		}

		const f_clearFilter = () => {
			this.formRef.current.resetFields();
			if (resetFunc instanceof Function) {
				const values = this.formRef.current.getFieldsValue();
				resetFunc.call(this, values, this.formRef.current);
			}
			if(this.state.defaultValues != initialValues){
				this.setState({defaultValues:initialValues, isResetForm: true});
			}
		}

		this.formRef =  forwardedRef?forwardedRef : React.createRef();

		// undo minus-square-o
		return (
			<Form {...props} layout="inline" className={`${styles.searchRow} ${className}`}  
				initialValues={this.state.defaultValues} onFinish = {f_search} ref = {this.formRef} >
				{children}
				<Form.Item >
					<Button htmlType="submit" icon = {<SearchOutlined />} className={styles.optBtn} >{showBtnName ? zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_search') : ""}</Button>
					{(resetFunc instanceof Function) ? (<Button icon = { <UndoOutlined /> } className={styles.optBtn} onClick={f_clearFilter} >{showBtnName ? zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_reset') : ""}</Button>) : ""}
				</Form.Item>
			</Form>
		)
	}

	// 6、修改时；更新发生后立即调用。初始渲染不会调用此方法。
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.state.isResetForm){
        	// console.log("[^_^:20211102-1713-002]", this.state);
            this.formRef.current.resetFields();
            this.setState({isResetForm: false});
        }
    }
}

// children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.instanceOf(ZKSearchItem).isRequired]),
CInitSearchRow.propTypes = {
	...Form.propTypes,
	btnName: PropTypes.bool,
	searchFunc: PropTypes.func,
	resetFunc: PropTypes.func,
	initialValues: PropTypes.object, 
	filter: PropTypes.object, 
	children: function (props, propName, componentName) {
		if (props.children instanceof Array) {
			for (let c of props.children) {
				if (c.type.name != 'FInitSearchItem') {
					return new Error(
						'Invalid prop `' + propName + '`:`' + c.type.name + '` supplied to' +
						' `' + componentName + '`. Validation failed.'
					)
				}
			}
		} else {
			if (props.children.type.name != 'FInitSearchItem') {
				return new Error(
					'Invalid prop `' + propName + '`:`' + props.children.type.name + '` supplied to' +
					' `' + componentName + '`. Validation failed.'
				)
			}
		}
	},
	// children: PropTypes.oneOfType([PropTypes.arrayOf(function(propValue, key, componentName, location, propFullName) {
	// 		if(propValue[key].type.name != 'FInitSearchItem'){
	// 			return new Error(
	// 		        'Invalid prop ddd `' + propName + '`:`' + propValue[key].type.name + '` supplied to' +
	// 		        ' `ZKSearchRow`. Validation failed.'
	// 		    )
	// 		}
	// 	}), 
	// 	function(props, propName, componentName) {
	// 		if(props.children.type.name != 'FInitSearchItem'){
	// 			return new Error(
	// 		        'Invalid prop ddd `' + propName + '`:`' + props.children.type.name + '` supplied to' +
	// 		        ' `ZKSearchRow`. Validation failed.'
	// 		    )
	// 		}
	// 	}
	// ])
}

// 查询行参数默认值   
CInitSearchRow.defaultProps = {
	...Form.defaultProps,
	className: ' ',
	showBtnName: true,
	searchFunc: undefined,
	resetFunc: undefined,
	initialValues: undefined, // 查询行默认值；重置时优先级高于 filter
	filter: undefined,  // 查询行当前值；非重置时，filter 优先级高于 initialValues
}

const FUCSearchRow = injectIntl(CInitSearchRow);
// const RCEditForm = FUCEditForm;
const RSearchRow = React.forwardRef((props, ref) => {
   return <FUCSearchRow {...props} forwardedRef={ref} />;
});

RSearchRow.Item = FInitSearchItem;
RSearchRow.ErrorList = Form.ErrorList;
RSearchRow.List = Form.List;
RSearchRow.Provider = Form.Provider;
RSearchRow.useForm = Form.useForm;

export default RSearchRow;



