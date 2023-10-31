/*
* @Author: Vinson
* @Date:   2021-03-13 15:22:52
* @Last Modified by:   Vinson
* @Last Modified time: 2023-05-29 22:14:29
* 
* 
* 
*/


import React from 'react';
import { Form } from 'antd';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';
import moment from 'moment';

import { docco } from '../../../helper';
import zkJsUtils from 'zkJsUtils';
import styles from "../../../styles.less";
import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKInput, ZKDatePicker, ZKSelect } = ZKOriginalComponents;
const { ZKScrollTable, ZKOptRow } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;


function FInitZKScrollTableDemo({ intl }) {

	const columns = [
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'sample.table.col1'), dataIndex: 'title', key: 'title', width: 150,
			textAlign: 'left', 
			sorter: (a, b) => { if (a.title > b.title) { return 1 } else if (a.title < b.title) { return -1 } else { return 0 } },
			// sortOrder:['ascend','descend'],
		},  
		{ title: zkToolsMsg.msgFormatByIntl(intl, 'sample.table.col2'), dataIndex: 'url', key: 'url', width: 150, textAlign: 'right', 
			sorter: true,
			// sortOrder: true,
			// sortOrder: ['ascend','descend'],
			// sortDirections:['asc','desc'],
		},  
		{ title: zkToolsMsg.msgFormatByIntl(intl, 'sample.table.col3'), dataIndex: 'permission', key: 'permission', width: 150 },
		{
			title: zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_name'),
			dataIndex: 'opt', key: 'opt', width: 50, fixed: 'right', 
			render: (text, record, index) => {
				return (
					<ZKOptRow key={`grid-${record.pkId}`} >
						<ZKOptRow.OptGroup>
							<ZKOptRow.OptGroup.OptItem>
								{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_save')}
							</ZKOptRow.OptGroup.OptItem>
							<ZKOptRow.OptGroup.OptItem>
								{zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_cancel')}
							</ZKOptRow.OptGroup.OptItem>
						</ZKOptRow.OptGroup>
					</ZKOptRow>
				)
			}
		},
	];
	const dataSource = [
		{ id: 1, title: '测试11', age: 11, url: 'url', permission: 'permission' },  
		{ id: 2, title: '测试12', age: 12, url: 'url', permission: 'permission' },  
		{ id: 3, title: '测试13', age: 13, url: 'url', permission: 'permission' },  
		{ id: 4, title: '测试14', age: 14, url: 'url', permission: 'permission' },  
		{ id: 5, title: '测试15', age: 15, url: 'url', permission: 'permission' },  
		{ id: 6, title: '测试16', age: 16, url: 'url', permission: 'permission' },  
		{ id: 7, title: '测试17', age: 17, url: 'url', permission: 'permission' },  
		{ id: 8, title: '测试18', age: 18, url: 'url', permission: 'permission' },  
		{ id: 9, title: '测试19', age: 19, url: 'url', permission: 'permission' },  
		{ id: 11, title: '测试21', age: 20, url: 'url', permission: 'permission' },  
		{ id: 21, title: '测试22', age: 21, url: 'url', permission: 'permission' },  
		{ id: 31, title: '测试23', age: 22, url: 'url', permission: 'permission' },  
		{ id: 41, title: '测试24', age: 23, url: 'url', permission: 'permission' },  
		{ id: 51, title: '测试25', age: 24, url: 'url', permission: 'permission' },  
		{ id: 61, title: '测试26', age: 25, url: 'url', permission: 'permission' },  
		{ id: 71, title: '测试27', age: 26, url: 'url', permission: 'permission' },  
		{ id: 81, title: '测试28', age: 27, url: 'url', permission: 'permission' },  
		{ id: 91, title: '测试29', age: 28, url: 'url', permission: 'permission' }
	];

	let tableProps = {
		rowKey: "id",
		rowSelection: { onChange: (selectedRowKeys, selectedRows) => { }, columnWidth: 30 },
		columns: columns,
		dataSource: dataSource,
		pagination: {},
		scroll: { x: 1440, y: 300 },
		rowNum: { 'textAlign': 'center', 'fixed': 'left', width: 30 },
		onChange: (pagination, filters, sorter)=>{
			console.log("====== pagination: ", pagination);
			console.log("====== filters: ", filters);
			console.log("====== sorter: ", sorter);
			/*
			{
				column:{
					className: "styles--column_text_align_right--1xejrNb4y",
					dataIndex: "url",
					key: "url",
					sorter: true,
					textAlign: "right",
					title: "列2",
					width: 150
				}
				columnKey: "url",
				field: "url",
				order: "ascend", // ascend descend
			}
			*/
		}
	}

	return (
		<div className={styles.sample_detail_panel}>
			<div className={styles.sample_detail_section}>
				<h2>1、{zkToolsMsg.msgFormatByIntl(intl, 'sample.components.custom.scrollTable')}&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}</h2>
				<div>
					<ZKScrollTable {...tableProps}></ZKScrollTable>
					<br />
					<br />=========================================================================================
					<br /><font color = "red">高度自动填满 --- 分页: 上/下、滚动条: 上下/左右、固定例: 左/右</font>
					<div style = {{height: '650px', display: 'flex', border: '1px solid', padding: '30px'}}>
						<ZKScrollTable 
							rowKey = "id"
							rowSelection = {{ onChange: (selectedRowKeys, selectedRows) => { } }}
							autoHeight = {true}
							columns = {columns.map(item=>{
								let itemClone = zkJsUtils.clone(item);
								if(itemClone.key == 'title'){
									itemClone['fixed'] = 'left';
								}
								console.log("----- ", item);
								return itemClone;
							})}
							rowNum = {{'textAlign': 'center', 'fixed': 'left', width: 30 }}
							dataSource = {dataSource}
							pagination = {{position: ['topRight', 'bottomRight']}}
							scroll = {{x:1440, y: 300}}
						>
							<ZKOptRow />
						</ZKScrollTable>
					</div>
					<br />
					<br /><font color = "red">高度自动填满 --- 分页: 下、滚动条: 上下/左右、固定例: 左/右</font>
					
					<br />
					<br /><font color = "red">高度自动填满 --- 分页: 下、滚动条: 上下/左右、固定例: 右</font>
					
					<br />
					<br /><font color = "red">高度自动填满 --- 分页: 下、滚动条: 上下/左右、固定例: 左</font>
					
					<br />
					<br /><font color = "red">高度自动填满 --- 分页: 下、滚动条: 上下、固定例: 左/右</font>
					
					<br />
					
					<br /><br /><br />

					<br />=========================================================================================
					<br /><font color = "red">高度不自动填满 --- 上下分页、上下滚动条、左右滚动条、左固定例、右固定例</font>
					
					
				</div>
			</div>
			<div className={styles.sample_detail_section}>
				<h2>2、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')} </h2>
				<div>
					ZKScrollTable 组件：<br />
				    ZKTable 再次封装，接受 ZKTable 所有属性。<br /><br />
					<table className={styles.sample_detail_section_table}>
						<thead>
							<tr>
								<th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.param')}</th>
								<th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.required')}</th>
								<th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</th>
								<th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.type')}</th>
								<th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.default')}</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>autoHeight</td>
								<td>否</td>
								<td>高度自动填满; 此属性生效，必须要在传入 scroll 的情况下才会生效。</td>
								<td>PropTypes.boolean</td>
								<td>false</td>
							</tr>
						</tbody>
					</table>
					<div style={{ color: 'red' }}>
						主要作用：<br />
						&nbsp;&nbsp;1：统一设置了默认样式，样式使用方面与 antd 原生标签，Table 使用一样，<br />
						&nbsp;&nbsp;2: table 下包含的子组件将在表格头中显示，示例中包含了一个操作行的子组件。<br />
						&nbsp;&nbsp;3: 修改 table 默认属性 rowKey，默认以 行记录的 id 做为 key <br />
					</div>
				</div>
			</div>
			<div className={styles.sample_detail_section}>
				<h2>3、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}</h2>
				<div>
					<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
						{[
							"// 参考框架样例代码",
						].join('\n')}
					</SyntaxHighlighter>
				</div>
			</div>
			<br />
		</div>
	)
}

export default injectIntl(FInitZKScrollTableDemo);
