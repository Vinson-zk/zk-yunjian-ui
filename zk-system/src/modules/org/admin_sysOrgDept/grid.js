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
 * @param {Function} editFunc 编辑函数
 * @param {Function} detailFunc 明细函数
 * @param {Function} deleteFunc 删除函数
 * @param {object} intl 国际化语言对象
 * @param {string} lang 当前语言标识
 */
const f_getTableColumns = (onEdit, onDetail, onDelete, intl, lang, onShowGrantAuthModal) => {

	return [
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgDept.groupCode'),
			textAlign: 'center', dataIndex: 'groupCode', key: 'groupCode', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgDept.companyCode'),
			textAlign: 'center', dataIndex: 'companyCode', key: 'companyCode', width: 100
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgDept.code'),
			textAlign: 'center', dataIndex: 'code', key: 'code', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgDept.name'),
			textAlign: 'center', dataIndex: 'name', key: 'name', width: 100, 
			render: (text, record, index) => {
				return zkToolsMsg.getInternationInfo(record.name?record.name:{}, lang);
			}
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgDept.faxNum'),
			textAlign: 'center', dataIndex: 'faxNum', key: 'faxNum', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgDept.telNum'),
			textAlign: 'center', dataIndex: 'telNum', key: 'telNum', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgDept.phoneNum'),
			textAlign: 'center', dataIndex: 'phoneNum', key: 'phoneNum', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgDept.mail'),
			textAlign: 'center', dataIndex: 'mail', key: 'mail', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgDept.status'),
			textAlign: 'center', dataIndex: 'status', key: 'status', width: 100, 
			render: (text, record, index) => {
				return zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgDept.status.' + text);
			}
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgDept.sourceCode'),
			textAlign: 'center', dataIndex: 'sourceCode', key: 'sourceCode', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgDept.sourceId'),
			textAlign: 'center', dataIndex: 'sourceId', key: 'sourceId', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_name'),
			key: 'opt', width: 160, fixed: 'right', 
			render: (text, record, index) => {
				return (
					<ZKOptRow key={`grid-${record.pkId}`} >
						<ZKOptRow.OptGroup isAutoPurseUp={true} >
							<ZKOptRow.OptGroup.OptItem onClick={(e) => { // 添加子节点
								onEdit(record, undefined);
							}} >
								{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_add_child')}
							</ZKOptRow.OptGroup.OptItem>
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
							<ZKOptRow.OptGroup.OptItem onClick={() => { // 给公司分配权限
								onShowGrantAuthModal(true, record);
							}}>
								{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysAuthDefined.opt.name._key_grant_auth')}
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

class CInitSysOrgDeptGrid extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			sh: 360
		}
	}

	/** 编辑 */
	f_edit = (parent={}, entity={}) => {
		let { mSysOrgDeptAdmin, history } = this.props;
        let parentId = parent.pkId||entity.parentId||"_top";
        let pkId = entity.pkId||"_new";

        let state = {parentEntity: parent, optEntity: entity};
        history.push({ pathname: `${this.props.match.path}/edit/${mSysOrgDeptAdmin.targetCompany.pkId}/${parentId}/${pkId}`, state: state });
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
                type: "mSysOrgDeptAdmin/delSysOrgDept", payload: { pkId: pkIds },
                callback: () => {
                    _this.props.dispatch({ 
                    	type: 'mSysOrgDeptAdmin/findSysOrgDeptsTree', 
                    	companyId: _this.props.mSysOrgDeptAdmin.targetCompany.pkId, 
                    	filter: _this.props.mSysOrgDeptAdmin.filter, 
                    	pagination: _this.props.mSysOrgDeptAdmin.pagination, 
                    	callback: e => { } })
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
		this.props.dispatch({ type: "mSysOrgDeptAdmin/setState", payload: { gridSelKeys: selRowKeys } });
	}

	/** 列表改变 */
	f_changeGrid = (pagination, filters, sorter) => {
        // 注意这里要将 zkToolsUtils.convertSortParam(xxx.filter, sorter) 放在前面，以便后面新的分页参数覆盖旧的分页参数；在排序处理函数中会处理旧排序的问题
        this.props.dispatch({ 
        	type: 'mSysOrgDeptAdmin/findSysOrgDepts', 
        	companyId: _this.props.mSysOrgDeptAdmin.targetCompany.pkId, 
            filter: this.props.mSysOrgDeptAdmin.filter,
            pagination: pagination,
            sorter: sorter
        });
    }

    /** 返回 JSX 元素 */
	render() {
		let { intl, mApp, mSysOrgDeptAdmin, loading, onShowGrantAuthModal } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

		let tableColumns = f_getTableColumns(this.f_edit, this.f_detail, this.f_delete, intl, lang, onShowGrantAuthModal);

		let gridLoading = loading.effects['mSysOrgDeptAdmin/findSysOrgDeptsTree'] || loading.effects['mSysOrgDeptAdmin/findSysOrgCompanysTree'];
		return (
			<ZKScrollTable loading = { gridLoading }
				autoHeight = {true}
				rowSelection = {{
					onChange: (selRowKeys, selRows) => { this.f_changeSelKeys(selRowKeys, selRows) },
					selectedRowKeys: mSysOrgDeptAdmin.gridSelKeys||[], 
					columnWidth: '32px'
				}}
				rowKey = "pkId"
				rowNum = {{'textAlign': 'center', 'fixed': 'left', width: 40}}
				columns = {tableColumns}
				scroll = {{ x:1440, y: this.state.sh }}
				pagination = {mSysOrgDeptAdmin.pagination || {}}
				// pagination = {{position: ['topRight'], ...page}}
                dataSource = {mSysOrgDeptAdmin.gridData||[]}
                // (pagination, filters, sorter, extra: { currentDataSource: [] })
                onChange = {this.f_changeGrid}
				className = {zkStyles.flex_1_auto}
			>
				<ZKOptRow>
					<ZKOptRow.OptGroup>
						<ZKOptRow.OptGroup.OptItem onClick={(e) => {
							this.f_edit({});
						}} >
							{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_add')}
						</ZKOptRow.OptGroup.OptItem>
						<ZKOptRow.OptGroup.OptItem onClick={(e) => {
							// 删除
							this.f_delete(mSysOrgDeptAdmin.gridSelKeys, true);
						}} >
							{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_del')}
						</ZKOptRow.OptGroup.OptItem>
					</ZKOptRow.OptGroup>
				</ZKOptRow>
			</ZKScrollTable>
		)
	}
}

export default CInitSysOrgDeptGrid;

