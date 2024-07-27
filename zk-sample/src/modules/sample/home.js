/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 16:04:40
 * @Last Modified by: runoob
 * @Last Modified time: 2023-09-24 00:21:15
 */

import React from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from './helper';

import styles from "./styles.less";
import { zkTools, ZKCustomComponents } from "zkFramework";
const { ZKContentFormat } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;

class CInitSampleHome extends React.Component {

	// 1、构造函数
	constructor(props) {
		super(props)
	}

	render() {

		let { intl } = this.props;

		return (
			<ZKContentFormat className={styles.sample_detail_panel} >
				<ZKContentFormat title = {`学习资料 ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}`} >
					<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
						{[
							" fighting! ",
						].join('\n')}
					</SyntaxHighlighter>
				</ZKContentFormat>
				<ZKContentFormat title = {`选型 ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}`} >
					node:&nbsp;&nbsp;8.9.4               <br />
					webpack:&nbsp;&nbsp;4.29.0           <br />
					react:&nbsp;&nbsp;16.5.2             <br />
					react-router-dom:&nbsp;&nbsp;4.1.2   <br />
					react-dom:&nbsp;&nbsp;16.5.2         <br />
					dva:&nbsp;&nbsp;2.4.0                <br />
					antd:&nbsp;&nbsp;3.11.6              <br /><br />
				</ZKContentFormat>
				<ZKContentFormat title = {`参考资料 ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}`}>
					<ZKContentFormat title = {`Node JS`}>
						<font>资料汇总：</font>
						<a target="_blank" href="https://cnodejs.org/getstart">https://cnodejs.org/getstart</a>
						<br />
						<font>npm：</font>
						<a target="_blank" href="https://docs.npmjs.com/cli/uninstall">https://docs.npmjs.com/cli/uninstall</a>
						<br />
						<font>webpack: </font>
						<a target="_blank" href="https://webpack.js.org/">https://webpack.js.org/</a>
						<br />
					</ZKContentFormat>
					<ZKContentFormat title = {`ES`}>
						<font>javaScript 菜单教程：</font>
						<a target="_blank" href="http://www.runoob.com/js/js-tutorial.html">http://www.runoob.com/js/js-tutorial.html</a><br />
						<font>ES6 语法：</font>
						<a target="_blank" href="http://es6.ruanyifeng.com/#docs/generator#Generator-prototype-throw">http://es6.ruanyifeng.com/#docs/generator#Generator-prototype-throw</a><br />
						<font>Babel 换器，代码可在线转：</font>
						<a target="_blank" href="https://babeljs.io/">https://babeljs.io/</a><br />
					</ZKContentFormat>
					<ZKContentFormat title = {`react JS`}>
						<font>react 组件生命同期、组件状态、组件渲染等、路由：</font><br />
						<font>官网：</font>
						<a target="_blank" href="https://reactjs.org/docs/getting-started.html">https://reactjs.org/docs/getting-started.html</a>
						<br />
						<font>路由：</font>
						<a target="_blank" href="https://reacttraining.com/react-router/web/example/basic">https://reacttraining.com/react-router/web/example/basic</a><br />
						<font>路由-其他学习博文：</font>
						<a target="_blank" href="https://blog.csdn.net/sinat_17775997/article/details/77411324">https://blog.csdn.net/sinat_17775997/article/details/77411324</a><br />
					</ZKContentFormat>
					<ZKContentFormat title = {`dva`}>
						<a target="_blank" href="https://dvajs.com/knowledgemap/#%E5%A2%9E%E5%88%A0%E6%94%B9" >https://dvajs.com/knowledgemap/#%E5%A2%9E%E5%88%A0%E6%94%B9</a><br />
					</ZKContentFormat>
					<ZKContentFormat title = {`Ant Design`}>
						<a target="_blank" href="https://ant.design/docs/react/introduce">https://ant.design/docs/react/introduce</a><br />
					</ZKContentFormat>
					{/*
						<ZKContentFormat title = {`Node JS`}>
							<ZKContentFormat title = {`资料汇总`}>
								<a target="_blank" href="https://cnodejs.org/getstart">https://cnodejs.org/getstart</a><br />
							</ZKContentFormat>
							<ZKContentFormat title = {`npm`}>
								<a target="_blank" href="https://docs.npmjs.com/cli/uninstall">https://docs.npmjs.com/cli/uninstall</a><br />
							</ZKContentFormat>
							<ZKContentFormat title = {`webpack`}>
								<a target="_blank" href="https://webpack.js.org/">https://webpack.js.org/</a><br />
							</ZKContentFormat>
						</ZKContentFormat>
						<ZKContentFormat title = {`ES`}>
							<ZKContentFormat title = {`javaScript 菜单教程`}>
								<a target="_blank" href="http://www.runoob.com/js/js-tutorial.html">http://www.runoob.com/js/js-tutorial.html</a><br />
							</ZKContentFormat>
							<ZKContentFormat title = {`ES6 语法`}>
								<a target="_blank" href="http://es6.ruanyifeng.com/#docs/generator#Generator-prototype-throw">http://es6.ruanyifeng.com/#docs/generator#Generator-prototype-throw</a><br />
							</ZKContentFormat>
							<ZKContentFormat title = {`Babel 换器，代码可在线转`}>
								<a target="_blank" href="https://babeljs.io/">https://babeljs.io/</a><br />
							</ZKContentFormat>
						</ZKContentFormat>
						<ZKContentFormat title = {`react JS`}>
							<font>react 组件生命同期、组件状态、组件渲染等、路由：</font><br />
							<ZKContentFormat title = {`官网`}>
								<a target="_blank" href="https://reactjs.org/docs/getting-started.html">https://reactjs.org/docs/getting-started.html</a><br />
							</ZKContentFormat>
							<ZKContentFormat title = {`路由`}>
								<a target="_blank" href="https://reacttraining.com/react-router/web/example/basic">https://reacttraining.com/react-router/web/example/basic</a><br />
							</ZKContentFormat>
							<ZKContentFormat title = {`路由-其他学习博文`}>
								<a target="_blank" href="https://blog.csdn.net/sinat_17775997/article/details/77411324">https://blog.csdn.net/sinat_17775997/article/details/77411324</a><br />
							</ZKContentFormat>
						</ZKContentFormat>
						<ZKContentFormat title = {`dva`}>
							<a target="_blank" href="https://dvajs.com/knowledgemap/#%E5%A2%9E%E5%88%A0%E6%94%B9" >https://dvajs.com/knowledgemap/#%E5%A2%9E%E5%88%A0%E6%94%B9</a><br />
						</ZKContentFormat>
						<ZKContentFormat title = {`Ant Design`}>
							<a target="_blank" href="https://ant.design/docs/react/introduce">https://ant.design/docs/react/introduce</a><br />
						</ZKContentFormat>
					*/}
				</ZKContentFormat>
				<br />
			</ZKContentFormat>
		)
	}
}


export default injectIntl(CInitSampleHome);