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
		// 	title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.dataSpacePlatform'),
		// 	textAlign: 'center', dataIndex: 'dataSpacePlatform', key: 'dataSpacePlatform', width: 100, 
		// },
		// {
		// 	title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.dataSpaceGroup'),
		// 	textAlign: 'center', dataIndex: 'dataSpaceGroup', key: 'dataSpaceGroup', width: 100, 
		// },
		// {
		// 	title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.dataSpaceOwner'),
		// 	textAlign: 'center', dataIndex: 'dataSpaceOwner', key: 'dataSpaceOwner', width: 100, 
		// },
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.groupCode'),
			textAlign: 'center', dataIndex: 'groupCode', key: 'groupCode', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.companyCode'),
			textAlign: 'center', dataIndex: 'companyCode', key: 'companyCode', width: 100, 
		},  
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxThirdPartyAppid'),
			textAlign: 'center', dataIndex: 'wxThirdPartyAppid', key: 'wxThirdPartyAppid', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxOfficialAccountAppid'),
			textAlign: 'center', dataIndex: 'wxOfficialAccountAppid', key: 'wxOfficialAccountAppid', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxOpenid'),
			textAlign: 'center', dataIndex: 'wxOpenid', key: 'wxOpenid', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxNickname'),
			textAlign: 'center', dataIndex: 'wxNickname', key: 'wxNickname', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxSex'),
			textAlign: 'center', dataIndex: 'wxSex', key: 'wxSex', width: 100, 
			render: (text, record, index) => {
				if(record.wxSex == 1){
					return zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.man');
				}else if(record.wxSex == 2){
					return zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.woman');
				}else{
					return zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.Unknown');
				}
			}
		},
		// {
		// 	title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxCity'),
		// 	textAlign: 'center', dataIndex: 'wxCity', key: 'wxCity', width: 100, 
		// },
		// {
		// 	title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxCountry'),
		// 	textAlign: 'center', dataIndex: 'wxCountry', key: 'wxCountry', width: 100, 
		// },
		// {
		// 	title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxProvince'),
		// 	textAlign: 'center', dataIndex: 'wxProvince', key: 'wxProvince', width: 100, 
		// },
		// {
		// 	title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxLanguage'),
		// 	textAlign: 'center', dataIndex: 'wxLanguage', key: 'wxLanguage', width: 100, 
		// },
		// {
		// 	title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxHeadimgurl'),
		// 	textAlign: 'center', dataIndex: 'wxHeadimgurl', key: 'wxHeadimgurl', width: 100, 
		// },
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxChannel'),
			textAlign: 'center', dataIndex: 'wxChannel', key: 'wxChannel', width: 100, 
			render: (text, record, index) => {
				return zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxChannel.' + text);
			}
		}, 
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxSubscribe'),
			textAlign: 'center', dataIndex: 'wxSubscribe', key: 'wxSubscribe', width: 100, 
			render: (text, record, index) => {
				return zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxSubscribe.' + text);
			}
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxSubscribeDate'),
			textAlign: 'center', dataIndex: 'wxSubscribeDate', key: 'wxSubscribeDate', width: 100, 
		},
		// {
		// 	title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxSubscribeTimeStr'),
		// 	textAlign: 'center', dataIndex: 'wxSubscribeTimeStr', key: 'wxSubscribeTimeStr', width: 100, 
		// },
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxUnionid'),
			textAlign: 'center', dataIndex: 'wxUnionid', key: 'wxUnionid', width: 100, 
		},
		// {
		// 	title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxRemark'),
		// 	textAlign: 'center', dataIndex: 'wxRemark', key: 'wxRemark', width: 100, 
		// },
		// {
		// 	title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxGroupid'),
		// 	textAlign: 'center', dataIndex: 'wxGroupid', key: 'wxGroupid', width: 100, 
		// },
		// {
		// 	title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxTagidList'),
		// 	textAlign: 'center', dataIndex: 'wxTagidList', key: 'wxTagidList', width: 100, 
		// },
		// {
		// 	title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxSubscribeScene'),
		// 	textAlign: 'center', dataIndex: 'wxSubscribeScene', key: 'wxSubscribeScene', width: 100, 
		// },
		// {
		// 	title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxQrScene'),
		// 	textAlign: 'center', dataIndex: 'wxQrScene', key: 'wxQrScene', width: 100, 
		// },
		// {
		// 	title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.officialAccounts.user.wxQrSceneStr'),
		// 	textAlign: 'center', dataIndex: 'wxQrSceneStr', key: 'wxQrSceneStr', width: 100, 
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

class CInitOfficialAccountsUserGrid extends React.Component {

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
                type: "mOfficialAccountsUser/delOfficialAccountsUser", payload: { pkId: pkIds },
                callback: () => {
                    _this.props.dispatch({ type: 'mOfficialAccountsUser/findOfficialAccountsUsers', filter: mOfficialAccountsUser.filter, pagination: mOfficialAccountsUser.pagination, callback: e => { } })
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
		this.props.dispatch({ type: "mOfficialAccountsUser/setState", payload: { gridSelKeys: selRowKeys } });
	}

	/** 列表改变 */
	f_changeGrid = (pagination, filters, sorter) => {
        // 注意这里要将 zkToolsUtils.convertSortParam(xxx.filter, sorter) 放在前面，以便后面新的分页参数覆盖旧的分页参数；在排序处理函数中会处理旧排序的问题
        this.props.dispatch({ 
        	type: 'mOfficialAccountsUser/findOfficialAccountsUsers', 
            filter: this.props.mOfficialAccountsUser.filter,
            pagination: pagination,
            sorter: sorter
        });
    }

	/** 返回 JSX 元素 */
	render() {

		let { intl, mApp, mOfficialAccountsUser, loading } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

		let tableColumns = f_getTableColumns(this.f_edit, this.f_detail, this.f_delete, intl, lang);

		let gridLoading = loading.effects['mOfficialAccountsUser/findOfficialAccountsUsers'];

		return (
			<ZKScrollTable loading = { gridLoading }
				autoHeight = {true}
				rowSelection = {{
					onChange: (selRowKeys, selRows) => { this.f_changeSelKeys(selRowKeys, selRows) },
					selectedRowKeys: mOfficialAccountsUser.gridSelKeys||[], 
					columnWidth: '32px'
				}}
				rowKey = "pkId"
				rowNum = {{'textAlign': 'center', 'fixed': 'left', width: 40}}
				columns = {tableColumns}
				scroll = {{ x:1440, y: this.state.sh }}
				pagination = {mOfficialAccountsUser.pagination||{}}
				// pagination = {{position: ['topRight'], ...page}}
                dataSource = {mOfficialAccountsUser.gridData||[]}
                // (pagination, filters, sorter, extra: { currentDataSource: [] })
                onChange = {this.f_changeGrid}
				className = {zkStyles.flex_1_auto}
			>
			</ZKScrollTable>
		)
	}
}

export default CInitOfficialAccountsUserGrid;


