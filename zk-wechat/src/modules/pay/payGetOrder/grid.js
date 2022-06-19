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
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGetOrder.pkId'),
			textAlign: 'center', dataIndex: 'pkId', key: 'appid', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGetOrder.appid'),
			textAlign: 'center', dataIndex: 'appid', key: 'appid', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGetOrder.mchid'),
			textAlign: 'center', dataIndex: 'mchid', key: 'mchid', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGetOrder.descriptionRename'),
			textAlign: 'center', dataIndex: 'descriptionRename', key: 'descriptionRename', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGetOrder.timeExpire'),
			textAlign: 'center', dataIndex: 'timeExpire', key: 'timeExpire', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGetOrder.wxAttach'),
			textAlign: 'center', dataIndex: 'wxAttach', key: 'wxAttach', width: 100, 
		},
		// {
		// 	title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGetOrder.notifyUrl'),
		// 	textAlign: 'center', dataIndex: 'notifyUrl', key: 'notifyUrl', width: 100, 
		// },
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGetOrder.goodsTag'),
			textAlign: 'center', dataIndex: 'goodsTag', key: 'goodsTag', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGetOrder.payStatus'),
			textAlign: 'center', dataIndex: 'payStatus', key: 'payStatus', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGetOrder.wxChannel'),
			textAlign: 'center', dataIndex: 'wxChannel', key: 'wxChannel', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGetOrder.payGroupCode'),
			textAlign: 'center', dataIndex: 'payGroupCode', key: 'payGroupCode', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGetOrder.businessCode'),
			textAlign: 'center', dataIndex: 'businessCode', key: 'businessCode', width: 100
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGetOrder.businessNo'),
			textAlign: 'center', dataIndex: 'businessNo', key: 'businessNo', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGetOrder.wxResStatusCode'),
			textAlign: 'center', dataIndex: 'wxResStatusCode', key: 'wxResStatusCode', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGetOrder.prepayId'),
			textAlign: 'center', dataIndex: 'prepayId', key: 'prepayId', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGetOrder.prepayIdDate'),
			textAlign: 'center', dataIndex: 'prepayIdDate', key: 'prepayIdDate', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.wechat.pay.PayGetOrder.paySignDate'),
			textAlign: 'center', dataIndex: 'paySignDate', key: 'paySignDate', width: 100, 
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

class CInitPayGetOrderGrid extends React.Component {

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
        	type: 'mPayGetOrder/findPayGetOrders', 
            filter: this.props.mPayGetOrder.filter,
            pagination: pagination,
            sorter: sorter
        });
    }

	/** 返回 JSX 元素 */
	render() {

		let { intl, mApp, mPayGetOrder, loading } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

		let tableColumns = f_getTableColumns(this.f_detail, intl, lang);

		let gridLoading = loading.effects['mPayGetOrder/findPayGetOrders'];

		return (
			<ZKScrollTable loading = { gridLoading }
				autoHeight = {true}
				rowKey = "pkId"
				rowNum = {{'textAlign': 'center', 'fixed': 'left', width: 40}}
				columns = {tableColumns}
				scroll = {{ x:1440, y: this.state.sh }}
				pagination = {mPayGetOrder.pagination||{}}
				// pagination = {{position: ['topRight'], ...page}}
                dataSource = {mPayGetOrder.gridData||[]}
                // (pagination, filters, sorter, extra: { currentDataSource: [] })
                onChange = {this.f_changeGrid}
				className = {zkStyles.flex_1_auto}
			>
			</ZKScrollTable>
		)
	}
}

export default CInitPayGetOrderGrid;