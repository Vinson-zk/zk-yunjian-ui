/**
 *
 * @Author: Vinson
 * @Date: 2020-08-21 17:54:50
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-04-01 18:30:43
 */


import React from 'react';
import { injectIntl } from 'react-intl';
import { Table } from 'antd';

import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKPopconfirm, ZKButton } = ZKOriginalComponents;
const { ZKOptRow, ZKScrollTable } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;

import zkStyles from 'zkFramework/css/styles.less';

/**
 * 取 table 列表
 * @param {Function} editFunc 编辑函数
 * @param {Function} detailFunc 明细函数
 * @param {Function} deleteFunc 删除函数
 * @param {object} intl 国际化语言对象
 */
const f_getTableColumns = (editFunc, detailFunc, deleteFunc, intl, lang) => {

	return [
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.system.nav.name'),
			dataIndex: 'name', key: 'name', width: 120, textAlign: 'left', 
			render: (text, record, index) => {
				return zkToolsMsg.getInternationInfo(record.name?record.name:{}, lang);
			}
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.system.nav.code'),
			dataIndex: 'code', key: 'code', width: 80, textAlign: 'center'
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.system.nav.funcModuleCode'),
            dataIndex: 'funcModuleCode', width: 80, key: 'funcModuleCode', textAlign: 'center'
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.system.nav.funcName'),
			dataIndex: 'funcName', key: 'funcName', width: 120, textAlign: 'center',
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.system.nav.path'),
			dataIndex: 'path', key: 'path', width: 50, textAlign: 'center',
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.system.nav.sort'),
			dataIndex: 'sort', key: 'sort', width: 50, textAlign: 'center', sorter: true,
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.system.nav.isIndex'),
            dataIndex: 'isIndex', key: 'isIndex', width: 50, textAlign: 'center',
            render: (text, record, index) => {
				if (record.isIndex == 1) {
					return zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.yes');
				} else {
					return zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.no');
				}
			}
        },
        {
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.system.nav.isShow'),
			dataIndex: 'isShow', key: 'isShow', width: 50, textAlign: 'center',
			render: (text, record, index) => {
				if (record.isShow == 1) {
					return zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.show');
				} else {
					return zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.hide');
				}
			}
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_name'),
			key: 'opt', width: 100, fixed: 'right', 
			render: (text, record, index) => {
				return (
					<ZKOptRow key={`grid-${record.pkId}`} >
						<ZKOptRow.OptGroup isAutoPurseUp={true} >
							<ZKOptRow.OptGroup.OptItem onClick={() => { // 编辑
								editFunc(record);
							}}>
								{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_edit')}
							</ZKOptRow.OptGroup.OptItem>
							<ZKOptRow.OptGroup.OptItem onClick={() => { // 明细/详情
								detailFunc(record);
							}}>
								{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_detail')}
							</ZKOptRow.OptGroup.OptItem>
						</ZKOptRow.OptGroup>
						<ZKPopconfirm type="delete" placement="top"
							onConfirm={() => { // 删除
								deleteFunc([record.pkId])
							}}>
							<ZKButton>{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_del')}</ZKButton>
						</ZKPopconfirm>
					</ZKOptRow>
				)
			}
		}
	]
};

class CInitSysNavGrid extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			sh: 360
		}
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
			zkToolsMsg.alertMsgByType(this.props.intl, null, 'selectData')
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

		let { page = {}, gridData = [], gridSelKeys = [], onChange, onChangeSelKeys, onDetail, onEdit, lang, intl, loading } = this.props

		// 改变选择行
		const changeSelKeysFunc = (selRowKeys, selRows) => {
			if (onChangeSelKeys instanceof Function) {
				onChangeSelKeys.call(this, selRowKeys);
			}
		};

		// 明细
		const detailFunc = (entity) => {
			if (onDetail instanceof Function) {
				onDetail.call(this, entity);
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

		let tableColumns = f_getTableColumns(editFunc, detailFunc, deleteFunc, intl, lang);

		return (
			<ZKScrollTable loading = { loading }
				autoHeight = {true}
				rowSelection = {{
					onChange: (selRowKeys, selRows) => { changeSelKeysFunc(selRowKeys, selRows) },
					selectedRowKeys: gridSelKeys, columnWidth: '32px'
				}}
				rowKey = "pkId"
				rowNum = {{'textAlign': 'center', 'fixed': 'left', width: 40}}
				columns = {tableColumns}
				scroll = {{ x:1440, y: this.state.sh }}
				pagination = {page}
				// pagination = {{position: ['topRight'], ...page}}
                dataSource = {gridData}
                // (pagination, filters, sorter, extra: { currentDataSource: [] })
                onChange = {onChange}
				className = {zkStyles.flex}
			>
				<ZKOptRow>
					<ZKOptRow.OptGroup>
						<ZKOptRow.OptGroup.OptItem onClick={(e) => {
							editFunc({});
						}} >{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_add')}</ZKOptRow.OptGroup.OptItem>
						<ZKOptRow.OptGroup.OptItem onClick={(e) => {
							// 删除
							this.f_delete(gridSelKeys, true);
						}} >{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_del')}</ZKOptRow.OptGroup.OptItem>
					</ZKOptRow.OptGroup>
				</ZKOptRow>
			</ZKScrollTable>
		)
	}
}

export default injectIntl(CInitSysNavGrid);
// loading
// export default injectIntl(connect(({loading})=>({loading}))(CInitE1_Grid));


