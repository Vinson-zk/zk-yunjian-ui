/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 10:13:11
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-04-02 13:21:51
 */


import React from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';

import { zkToolsMsg, zkToolsUtils } from '../../../tools';

import styles from "./styles.less";

/** 计算表格填满时的高度 tDom 为 表格 document 节点 */
const f_calcTableHeight = (tDom, paginationCount=1)=>{

	// getBoundingClientRect
	/*** 取 document 节点上下的 边框，边距，填充 和; */
	const f_getDomHeight = (dom)=>{
		let h = 0;
		let jqDom = jQuery(dom);
		h += parseInt(jqDom.css("margin-top"))||0;
		// console.log("[^_^:20210311-1459-001-1] f_getDomHeight: ", h);
		h += parseInt(jqDom.css("padding-top"))||0;
		// console.log("[^_^:20210311-1459-001-1] f_getDomHeight: ", h);
		h += parseInt(jqDom.css("border-top"))||0;
		// console.log("[^_^:20210311-1459-001-1] f_getDomHeight: ", h);

		h += parseInt(jqDom.css("margin-bottom"))||0;
		// console.log("[^_^:20210311-1459-001-1] f_getDomHeight: ", h);
		h += parseInt(jqDom.css("padding-bottom"))||0;
		// console.log("[^_^:20210311-1459-001-1] f_getDomHeight: ", h);
		h += parseInt(jqDom.css("border-bottom"))||0;
		// console.log("[^_^:20210311-1459-001-1] f_getDomHeight: ", h);
		// console.log("[^_^:20210311-1459-001-1] ------------------------------------------- ");

		// console.log("[^_^:20210311-1459-001] f_getDomHeight: ", dom.paddingTop);
		// console.log("[^_^:20210311-1459-001] f_getDomHeight: ", dom.paddingBottom);
		// console.log("[^_^:20210311-1459-001] f_getDomHeight: ", dom.marginTop);
		// console.log("[^_^:20210311-1459-001] f_getDomHeight: ", dom.marginBottom);
		// console.log("[^_^:20210311-1459-001] f_getDomHeight: ", dom.borderTopWidth);
		// console.log("[^_^:20210311-1459-001] f_getDomHeight: ", dom.borderBottomWidth);
		// h += parseInt(dom.paddingTop||0) + parseInt(dom.paddingBottom||0);
		// h += parseInt(dom.marginTop||0) + parseInt(dom.marginBottom||0);
		// h += parseInt(dom.borderTopWidth||0) + parseInt(dom.borderBottomWidth||0);
		// console.log("[^_^:20210311-1459-001] f_getDomHeight: ", h);

		return h;
	}

	// console.log("[^_^:20210311-1407-001] table.tDom: ", tDom); // tDom.clientHeight
	// 取 table 父 dom
	let tPDom = tDom.parentElement || tDom.parentNode;
	// console.log("[^_^:20210311-1407-002] table.tPDom: ", tPDom); 
	// console.log("[^_^:20210311-1407-002] table.tPDom.clientHeight: ", tPDom.clientHeight);


	// 父节点高度减去 tabl 的 边距，边框，填充
	let h = tPDom.clientHeight - f_getDomHeight(tDom);
	// console.log("[^_^:20210311-1407-003] table: ", h);

	let childs = [];

	/*** 减去 table 中 title 的高度 */
	childs = tDom.getElementsByClassName("ant-table-title");
	for(let o of childs){
		// console.log("[^_^:20210311-1407-003-0] table.ant-table-title: ", o.clientHeight);
		h -= f_getDomHeight(o);
		h -= o.clientHeight;
	}
	// console.log("[^_^:20210311-1407-003-0] table.ant-table-title: ", h);

	/*** 减去 table 中 表头的高度  */
	childs = tDom.getElementsByClassName("ant-table-header");
	// console.log("[^_^:20210311-1407-003-0] table.ant-table-header: ", childs);
	for(let o of childs){
		// console.log("[^_^:20210311-1407-003-0] table.ant-table-header: ", o.clientHeight);
		h -= f_getDomHeight(o);
		h -= o.clientHeight;
	}
	// console.log("[^_^:20210311-1407-003-0] table.ant-table-header: ", h);

	/*** 减去 table 中 table-body 封装的边距，边框，填充  */
	childs = tDom.getElementsByClassName("ant-table-container");
	// console.log("[^_^:20210311-1407-003-0] table.ant-table-container: ", childs);
	for(let o of childs){
		// console.log("[^_^:20210311-1407-003-0] table.ant-table-container: ", o.clientHeight);
		h -= f_getDomHeight(o);
	}
	// console.log("[^_^:20210311-1407-003-0] table.ant-table-container: ", h);

	/*** 减去 分页器的 高度；*/
	// 分页高度 默认减 40
	h -= 40 * paginationCount;
	// h -= 16;	
	/*** 分页器，在数据加载出来前，是没有的，这样就在数据还没加载进来前，取不到分页器，所以不能通过下面的方法去取分页器高度， */
	// childs = tPDom.getElementsByClassName("ant-pagination");
	// console.log("[^_^:20210311-1407-003-0] table.ant-pagination: ", tPDom, tDom.parentElement.getElementsByClassName("ant-table-pagination"), childs);
	// for(let o of childs){
	// 	// console.log("[^_^:20210311-1407-003-0] table.ant-pagination: ", o.clientHeight);
	// 	h -= f_getDomHeight(o);
	// 	h -= o.clientHeight;
	// }
	// console.log("[^_^:20210311-1407-003-0] table.ant-pagination: ", h);

	/*** 扣除一点点高度, 以免引发外部滚动条  */
	h -= 3;
	return h;
}

