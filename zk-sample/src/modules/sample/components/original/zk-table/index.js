/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 17:33:51
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-09 23:56:37
 */

import React from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import { zkTools, ZKOriginalComponents, ZKCustomComponents } from "zkFramework";
const { ZKTable } = ZKOriginalComponents;
const { ZKOptRow } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;

function FInitZKTableDemo({ intl }) {
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
		{ title: zkToolsMsg.msgFormatByIntl(intl, 'sample.table.col3'), dataIndex: 'permission', key: 'permission', width: 150 }
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
		scroll: { x: true, y: 300 },
		rowNum: {},
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
				<h2>1、{zkToolsMsg.msgFormatByIntl(intl, 'sample.components.original.talbe')}&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}</h2>
				<div>
					<ZKTable {...tableProps}></ZKTable>
					<br />
					<ZKTable
						// rowSelection={{onChange: (selectedRowKeys, selectedRows) => {}}} 
						columns={columns}
						// dataSource={[{id:91, title: '测试29', age:28, url: 'url', permission: 'permission'}]}
						pagination={{}}
						scroll={{ x: true, y: 300 }}
						rowNum={{}}
					>
						<ZKOptRow />
					</ZKTable>
					<br />
					<ZKTable rowSelection={{ onChange: (selectedRowKeys, selectedRows) => { } }}
						// columns={columns}  
						// dataSource={[{id:91, title: '测试29', age:28, url: 'url', permission: 'permission'}]}
						pagination={{}}
						// scroll={{x:true, y: 300}}
						rowNum={{}}
					>
					</ZKTable>
				</div>
			</div>
			<div className={styles.sample_detail_section}>
				<h2>2、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')} </h2>
				<div>
					ZKTable 组件：<br />
				    原生态封装，接受原生属性。<br /><br />
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
								<td>rowNum</td>
								<td>否</td>
								<td>序号列显示，undefined、null时不显示</td>
								<td>PropTypes.object</td>
								<td>undefined</td>
							</tr>
							<tr>
								<td>rowNum.textAlign</td>
								<td>否</td>
								<td>序号列内容显示方式</td>
								<td>['left', 'center', 'right']</td>
								<td>center</td>
							</tr>
							<tr>
								<td>rowNum.xxx</td>
								<td>否</td>
								<td>列内容显示其他属性，原生的 column 属性；</td>
								<td></td>
								<td></td>
							</tr>
							<tr>
								<td>column.textAlign</td>
								<td>否</td>
								<td>列内容显示方式，为 columns 中对象的扩展属性</td>
								<td>【'left', 'center', 'right'】</td>
								<td>center</td>
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
					<SyntaxHighlighter language='jsx' style={docco}>
						{[
							"// 测试数据准备",
							"const columns = [",
							"    {title: zkToolsMsg.msgFormatByIntl(intl, 'demo.table.col1'), textAlign:'left', dataIndex: 'title', key: 'title', width: 150}",
							"    ,{title: zkToolsMsg.msgFormatByIntl(intl, 'demo.table.col2'), dataIndex: 'url', key: 'url', width: 150}",
							"    ,{title: zkToolsMsg.msgFormatByIntl(intl, 'demo.table.col3'), dataIndex: 'permission', key: 'permission', width: 150}",
							"]",
							"const dataSource = [",
							"    {id:1, title: '测试1', url: 'url', permission: 'permission'}",
							"    ,{id:2, title: '测试2', url: 'url', permission: 'permission'}",
							"    ,{id:3, title: '测试3', url: 'url', permission: 'permission'}",
							"    ,{id:4, title: '测试4', url: 'url', permission: 'permission'}",
							"    ,{id:5, title: '测试5', url: 'url', permission: 'permission'}",
							"    ,{id:6, title: '测试6', url: 'url', permission: 'permission'}",
							"    ,{id:7, title: '测试7', url: 'url', permission: 'permission'}",
							"    ,{id:8, title: '测试8', url: 'url', permission: 'permission'}",
							"    ,{id:9, title: '测试9', url: 'url', permission: 'permission'}",
							"    ,{id:11, title: '测试11', url: 'url', permission: 'permission'}",
							"    ,{id:21, title: '测试21', url: 'url', permission: 'permission'}",
							"    ,{id:31, title: '测试31', url: 'url', permission: 'permission'}",
							"    ,{id:41, title: '测试41', url: 'url', permission: 'permission'}",
							"    ,{id:51, title: '测试51', url: 'url', permission: 'permission'}",
							"    ,{id:61, title: '测试61', url: 'url', permission: 'permission'}",
							"    ,{id:71, title: '测试71', url: 'url', permission: 'permission'}",
							"    ,{id:81, title: '测试81', url: 'url', permission: 'permission'}",
							"    ,{id:91, title: '测试91', url: 'url', permission: 'permission'}",
							"]",
							"/***********************/",
							"<ZKTable rowSelection={{onChange: (selectedRowKeys, selectedRows) => {}}} ",
							"	columns={columns}  ",
							"	scroll={{y: 300 }}",
							"	pagination={{}} ",
							"	dataSource={dataSource} >",
							"</ZKTable>"
						].join('\n')}
					</SyntaxHighlighter>
				</div>
			</div>
			<br />
		</div>
	)
}

export default injectIntl(FInitZKTableDemo);


