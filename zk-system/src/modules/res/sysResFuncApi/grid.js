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
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.name'),
			textAlign: 'center', dataIndex: 'name', key: 'name', width: 100, 
			render: (text, record, index) => {
				return zkToolsMsg.getInternationInfo(record.name?record.name:{}, lang);
			}
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.code'),
			textAlign: 'center', dataIndex: 'code', key: 'code', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.systemCode'),
			textAlign: 'center', dataIndex: 'systemCode', key: 'systemCode', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.agentUri'),
			textAlign: 'center', dataIndex: 'agentUri', key: 'agentUri', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.originalUri'),
			textAlign: 'center', dataIndex: 'originalUri', key: 'originalUri', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.reqMethods'),
			textAlign: 'center', dataIndex: 'reqMethods', key: 'reqMethods', width: 100, 
			render:(text, record, index)=>{
				let resStr = "", v = 0, sv = parseInt(text);
				v = 1;
				if(v === (sv&v)){
					resStr += "GET;";
				}
				v = 2;
				if(v === (sv&v)){
					resStr += "POST;";
				}
				v = 4;
				if(v === (sv&v)){
					resStr += "DELETE;";
				}
				v = 8;
				if(v === (sv&v)){
					resStr += "PUT;";
				}
				v = 16;
				if(v === (sv&v)){
					resStr += "CONNECT;";
				}
				v = 32;
				if(v === (sv&v)){
					resStr += "HEAD;";
				}
				v = 64;
				if(v === (sv&v)){
					resStr += "OPTIONS;";
				}
				v = 128;
				if(v === (sv&v)){
					resStr += "TRACE;";
				}
				return resStr;
			}
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.reqContentType'),
			textAlign: 'center', dataIndex: 'reqContentType', key: 'reqContentType', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.reqParamsDesc'),
			textAlign: 'center', dataIndex: 'reqParamsDesc', key: 'reqParamsDesc', width: 100, 
			render: (text, record, index) => {
				return zkToolsMsg.getInternationInfo(record.reqParamsDesc?record.reqParamsDesc:{}, lang);
			}
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.resContentType'),
			textAlign: 'center', dataIndex: 'resContentType', key: 'resContentType', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.resDataDesc'),
			textAlign: 'center', dataIndex: 'resDesc', key: 'resDesc', width: 100, 
			render: (text, record, index) => {
				return zkToolsMsg.getInternationInfo(record.resDesc?record.resDesc:{}, lang);
			}
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.useContext'),
			textAlign: 'center', dataIndex: 'useContext', key: 'useContext', width: 100, 
			render: (text, record, index) => {
				return zkToolsMsg.getInternationInfo(record.useContext?record.useContext:{}, lang);
			}
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.res.SysResFuncApi.reqDesc'),
			textAlign: 'center', dataIndex: 'reqDesc', key: 'reqDesc', width: 100, 
			render: (text, record, index) => {
				return zkToolsMsg.getInternationInfo(record.reqDesc?record.reqDesc:{}, lang);
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
								onEedit(record);
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

class CInitSysResFuncApiGrid extends React.Component {

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
                type: "mSysResFuncApi/delSysResFuncApi", payload: { pkId: pkIds },
                callback: () => {
                    _this.props.dispatch({ type: 'mSysResFuncApi/findSysResFuncApis', filter: _this.props.mSysResFuncApi.filter, callback: e => { } })
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
		this.props.dispatch({ type: "mSysResFuncApi/setState", payload: { gridSelKeys: selRowKeys } });
	}

	/** 列表改变 */
	f_changeGrid = (pagination, filters, sorter) => {
        // 注意这里要将 zkToolsUtils.convertSortParam(xxx.filter, sorter) 放在前面，以便后面新的分页参数覆盖旧的分页参数；在排序处理函数中会处理旧排序的问题
        this.props.dispatch({ 
        	type: 'mSysResFuncApi/findSysResFuncApis', 
            filter: this.props.mSysResFuncApi.filter,
            page: pagination,
            sorter: sorter
        });
    }

	/** 返回 JSX 元素 */
	render() {

		let { intl, mApp, mSysResFuncApi, loading } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

		let tableColumns = f_getTableColumns(this.f_edit, this.f_detail, this.f_delete, intl, lang);

		let gridLoading = loading.effects['mSysResFuncApi/findSysResFuncApis'];

		return (
			<ZKScrollTable loading = { gridLoading }
				autoHeight = {true}
				rowSelection = {{
					onChange: (selRowKeys, selRows) => { this.f_changeSelKeys(selRowKeys, selRows) },
					selectedRowKeys: mSysResFuncApi.gridSelKeys||[], 
					columnWidth: '32px'
				}}
				rowKey = "pkId"
				rowNum = {{'textAlign': 'center', 'fixed': 'left', width: 40}}
				columns = {tableColumns}
				scroll = {{ x:1440, y: this.state.sh }}
				pagination = {mSysResFuncApi.page||{}}
				// pagination = {{position: ['topRight'], ...page}}
                dataSource = {mSysResFuncApi.gridData||[]}
                // (pagination, filters, sorter, extra: { currentDataSource: [] })
                onChange = {this.f_changeGrid}
				className = {zkStyles.flex}
			>
				<ZKOptRow>
					<ZKOptRow.OptGroup>
						<ZKOptRow.OptGroup.OptItem onClick={(e) => {
							this.f_edit({});
						}} >{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_add')}</ZKOptRow.OptGroup.OptItem>
						<ZKOptRow.OptGroup.OptItem onClick={(e) => {
							// 删除
							this.f_delete(mSysResFuncApi.gridSelKeys, true);
						}} >{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_del')}</ZKOptRow.OptGroup.OptItem>
					</ZKOptRow.OptGroup>
				</ZKOptRow>
			</ZKScrollTable>
		)
	}
}

export default CInitSysResFuncApiGrid;