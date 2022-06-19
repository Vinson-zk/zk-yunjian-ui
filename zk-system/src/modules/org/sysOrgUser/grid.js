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
const f_getTableColumns = (onEedit, onDetail, onDelete, intl, lang, onShowResetPwdModal, onShowGrantRoleModal, onShowGrantAuthModal) => {

	return [
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.account'),
			textAlign: 'center', dataIndex: 'account', key: 'account', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.nickname'),
			textAlign: 'center', dataIndex: 'nickname', key: 'nickname', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.status'),
			textAlign: 'center', dataIndex: 'status', key: 'status', width: 100, 
			render: (text, record, index) => {
				return zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.status.' + text);
			}
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.jobNum'),
			textAlign: 'center', dataIndex: 'jobNum', key: 'jobNum', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.deptId'),
			textAlign: 'center', dataIndex: 'deptCode', key: 'deptCode', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.rankId'),
			textAlign: 'center', dataIndex: 'rankCode', key: 'rankCode', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.userTypeId'),
			textAlign: 'center', dataIndex: 'userTypeCode', key: 'userTypeCode', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.familyName'),
			textAlign: 'center', dataIndex: 'familyName', key: 'familyName', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.secondName'),
			textAlign: 'center', dataIndex: 'secondName', key: 'secondName', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.birthday'),
			textAlign: 'center', dataIndex: 'birthday', key: 'birthday', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.sex'),
			textAlign: 'center', dataIndex: 'sex', key: 'sex', width: 100, 
			// render: (text, record, index) => {
			// }
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.phoneNum'),
			textAlign: 'center', dataIndex: 'phoneNum', key: 'phoneNum', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.mail'),
			textAlign: 'center', dataIndex: 'mail', key: 'mail', width: 200, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.qq'),
			textAlign: 'center', dataIndex: 'qq', key: 'qq', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.joinDate'),
			textAlign: 'center', dataIndex: 'joinDate', key: 'joinDate', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.leaveDate'),
			textAlign: 'center', dataIndex: 'leaveDate', key: 'leaveDate', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.groupCode'),
			textAlign: 'center', dataIndex: 'groupCode', key: 'groupCode', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.companyCode'),
			textAlign: 'center', dataIndex: 'companyCode', key: 'companyCode', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgRole.sourceCode'),
			textAlign: 'center', dataIndex: 'sourceCode', key: 'sourceCode', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgRole.sourceId'),
			textAlign: 'center', dataIndex: 'sourceId', key: 'sourceId', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_name'),
			key: 'opt', width: 220, fixed: 'right', 
			render: (text, record, index) => {
				return (
					<ZKOptRow key={`grid-${record.pkId}`} >
						<ZKOptRow.OptGroup isAutoPurseUp={true} >
							<ZKOptRow.OptGroup.OptItem onClick={() => { // 编辑
								onEedit(record);
							}}>
								{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_edit')}
							</ZKOptRow.OptGroup.OptItem>
							<ZKOptRow.OptGroup.OptItem onClick={() => { // 明细/详情
								onDetail(record);
							}}>
								{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_detail')}
							</ZKOptRow.OptGroup.OptItem>
							<ZKOptRow.OptGroup.OptItem onClick={() => { // 重置密码
								onShowResetPwdModal(true, record);
							}}>
								{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.modal.title.resetPwd')}
							</ZKOptRow.OptGroup.OptItem>
							<ZKOptRow.OptGroup.OptItem onClick={() => { // 重置密码
								onShowGrantRoleModal(true, record);
							}}>
								{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.modal.title.grantRole')}
							</ZKOptRow.OptGroup.OptItem>
							<ZKOptRow.OptGroup.OptItem onClick={() => { // 给公司分配权限
								onShowGrantAuthModal(true, record);
							}}>
								{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysAuthDefined.opt.name._key_grant_auth')}
							</ZKOptRow.OptGroup.OptItem>
						</ZKOptRow.OptGroup>
						<ZKPopconfirm type="delete" placement="top"
							onConfirm={() => { // 删除
								onDelete([record.pkId])
							}}>
							<ZKButton>{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_del')}</ZKButton>
						</ZKPopconfirm>
					</ZKOptRow>
				)
			}
		}
	]
};

class CInitSysOrgUserGrid extends React.Component {

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
                type: "mSysOrgUser/delSysOrgUser", payload: { pkId: pkIds },
                callback: () => {
                    _this.props.dispatch({ type: 'mSysOrgUser/findSysOrgUsers', filter: _this.props.mSysOrgUser.filter, pagination: _this.props.mSysOrgUser.pagination, callback: e => { } })
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
		this.props.dispatch({ type: "mSysOrgUser/setState", payload: { gridSelKeys: selRowKeys } });
	}

	/** 列表改变 */
	f_changeGrid = (pagination, filters, sorter) => {
        // 注意这里要将 zkToolsUtils.convertSortParam(xxx.filter, sorter) 放在前面，以便后面新的分页参数覆盖旧的分页参数；在排序处理函数中会处理旧排序的问题
        this.props.dispatch({ 
        	type: 'mSysOrgUser/findSysOrgUsers', 
            filter: this.props.mSysOrgUser.filter,
            pagination: pagination,
            sorter: sorter
        });
    }

	/** 返回 JSX 元素 */
	render() {

		let { intl, mApp, mSysOrgUser, loading, onShowResetPwdModal, onShowGrantRoleModal, onShowGrantAuthModal } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

		let tableColumns = f_getTableColumns(this.f_edit, this.f_detail, this.f_delete, intl, lang, onShowResetPwdModal, onShowGrantRoleModal, onShowGrantAuthModal);

		let gridLoading = loading.effects['mSysOrgUser/findSysOrgUsers'];

		return (
			<ZKScrollTable loading = { gridLoading }
				autoHeight = {true}
				rowSelection = {{
					onChange: (selRowKeys, selRows) => { this.f_changeSelKeys(selRowKeys, selRows) },
					selectedRowKeys: mSysOrgUser.gridSelKeys||[], 
					columnWidth: '32px'
				}}
				rowKey = "pkId"
				rowNum = {{'textAlign': 'center', 'fixed': 'left', width: 40}}
				columns = {tableColumns}
				scroll = {{ x:1440, y: this.state.sh }}
				pagination = {mSysOrgUser.pagination||{}}
				// pagination = {{position: ['topRight'], ...page}}
                dataSource = {mSysOrgUser.gridData||[]}
                // (pagination, filters, sorter, extra: { currentDataSource: [] })
                onChange = {this.f_changeGrid}
				className = {zkStyles.flex_1_auto}
			>
				<ZKOptRow>
					<ZKOptRow.OptGroup>
						<ZKOptRow.OptGroup.OptItem onClick={(e) => {
							this.f_edit({});
						}} >{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_add')}</ZKOptRow.OptGroup.OptItem>
						<ZKOptRow.OptGroup.OptItem onClick={(e) => {
							// 删除
							this.f_delete(mSysOrgUser.gridSelKeys, true);
						}} >{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_del')}</ZKOptRow.OptGroup.OptItem>
					</ZKOptRow.OptGroup>
				</ZKOptRow>
			</ZKScrollTable>
		)
	}
}

export default CInitSysOrgUserGrid;


