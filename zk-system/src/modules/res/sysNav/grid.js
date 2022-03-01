/**
 *
 * @Author: Vinson
 * @Date: 2020-08-21 17:54:50
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-11-03 15:32:17
 */


import React from 'react';
 import { connect } from 'dva';
import { injectIntl } from 'react-intl';
import { Table } from 'antd';

import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKPopconfirm, ZKButton } = ZKOriginalComponents;
const { ZKOptRow, ZKScrollTable } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;

import zkStyles from 'zkFramework/css/styles.less';

/**
 * 取 table 列表
 * @param {Function} onEditFunc 编辑函数
 * @param {Function} onDetailFunc 明细函数
 * @param {Function} onDeleteFunc 删除函数
 * @param {object} intl 国际化语言对象
 * @param {string} lang 当前语言标识
 */
const f_getTableColumns = (onEditFunc, onDetailFunc, onDeleteFunc, intl, lang) => {

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
								onEditFunc(record);
							}}>
								{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_edit')}
							</ZKOptRow.OptGroup.OptItem>
							<ZKOptRow.OptGroup.OptItem onClick={() => { // 明细/详情
								onDetailFunc(record);
							}}>
								{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_detail')}
							</ZKOptRow.OptGroup.OptItem>
						</ZKOptRow.OptGroup>
						<ZKPopconfirm type="delete" placement="top"
							onConfirm={() => { // 删除
								onDeleteFunc([record.pkId], false);
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
			sh: 360,
			// selKeys: []
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

		// 执行删除
		let f_executeDelete = (keys) => {
			this.props.dispatch({
                type: "mSysNav/deleteSysNav", payload: { pkId: keys },
                callback: () => {
                    this.props.dispatch({ type: 'mSysNav/findSysNavs', filter: this.props.mSysNav.filter, callback: e => { } })
                }
            })
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
		this.props.dispatch({ type: "mSysNav/setState", payload: { gridSelKeys: selRowKeys } });
		// this.setState({selKeys: selRowKeys});
	}

	/** 列表改变 */
	f_changeGrid = (pagination, filters, sorter) => {
        // 注意这里要将 zkToolsUtils.convertSortParam(mSysNav.filter, sorter) 放在前面，以便后面新的分页参数覆盖旧的分页参数；在排序处理函数中会处理旧排序的问题
        this.props.dispatch({ type: 'mSysNav/findSysNavs', 
            filter: mSysNav.filter,
            page: pagination,
            sorter: sorter
        });
    }

	/** 返回 JSX 元素 */
	render() {

		let { intl, mApp, mSysNav, loading } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();
        let page = mSysNav.page || {};
        let gridData = mSysNav.gridData || [];
        let gridSelKeys = mSysNav.gridSelKeys;

		let tableColumns = f_getTableColumns(this.f_edit, this.f_detail, this.f_delete, intl, lang);

		let loadingFlag = loading.effects['mSysNav/findSysNavs'];
		return (
			<ZKScrollTable loading = { loadingFlag }
				autoHeight = {true}
				rowSelection = {{
					onChange: (selRowKeys, selRows) => { this.f_changeSelKeys(selRowKeys, selRows) },
					selectedRowKeys: this.gridSelKeys, 
					columnWidth: '32px'
				}}
				rowKey = "pkId"
				rowNum = {{'textAlign': 'center', 'fixed': 'left', width: 40}}
				columns = {tableColumns}
				scroll = {{ x:1440, y: this.state.sh }}
				pagination = {page}
				// pagination = {{position: ['topRight'], ...page}}
                dataSource = {gridData}
                // (pagination, filters, sorter, extra: { currentDataSource: [] })
                onChange = { this.f_changeGrid }
				className = { zkStyles.flex }
			>
				<ZKOptRow>
					<ZKOptRow.OptGroup>
						<ZKOptRow.OptGroup.OptItem onClick={(e) => {
							this.f_edit({});
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

export default CInitSysNavGrid;
// export default injectIntl(CInitSysNavGrid);
// export default injectIntl(connect(({ mApp, mSysNav, loading }) => ({ mApp, mSysNav, loading }))(CInitSysNavGrid));




