/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2025-01-08 17:11:24
* @Last Modified by: vinson
* @Last Modified time: 2025-01-15 14:43:42
*/

import React from 'react';

import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKPopconfirm, ZKButton } = ZKOriginalComponents;
const { ZKOptRow, ZKScrollTable } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;

import zkStyles from 'zkFramework/style/zk.styles.less';

/**
 * 取 table 列表
 * @param {Function} onEedit 编辑函数
 * @param {Function} onDetail 明细函数
 * @param {Function} onDelete 删除函数
 * @param {object} intl 国际化语言对象
 * @param {string} lang 当前语言标识
 */
const f_getTableColumns = (onEedit, onDetail, onDelete, intl, lang) => {

	return [
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.iot.IotProdInstance.prodCode'),
			textAlign: 'center', dataIndex: 'prodCode', key: 'prodCode', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.iot.IotProdInstance.prodModelCode'),
			textAlign: 'center', dataIndex: 'prodModelCode', key: 'prodModelCode', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.iot.IotProdInstance.status'),
			textAlign: 'center', dataIndex: 'status', key: 'status', width: 100, 
			render: (text, record, index) => {
				return zkToolsMsg.msgFormatByIntl(intl, 'zk.iot.IotProdInstance.status.' + text);
			}
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.iot.IotProdInstance.name'),
			textAlign: 'center', dataIndex: 'name', key: 'name', width: 100, 
			render: (text, record, index) => {
				return zkToolsMsg.getInternationInfo(record.name?record.name:{}, lang);
			}
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.iot.IotProdInstance.snNum'),
			textAlign: 'center', dataIndex: 'snNum', key: 'snNum', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.iot.IotProdInstance.isIn'),
			textAlign: 'center', dataIndex: 'isIn', key: 'isIn', width: 100, 
			render: (text, record, index) => {
				if(record.isIn){
					return zkToolsMsg.msgFormatByIntl(intl, 'zk.iot.IotProdInstance.isIn.true');
				}
				return zkToolsMsg.msgFormatByIntl(intl, 'zk.iot.IotProdInstance.isIn.false');
			}
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.iot.IotProdInstance.macAddr'),
			textAlign: 'center', dataIndex: 'macAddr', key: 'macAddr', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.iot.IotProdInstance.ipAddr'),
			textAlign: 'center', dataIndex: 'ipAddr', key: 'ipAddr', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.iot.IotProdInstance.port'),
			textAlign: 'center', dataIndex: 'port', key: 'port', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.iot.IotProdInstance.sort'),
			textAlign: 'center', dataIndex: 'sort', key: 'sort', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.iot.IotProdInstance.lastInTime'),
			textAlign: 'center', dataIndex: 'lastInTime', key: 'lastInTime', width: 100, 
		},
		// {
		// 	title: zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_name'),
		// 	key: 'opt', width: 100, fixed: 'right', 
		// 	render: (text, record, index) => {
		// 		return (
		// 			<ZKOptRow key={`grid-${record.pkId}`} >
		// 				<ZKOptRow.OptGroup isAutoPurseUp={true} >
		// 					<ZKOptRow.OptGroup.OptItem onClick={() => { // 编辑
		// 						onEedit(record);
		// 					}}>
		// 						{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_edit')}
		// 					</ZKOptRow.OptGroup.OptItem>
		// 					<ZKOptRow.OptGroup.OptItem onClick={() => { // 明细/详情
		// 						onDetail(record);
		// 					}}>
		// 						{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_detail')}
		// 					</ZKOptRow.OptGroup.OptItem>
		// 				</ZKOptRow.OptGroup>
		// 				<ZKPopconfirm type="delete" placement="top"
		// 					onConfirm={() => { // 删除
		// 						onDelete([record.pkId])
		// 					}}>
		// 					<ZKButton>{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_del')}</ZKButton>
		// 				</ZKPopconfirm>
		// 			</ZKOptRow>
		// 		)
		// 	}
		// }
	]
};

