/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 11:15:36
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-30 23:50:05
 */

import React from 'react';
import { Prompt } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { Form, Spin } from 'antd';
import { FormOutlined } from '@ant-design/icons';
// import { connect } from 'dva';
import { withRouter } from 'dva/router';
import { injectIntl } from 'react-intl';
// import Promise from 'Promise';

import { zkToolsMsg } from '../../../tools';

import ZKIcon from '../zk-icon';
import { ZKButton, ZKForm } from '../../original';

import styles from "./styles.less";

const FInitEditItem = (itemProps) => {
	// console.log("[^_^:202103051611-001] itemProps: ", itemProps);
	return <ZKForm.Item {...itemProps} />
}

// const f_getFormItem = (children) => {
// 	if (children instanceof Array) {
// 		return children.map((item, index) => {
// 			return <FInitEditItem {...item.props} key={`_make_key_${index}`} />
// 		})
// 	} else {
// 		return <FInitEditItem {...children.props} key={`_make_key_0`} />
// 	}
// }

FInitEditItem.propTypes = {
	...ZKForm.Item.propTypes
}

FInitEditItem.defaultProps = {
	...ZKForm.Item.defaultProps
}

class CInitEditForm extends React.Component {

	formRef = null;
	// formRef = React.createRef();

	constructor(props) {
		super(props)
		this.state = {
			isBlock: true,
			data: props.data
		};
		// console.log("[^_^:20210308-1312-001] CInitEditForm.constructor: ", props.data);
	}

	static getDerivedStateFromProps(props, state) {
		// console.log("[^_^:20210308-1312-001] CInitEditForm.getDerivedStateFromProps: ", props.data, state.data);
		// if(state.data != props.data){
		// 	state.data = props.data;
		// }
		return true;
	}

	// 浏览器刷新监听函数
    beforeunloadListener = (e)=>{
        e.preventDefault();
        e.returnValue = zkToolsMsg.msgFormatByIntl(this.props.intl, 'global.app.msg.beforeunload'); // 浏览器有可能不会提示这个信息，会按照固定信息提示
    }
			
	// 确认离开时的方法
	onConfirmLeave = (nextLocation)=>{
		// 将isBlock设置为false，不再阻止跳转行为，并手动进行路由跳转
		this.setState({
			isBlock: false,
		}, ()=>{
			if(nextLocation){
				this.props.history.push(nextLocation);
			}else{
				this.props.history.go(-1);
			}
		});
	}

	/*** 返回 ***/
	goBack = ()=>{
		// zkToolsMsg.alertMsgByType(this.props.intl, null, "editExit",          // 提示消息类型
		// 	() => { this.props.history.go(-1); }, // 确定回调
		// 	() => { console.log('cancel') }       // 取消回调
		// )

		if(this.props.goBackFunc instanceof Function){
			this.props.goBackFunc.call(this);
		}else{
			this.props.history.go(-1);
		}
	}

	/*** 重置 ***/
	resetForm = (resetFunc)=>{
		if(this.props.resetFunc instanceof Function){
			if(this.props.resetFunc.call(this, this.formRef.current)){
				// 返回 true 时，才重置
				zkToolsMsg.alertMsgByType(this.props.intl, null, "editReset",       // 类型
					() => { // 确定回调
						// form.resetFields();
						// console.log("[^_^:20210303-2223-001] zk-editForm resetForm.formRef: ", this.formRef, this.formRef.current.resetFields);
						this.formRef.current.resetFields();
					},
					() => { // 取消回调
						// if(console){
						// 	console.log('[^_^:20210303-0033-001]cancel');
						// }
					}
				)
			}
		}
		
	}

	/*** 保存 ***/
	onFinish = (values)=>{
		if (this.props.saveFunc instanceof Function) {
			// if (values.funType) {
			// 	values.funType = Number(values.funType)
			// }
			let saveData = { ...this.state.data, ...values };
			// data = zkJsUtils.removeObjUnAttr(data)
			// console.log("[^_^:20210308-1031-001] onFinish.saveData: ", saveData);
			this.props.saveFunc.call(this, saveData, this.formRef.current, (errs) => {
				// errs: [{'name': 'fName', 'errors': 'error msg'}]
				// console.log("[^_^:20210308-1031-001] onFinish.errs: ", errs);
				if(errs){
					// 如果有传入错误信息，不返回，提示错误
					this.formRef.current.setFields(errs);
					this.formRef.current.scrollToField(errs[0].name);
				}else{
					this.onConfirmLeave(null);
				}
			});
		}
	}

	/*** 保存并复制 ***/
	saveAndNext = ()=>{
		// console.log("[^_^:20210303-2223-001] zk-editForm saveAndNext.formRef: ", this.formRef);
		this.formRef.current.validateFields().then(values => {
			// if (values.funType) {
			// 	values.funType = Number(values.funType)
			// }
			let saveData = { ...this.state.data, ...values };
			// data = zkJsUtils.removeObjUnAttr(data)
			// console.log("[^_^:20210308-1031-002] saveAndNext.saveData: ", saveData);
			this.props.nextFunc.call(this, saveData, this.formRef.current, (errs, nextData) => {
				if(errs){
					// 如果有传入错误信息，不返回，提示错误
					this.formRef.current.setFields(errs);
					this.formRef.current.scrollToField(errs[0].name);
				}else{
					if(nextData){
						// 如果有传入下一个数据，设置下一数据；一般下个会把上一个数据的ID去掉；
						// this.formRef.current.setFieldsValue(nextData);
						this.setState({ data: nextData });
						this.formRef.current.resetFields();
					}else{
						//  如果没传入下一个的数据，则重置编辑框为初始状态
						this.formRef.current.resetFields();
					}
				}
				
			});
		}).catch(errorInfo => {
			// console.log("[^_^:20210305-1415-001] errorInfo: ", errorInfo);
			// this.formRef.current.getFieldsError(errorInfo.errorFields);
			this.formRef.current.scrollToField(errorInfo.errorFields[0].name[0]);
		    /*
		    errorInfo:
		      {
		        values: {
		          username: 'username',
		          password: 'password',
		        },
		        errorFields: [
		          { name: ['password'], errors: ['Please input your Password!'] },
		        ],
		        outOfDate: false,
		      }
		    */
		});
	}

