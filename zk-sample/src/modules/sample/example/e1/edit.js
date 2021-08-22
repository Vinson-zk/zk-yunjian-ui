/**
 *
 * @Author: Vinson
 * @Date: 2020-08-17 14:20:47
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-08 23:57:25
 */


import React from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'dva';

import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKSpin, ZKInput, ZKSelect, ZKInputNumber } = ZKOriginalComponents;
const { ZKEditForm, ZKInputJson, ZKDateFormatPicker } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;

class CInitE1_Edit extends React.Component {

	// 1、构造函数
	constructor(props) {
		super(props);
		// console.log("[^_^:20190522-1702-001] CInitE1_Edit -> constructor; ");
		this.state = {}
	}

	// static getDerivedStateFromProps(props, state) {
	// 	console.log("[^_^:20190522-1702-002] CInitE1_Edit -> getDerivedStateFromProps; ");
	// 	let { location, match, dispatch, mExample_1 } = props;
	// 	let { params } = match;
	// 	// 地址栏改变了 
	// 	if (mExample_1.location != location) {
	// 		let optEntity = location.state ? location.state.optEntity : undefined;
	// 		if (optEntity) {
	// 			dispatch({ type: 'mExample_1/setState', payload: { optEntity: optEntity, location: location } });
	// 		} else {
	// 			dispatch({ type: 'mExample_1/setState', payload: { location: location } });
	// 			dispatch({ type: 'mExample_1/get', payload: { params: { id: params.id } } });
	// 		}
	// 	}
	// 	return true;
	// }

