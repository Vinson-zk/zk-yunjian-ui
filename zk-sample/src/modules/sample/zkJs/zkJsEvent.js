/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 09:06:32
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-14 10:09:16
 */


import React from 'react';
import { injectIntl } from 'react-intl';
import { Row, Col } from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../helper';

import styles from "../styles.less";

import { zkTools } from "zkFramework";
// const { ZKAnchor } = ZKOriginalComponents;
const { zkToolsMsg } = zkTools;

const FInitJsEventDemo = ({ intl }) => {

	return (
		<div className={styles.sample_detail_panel}>
			<h1>{zkToolsMsg.msgFormatByIntl(intl, 'sample.general.function')} zkJsEvent {zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</h1>
			<div className={styles.sample_detail_section} >
				<SyntaxHighlighter language='jsx' style={docco}>
					{[
						"eventEmitte:{            // 发布订阅类",
						"    register // 注册事件监听; eventType 事件类型，handle 处理函数",
						"    remove   // 移除事件监听；eventType 事件类型，handle 处理函数",
						"    emit:    // emit 用于分发消息，触发一个事件；eventType 事件类型，args 参数",
						"}",
						"eventBinding             // js 注册事件监听 通用方法",
						"eventRemove              // js 移除事件监听 通用方法",
						"eventCancelPropagation   // js 取消冒泡事件 通用方法",
						"eventCancelDefault       // js 取消默认事件 通用方法",
					].join('\n')}
				</SyntaxHighlighter>
			</div>
			<div className={styles.sample_detail_section} >
				<h2> 事件订阅发布类 eventEmitte {zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</h2>
				<div id="eventEmitte">
					<SyntaxHighlighter language='jsx' style={docco}>
						{[
							"自定义事件发布、订阅、派发类",
						].join('\n')}
					</SyntaxHighlighter>
				</div>
				<div id="eventEmitte.register">
					<SyntaxHighlighter language='jsx' style={docco}>
						{[
							"/** 事件注册方法 ",
							" * @eventType [String].required: 事件类型，也就是一个事件标识；",
							" * @handle [Function].required: 事件处理函数；",
							" * @return [void]",
							" */",
							"eventEmitte.register(eventType, handle);",
						].join('\n')}
					</SyntaxHighlighter>
				</div>
				<div id="eventEmitte.remove">
					<SyntaxHighlighter language='jsx' style={docco}>
						{[
							"/** 移除事件处理方法；",
							" * @eventType [String].required: 要移除的事件类型，也就是一个事件标识；",
							" * @handle [Function].required: 要移除的处理函数；",
							" * @return [void]",
							" */",
							"eventEmitte.remove(eventType, handle);",
						].join('\n')}
					</SyntaxHighlighter>
				</div>
				<div id="eventEmitte.emit">
					<SyntaxHighlighter language='jsx' style={docco}>
						{[
							"/** 分发事件方法，即：触发一个事件；",
							" * @eventType [String].required: 事件类型，也就是一个事件标识；",
							" * @args [Object、Array]: 事件参数，会全部传给处理事件的函数；",
							" * @return [void]",
							" */",
							"eventEmitte.emit(eventType, ...args);",
						].join('\n')}
					</SyntaxHighlighter>
				</div>
			</div>
			<div className={styles.sample_detail_section} >
				<h2> js 事件处理通用方法 {zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</h2>
				<div id="eventBinding">
					<SyntaxHighlighter language='jsx' style={docco}>
						{[
							"/** js 注册事件监听 通用方法 ",
							" * @eventTarget [Object].required: 绑定目标对象",
							" * @eventType [String].required: 事件标识",
							" * @evrntHandler [Function].required: 事件处理函数",
							" * @useCapture [Boolean]: 事件类型，默认 false; true=捕获; false=冒泡; 这个参与绑定与移除必须一致。",
							" * @return [void]",
							" */",
							"eventBinding:f_eventBinding(eventTarget, eventType, evrntHandler, useCapture)",
						].join('\n')}
					</SyntaxHighlighter>
				</div>
				<div id="eventRemove">
					<SyntaxHighlighter language='jsx' style={docco}>
						{[
							"/** js 移除事件监听 通用方法 ",
							" * @eventTarget [Object].required: 绑定目标对象",
							" * @eventType [String].required: 事件标识",
							" * @evrntHandler [Function].required: 事件处理函数",
							" * @useCapture [Boolean]: 事件类型，默认 false; true=捕获; false=冒泡; 这个参与绑定与移除必须一致。",
							" * @return [void]",
							" */",
							"eventRemove:f_eventRemove(eventTarget, eventType, evrntHandler, useCapture)",
						].join('\n')}
					</SyntaxHighlighter>
				</div>
				<div id="eventCancelPropagation">
					<SyntaxHighlighter language='jsx' style={docco}>
						{[
							"/** js 取消冒泡事件，中断冒泡事件； ",
							" * @event [Object].required: 事件对象",
							" * @return [void]",
							" */",
							"eventCancelPropagation:f_eventCancelPropagation(event)",
						].join('\n')}
					</SyntaxHighlighter>
				</div>
				<div id="eventCancelDefault">
					<SyntaxHighlighter language='jsx' style={docco}>
						{[
							"/** js 取消默认事件，中断事件； ",
							" * @event [Object].required: 事件对象",
							" * @return [void]",
							" */",
							"eventCancelDefault:f_eventCancelDefault(event)",
						].join('\n')}
					</SyntaxHighlighter>
				</div>
			</div>
			<div className={styles.sample_detail_section} >
				<h2>js 事件 笔记，说明</h2>
				<div>
					<SyntaxHighlighter language='jsx' style={docco}>
						{[
							"事件捕获 <div><p></p></div>",
							"当你使用事件捕获时，父级元素先触发，子级元素后触发，即div先触发，p后触发。",
							"事件冒泡",
							"当你使用事件冒泡时，子级元素先触发，父级元素后触发，即p先触发，div后触发。",
							"",
							"事件的传播是可以阻止的：",
							"• 在W3c中，使用stopPropagation（）方法",
							"• 在IE下设置cancelBubble = true；",
							"在捕获的过程中stopPropagation（）；后，后面的冒泡过程也不会发生了~",
							"",
							"阻止事件的默认行为，例如click <a>后的跳转~",
							"• 在W3c中，使用preventDefault（）方法；",
							"• 在IE下设置window.event.returnValue = false;",
							"",
							"DOM Leavl 0 – 事件监听器",
							"是最早的事件处理形式，它既可以直接写在HTMl上，也可以把一个函数分配给一个事件处理程序。",
							"然而，这种方式给一个元素的同一事件只允许一个处理器。",
							"示例：",
							"element.onclick = function(e){};",
							"element['onmousemove'] = function(e){};",
							"",
							"W3C DOM Leavl 2 – 事件监听器",
							"通过W3C DEMO Leavl 2事件处理，我们不会直接把一个函数分配给一个事件处理程序，相反，我们将新函数添加一个事件监听器；",
							"示例：",
							"--- W3C模型，三个参数",
							"事件名称，就是说解除哪个事件呗。",
							"事件回调，是一个函数，这个函数必须和注册事件的函数是同一个。",
							"事件类型，布尔值，true=捕获; false=冒泡; false- 默认; 这个参与绑定与移除必须一致。",
							"element.addEventListener('click',doSomething2,true)",
							"element.removeEventListener('click',doSomething2,true)",
							"--- IE",
							"",
							"W3C DOM Leaval 2通用语法",
							"一些注意事项：",
							"W3C DOM Leavl 2标准的addEventListener方法执行事件的顺序是按照事件注册的顺序执行的。而IE的attachEvent方法则相反–后注册的事件先觖发，先注册的事件后触发。",
							"W3C DOM Leavl 2标准的浏览器文本节点也会冒泡，而IE内核的浏览器文本节点不会冒泡。",
							"W3C DOM Leavl 2浏览器事件对象与IE内核的浏览器事件不同(具体请参阅)。",
							"DOM标准的浏览器事件卸载方式与IE内核的事件卸载方式不同。",
							"IE6/7/8 仍然没有遵循标准而使用了自己专有的attachEvent，且不支持事件捕获，所有事件都是发生在冒泡阶段。",
						].join('\n')}
					</SyntaxHighlighter>
				</div>
			</div>
			<br />
		</div>
	)

}

export default injectIntl(FInitJsEventDemo);