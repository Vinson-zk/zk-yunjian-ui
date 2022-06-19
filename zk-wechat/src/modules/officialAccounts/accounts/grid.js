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
		// {
		// 	title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.accounts.dataSpacePlatform'),
		// 	textAlign: 'center', dataIndex: 'dataSpacePlatform', key: 'dataSpacePlatform', width: 100, 
		// },
		// {
		// 	title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.accounts.dataSpaceGroup'),
		// 	textAlign: 'center', dataIndex: 'dataSpaceGroup', key: 'dataSpaceGroup', width: 100, 
		// },
		// {
		// 	title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.accounts.dataSpaceOwner'),
		// 	textAlign: 'center', dataIndex: 'dataSpaceOwner', key: 'dataSpaceOwner', width: 100, 
		// },
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.accounts.groupCode'),
			textAlign: 'center', dataIndex: 'groupCode', key: 'groupCode', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.accounts.companyCode'),
			textAlign: 'center', dataIndex: 'companyCode', key: 'companyCode', width: 100, 
		},  
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.accounts.wxThirdPartyAppid'),
			textAlign: 'center', dataIndex: 'wxThirdPartyAppid', key: 'wxThirdPartyAppid', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.accounts.wxAccountAppid'),
			textAlign: 'center', dataIndex: 'wxAccountAppid', key: 'wxAccountAppid', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.accounts.wxAuthAccountType'),
			textAlign: 'center', dataIndex: 'wxAuthAccountType', key: 'wxAuthAccountType', width: 100, 
			render: (text, record, index) => {
				if(record.wxAuthAccountType){
					return zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.yes');
				}else{
					return zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.no');
				}
			}
		},
		// {
		// 	title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.accounts.wxAuthorizerRefreshToken'),
		// 	textAlign: 'center', dataIndex: 'wxAuthorizerRefreshToken', key: 'wxAuthorizerRefreshToken', width: 100, 
		// },
		// {
		// 	title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.accounts.wxFuncInfo'),
		// 	textAlign: 'center', dataIndex: 'wxFuncInfo', key: 'wxFuncInfo', width: 100, 
		// 	render: (text, record, index) => {
		// 		return zkToolsMsg.getInternationInfo(record.wxFuncInfo?record.wxFuncInfo:{}, lang);
		// 	}
		// },
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.accounts.wxNickName'),
			textAlign: 'center', dataIndex: 'wxNickName', key: 'wxNickName', width: 100, 
		},
		// {
		// 	title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.accounts.wxHeadImg'),
		// 	textAlign: 'center', dataIndex: 'wxHeadImg', key: 'wxHeadImg', width: 100, 
		// },
		// {
		// 	title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.accounts.wxServiceTypeInfo'),
		// 	textAlign: 'center', dataIndex: 'wxServiceTypeInfo', key: 'wxServiceTypeInfo', width: 100, 
		// },
		// {
		// 	title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.accounts.wxVerifyTypeInfo'),
		// 	textAlign: 'center', dataIndex: 'wxVerifyTypeInfo', key: 'wxVerifyTypeInfo', width: 100, 
		// },
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.accounts.wxUserName'),
			textAlign: 'center', dataIndex: 'wxUserName', key: 'wxUserName', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.accounts.wxPrincipalName'),
			textAlign: 'center', dataIndex: 'wxPrincipalName', key: 'wxPrincipalName', width: 100, 
		},
		// {
		// 	title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.accounts.wxBusinessInfo'),
		// 	textAlign: 'center', dataIndex: 'wxBusinessInfo', key: 'wxBusinessInfo', width: 100, 
		// },
		// {
		// 	title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.accounts.wxQrcodeUrl'),
		// 	textAlign: 'center', dataIndex: 'wxQrcodeUrl', key: 'wxQrcodeUrl', width: 100, 
		// },
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.accounts.wxAlias'),
			textAlign: 'center', dataIndex: 'wxAlias', key: 'wxAlias', width: 100, 
		},
		// {
		// 	title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.accounts.wxSignature'),
		// 	textAlign: 'center', dataIndex: 'wxSignature', key: 'wxSignature', width: 100, 
		// },
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

class CInitAccountsGrid extends React.Component {

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
                type: "mOfficialAccounts/delAccounts", payload: { pkId: pkIds },
                callback: () => {
                    _this.props.dispatch({ type: 'mOfficialAccounts/findAccounts', filter: mOfficialAccounts.filter, pagination: mOfficialAccounts.pagination, callback: e => { } })
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
		this.props.dispatch({ type: "mOfficialAccounts/setState", payload: { gridSelKeys: selRowKeys } });
	}

	/** 列表改变 */
	f_changeGrid = (pagination, filters, sorter) => {
        // 注意这里要将 zkToolsUtils.convertSortParam(xxx.filter, sorter) 放在前面，以便后面新的分页参数覆盖旧的分页参数；在排序处理函数中会处理旧排序的问题
        this.props.dispatch({ 
        	type: 'mOfficialAccounts/findAccounts', 
            filter: this.props.mOfficialAccounts.filter,
            pagination: pagination,
            sorter: sorter
        });
    }

	/** 返回 JSX 元素 */
	render() {

		let { intl, mApp, mOfficialAccounts, loading, onAuth } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

		let tableColumns = f_getTableColumns(this.f_edit, this.f_detail, this.f_delete, intl, lang);

		let gridLoading = loading.effects['mOfficialAccounts/findAccounts'];

		return (
			<ZKScrollTable loading = { gridLoading }
				autoHeight = {true}
				rowSelection = {{
					onChange: (selRowKeys, selRows) => { this.f_changeSelKeys(selRowKeys, selRows) },
					selectedRowKeys: mOfficialAccounts.gridSelKeys||[], 
					columnWidth: '32px'
				}}
				rowKey = "pkId"
				rowNum = {{'textAlign': 'center', 'fixed': 'left', width: 40}}
				columns = {tableColumns}
				scroll = {{ x:1440, y: this.state.sh }}
				pagination = {mOfficialAccounts.pagination||{}}
				// pagination = {{position: ['topRight'], ...page}}
                dataSource = {mOfficialAccounts.gridData||[]}
                // (pagination, filters, sorter, extra: { currentDataSource: [] })
                onChange = {this.f_changeGrid}
				className = {zkStyles.flex_1_auto}
			>
				<ZKOptRow>
					<ZKOptRow.OptGroup>
						<ZKOptRow.OptGroup.OptItem onClick={(e) => {
							onAuth(true);
						}} >{zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.accounts.auth')}</ZKOptRow.OptGroup.OptItem>
					</ZKOptRow.OptGroup>
				</ZKOptRow>
			</ZKScrollTable>
		)
	}
}

export default CInitAccountsGrid;

