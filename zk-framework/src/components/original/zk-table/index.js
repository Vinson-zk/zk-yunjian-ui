/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 10:13:11
 * @Last Modified by: vinson
 * @Last Modified time: 2024-12-30 14:53:12
 */


import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { Resizable } from 'react-resizable';

import { zkToolsMsg, zkToolsUtils } from '../../../tools';

import styles from "./styles.less";
// import "./styles.resizableTable.less";

/** 计算表格填满时的高度 tDom 为 表格 document 节点 */
const f_calcTableHeight = (tDom, defaultCut=0)=>{

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
	let h = tPDom.clientHeight;
	// let h = tPDom.clientHeight - f_getDomHeight(tDom);
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
	// 分页高度 默认减 40，改由外部传入
	// h -= 40 * paginationCount;
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

	/*** 外部传入默认扣减  */
	h -= defaultCut;
	/*** 扣除一点点高度, 以免引发外部滚动条  */
	// h -= 3;
	return h;
}

// 可伸缩的列
const FInitResizeableTitle = props => {
    const { onResize, width, ...restProps } = props;
    console.log("[^_^:20240730-2321-001] FInitResizeableTitle.width: ", width, props)
    if (!width) {
        return <th {...restProps} />;
    }

    return (
        <Resizable
      width={width}
      height={0}
      onResize={onResize}
      draggableOpts={{ enableUserSelectHack: false }}
    >
      <th {...restProps} />
    </Resizable>
    );
};

/* 组件主要是作用：
	1：统一设置了默认样式，样式使用方面与 Table 使用一样，
*/
const FInitTable = ({ isStretch=false, rowNum, pagination, dataSource, columns, children, intl, className, ...props }) => {

	// useEffect(
	// 	() => {
	// 		console.log("--- 11 ", props);
	// 		console.log("--- 22 ", this);

	// 		// const subscription = props.source.subscribe();
	// 		return () => {
	// 		  // subscription.unsubscribe();
	// 		};
	// 	},
	// 	[props.source],
	// );

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
				item.className = styles.zk_table_column_text_align_left;
				break;
			case 'right':
				item.className = styles.zk_table_column_text_align_right;
				break;
			default:
				item.className = styles.zk_table_column_text_align_center;
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
			className: styles.zk_table_row_num_column + ' ' + styles['zk_table_row_num_column_' + lang] + ' ' + styles['zk_table_column_text_align_' + (rowNum.textAlign ? rowNum.textAlign : 'center')],
			dataIndex: '_zk_rowNum',
			width: rowNum.width?rowNum.width:50,
			fixed: 'left',
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

	// if(isStretch){
	// 	let { components, ...otherProps } = props;
	// 	if(!components){
	// 		components = {};
	// 	}
	// 	if(!components.header){
	// 		components.header = {}
	// 	}
	// 	if(!components.header.cell){
	// 		components.header.cell = FInitResizeableTitle;
	// 	}
	// 	const [mCols, setColumns] = useState(columns);
	// 	let cols = mCols;
	// 	if (cols) {
	// 	    cols = cols.map((col, index) => ({
	// 	        ...col,
	// 	        onHeaderCell: column => ({
	// 	            width: column.width,
	// 	            onResize: (index, cols, setColumns) => (e, { size }) => {
	// 	                const nextColumns = [...cols];
	// 	                nextColumns[index] = {
	// 	                    ...nextColumns[index],
	// 	                    width: size.width,
	// 	                };
	// 	                setColumns(nextColumns);
	// 	            },
	// 	        }),
	// 	    }));
	// 	}

	// 	return (
	// 		<Table className = {`${styles.zk_table} ${className}`} {...otherProps}
	// 			components = {components}
	// 			title = {title} 
	// 			columns = {cols} 
	// 			dataSource = {dataSource}
	// 			pagination = {pagination}
	// 		/>
	// 	)
	// }else{
	// 	return (
	// 		<Table className = {`${styles.zk_table} ${className}`} {...props}
	// 			title = {title} 
	// 			columns = {columns} 
	// 			dataSource = {dataSource}
	// 			pagination = {pagination}
	// 		/>
	// 	)
	// }

	return (
		<Table className = {`${styles.zk_table} ${className}`} {...props}
			title = {title} 
			columns = {columns} 
			dataSource = {dataSource}
			pagination = {pagination}
		/>
	)

	// console.log("[^_^:20211202-1641-001] table.pagination: ", pagination);
	// console.log("[^_^:20230919-2326-001] table.props: ", props);
}

// 定义属性
FInitTable.propTypes = {
	isStretch: PropTypes.bool,
	rowNum: PropTypes.shape({
		textAlign: PropTypes.oneOf(['left', 'center', 'right']), // 内容显示方式, 默认居中 【'left', 'center', 'right'】
	})
}
// 定义属性默认值
FInitTable.defaultProps = {
	isStretch: true,
	bordered: true,
	className: '',
	rowNum: undefined,
	loading: false,
	title: undefined,   // 表格头
	// footer:() => 'Here is footer', // 表格底部
	size: 'small', // large | middle | small
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

// Table.calcTableHeight = f_calcTableHeight;
// export default Table;

