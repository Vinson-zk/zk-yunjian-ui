/**
 *
 * @Author: 
 * @Date: 
 * @Last 
 * @Last 
 */

import React from 'react';

import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKPopconfirm, ZKButton } = ZKOriginalComponents;
const { ZKOptRow, ZKScrollTable } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;

import zkStyles from 'zkFramework/css/styles.less';

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
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.userGps.officialAccountsUserPkId'),
			textAlign: 'center', dataIndex: 'officialAccountsUserPkId', key: 'officialAccountsUserPkId', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.userGps.dataSpacePlatform'),
			textAlign: 'center', dataIndex: 'dataSpacePlatform', key: 'dataSpacePlatform', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.userGps.dataSpaceGroup'),
			textAlign: 'center', dataIndex: 'dataSpaceGroup', key: 'dataSpaceGroup', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.userGps.dataSpaceOwner'),
			textAlign: 'center', dataIndex: 'dataSpaceOwner', key: 'dataSpaceOwner', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.userGps.wxThirdPartyAppid'),
			textAlign: 'center', dataIndex: 'wxThirdPartyAppid', key: 'wxThirdPartyAppid', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.userGps.wxAuthorizerAppid'),
			textAlign: 'center', dataIndex: 'wxAuthorizerAppid', key: 'wxAuthorizerAppid', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.userGps.wxOpenid'),
			textAlign: 'center', dataIndex: 'wxOpenid', key: 'wxOpenid', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.userGps.wxLatitude'),
			textAlign: 'center', dataIndex: 'wxLatitude', key: 'wxLatitude', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.userGps.wxLongitude'),
			textAlign: 'center', dataIndex: 'wxLongitude', key: 'wxLongitude', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.userGps.wxPrecision'),
			textAlign: 'center', dataIndex: 'wxPrecision', key: 'wxPrecision', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.userGps.wxCreateTime'),
			textAlign: 'center', dataIndex: 'wxCreateTime', key: 'wxCreateTime', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_name'),
			key: 'opt', width: 100, fixed: 'right', 
			render: (text, record, index) => {
				return (
					<ZKOptRow key={`grid-${record.pkId}`} >
						<ZKOptRow.OptGroup isAutoPurseUp={true} >
							<ZKOptRow.OptGroup.OptItem onClick={() => { // 明细/详情
								onDetail(record);
							}}>
								{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_detail')}
							</ZKOptRow.OptGroup.OptItem>
						</ZKOptRow.OptGroup>
					</ZKOptRow>
				)
			}
		}
	]
};

class CInitOfficialAccountsUserGpsGrid extends React.Component {

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
		let f_executeDelete = (keys) => {
            _this.props.dispatch({
                type: "mOfficialAccountsUserGps/delOfficialAccountsUserGps", payload: { pkId: pkIds },
                callback: () => {
                    _this.props.dispatch({ type: 'mOfficialAccountsUserGps/findOfficialAccountsUserGpss', filter: mOfficialAccountsUserGps.filter, pagination: mOfficialAccountsUserGps.pagination, callback: e => { } })
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
		this.props.dispatch({ type: "mOfficialAccountsUserGps/setState", payload: { gridSelKeys: selRowKeys } });
	}

	/** 列表改变 */
	f_changeGrid = (pagination, filters, sorter) => {
        // 注意这里要将 zkToolsUtils.convertSortParam(xxx.filter, sorter) 放在前面，以便后面新的分页参数覆盖旧的分页参数；在排序处理函数中会处理旧排序的问题
        this.props.dispatch({ 
        	type: 'mOfficialAccountsUserGps/findOfficialAccountsUserGpss', 
            filter: this.props.mOfficialAccountsUserGps.filter,
            pagination: pagination,
            sorter: sorter
        });
    }

	/** 返回 JSX 元素 */
	render() {

		let { intl, mApp, mOfficialAccountsUserGps, loading } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

		let tableColumns = f_getTableColumns(this.f_edit, this.f_detail, this.f_delete, intl, lang);

		let gridLoading = loading.effects['mOfficialAccountsUserGps/findOfficialAccountsUserGpss'];

		return (
			<ZKScrollTable loading = { gridLoading }
				autoHeight = {true}
				rowSelection = {{
					onChange: (selRowKeys, selRows) => { this.f_changeSelKeys(selRowKeys, selRows) },
					selectedRowKeys: mOfficialAccountsUserGps.gridSelKeys||[], 
					columnWidth: '32px'
				}}
				rowKey = "pkId"
				rowNum = {{'textAlign': 'center', 'fixed': 'left', width: 40}}
				columns = {tableColumns}
				scroll = {{ x:1440, y: this.state.sh }}
				pagination = {mOfficialAccountsUserGps.pagination||{}}
				// pagination = {{position: ['topRight'], ...page}}
                dataSource = {mOfficialAccountsUserGps.gridData||[]}
                // (pagination, filters, sorter, extra: { currentDataSource: [] })
                onChange = {this.f_changeGrid}
				className = {zkStyles.flex_1_auto}
			>
			</ZKScrollTable>
		)
	}
}

export default CInitOfficialAccountsUserGpsGrid;



