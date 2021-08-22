/**
 *
 * @Author: Vinson
 * @Date: 2020-08-17 14:21:13
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-31 16:00:27
 */


import React from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'dva';

import { ZKOriginalComponents } from "zkFramework";
const { ZKSpin } = ZKOriginalComponents;

import Grid from './grid';
import Search from './search';


class CInitE1_index extends React.Component {

	constructor(props) {
		super(props)
		this.state = {}

		console.log("[^_^:20200830-1525-001] CInitE1_index.constructor" );
	}

	// static getDerivedStateFromProps(props, state) {
	// 	// console.log("====== history:", history)
	// 	// console.log("====== location:", location)
	// 	return true;
	// }

	render() {

		let { dispatch, history, match, mExample_1, loading } = this.props

		// 查询
		const onSearch = filter => {
			if (!filter) {
				filter = mExample_1.initFilter;
			}
			dispatch({ type: "mExample_1/findList", payload: filter, callback: e => { } })
		};
		// 重置查询条件
		const onSetFilter = filter => {
			if (!filter) {
				filter = mExample_1.initFilter;
			}
			dispatch({ type: "mExample_1/setState", payload: { filter: filter } })
		};
		// 查看明细
		const onDetail = (optEntity, flag) => {
			switch (flag) {
				case 2:
					history.push({ pathname: `${match.path}/e1Detail_2/${optEntity.id}`, state: { optEntity: optEntity } });
					break;
				default:
					history.push({ pathname: `${match.path}/e1Detail_1/${optEntity.id}`, state: { optEntity: optEntity } });
					break;
			}
		};
		// 删除
		const onDelete = ids => {
			dispatch({
				type: "mExample_1/del",
				payload: { ids: ids },
				callback: () => {
					this.props.dispatch({ type: 'mExample_1/findList', payload: mExample_1.filter, callback: e => { } })
				}
			})
		};
		// 编辑/新增
		const onEdit = entity => {
			// console.log(entity)

			let state = {
				optEntity: {}
			};

			if (entity.id == undefined) {
				history.push({ pathname: `${match.path}/e1Edit/_new`, state: state });
			} else {
				state.optEntity = entity;
				history.push({ pathname: `${match.path}/e1Edit/${entity.id}`, state: state });
			}
		};
		// 设置列表选择行
		const onChangeGridSelKeys = selKeys => {
			dispatch({ type: "mExample_1/setState", payload: { gridSelKeys: selKeys } })
		};

		// 查询 Search Component 组件属性
		let searchProps = {
			filter: mExample_1.filter,
			onSearch: onSearch,
			onSetFilter: onSetFilter,
			areaTree: mExample_1.areaTree
		};

		// 列表 Grid Component 组件属性
		let gridProps = {
			onEdit: onEdit,
			onDetail: onDetail,
			onDelete: onDelete,
			onChangeSelKeys: onChangeGridSelKeys,
			selKeys: mExample_1.gridSelKeys,
			data: mExample_1.data,
			areaTree: mExample_1.areaTree
		};

		// 'mExample_1/findList' 'mExample_1/getAreaTree'  'mExample_1/get'  'mExample_1/save'  'mExample_1/del'
		let { effects } = loading;
		let spinning = effects['mExample_1/findList'] || effects['mExample_1/getAreaTree'] || effects['mExample_1/del'];

		// console.log("----- 111 ", effects, spinning, effects['mExample_1/findList']);

		return (
			<ZKSpin spinning={spinning === true} >
				<div>
					<Search {...searchProps} />
					<Grid {...gridProps} />
				</div>
			</ZKSpin>
		)
	}

	componentDidMount(){
		let { history, location, dispatch, mExample_1 } = this.props;
		if (location != mExample_1.location) {
			dispatch({ type: 'mExample_1/setState', payload: { location: location } });
			dispatch({ type: "mExample_1/findList", payload: mExample_1.filter, callback: e => { } })
		}
	}

	// componentDidUpdate(prevProps, prevState, snapshot){
	// 	console.log("---------------  componentDidUpdate ");
	// }
}

export default injectIntl(connect(({ mExample_1, loading }) => ({ mExample_1, loading }))(CInitE1_index))
