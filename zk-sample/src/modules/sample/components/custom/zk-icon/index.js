/*
* @Author: Vinson
* @Date:   2021-03-07 02:20:59
* @Last Modified by:   Vinson
* @Last Modified time: 2021-03-09 08:38:48
* 
* 
* 
*/


import React from 'react';
import { Input } from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { injectIntl } from 'react-intl';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import { zkTools, ZKCustomComponents } from "zkFramework";
const { ZKIcon } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;

// console.log("[^_^:20200816-1853-001] : FInitZKIconDemo", ZKIcon);

class CInitZKIconDemo extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			icon: ''
		};
	}

	onSelect = (v)=>{
		this.setState({icon:v});
	}

	render(){
		let { intl } = this.props;
		return (
			<div className={styles.sample_detail_panel}>
				<div className={styles.sample_detail_section}>
					<h2>1、{zkToolsMsg.msgFormatByIntl(intl, 'sample.components.custom.icon')}&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}</h2>
					<div>
						<br />
						<font color = "red">ZKIcon 动态引用 antd4 图标；以及框架图标快速选择。</font>
						<br /><br />
					    <ZKIcon.Antd4Icon icon="FormOutlined" style = {{"color":"blue"}} /> &nbsp;&nbsp;
					    <ZKIcon.Antd4Icon icon="SendOutlined" /> &nbsp;&nbsp;
					    <ZKIcon icon="FormOutlined" style = {{"color":"red"}} />
					    <br />
					    <br /> 选择图标 --------------------------------------- 
					    <Input readyonly = "true" value = {this.state.icon} />
					    <ZKIcon.ZKIconPanel onSelect = {this.onSelect} />
					    <br /> 复制到剪贴版 --------------------------------------- 
					    <Input />
					    <ZKIcon.ZKIconPanel />
					    <br /><br />
					</div>
				</div>
				<div className={styles.sample_detail_section}>
					<h2>2、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')} </h2>
					<div>
						ZKIcon 组件：<br />
						<div style={{ color: 'red' }}>
							注：&nbsp;&nbsp;<br />
						</div>
						ZKIcon.Antd4Icon 组件：动态引用 antd4 图标；可接收原始属性；<br />
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
									<td>icon</td>
									<td>true</td>
									<td>antd4 的图标名称，不存时，会打印异常信息，但不影响程序运行。</td>
									<td>PropTypes.string</td>
									<td></td>
								</tr>
							</tbody>
						</table>
						ZKIcon.ZKIconPanel 组件：框架图标快速选择<br />
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
									<td>onSelect</td>
									<td>false</td>
									<td>图标选择时的回调函数，回调参数为图标名称。不传入时，会将图标 标签复制到剪贴板。</td>
									<td>PropTypes.func</td>
									<td></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div className={styles.sample_detail_section}>
					<h2>3、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}</h2>
					<div>
						<SyntaxHighlighter language='jsx' style={docco}>
							{[
								"参考框架代码",
							].join('\n')}
						</SyntaxHighlighter>
					</div>
				</div>
				<br />
			</div>
		)
	}
}

export default injectIntl(CInitZKIconDemo);