/* 组件主要是作用：
	1：统一设置了默认样式，样式使用方面与 Table 使用一样，
*/
const FInitTable = ({ rowNum, pagination, dataSource, columns, children, intl, className, ...props }) => {

	const defaultPagination = {
		position: ['bottomRight'],
		size: 'small', // small
		simple: false,
		// current:1,
		defaultCurrent: 1,
		// pageSize: 10,
		defaultPageSize: 10,
		showSizeChanger: true,
		showQuickJumper: true,
		pageSizeOptions: ['10', '20', '30', '50'],
		showTotal: function (total, range) { return zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.talbe.total') + ': ' + total },
		// onChange:(page, pageSize)=>{
		// },
		// onShowSizeChange:function(current, size){console.log(' ----- ', current, size)},
	}

	// 初始发分页器
	if (pagination) {

		pagination = { 
			...defaultPagination, 
			...pagination
		}

		// 重写分页的 onShowSizeChange  事件；以记录用户操作习惯
		let f_onShowSizeChange = pagination["onShowSizeChange"];
		pagination["onShowSizeChange"] = (current, size)=>{
			// 设置用户操作习惯，记录表格的分页数量
			zkToolsUtils.setPageSize(size);
			if(f_onShowSizeChange){
				f_onShowSizeChange(current, size);
			}else{
				if(pagination.onChange){
					pagination.onChange(current, size)
				}
			}
		}
	}

	//  内突显示位置设置 在 columns 中用 textAlign 属性设置  【'left', 'center', 'right'】
	columns.map((item, index) => {
		switch (item.textAlign) {
			case 'left':
				item.className = styles.column_text_align_left;
				break;
			case 'right':
				item.className = styles.column_text_align_right;
				break;
			default:
				item.className = styles.column_text_align_center;
		}
	})

	let lang = zkToolsMsg.getLocale();
	lang = lang.replaceAll("-", "_");

	// 计算序号 sequence number
	if (rowNum) {
		// 显示序号列
		let rowNumBegin = 1
		if (pagination) {
			rowNumBegin = (pagination.current || pagination.defaultCurrent) * 1 - 1
			rowNumBegin = rowNumBegin * (pagination.pageSize || pagination.defaultPageSize) + 1
		} else {
			rowNumBegin = 1
		}
		dataSource.map((item, index) => {
			item['_zk_rowNum'] = rowNumBegin * 1 + index * 1
		})
		// 表格序列号的列的展示
		let sn = zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.talbe.total.rowNum');
		// sn = sn || '序号';
		// console.log("[^_^:20210311-0856-001] zk-table lang: ", lang);
		columns = [{
			title: sn,
			key: '_zk_rowNum',
			className: styles.row_num_column + ' ' + styles['row_num_column_' + lang] + ' ' + styles['column_text_align_' + (rowNum.textAlign ? rowNum.textAlign : 'center')],
			dataIndex: '_zk_rowNum',
			width: 50,
			...rowNum
		}, ...columns]
	}

	// title 设置
	let title = undefined;
	if (children) {
		title = () => {
			return children;
		}
	}

	return (
		<Table className = {`${styles.table} ${className}`} {...props}
			title = {title} 
			columns = {columns} 
			dataSource = {dataSource}
			pagination = {pagination}
		/>
	)
}

// 定义属性
FInitTable.propTypes = {
	rowNum: PropTypes.shape({
		textAlign: PropTypes.oneOf(['left', 'center', 'right']), // 内容显示方式, 默认居中 【'left', 'center', 'right'】
	})
}
// 定义属性默认值
FInitTable.defaultProps = {
	bordered: true,
	className: '',
	rowNum: undefined,
	loading: false,
	title: undefined,   // 表格头
	// footer:() => 'Here is footer', // 表格底部
	size: 'default',
	rowSelection: undefined,
	scroll: undefined,
	dataSource: [],
	columns: [],
	rowKey: function (record) { return record.pkId },
	// scroll: { y: 240 }
}

const FWrapTable = (props)=>{
	return <FInitTable {...props} />
}
// 定义属性
FWrapTable.propTypes = {
    ...Table.propTypes
}
// 定义属性默认值 
FWrapTable.defaultProps = {
	...Table.defaultProps
}

FWrapTable.calcTableHeight = f_calcTableHeight;

export default injectIntl(FWrapTable);