class CInitIotProdInstanceGrid extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			sh: 360
		}
	}

	/** 编辑 */
	f_edit = entity => {
		let state = {
            optEntity: {}
        };
        if(entity && entity.pkId){
            state.optEntity = entity;
            this.props.history.push({ pathname: `${this.props.match.path}/edit/${entity.pkId}`, state: state });
        }else{
            this.props.history.push({ pathname: `${this.props.match.path}/edit/_new`, state: state });
        }
	}

	/** 详情明细 */
	f_detail = (entity) => {
		this.props.history.push({ pathname: `${this.props.match.path}/detail/${entity.pkId}`, state: { optEntity: entity } });
	}

	/** 删除，删除的提示等，真正的数据删除是 f_deleteAction 删除执行函数进行 */
	f_delete = (keys, isConfirm) => {
		let _this = this;
		// 执行删除
		let f_executeDelete = (pkIds) => {
            _this.props.dispatch({
                type: "mIotProdInstance/delIotProdInstance", payload: { pkId: pkIds },
                callback: () => {
                    _this.props.dispatch({ type: 'mIotProdInstance/findIotProdInstances', filter: _this.props.mIotProdInstance.filter, pagination: mIotProdInstance.pagination, callback: e => { } })
                }
            });
		};
		if (keys === null || keys === undefined || keys.length < 1) {
			zkToolsMsg.alertMsgByType(this.props.intl, null, 'selectData')
		} else {
			if (isConfirm) {
				zkToolsMsg.alertMsgByType(this.props.intl, null, 'delConfirm', () => {
					// ok
					f_executeDelete(keys);
				}, () => {
					// cancel
				})
			} else {
				// 执行删除
				f_executeDelete(keys);
			}
		}
	}
	
	/** 选择行改变 */
	f_changeSelKeys = (selRowKeys, selRows) => {
		this.props.dispatch({ type: "mIotProdInstance/setState", payload: { gridSelKeys: selRowKeys } });
	}

	/** 列表改变 */
	f_changeGrid = (pagination, filters, sorter) => {
        // 注意这里要将 zkToolsUtils.convertSortParam(xxx.filter, sorter) 放在前面，以便后面新的分页参数覆盖旧的分页参数；在排序处理函数中会处理旧排序的问题
        this.props.dispatch({ 
        	type: 'mIotProdInstance/findIotProdInstances', 
            filter: this.props.mIotProdInstance.filter,
            pagination: pagination,
            sorter: sorter
        });
    }

	/** 返回 JSX 元素 */
	render() {

		let { intl, mApp, mIotProdInstance, loading } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

		let tableColumns = f_getTableColumns(this.f_edit, this.f_detail, this.f_delete, intl, lang);

		let gridLoading = loading.effects['mIotProdInstance/findIotProdInstances'];

		return (
			<ZKScrollTable loading = { gridLoading }
				autoHeight = {true}
				rowSelection = {{
					onChange: (selRowKeys, selRows) => { this.f_changeSelKeys(selRowKeys, selRows) },
					selectedRowKeys: mIotProdInstance.gridSelKeys||[], 
					columnWidth: '32px'
				}}
				rowKey = "pkId"
				rowNum = {{'textAlign': 'center', 'fixed': 'left', width: 40}}
				columns = {tableColumns}
				scroll = {{ x:1440, y: this.state.sh }}
				pagination = {mIotProdInstance.pagination||{}}
				// pagination = {{position: ['topRight'], ...page}}
                dataSource = {mIotProdInstance.gridData||[]}
                // (pagination, filters, sorter, extra: { currentDataSource: [] })
                onChange = {this.f_changeGrid}
				className = {zkStyles.zk_f_display_flex}
			>
				<ZKOptRow>
					<ZKOptRow.OptGroup>
						<ZKOptRow.OptGroup.OptItem onClick={(e) => {
							this.f_edit({});
						}} >{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_add')}</ZKOptRow.OptGroup.OptItem>
						<ZKOptRow.OptGroup.OptItem onClick={(e) => {
							// 删除
							this.f_delete(mIotProdInstance.gridSelKeys, true);
						}} >{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_del')}</ZKOptRow.OptGroup.OptItem>
					</ZKOptRow.OptGroup>
				</ZKOptRow>
			</ZKScrollTable>
		)
	}
}

export default CInitIotProdInstanceGrid;


