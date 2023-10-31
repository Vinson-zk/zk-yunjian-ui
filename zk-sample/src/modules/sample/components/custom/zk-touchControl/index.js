/*
* @Author: Vinson
* @Date:   2022-11-29 09:38:45
* @Last Modified by:   Vinson
* @Last Modified time: 2022-12-05 11:46:44
*/

import React, { useState } from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import tcStyles from "./styles.less";

import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKButton } = ZKOriginalComponents;
const { ZKTouchControl } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;

const FInitZKTouchControllerDemo = ({ intl }) => {

	const [isShow, setIsShow] = useState(false);

	return (
		<div className={styles.sample_detail_panel} >
			<div className={styles.sample_detail_section}>
				<h2>1、{zkToolsMsg.msgFormatByIntl(intl, 'sample.components.custom.touchControl')}&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}</h2>
				<div style = {{'height':'300px'}} >
					<ZKButton onClick = {e=>{setIsShow(!isShow)}}>Click 点我 {isShow}</ZKButton>
					<br />ZKTouchController 1: <br />
					<ZKTouchControl isShow={isShow} data="ZKTouchController default sample"
						vector = {{x:-1, y:-1}} position = {{x:20, y:20}} 
						onTouch = {(e, data)=>{console.log("[^_^:20221129-1722-001] onTouch data:", data)}}
						onMouseover = {(e, data)=>{console.log("[^_^:20221129-1722-001] onMouseover data:", data)}}
						onMouseout = {(e, data)=>{console.log("[^_^:20221129-1722-001] onMouseout data:", data)}}
					>yun</ZKTouchControl>

					<br />ZKTouchController nav-Top: <br />
					<ZKTouchControl isShow={isShow} schema="nav" data="ZKTouchController nav left sample"
						vector = {{x:1, y:1}} navDirection = "top" position = {{x: 300, y:0}} originPosition = {{y:0}} 
						onTouch = {(e, data)=>{console.log("[^_^:20221129-1722-002] onTouch data:", data)}}
					>navTop</ZKTouchControl>
					<br />ZKTouchController nav-Right: <br />
					<ZKTouchControl isShow={isShow} schema="nav" data="ZKTouchController nav right sample"
						vector = {{x:-1, y:1}} navDirection = "right" originPosition = {{x:0}} 
						onTouch = {(e, data)=>{console.log("[^_^:20221129-1722-003] onTouch data:", data)}}
					>navRight</ZKTouchControl>
					<br />ZKTouchController nav-Bottom: <br />
					<ZKTouchControl isShow={isShow} schema="nav" data="ZKTouchController nav bottom sample"
						vector = {{x:-1, y:-1}} navDirection = "bottom" position = {{x: 200, y:0}} originPosition = {{y:0}} 
						onTouch = {(e, data)=>{console.log("[^_^:20221129-1722-004] onTouch data:", data)}}
					>navBottom</ZKTouchControl>
					<br />ZKTouchController nav-Left: <br />
					<ZKTouchControl isShow={isShow} schema="nav" data="ZKTouchController nav left sample"
						vector = {{x:1, y:1}} position = {{y:190}} originPosition = {{x:0}} 
						onTouch = {(e, data)=>{console.log("[^_^:20221129-1722-005] onTouch data:", data)}}
					>navLeft</ZKTouchControl>

					<br />ZKTouchController maxRang : <br />
					<ZKTouchControl isShow={isShow} data="ZKTouchController maxRang sample"
						maxRang = {{left: 300, top: 100, right: 800, bottom: 310}}
						vector = {{x:1, y:1}} position = {{y:190}} 
						onTouch = {(e, data)=>{console.log("[^_^:20221129-1722-005] onTouch data:", data)}}
					>maxRang</ZKTouchControl>
					<div className = {tcStyles.zk_sample_maxRang}></div>
				</div>
			</div>
			<div className={styles.sample_detail_section}>
				<h2>2、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')} </h2>
				<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
					{[
						"ZKTouchController 组件"
					].join('\n')}
				</SyntaxHighlighter>
				一些参数说明：<br />
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
							<td>schema</td><td>false</td><td>模式</td><td>PropTypes.oneOf(["default", "nav"])</td><td>default</td>
						</tr>
						<tr>
							<td>className</td><td>false</td><td>样式类名</td><td>PropTypes.string</td><td></td>
						</tr>
						<tr>
							<td>isShow</td><td>false</td><td>是否显示</td><td>PropTypes.bool</td><td>true</td>
						</tr>
						<tr>
							<td>position</td><td>false</td><td>位置</td><td>PropTypes.object</td><td>{`{x:0, y: 66}`}</td>
						</tr>
						<tr>
							<td>maxRang</td><td>false</td><td>移动范围</td><td>PropTypes.object</td><td>{`{top: undefined, right: undefined, bottom: undefined, left: undefined}`}</td>
						</tr>
						<tr>
							<td>originPosition</td><td>false</td><td>移动结束回归的原位置；undefined 时，不回归原位置</td><td>PropTypes.object</td><td>{`{x: undefined, y:undefined}`}</td>
						</tr>
						<tr>
							<td>vector</td><td>false</td><td>对应靠左还是靠右</td><td>PropTypes.object</td><td>{`{x:1, y:1}`}</td>
						</tr>
						<tr>
							<td>navDirection</td><td>false</td><td>导航方向，schema 为 nav 时才有效</td><td>PropTypes.oneOf(["left", "right", "top", "bottom"])</td><td>left</td>
						</tr>
						<tr>
							<td>onTouch</td><td>false</td><td>点击事件；{`(e, data)=>{}`}</td><td>PropTypes.func</td><td></td>
						</tr>
						<tr>
							<td>onMouseover</td><td>false</td><td>鼠标移入事件；{`(e, data)=>{}`}</td><td>PropTypes.func</td><td></td>
						</tr>
						<tr>
							<td>onMouseout</td><td>false</td><td>鼠标移出事件；{`(e, data)=>{}`}</td><td>PropTypes.func</td><td></td>
						</tr>
						<tr>
							<td>data</td><td>false</td><td>数据据，做为事件的参数传出</td><td></td><td></td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className={styles.sample_detail_section}>
				<h2>3、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}</h2>
				<div>
					<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
						{[
							"详见样例源代码",
						].join('\n')}
					</SyntaxHighlighter>
				</div>
			</div>
			<br />
			<br />
		</div>
	)
}

export default injectIntl(FInitZKTouchControllerDemo);




