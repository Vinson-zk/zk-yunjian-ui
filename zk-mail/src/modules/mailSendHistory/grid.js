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
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.mail.MailSendHistory.groupCode'),
			textAlign: 'center', dataIndex: 'groupCode', key: 'groupCode', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.mail.MailSendHistory.companyId'),
			textAlign: 'center', dataIndex: 'companyId', key: 'companyId', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.mail.MailSendHistory.companyCode'),
			textAlign: 'center', dataIndex: 'companyCode', key: 'companyCode', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.mail.MailSendHistory.typeId'),
			textAlign: 'center', dataIndex: 'typeId', key: 'typeId', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.mail.MailSendHistory.typeCode'),
			textAlign: 'center', dataIndex: 'typeCode', key: 'typeCode', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.mail.MailSendHistory.mailTemplateId'),
			textAlign: 'center', dataIndex: 'mailTemplateId', key: 'mailTemplateId', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.mail.MailSendHistory.params'),
			textAlign: 'center', dataIndex: 'params', key: 'params', width: 100, 
			render: (text, record, index) => {
				return zkToolsMsg.getInternationInfo(record.params?record.params:{}, lang);
			}
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.mail.MailSendHistory.sendAddress'),
			textAlign: 'center', dataIndex: 'sendAddress', key: 'sendAddress', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.mail.MailSendHistory.sendName'),
			textAlign: 'center', dataIndex: 'sendName', key: 'sendName', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.mail.MailSendHistory.subject'),
			textAlign: 'center', dataIndex: 'subject', key: 'subject', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.mail.MailSendHistory.content'),
			textAlign: 'center', dataIndex: 'content', key: 'content', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.mail.MailSendHistory.locale'),
			textAlign: 'center', dataIndex: 'locale', key: 'locale', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.mail.MailSendHistory.sendFlag'),
			textAlign: 'center', dataIndex: 'sendFlag', key: 'sendFlag', width: 100, 
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

class CInitMailSendHistoryGrid extends React.Component {

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
                type: "mMailSendHistory/delMailSendHistory", payload: { pkId: pkIds },
                callback: () => {
                    _this.props.dispatch({ type: 'mMailSendHistory/findMailSendHistorys', filter: _this.props.mMailSendHistory.filter, pagination: mMailSendHistory.pagination, callback: e => { } })
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
		this.props.dispatch({ type: "mMailSendHistory/setState", payload: { gridSelKeys: selRowKeys } });
	}

	/** 列表改变 */
	f_changeGrid = (pagination, filters, sorter) => {
        // 注意这里要将 zkToolsUtils.convertSortParam(xxx.filter, sorter) 放在前面，以便后面新的分页参数覆盖旧的分页参数；在排序处理函数中会处理旧排序的问题
        this.props.dispatch({ 
        	type: 'mMailSendHistory/findMailSendHistorys', 
            filter: this.props.mMailSendHistory.filter,
            pagination: pagination,
            sorter: sorter
        });
    }

	/** 返回 JSX 元素 */
	render() {

		let { intl, mApp, mMailSendHistory, loading } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

		let tableColumns = f_getTableColumns(this.f_edit, this.f_detail, this.f_delete, intl, lang);

		let gridLoading = loading.effects['mMailSendHistory/findMailSendHistorys'];

		return (
			<ZKScrollTable loading = { gridLoading }
				autoHeight = {true}
				rowSelection = {{
					onChange: (selRowKeys, selRows) => { this.f_changeSelKeys(selRowKeys, selRows) },
					selectedRowKeys: mMailSendHistory.gridSelKeys||[], 
					columnWidth: '32px'
				}}
				rowKey = "pkId"
				rowNum = {{'textAlign': 'center', 'fixed': 'left', width: 40}}
				columns = {tableColumns}
				scroll = {{ x:1440, y: this.state.sh }}
				pagination = {mMailSendHistory.page||{}}
				// pagination = {{position: ['topRight'], ...page}}
                dataSource = {mMailSendHistory.gridData||[]}
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
							this.f_delete(mMailSendHistory.gridSelKeys, true);
						}} >{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_del')}</ZKOptRow.OptGroup.OptItem>
					</ZKOptRow.OptGroup>
				</ZKOptRow>
			</ZKScrollTable>
		)
	}
}

export default CInitMailSendHistoryGrid;