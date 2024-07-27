/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2024-07-07 11:07:13
* @Last Modified by: runoob
* @Last Modified time: 2024-07-07 19:44:01
*/



import React from 'react';

import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKPopconfirm, ZKButton } = ZKOriginalComponents;
const { ZKOptRow, ZKScrollTable } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;

import zkStyles from 'zkFramework/style/zk.styles.less';

/**
 * 取 table 列表
 * @param {object} currentCompany 当前登录公司
 * @param {Function} detailFunc 明细函数
 * @param {object} intl 国际化语言对象
 * @param {string} lang 当前语言标识
 */
const f_getTableColumns = (currentCompany, onDetail, intl, lang, onShowAuditModal, onShowGrantModalModal) => {

	return [
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.groupCode'),
			textAlign: 'center', dataIndex: 'groupCode', key: 'groupCode', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.code'),
			textAlign: 'center', dataIndex: 'code', key: 'code', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.name'),
			textAlign: 'center', dataIndex: 'name', key: 'name', width: 100, 
			render: (text, record, index) => {
				return zkToolsMsg.getInternationInfo(record.name?record.name:{}, lang);
			}
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.phoneNum'),
			textAlign: 'center', dataIndex: 'phoneNum', key: 'phoneNum', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.mail'),
			textAlign: 'center', dataIndex: 'mail', key: 'mail', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.legalPerson'),
			textAlign: 'center', dataIndex: 'legalPerson', key: 'legalPerson', width: 100, 
		},
		// {
		// 	title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.certType'),
		// 	textAlign: 'center', dataIndex: 'certType', key: 'certType', width: 100, 
		// },
		// {
		// 	title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.certNum'),
		// 	textAlign: 'center', dataIndex: 'certNum', key: 'certNum', width: 100, 
		// },
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.status'),
			textAlign: 'center', dataIndex: 'status', key: 'status', width: 100, 
			render: (text, record, index) => {
				return zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.status.' + text);
			}
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.foundDate'),
			textAlign: 'center', dataIndex: 'foundDate', key: 'foundDate', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.registerDate'),
			textAlign: 'center', dataIndex: 'registerDate', key: 'registerDate', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.registerAuthority'),
			textAlign: 'center', dataIndex: 'registerAuthority', key: 'registerAuthority', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.registerNum'),
			textAlign: 'center', dataIndex: 'registerNum', key: 'registerNum', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.sourceCode'),
			textAlign: 'center', dataIndex: 'sourceCode', key: 'sourceCode', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.sourceId'),
			textAlign: 'center', dataIndex: 'sourceId', key: 'sourceId', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_name'),
			key: 'opt', width: 160, fixed: 'right', 
			render: (text, record, index) => {
				let opts = [];
				// 明细/详情
				opts.push(<ZKOptRow.OptGroup.OptItem key = "_key_detail" onClick={() => { onDetail(record); }}>{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_detail')}</ZKOptRow.OptGroup.OptItem>);
				if(currentCompany.pkId === record.parentId){ // 只能操作自己的一级子公司
					// 审核公司
					opts.push(<ZKOptRow.OptGroup.OptItem key = "_key_audit" onClick={() => { onShowAuditModal(true, record);}}>
							{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgCompany.opt.name._key_audit')}
						</ZKOptRow.OptGroup.OptItem>
					);
					// 给公司分配权限
					opts.push(<ZKOptRow.OptGroup.OptItem key = "_key_grant_auth" onClick={() => { onShowGrantModalModal(true, record); }}>
							{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysAuthDefined.opt.name._key_grant_auth')}
						</ZKOptRow.OptGroup.OptItem>
					);
				}

				return (
					<ZKOptRow key={`grid-${record.pkId}`} >
						<ZKOptRow.OptGroup isAutoPurseUp={true} >
							{opts}
						</ZKOptRow.OptGroup>
					</ZKOptRow>
				)
			}
		}
	]
};

class CInitSysOrgCompanyGrid extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			sh: 360
		}

		props.dispatch({ 
            type: "mSysOrgCompany/findSysOrgChildCompanysTree", 
            filter: {...props.mSysOrgCompany.initFilter}, 
            callback: e => { } 
        });
	}

	// /** 编辑 */
	// f_edit = (parent={}, entity={}) => {
 //        let parentId = parent.pkId||entity.parentId||"_top";
 //        let pkId = entity.pkId||"_new";

 //        let state = {parentEntity: parent, optEntity: entity};
 //        this.props.history.push({ pathname: `${this.props.match.path}/edit/${parentId}/${pkId}`, state: state });
	// }

	/** 详情明细 */
	f_detail = (entity) => {
		this.props.history.push({ pathname: `${this.props.match.path}/detail/${entity.pkId}`, state: { optEntity: entity } });
	}

	// /** 删除，删除的提示等，真正的数据删除是 f_deleteAction 删除执行函数进行 */
	// f_delete = (keys, isConfirm) => {
	// 	let _this = this;
	// 	// 执行删除
	// 	let f_executeDelete = (pkIds) => {
 //            _this.props.dispatch({
 //                type: "mSysOrgCompany/delSysOrgCompany", payload: { pkId: pkIds },
 //                callback: () => {
 //                    _this.props.dispatch({ 
 //                    	type: 'mSysOrgCompany/findSysOrgCompanys', 
 //                    	filter: _this.props.mSysOrgCompany.filter, 
 //                    	pagination: _this.props.mSysOrgCompany.pagination, 
 //                    	callback: e => { } 
 //                    });
 //                }
 //            });
	// 	};
	// 	if (keys === null || keys === undefined || keys.length < 1) {
	// 		zkToolsMsg.alertMsgByType(this.props.intl, null, 'selectData')
	// 	} else {
	// 		if (isConfirm) {
	// 			zkToolsMsg.alertMsgByType(this.props.intl, null, 'delConfirm', () => {
	// 				// ok
	// 				f_executeDelete(keys);
	// 			}, () => {
	// 				// cancel
	// 			})
	// 		} else {
	// 			// 执行删除
	// 			f_executeDelete(keys);
	// 		}
	// 	}
	// }
	
	// /** 选择行改变 */
	// f_changeSelKeys = (selRowKeys, selRows) => {
	// 	this.props.dispatch({ type: "mSysOrgCompany/setState", payload: { gridSelKeys: selRowKeys } });
	// }

	/** 列表改变 */
	f_changeGrid = (pagination, filters, sorter) => {
        // 注意这里要将 zkToolsUtils.convertSortParam(xxx.filter, sorter) 放在前面，以便后面新的分页参数覆盖旧的分页参数；在排序处理函数中会处理旧排序的问题
        this.props.dispatch({ 
        	type: 'mSysOrgCompany/findSysOrgChildCompanysTree', 
            filter: this.props.mSysOrgCompany.filter,
            pagination: pagination,
            sorter: sorter
        });
    }

    /** 返回 JSX 元素 */
	render() {
		let { intl, mApp, mSysOrgCompany, loading, onShowAuditModal, onShowGrantModalModal } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

		let tableColumns = f_getTableColumns(mApp.user.company, this.f_detail, intl, lang, onShowAuditModal, onShowGrantModalModal);

		let gridLoading = loading.effects['mSysOrgCompany/findSysOrgChildCompanysTree'];
		return (
			<ZKScrollTable loading = { gridLoading }
				autoHeight = {true}
				// rowSelection = {{
				// 	onChange: (selRowKeys, selRows) => { this.f_changeSelKeys(selRowKeys, selRows) },
				// 	selectedRowKeys: mSysOrgCompany.gridSelKeys||[], 
				// 	columnWidth: '32px'
				// }}
				rowKey = "pkId"
				rowNum = {{'textAlign': 'center', 'fixed': 'left', width: 60}}
				columns = {tableColumns}
				scroll = {{ x:1440, y: this.state.sh }}
				pagination = {mSysOrgCompany.pagination || {}}
				// pagination = {{position: ['topRight'], ...page}}
                dataSource = {mSysOrgCompany.gridData||[]}
                // (pagination, filters, sorter, extra: { currentDataSource: [] })
                onChange = {this.f_changeGrid}
				className = {zkStyles.zk_f_flex_auto_1}
			>
				{/*<ZKOptRow>
					<ZKOptRow.OptGroup>
						<ZKOptRow.OptGroup.OptItem onClick={(e) => {
							this.f_edit({});
						}} >
							{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_add')}
						</ZKOptRow.OptGroup.OptItem>
						<ZKOptRow.OptGroup.OptItem onClick={(e) => {
							// 删除
							this.f_delete(mSysOrgCompany.gridSelKeys, true);
						}} >
							{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_del')}
						</ZKOptRow.OptGroup.OptItem>
					</ZKOptRow.OptGroup>
				</ZKOptRow>*/}
			</ZKScrollTable>
		)
	}
}

export default CInitSysOrgCompanyGrid;