	render() {

		let { dispatch, mExample_1, form, intl, loading, location } = this.props;
		let { optEntity, areaTree = [] } = mExample_1;
		let lang = zkToolsMsg.getLocale();

		let f_getAreaTwos = (areaOneKey)=>{
			for (let item of areaTree) {
				if (item.key == areaOneKey) {
					return item.childs || [];
				}
			}
			return [];
		}

		// 保存
		const save = (values, form, callBackFunc) => {
			this.props.dispatch({
				type: 'mExample_1/save', payload: values, callBack: () => {
					// this.props.dispatch({type:'mExample_1/findList', payload:null})
					callBackFunc()
				}
			});
		};
		// 下一个
		const next = (values, form, callBackFunc) => {
			this.props.dispatch({
				type: 'mExample_1/save', payload: values, callBack: () => {
					// this.props.dispatch({type:'mExample_1/findList', payload:null})
					values['id'] = undefined
					callBackFunc(null, values);
				}
			});
		};
		let spinning = loading.effects['mExample_1/save'] || loading.effects['mExample_1/get'];

		return (optEntity != null && mExample_1.location == location) &&(
			<ZKSpin spinning={ spinning === true } >
				<ZKEditForm title = "样例-1 编辑" history = { history } data = { optEntity } 
					saveFunc = { save }
					nextFunc = { next }
					resetFunc={() => { return true; }} >
					<ZKEditForm.Item name="name" label={zkToolsMsg.msgFormatByIntl(intl, 'example.table.col.name')} >
						<ZKInput />
					</ZKEditForm.Item>
					<ZKEditForm.Item name="stature" label={zkToolsMsg.msgFormatByIntl(intl, 'example.table.col.stature')}>
						<ZKInputNumber formatValueFunc={
							value => { return value + " CM" }
						} />
					</ZKEditForm.Item>
					<ZKEditForm.Item name = "birthday" label={zkToolsMsg.msgFormatByIntl(intl, 'example.table.col.birthday')} >
						<ZKDateFormatPicker format="YYYY-MM-DD" />
					</ZKEditForm.Item>
					<ZKEditForm.Item name = 'areaOne' label={zkToolsMsg.msgFormatByIntl(intl, 'example.table.col.areaOne')} >
						<ZKSelect fillValue={"请选择"} >
							{areaTree.map(item => {
									return <ZKSelect.Option key={item.id} value={item.key} >
										{zkToolsMsg.getInternationInfo(item.name)}
									</ZKSelect.Option>
							})}
						</ZKSelect>
					</ZKEditForm.Item>
					<ZKEditForm.Item noStyle shouldUpdate={ (prevValues, curValues) => {return prevValues['areaOne'] !== curValues['areaOne'] }}>
						{({ getFieldValue, setFieldsValue, isFieldTouched })=>{
							let svParent = getFieldValue('areaOne');
							let isOptParent = isFieldTouched('areaOne');

							let selChilds = f_getAreaTwos(svParent);

							let selChildOpts = selChilds.map(item => {
								return <ZKSelect.Option key={item.id} value={item.key} >{zkToolsMsg.getInternationInfo(item.name)}</ZKSelect.Option>
							});
							
							if(isOptParent){
								// 操作过上级节点
								setFieldsValue({'areaTwo': ''});
							}
							return (
								<ZKEditForm.Item name = "areaTwo" label={zkToolsMsg.msgFormatByIntl(intl, 'example.table.col.areaTwo')} >
									<ZKSelect fillValue={"请选择"} >
										{selChildOpts}
									</ZKSelect>
								</ZKEditForm.Item>
							)
						}}
					</ZKEditForm.Item>
					<ZKEditForm.Item name="sex" label={zkToolsMsg.msgFormatByIntl(intl, 'example.table.col.sex')} >
						<ZKSelect>
							<ZKSelect.Option value={1}>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.man')}</ZKSelect.Option>
							<ZKSelect.Option value={0}>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.woman')}</ZKSelect.Option>
						</ZKSelect>
					</ZKEditForm.Item>
					<ZKEditForm.Item name="education" label={zkToolsMsg.msgFormatByIntl(intl, 'example.table.col.education')}>
						<ZKInput />
					</ZKEditForm.Item>
					<ZKEditForm.Item name="hobby" label={zkToolsMsg.msgFormatByIntl(intl, 'example.table.col.hobby')} >
						<ZKInput />
					</ZKEditForm.Item>
					<ZKEditForm.Item name="addr" label={zkToolsMsg.msgFormatByIntl(intl, 'example.table.col.addr')} >
						<ZKInputJson styleType="compact" primaryAttr={lang} 
							attrs={{ 'zh-CN': { 'name': '简体中文' }, 'en-US': { 'name': 'English' }, 'zh-TW': { 'name': '繁體中文' } }} />
					</ZKEditForm.Item>
				</ZKEditForm>
			</ZKSpin>
		)
	}

	// 卸载时；在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅
	componentWillUnmount() {
		console.log("[^_^:20190522-1702-003] CInitE1_Edit -> componentWillUnmount ");
		// this.props.dispatch({ type: 'mExample_1/setState', payload: { optEntity: null } });
	}

	componentDidMount() {
		let { location, match, dispatch, mExample_1 } = this.props;
		let { params } = match;

		console.log("[^_^:20210308-1211-001] CInitE1_Edit -> componentDidMount ", mExample_1, location);

		// 地址栏改变了 
		if (mExample_1.location != location) {
			let optEntity = location.state ? location.state.optEntity : undefined;
			if (optEntity) {
				dispatch({ type: 'mExample_1/setState', payload: { optEntity: optEntity, location: location } });
			} else {
				dispatch({ type: 'mExample_1/setState', payload: { location: location } });
				dispatch({ type: 'mExample_1/get', payload: { params: { id: params.id } } });
			}
		}
	}
}

// {onValuesChange:(props, changedValues, allValues) =>{
// 	console.log("--- ", props, changedValues, allValues)
// }}
// const CInitE1_EditForm = ZKEditForm.create({})(CInitE1_Edit);
const CInitE1_EditForm = CInitE1_Edit;

export default injectIntl(connect(({ mExample_1, loading }) => ({ mExample_1, loading }))(CInitE1_EditForm));

