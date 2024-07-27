/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2024-07-07 19:50:41
* @Last Modified by: runoob
* @Last Modified time: 2024-07-08 17:41:37
*/


import React from 'react';

import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKSwitch } = ZKOriginalComponents;
const { ZKScrollTable } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;

import zkStyles from 'zkFramework/style/zk.styles.less';

/**
 * 取 table 列表
 * @param {Function} onSetAuthsDefaultTransfer 设置权限是否默认传递给子公司
 * @param {object} intl 国际化语言对象
 * @param {string} lang 当前语言标识
 */
const f_getTableColumns = (intl, lang, onSetAuthsDefaultTransfer) => {

	return [
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.auth.SysAuthDefined.name'),
			textAlign: 'center', dataIndex: 'name', key: 'name', width: 100, 
			render: (text, record, index) => {
				return zkToolsMsg.getInternationInfo(record.name?record.name:{}, lang);
			}
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.auth.SysAuthDefined.code'),
			textAlign: 'center', dataIndex: 'code', key: 'code', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.auth.SysAuthDefined.status'),
			textAlign: 'center', dataIndex: 'status', key: 'systemCode', width: 100,
			render: (text, record, index) => {
				return zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.auth.SysAuthDefined.status.' + text);
			}
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.auth.SysAuthCompany.ownerType'),
			textAlign: 'center', dataIndex: 'authRelation.ownerType', key: 'ownerType', width: 100,
			render: (text, record, index) => {
				return zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.auth.SysAuthCompany.ownerType.' + record.authRelation.ownerType);
			}
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.auth.SysAuthCompany.defaultToChild'),
			textAlign: 'center', dataIndex: 'authRelation.defaultToChild', key: 'defaultToChild', width: 100,
			render: (text, record, index) => {
				return <ZKSwitch size="small" 
					defaultChecked = {()=>{
						if(record.authRelation && record.authRelation.defaultToChild){
							return record.authRelation.defaultToChild === 1?true:false;
						}
						return false;
					}}
					onChange={(checked, e)=>{
						if(checked){
							// 设置为默认传递
							onSetAuthsDefaultTransfer([record.authRelation.pkId], []);
						}else{
							// 设置为默认不传递
							onSetAuthsDefaultTransfer([], [record.authRelation.pkId]);
						}
					}}
				/>
				// return zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.auth.SysAuthCompany.defaultToChild.' + record.authRelation.defaultToChild);
			}
		},
	]
};

class CInitSysAuthCompanyGrid extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			sh: 360
		}
	}

	/** 设置权限是否默认传递给子公司 */
	f_setAuthsDefaultTransfer = (transferPkIds, notTransferPkIds) => {
        // 注意这里要将 zkToolsUtils.convertSortParam(xxx.filter, sorter) 放在前面，以便后面新的分页参数覆盖旧的分页参数；在排序处理函数中会处理旧排序的问题
        this.props.dispatch({ 
        	type: 'mSysAuthCompany/setAuthsDefaultTransfer', 
            transferPkIds: transferPkIds,
            notTransferPkIds: notTransferPkIds,
            callback: () => {
                this.f_changeGrid(this.props.mSysAuthCompany.filter, this.props.mSysAuthCompany.pagination);
            }
        });
    }

	/** 列表改变 */
	f_changeGrid = (pagination, filters, sorter) => {
        // 注意这里要将 zkToolsUtils.convertSortParam(xxx.filter, sorter) 放在前面，以便后面新的分页参数覆盖旧的分页参数；在排序处理函数中会处理旧排序的问题
        this.props.dispatch({ 
        	type: 'mSysAuthCompany/findAuthPage', 
            filter: {...this.props.mSysAuthCompany.initFilter, ...filters},
            pagination: pagination,
            sorter: sorter
        });
    }

	/** 返回 JSX 元素 */
	render() {

		let { intl, mApp, mSysAuthCompany, loading } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

		let tableColumns = f_getTableColumns(intl, lang, this.f_setAuthsDefaultTransfer);

		let gridLoading = loading.effects['mSysAuthCompany/findAuthPage']||loading.effects['mSysAuthCompany/setAuthsDefaultTransfer'];

		return (
			<ZKScrollTable loading = { gridLoading }
				autoHeight = {true}
				// rowSelection = {{
				// 	onChange: (selRowKeys, selRows) => { this.f_changeSelKeys(selRowKeys, selRows) },
				// 	selectedRowKeys: mSysAuthCompany.gridSelKeys||[], 
				// 	columnWidth: '32px'
				// }}
				rowKey = "pkId"
				rowNum = {{'textAlign': 'center', 'fixed': 'left', width: 40}}
				columns = {tableColumns}
				scroll = {{ x:940, y: this.state.sh }}
				pagination = {mSysAuthCompany.pagination||{}}
				// pagination = {{position: ['topRight'], ...page}}
                dataSource = {mSysAuthCompany.gridData||[]}
                // (pagination, filters, sorter, extra: { currentDataSource: [] })
                onChange = {this.f_changeGrid}
				className = {zkStyles.zk_f_flex_auto_1}
			></ZKScrollTable>
		)
	}

	// 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        let { location, dispatch, mSysAuthCompany } = this.props;
		if (location.pathname != mSysAuthCompany.pathname) {
			dispatch({ type: 'mSysAuthCompany/setState', payload: { pathname: location.pathname } });
			dispatch({ type: "mSysAuthCompany/findAuthPage", filter: {...mSysAuthCompany.initFilter, ...mSysAuthCompany.filter}, pagination: mSysAuthCompany.pagination, callback: e => { } })
		}
    }

}

export default CInitSysAuthCompanyGrid;


