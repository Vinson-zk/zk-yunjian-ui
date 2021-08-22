/**
 *
 * @Author: Vinson
 * @Date: 2020-08-17 14:20:35
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-08 23:56:46
 */


import React from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'dva';

import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKSpin } = ZKOriginalComponents;
const { ZKDetailGrid } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;

class CInitE1_Detail extends React.Component {

	// 1、构造函数
	constructor(props) { 
		super(props);
		this.state = {};

		// console.log("[^_^:20190522-1616-001] CInitE1_Detail -> constructor");
	}

	// // 2、调用render方法之前调用，无论是在初始安装还是后续更新。它应该返回一个更新状态的对象，或者返回null以不更新任何状态。
	// static getDerivedStateFromProps(props, state) {
	// 	console.log("[^_^:20181207-1800-001] CInitE1_Detail -> getDerivedStateFromProps ")
	// 	let { location, dispatch, match, mExample_1 } = props;
	// 	let { params } = match;
	// 	// 地址栏改变了 
	// 	if (mExample_1.location != location) {
	// 		let optEntity = location.state ? location.state.optEntity : {};
	// 		if (optEntity && optEntity.id && optEntity.id == params.id) {
	// 			console.log("[^_^:20200817-1628-001] CInitE1_Detail-2 -> optEntity:", optEntity);
	// 			dispatch({ type: 'mExample_1/setState', payload: { optEntity: optEntity, location: location } });
	// 		} else {
	// 			dispatch({ type: 'mExample_1/setState', payload: { location: location } });
	// 			dispatch({ type: 'mExample_1/get', payload: { params: { id: params.id } } });
	// 		}
	// 	}
	// 	return true;
	// }

	// 3、更新时调用，此方法仅作为性能优化存在。不要依赖它来“防止”渲染
	// shouldComponentUpdate(nextProps, nextState){
	// 	console.log("[^_^:20181207-1800-002] CInitE1_Detail -> shouldComponentUpdate ", 
	// 		(this.props.location == nextProps.location)) 
	// 	return true;
	// }

	render() {

		let { dispatch, mExample_1, intl, loading } = this.props;
		let { optEntity = {}, areaTree = [] } = mExample_1;
		let lang = zkToolsMsg.getLocale();

		let sex = "";
		if (optEntity.sex != undefined) {
			if (optEntity.sex == '0') {
				sex = zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.woman')
			} else if (optEntity.sex == '1') {
				sex = zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.man')
			} else {
				sex = zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.Unknown');
			}
		}

		let areaOne = undefined;
		if (optEntity.areaOne) {
			for (let item of areaTree) {
				if (item.key == optEntity.areaOne) {
					areaOne = item;
					break;
				}
			}
		}
		let areaTwo = undefined;
		if (optEntity.areaTwo && areaOne && (areaOne.childs instanceof Array)) {
			for (let item of areaOne.childs) {
				if (item.key == optEntity.areaTwo) {
					areaTwo = item;
					break;
				}
			}
		}

		// 设置一级地区
		let areaTwos = [];
		if (optEntity.areaOne) {
			for (let item of areaTree) {
				if (item.key == optEntity.areaOne) {
					areaTwos = item.childs || [];
					break;
				}
			}
		}

		let spinning = loading.effects['mExample_1/get'];
		return (
			<ZKSpin spinning={spinning === true} >
				<ZKDetailGrid >
					<ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'example.table.col.name')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>{optEntity.name}</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>
					<ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'example.table.col.stature')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>{optEntity.stature}</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>
					<ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'example.table.col.birthday')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>{optEntity.birthday}</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>
					<ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'example.table.col.areaOne')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>{areaOne ? zkToolsMsg.getInternationInfo(areaOne.name) : ''}</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>
					<ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'example.table.col.areaTwo')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>{areaTwo ? zkToolsMsg.getInternationInfo(areaTwo.name) : ''}</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>
					<ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'example.table.col.sex')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>{sex}</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>
					<ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'example.table.col.education')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>{optEntity.education}</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>
					<ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'example.table.col.hobby')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>{optEntity.hobby}</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>
					<ZKDetailGrid.Row>
						<ZKDetailGrid.ColLeft>{zkToolsMsg.msgFormatByIntl(intl, 'example.table.col.addr')}:</ZKDetailGrid.ColLeft>
						<ZKDetailGrid.ColRight>{optEntity.addr ? optEntity.addr[lang] : ""}</ZKDetailGrid.ColRight>
					</ZKDetailGrid.Row>

				</ZKDetailGrid>

			</ZKSpin>
		)
	}

	componentDidMount() {
		let { location, dispatch, match, mExample_1 } = this.props;
		let { params } = match;
		// 地址栏改变了 
		if (mExample_1.location != location) {
			let optEntity = location.state ? location.state.optEntity : {};
			if (optEntity && optEntity.id && optEntity.id == params.id) {
				console.log("[^_^:20200831-1602-001] CInitE1_Detail-2 -> optEntity:", optEntity);
				dispatch({ type: 'mExample_1/setState', payload: { optEntity: optEntity, location: location } });
			} else {
				dispatch({ type: 'mExample_1/setState', payload: { location: location } });
				dispatch({ type: 'mExample_1/get', payload: { params: { id: params.id } } });
			}
		}
	}

	// 卸载时；在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅
	componentWillUnmount() {
		// app.unmodel("mExample_1")
	}
}

export default injectIntl(connect(({ mExample_1, loading }) => ({ mExample_1, loading }))(CInitE1_Detail));

