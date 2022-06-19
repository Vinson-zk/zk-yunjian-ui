/**
 *
 * @Author: Vinson
 * @Date: 2020-10-26 17:59:45
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-04-19 19:43:21
 */


import React from 'react';
import { injectIntl } from 'react-intl';

import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKTable, ZKPopconfirm, ZKButton } = ZKOriginalComponents;
const { ZKOptRow, ZKScrollTable } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;

import zkStyles from 'zkFramework/css/styles.less';

// import $ from 'zkJquery'; // 可以这样引入，或直接使用 jQuery

/**
 * 取 table 列表
 * @param {Function} editFunc 编辑函数
 * @param {Function} detailFunc 明细函数
 * @param {Function} deleteFunc 删除函数
 * @param {object} intl 国际化语言对象
 */
const f_getTableColumns = (onEdit, onDetail, onDelete, intl, lang) => {

	return [
   //      {
			// title: zkToolsMsg.msgFormatByIntl(intl, 'zk.system.menu.pkId'),
			// dataIndex: 'pkId', key: 'pkId', width: 120, textAlign: 'left'
   //      },
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.system.menu.name'),
			dataIndex: 'name', key: 'name', width: 100, textAlign: 'left', 
			render: (text, record, index) => {
				return zkToolsMsg.getInternationInfo(record.name?record.name:{}, lang);
			}
        },
        {
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.system.menu.code'),
			dataIndex: 'code', key: 'code', width: 80, textAlign: 'left'
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.system.menu.navCode'),
			dataIndex: 'navCode', key: 'navCode', width: 90, textAlign: 'left'
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.system.menu.funcModuleCode'),
            dataIndex: 'funcModuleCode', width: 90, key: 'funcModuleCode', textAlign: 'left', sorter: true
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.system.menu.funcName'),
			dataIndex: 'funcName', key: 'funcName', width: 120, textAlign: 'left',
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.system.menu.path'),
			dataIndex: 'path', key: 'path', width: 50, textAlign: 'left',
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.system.menu.sort'),
			dataIndex: 'sort', key: 'sort', width: 50, textAlign: 'center', sorter: true,
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.system.menu.isIndex'),
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
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.system.menu.isShow'),
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
							<ZKOptRow.OptGroup.OptItem onClick={(e) => {
								onEdit(record, undefined);
							}} >{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_add_child')}</ZKOptRow.OptGroup.OptItem>
							<ZKOptRow.OptGroup.OptItem onClick={() => { // 编辑
								onEdit(undefined, record);
							}}>
								{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_edit')}
							</ZKOptRow.OptGroup.OptItem>
							<ZKOptRow.OptGroup.OptItem onClick={() => { // 明细/详情
								onDetail(record);
							}}>
								{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_detail')}
							</ZKOptRow.OptGroup.OptItem>
						</ZKOptRow.OptGroup>
						<ZKPopconfirm type="delete" placement="top"
							onConfirm={() => { // 删除
								onDelete([record.pkId], false)
							}}>
							<ZKButton>{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_del')}</ZKButton>
						</ZKPopconfirm>
					</ZKOptRow>
				)
			}
		}
	]
};

class CInitSysMenuGrid extends React.Component {

	constructor(props) {
		super(props);
	}
	
	// 新增/编辑
	f_edit = (parent={}, entity={}) => {

        let parentId = parent.pkId||entity.parentId||"_top";
        let pkId = entity.pkId||"_new";

        let state = {parentEntity: parent, optEntity: entity};
        this.props.history.push({ pathname: `${this.props.match.path}/edit/${parentId}/${pkId}`, state: state });
	}

	// 明细
	f_detail = (entity) => {
		this.props.history.push({ pathname: `${this.props.match.path}/detail/${entity.pkId}`, state: { optEntity: entity } });
	}

	// 删除，删除的提示等，真正的数据删除是 f_deleteAction 删除执行函数进行
	f_delete = (keys, isConfirm)=>{
		// 执行删除
		let f_executeDelete = (keys) => {
			this.props.dispatch({
                type: "mSysMenu/deleteSysMenu", payload: { pkId: keys },
                callback: () => {
                    this.props.dispatch({ type: 'mSysMenu/findSysMenusTree', filter: this.props.mSysMenu.filter, pagination: this.props.mSysMenu.pagination, callback: e => { } })
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

	// 改变选择行
	f_changeSelKeysFunc = (selRowKeys, selRows) => {
		this.props.dispatch({ type: "mSysMenu/setState", payload: { gridSelKeys: selRowKeys } });
	}

	// 列表改变
	f_change = (pagination, filters, sorter)=>{
        this.props.dispatch({ type: 'mSysMenu/findSysMenusTree', 
            filter: this.props.mSysMenu.filter,
            pagination: pagination,
            sorter: sorter
        });
    }

	render() {

		let { intl, mApp, mSysMenu, dispatch, history, match, loading } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

		let gridLoading = loading.effects['mSysMenu/findSysMenusTree'];

		let tableColumns = f_getTableColumns(this.f_edit, this.f_detail, this.f_delete, intl, lang);

		// scroll = {{x:1440, y: 'calc(100vh - 217px)' }}
		return (
			<ZKScrollTable
				autoHeight = {true}
                rowKey = "pkId"
				loading = { gridLoading }
				rowSelection = {{
					onChange: (selRowKeys, selRows) => { this.f_changeSelKeysFunc(selRowKeys, selRows) },
					selectedRowKeys: mSysMenu.gridSelKeys
				}}
				rowNum = {{ fixed: 'left' }}
				// rowNum = {{}}
				columns = {tableColumns}
				scroll = {{ x:1440, y: 600 }}
				// scroll = {{ y: this.state.sh }}
				pagination = {mSysMenu.pagination||{}}
				// pagination={{ position: ['topRight', 'bottomRight'], ...pagination}}
                dataSource = {mSysMenu.gridData||[]}
                // (pagination, filters, sorter, extra: { currentDataSource: [] })
                onChange = {this.f_change}
				className = { zkStyles.flex_1_auto }
			>
				<ZKOptRow>
					<ZKOptRow.OptGroup>
						<ZKOptRow.OptGroup.OptItem onClick={(e) => {
							this.f_edit({});
						}} >{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_add')}</ZKOptRow.OptGroup.OptItem>
						<ZKOptRow.OptGroup.OptItem onClick={(e) => {
							// 删除
							this.f_delete(mSysMenu.gridSelKeys, true);
						}} >{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_del')}</ZKOptRow.OptGroup.OptItem>
					</ZKOptRow.OptGroup>
				</ZKOptRow>
			</ZKScrollTable>
		)
	}
}

export default injectIntl(CInitSysMenuGrid);


