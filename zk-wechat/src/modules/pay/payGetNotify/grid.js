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
 * @param {Function} onDetail 明细函数
 * @param {object} intl 国际化语言对象
 * @param {string} lang 当前语言标识
 */
const f_getTableColumns = (onDetail, intl, lang) => {

	return [
				{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGetNotify.payOrderPkId'),
			textAlign: 'center', dataIndex: 'payOrderPkId', key: 'payOrderPkId', width: 100, 
		},
		// {
		// 	title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGetNotify.wxWechatpaySignature'),
		// 	textAlign: 'center', dataIndex: 'wxWechatpaySignature', key: 'wxWechatpaySignature', width: 100, 
		// },
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGetNotify.wxWechatpayTimestam'),
			textAlign: 'center', dataIndex: 'wxWechatpayTimestam', key: 'wxWechatpayTimestam', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGetNotify.wxWechatpayNonce'),
			textAlign: 'center', dataIndex: 'wxWechatpayNonce', key: 'wxWechatpayNonce', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGetNotify.wxWechatpaySerial'),
			textAlign: 'center', dataIndex: 'wxWechatpaySerial', key: 'wxWechatpaySerial', width: 100, 
		},
		// {
		// 	title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGetNotify.wxBody'),
		// 	textAlign: 'center', dataIndex: 'wxBody', key: 'wxBody', width: 100, 
		// },
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGetNotify.disposeStatus'),
			textAlign: 'center', dataIndex: 'disposeStatus', key: 'disposeStatus', width: 100, 
			render: (text, record, index) => {
				switch(record.disposeStatus){
					case 0: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGetNotify.disposeStatus.0'); break;
					case 1: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGetNotify.disposeStatus.1'); break;
					case 2: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGetNotify.disposeStatus.2'); break;
					case 3: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGetNotify.disposeStatus.3'); break;
				}
				if(record.disposeStatus){
					return zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.yes');
				}else{
					return zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.no');
				}
			}
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGetNotify.resource'),
			textAlign: 'center', dataIndex: 'resource', key: 'resource', width: 100, 
			render: (text, record, index) => {
				return zkToolsMsg.getInternationInfo(record.resource?record.resource:{}, lang);
			}
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGetNotify.signature'),
			textAlign: 'center', dataIndex: 'signature', key: 'signature', width: 100, 
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

class CInitPayGetNotifyGrid extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			sh: 360
		}
	}

	/** 详情明细 */
	f_detail = (entity) => {
		this.props.history.push({ pathname: `${this.props.match.path}/detail/${entity.pkId}`, state: { optEntity: entity } });
	}

	/** 列表改变 */
	f_changeGrid = (pagination, filters, sorter) => {
        // 注意这里要将 zkToolsUtils.convertSortParam(xxx.filter, sorter) 放在前面，以便后面新的分页参数覆盖旧的分页参数；在排序处理函数中会处理旧排序的问题
        this.props.dispatch({ 
        	type: 'mPayGetNotify/findPayGetNotifys', 
            filter: mPayGetNotify.filter,
            page: pagination,
            sorter: sorter
        });
    }

	/** 返回 JSX 元素 */
	render() {

		let { intl, mApp, mPayGetNotify, loading } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

		let tableColumns = f_getTableColumns(this.f_detail, intl, lang);

		let gridLoading = loading.effects['mPayGetNotify/findPayGetNotifys'];

		return (
			<ZKScrollTable loading = { gridLoading }
				autoHeight = {true}
				rowKey = "pkId"
				rowNum = {{'textAlign': 'center', 'fixed': 'left', width: 40}}
				columns = {tableColumns}
				scroll = {{ x:1440, y: this.state.sh }}
				pagination = {mPayGetNotify.page||{}}
				// pagination = {{position: ['topRight'], ...page}}
                dataSource = {mPayGetNotify.gridData||[]}
                // (pagination, filters, sorter, extra: { currentDataSource: [] })
                onChange = {this.f_changeGrid}
				className = {zkStyles.flex}
			>
			</ZKScrollTable>
		)
	}
}

export default CInitPayGetNotifyGrid;