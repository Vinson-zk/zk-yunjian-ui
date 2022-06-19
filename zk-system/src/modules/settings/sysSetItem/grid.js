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
const f_getTableColumns = (onEedit, onDetail, onDelete, onCustomSet, intl, lang) => {

	return [
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.settings.SysSetItem.collectionCode'),
			textAlign: 'center', dataIndex: 'collectionCode', key: 'collectionCode', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.settings.SysSetItem.type'),
			textAlign: 'center', dataIndex: 'type', key: 'type', width: 100, 
			render: (text, record, index) => {
				return zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.settings.SysSetItem.type.' + text);
			}
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.settings.SysSetItem.name'),
			textAlign: 'center', dataIndex: 'name', key: 'name', width: 100, 
			render: (text, record, index) => {
				return zkToolsMsg.getInternationInfo(record.name?record.name:{}, lang);
			}
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.settings.SysSetItem.code'),
			textAlign: 'center', dataIndex: 'code', key: 'code', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.settings.SysSetItem.setDesc'),
			textAlign: 'center', dataIndex: 'setDesc', key: 'setDesc', width: 100, 
			render: (text, record, index) => {
				return zkToolsMsg.getInternationInfo(record.setDesc?record.setDesc:{}, lang);
			}
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.settings.SysSetItem.valueType'),
			textAlign: 'center', dataIndex: 'valueType', key: 'value', width: 100, 
			render: (text, record, index) => {
				return zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.settings.SysSetItem.valueType.' + text);
			}
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.settings.SysSetItem.value'),
			textAlign: 'center', dataIndex: 'value', key: 'value', width: 100, 
			render: (text, record, index) => {
				switch(record.valueType){
					case 1: 
						if(text == '1'){
							return zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.enable');
						}
						return zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.disabled');
					default: return text;
				}
			}
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.settings.SysSetItem.groupCode'),
			textAlign: 'center', dataIndex: 'groupCode', key: 'groupCode', width: 100, 
		},
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.settings.SysSetItem.compamyCode'),
			textAlign: 'center', dataIndex: 'compamyCode', key: 'compamyCode', width: 100, 
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
							{record.type==1?(
								<ZKOptRow.OptGroup.OptItem onClick={() => { // 公司自定义配置
									onCustomSet(record);
								}}>
									{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.settings.SysSetItem.opt.custom.set')}
								</ZKOptRow.OptGroup.OptItem>
							):undefined}
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

class CInitSysSetItemGrid extends React.Component {

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
                type: "mSysSetItem/delSysSetItem", payload: { pkId: pkIds },
                callback: () => {
                    _this.props.dispatch({ type: 'mSysSetItem/findSysSetItems', filter: _this.props.mSysSetItem.filter, pagination: _this.props.mSysSetItem.pagination, callback: e => { } })
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
		this.props.dispatch({ type: "mSysSetItem/setState", payload: { gridSelKeys: selRowKeys } });
	}

	/** 列表改变 */
	f_changeGrid = (pagination, filters, sorter) => {
        // 注意这里要将 zkToolsUtils.convertSortParam(xxx.filter, sorter) 放在前面，以便后面新的分页参数覆盖旧的分页参数；在排序处理函数中会处理旧排序的问题
        this.props.dispatch({ 
        	type: 'mSysSetItem/findSysSetItems', 
            filter: this.props.mSysSetItem.filter,
            pagination: pagination,
            sorter: sorter
        });
    }

    /** 公司客制化配置 */
    f_customSet = entity=>{
    	console.log("------------ 公司客制化配置 待实现 ", entity)
    }

	/** 返回 JSX 元素 */
	render() {

		let { intl, mApp, mSysSetItem, loading } = this.props;
        let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

		let tableColumns = f_getTableColumns(this.f_edit, this.f_detail, this.f_delete, this.f_customSet, intl, lang);

		let gridLoading = loading.effects['mSysSetItem/findSysSetItems'];

		return (
			<ZKScrollTable loading = { gridLoading }
				autoHeight = {true}
				rowSelection = {{
					onChange: (selRowKeys, selRows) => { this.f_changeSelKeys(selRowKeys, selRows) },
					selectedRowKeys: mSysSetItem.gridSelKeys||[], 
					columnWidth: '32px'
				}}
				rowKey = "pkId"
				rowNum = {{'textAlign': 'center', 'fixed': 'left', width: 40}}
				columns = {tableColumns}
				scroll = {{ x:1440, y: this.state.sh }}
				pagination = {mSysSetItem.pagination||{}}
				// pagination = {{position: ['topRight'], ...page}}
                dataSource = {mSysSetItem.gridData||[]}
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
							this.f_delete(mSysSetItem.gridSelKeys, true);
						}} >{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_del')}</ZKOptRow.OptGroup.OptItem>
					</ZKOptRow.OptGroup>
				</ZKOptRow>
			</ZKScrollTable>
		)
	}
}

export default CInitSysSetItemGrid;