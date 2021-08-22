/**
 *
 * @Author: Vinson
 * @Date: 2020-08-17 14:21:36
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-15 19:33:21
 */


import React from 'react';
import { injectIntl } from 'react-intl';

import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKSelect, ZKInput } = ZKOriginalComponents;
const { ZKSearchRow, ZKDateFormatPicker, ZKInputJson } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;
const ZKSearchItem = ZKSearchRow.Item;

class CInitE1_Search extends React.Component {

	formRef = React.createRef();

	constructor(props) {
		super(props);
	}

	// 第一级地区改变
	f_areaOneChange = (e, form)=>{
		let fsv = form.getFieldsValue();
		if (this.props.onSetFilter instanceof Function) {
			this.props.onSetFilter.call(this, { ...fsv, areaOne: e, areaTwo: '' });
		}
		form.resetFields(["areaTwo"])
	}

	render() {

		const getAreaTwos = (parentKey, areaTree) => {
			let areaTwos = []
			for (let item of areaTree) {
				if (item.key == parentKey) {
					areaTwos = item.childs || [];
					break;
				}
			}
			return areaTwos;
		};

		let { form, onSearch, onSetFilter, areaTree = [], filter, intl } = this.props

		let areaTwos = getAreaTwos(filter.areaOne, areaTree);

		return (
			<ZKSearchRow ref={ this.formRef } initialValues = {filter}
				resetFunc={values => {
					if (onSetFilter instanceof Function) {
						onSetFilter.call(this, null);
					}
					// if(onSearch instanceof Function){
					// 	onSearch.call(this, null)
					// }
				}}
				searchFunc={values => {
					this.setState({ filter: values });
					if (onSearch instanceof Function) {
						onSearch.call(this, values)
					}
				}}
			>
				<ZKSearchItem name="name" label={zkToolsMsg.msgFormatByIntl(intl, 'example.table.col.name')}  >
					<ZKInputJson styleType="compact" primaryAttr = "zh-CN" 
							attrs={{ 'zh-CN': { 'name': '简体中文' }, 'en-US': { 'name': 'English' }, 'zh-TW': { 'name': '繁體中文' } }}  />
				</ZKSearchItem>
				<ZKSearchItem name="areaOne" label={zkToolsMsg.msgFormatByIntl(intl, 'example.table.col.areaOne')} >
					<ZKSelect fillValue={""} onChange={(e, opt) => {
						this.f_areaOneChange(e, this.formRef.current);
					}}>
						{areaTree.map(item => {
							return <ZKSelect.Option key={item.id} value={item.key} >
								{zkToolsMsg.getInternationInfo(item.name)}
							</ZKSelect.Option>
						})}
					</ZKSelect>
				</ZKSearchItem>
				<ZKSearchItem name="areaTwo" label={zkToolsMsg.msgFormatByIntl(intl, 'example.table.col.areaTwo')} >
					<ZKSelect fillValue={"请选择"} >
						{areaTwos.map(item => {
							return <ZKSelect.Option key={item.id} value={item.key} >
								{zkToolsMsg.getInternationInfo(item.name)}
							</ZKSelect.Option>
						})}
					</ZKSelect>
				</ZKSearchItem>
				<ZKSearchItem name="birthday" label={zkToolsMsg.msgFormatByIntl(intl, 'example.table.col.birthday')}  >
					<ZKDateFormatPicker.RangePicker format="YYYY-MM-DD" />
				</ZKSearchItem>

				<ZKSearchItem name="sex" label={zkToolsMsg.msgFormatByIntl(intl, 'example.table.col.sex')}  >
					<ZKSelect fillValue={"其他"}>
						<ZKSelect.Option value="1">{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.man')}</ZKSelect.Option>
						<ZKSelect.Option value="0">{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.woman')}</ZKSelect.Option>
					</ZKSelect>
				</ZKSearchItem>

			</ZKSearchRow>
		)
	}
}

// export default injectIntl(ZKSearchRow.create()(CInitE1_Search));
export default injectIntl(CInitE1_Search);



