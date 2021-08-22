/**
 *
 * @Author: Vinson
 * @Date: 2020-08-17 14:21:00
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-06 20:06:58
 */


import React from 'react';
import { injectIntl } from 'react-intl';

import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKTable, ZKPopconfirm, ZKButton } = ZKOriginalComponents;
const { ZKOptRow } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;

const f_getTableColumns = (editFunc, detailFunc, deleteFunc, areaTree, intl) => {

	return [
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'example.table.col.name'),
			dataIndex: 'name',
			key: 'name',
			width: 130,
			textAlign: 'left',
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'example.table.col.stature'),
			dataIndex: 'stature',
			key: 'stature',
			width: 50,
			textAlign: 'center',
			sorter: (a, b) => { if (a.stature > b.stature) { return 1 } else if (a.stature < b.stature) { return -1 } else { return 0 } },
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'example.table.col.birthday'),
			dataIndex: 'birthday',
			width: 120,
			key: 'birthday',
			textAlign: 'center',
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'example.table.col.sex'),
			dataIndex: 'sex',
			key: 'sex',
			width: 50,
			textAlign: 'center',
			render: (text, record, index) => {
				if (record.sex == '0') {
					return zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.woman')
				} else if (record.sex == '1') {
					return zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.man')
				} else {
					return zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.Unknown')
				}
			}
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'example.table.col.education'),
			dataIndex: 'education',
			key: 'education',
			width: 50,
			textAlign: 'center',
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'example.table.col.areaOne'),
			dataIndex: 'areaOne',
			key: 'areaOne',
			width: 50,
			textAlign: 'center',
			render: (text, record, index) => {
				for (let item of areaTree) {
					if (item.key == record.areaOne) {
						return zkToolsMsg.getInternationInfo(item.name);
					}
				}
				return record.areaOne;
			}
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'example.table.col.areaTwo'),
			dataIndex: 'areaTwo',
			key: 'areaTwo',
			width: 50,
			textAlign: 'center',
			render: (text, record, index) => {
				for (let item of areaTree) {
					if (item.key == record.areaOne) {
						if (item.childs instanceof Array) {
							for (let cItem of item.childs) {
								if (cItem.key == record.areaTwo) {
									return zkToolsMsg.getInternationInfo(cItem.name);
								}
							}
						}

					}
				}
				return record.areaTwo;
			}
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_name'),
			key: 'opt',
			width: 100,
			render: (text, record, index) => {
				return (
					<ZKOptRow key={`grid-${record.id}`} >
						<ZKOptRow.OptGroup isAutoPurseUp={true} >
							<ZKOptRow.OptGroup.OptItem onClick={() => {
								editFunc(record);
							}}>
								{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_edit')}
							</ZKOptRow.OptGroup.OptItem>
							<ZKOptRow.OptGroup.OptItem onClick={() => {
								// 明细/详情
								detailFunc(record);
							}}>
								{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_detail')}-1
							</ZKOptRow.OptGroup.OptItem>
							<ZKOptRow.OptGroup.OptItem onClick={() => {
								// 明细/详情
								detailFunc(record, 2);
							}}>
								{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_detail')}-2
							</ZKOptRow.OptGroup.OptItem>
						</ZKOptRow.OptGroup>
						<ZKPopconfirm
							type="delete" placement="top" onConfirm={() => {
								// 删除
								deleteFunc([record.id])
							}}>
							<ZKButton>{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_del')}</ZKButton>
						</ZKPopconfirm>
					</ZKOptRow>
				)
			}
		}
	]
};

class CInitE1_Grid extends React.Component {

	constructor(props) {
		super(props);
	}

	// 删除，删除的提示等，真正的数据删除是 f_deleteAction 删除执行函数进行
	f_delete = (keys, isConfirm)=>{

		let executeDelete = (keys) => {
			// 执行删除
			if (this.props.onDelete instanceof Function) {
				this.props.onDelete.call(this, keys);
			}
		};

		if (keys === null || keys === undefined || keys.length < 1) {
			zkToolsMsg.alertMsgByType(this.props.intl, null, 'selectData');
		} else {
			if (isConfirm) {
				zkToolsMsg.alertMsgByType(this.props.intl, null, 'delConfirm', () => {
					// ok
					executeDelete(keys);
				}, () => {
					// cancel
				})
			} else {
				// 执行删除
				executeDelete(keys);
			}
		}
	}

	render() {

		let { data = [], selKeys = [], onChangeSelKeys, onDetail, onEdit, areaTree = [], intl } = this.props

		// 改变选择行
		const changeSelKeysFunc = (selRowKeys, selRows) => {
			if (onChangeSelKeys instanceof Function) {
				onChangeSelKeys.call(this, selRowKeys);
			}
		};

		// 明细
		const detailFunc = (entity, flag = 1) => {
			if (onDetail instanceof Function) {
				onDetail.call(this, entity, flag);
			}
		};

		// 删除
		const deleteFunc = ids => {
			this.f_delete(ids, false);
		};

		// 新增/编辑
		const editFunc = entity => {
			if (onEdit instanceof Function) {
				onEdit.call(this, entity)
			}
		};

		let tableColumns = f_getTableColumns(editFunc, detailFunc, deleteFunc, areaTree, intl);

		return (
			<ZKTable
				rowSelection={{
					onChange: (selRowKeys, selRows) => { changeSelKeysFunc(selRowKeys, selRows) },
					selectedRowKeys: selKeys,
					columnWidth: 50
				}}
				rowNum={{ width: 5 }}
				columns={tableColumns}
				// scroll={{x:false, y: 300 }}
				pagination={{}}
				dataSource={data}
				// pageData={data}
				rowKey = "id"
			>
				<ZKOptRow>
					<ZKOptRow.OptGroup>
						<ZKOptRow.OptGroup.OptItem onClick={(e) => {
							editFunc({});
						}} >{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_add')}</ZKOptRow.OptGroup.OptItem>
						<ZKOptRow.OptGroup.OptItem onClick={(e) => {
							// 删除
							this.f_delete(selKeys, true);
						}} >{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_del')}</ZKOptRow.OptGroup.OptItem>
					</ZKOptRow.OptGroup>
				</ZKOptRow>
			</ZKTable>
		)
	}
}

export default injectIntl(CInitE1_Grid);
// loading
// export default injectIntl(connect(({loading})=>({loading}))(CInitE1_Grid));