	render() {
		// console.log("[^_^:20210308-1312-001] CInitEditForm.render: ", this.props.data, this.state.data);
		let { icon, title, forwardedRef, saveFunc, resetFunc, nextFunc, goBackFunc, location, children, intl, leaveConfirm, reloadConfirm, staticContext, ...props } = this.props;

		// console.log("[^_^:20210305-1424-001] forwardedRef: ", forwardedRef, staticContext);
		
		this.formRef = forwardedRef?forwardedRef:React.createRef();
		// this.formRef = React.createRef();
		// console.log("[^_^:20210305-1424-001] initialValues: ", this.state.data);

		return (
			<ZKForm ref = { this.formRef } initialValues = { this.state.data } onFinish = { this.onFinish } className={styles.edit} {...props}>
				{ leaveConfirm ? (
					<Prompt when={this.state.isBlock} message = { nextLocation=>{
						if(location.pathname != nextLocation.pathname){
							zkToolsMsg.alertModalMsg(intl, null, {
								type:'confirm',
								msg:zkToolsMsg.msgFormatByIntl(intl, 'global.app.msg.leave.save'),
								onOk: () => this.onConfirmLeave(nextLocation)
							});
						}
						return false;
					}} />) : "" 
				}

				<div className = { `${styles.header}` } >
					<div className = { `${styles.title}` } >{icon?<ZKIcon.Antd4Icon icon = {icon} /> : ""} &nbsp; {title}</div>
					<div className={`${styles.opt_row} ${styles.right} ` }>
						{ (nextFunc instanceof Function) ? 
							(<ZKButton onClick = {e => { this.saveAndNext() }} >{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_next')}</ZKButton>) 
							: "" }
						<ZKButton htmlType="submit" >{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_save')}</ZKButton>
						{ (resetFunc instanceof Function) ? 
							(<ZKButton onClick={e => { this.resetForm({}, resetFunc) }}>{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_reset')}</ZKButton>) 
							: "" }
						<ZKButton onClick={this.goBack} >{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_back')}</ZKButton>
					</div>
 				</div>
				
				<div className={styles.content}>
					{
						// f_getFormItem(children)
						children
					}
				</div>
			</ZKForm>
		)
	}

	// 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
		// console.log("[^_^:20181115-2309-006.1] ", this.props);
		if(this.props.reloadConfirm){
			window.addEventListener('beforeunload', this.beforeunloadListener);
		}
    }

	// 6、卸载时；在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅
    componentWillUnmount() {
		// console.log("[^_^:20181115-2309-006.3] ");
		if(this.props.reloadConfirm){
			window.removeEventListener('beforeunload', this.beforeunloadListener);
		}
    }
}

// 定义属性
CInitEditForm.propTypes = {
	history: PropTypes.object.isRequired,
	location: PropTypes.object.isRequired,
	data: PropTypes.object.isRequired,
	leaveConfirm: PropTypes.bool, // 路由切换时确认
	reloadConfirm: PropTypes.bool, // 刷新时确认
	resetFunc: PropTypes.func,              // 重置功能函数
	nextFunc: PropTypes.func,               // 下一个功能函数 
	saveFunc: PropTypes.func.isRequired,    // 保存功能函数
	goBackFunc: PropTypes.func,               // 返回函数 
	icon: PropTypes.string,                 // 显示在左上角的图标，默认为：FormOutlined
	title: PropTypes.string,                // 编辑框标题；默认为空；
	children: function (props, propName, componentName) { // 只接受 'FInitEditItem' 子元素
		if (props.children instanceof Array) {
			for (let c of props.children) {
				if (c.type.name != 'FInitEditItem') {
					return new Error(`Invalid prop ${propName}:'${c.type.name}' supplied to '${componentName}'. Validation failed.`);
				}
			}
		} else {
			if (props.children.type.name != 'FInitEditItem') {
				return new Error(`Invalid prop ${propName}:'${props.children.type.name}' supplied to '${componentName}'. Validation failed.`);
			}
		}
	},
}

// 定义属性默认值
CInitEditForm.defaultProps = {
	data: {},
	leaveConfirm:true, // 路由切换时确认
	reloadConfirm:true, // 刷新时确认
	resetFunc: null,
	nextFunc: null,
	goBackFunc: null,
	icon: 'FormOutlined',
	title: '',
}

const FUCEditForm = injectIntl(withRouter(CInitEditForm));
// const RCEditForm = FUCEditForm;
const RCEditForm = React.forwardRef((props, ref) => {
   return <FUCEditForm {...props} forwardedRef={ref} />;
});

RCEditForm.Item = FInitEditItem;
export default RCEditForm;

// CInitEditForm = injectIntl(withRouter(CInitEditForm));

// const FWrapForm =  React.forwardRef((props, ref) => {
//    return <CInitEditForm {...props} forwardedRef={ref} />;
// });

// FWrapForm.Item = FInitEditItem;

// export default FWrapForm;


