/**
 *
 * @Author: Vinson
 * @Date: 2020-08-13 13:44:59
 * @Last Modified by: runoob
 * @Last Modified time: 2023-10-08 17:38:53
 */


import React from 'react';
import { injectIntl } from 'react-intl';
import { InputNumber } from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../helper';
import styles from "../styles.less";
import zkJsUtils from 'zkJsUtils';
import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKContentFormat } = ZKCustomComponents;
const { ZKAnchor } = ZKOriginalComponents;
const { zkToolsMsg } = zkTools;

class CInitJsUtilsDemo extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			lableValue: "", // 字符串中参数替换时做显示用
		}
	}

	render() {
		let { match, intl } = this.props;

		// let basename = globalAppConfig.basename;

		// basename = basename == ''?

		// style={{"overflow-x":"hidden", "height":"100%"}}
		// getContainer={()=>document.getElementById("right-content-dom")} 
		/*
			()=>{
				let dom = document.getElementById("sample-zkJs-zkJsUtils")
				// console.log("====== ", dom);
				// console.log("====== ", dom.parentNode);
				return (dom&&dom.parentNode)?dom.parentNode:dom;
			}
		*/
		// Number-数字; Date-日期; String-字符串; Boolean-布尔; Function-函数; RegExp-正则表达式; Array-数组; Object-对象; Symbol-",
		let key = 0;
		let f_assertObjTypeContentDiv = (lable, obj)=>{
			++key;
			return (<div key={key}>
				<span> ----- {lable} 对象测试 {zkJsUtils.isEmpty(obj, false)?'null':obj.toString()}: </span><br />
				Number: {zkJsUtils.assertObjType(obj, Number)?'true':'false'}<br />
				Date: {zkJsUtils.assertObjType(obj, Date)?'true':'false'}<br />
				String: {zkJsUtils.assertObjType(obj, String)?'true':'false'}<br />
				Boolean: {zkJsUtils.assertObjType(obj, Boolean)?'true':'false'}<br />
				Function: {zkJsUtils.assertObjType(obj, Function)?'true':'false'}<br />
				RegExp: {zkJsUtils.assertObjType(obj, RegExp)?'true':'false'}<br />
				Array: {zkJsUtils.assertObjType(obj, Array)?'true':'false'}<br />
				Object: {zkJsUtils.assertObjType(obj, Object)?'true':'false'}<br />
				Symbol: {zkJsUtils.assertObjType(obj, Symbol)?'true':'false'}<br />
			</div>)
		}

		let f_assertObjTypeContent = ()=>{
			let es = [];
			es.push(f_assertObjTypeContentDiv('Number', 0));
			es.push(f_assertObjTypeContentDiv('Date', new Date()));
			es.push(f_assertObjTypeContentDiv('String', ''));
			es.push(f_assertObjTypeContentDiv('Boolean', true));
			es.push(f_assertObjTypeContentDiv('Function', ()=>{}));
			es.push(f_assertObjTypeContentDiv('RegExp', /0/));
			es.push(f_assertObjTypeContentDiv('Array', []));
			es.push(f_assertObjTypeContentDiv('Object', {}));
			// es.push(f_assertObjTypeContentDiv('Symbol', 0));
			return es;
		}

		return (
			<ZKContentFormat id="sample-zkJs-zkJsUtils" className={styles.sample_detail_panel} >
				<div className={styles.sample_detail_top_affix} >
					<ZKAnchor items = {[
						{
							'key': `${globalAppConfig.basename}${match.path}/#queryURL`,
				            'href': `${globalAppConfig.basename}${match.path}/#queryURL`,
				            'title': 'queryURL'
						},{
							'key': `${globalAppConfig.basename}${match.path}/#base64Decode`,
				            'href': `${globalAppConfig.basename}${match.path}/#base64Decode`,
				            'title': 'base64Decode'
						},{
							'key': `${globalAppConfig.basename}${match.path}/#removeObjUnAttr`,
				            'href': `${globalAppConfig.basename}${match.path}/#removeObjUnAttr`,
				            'title': 'removeObjUnAttr'
						},{
							'key': `${globalAppConfig.basename}${match.path}/#isEmpty`,
				            'href': `${globalAppConfig.basename}${match.path}/#isEmpty`,
				            'title': 'isEmpty'
						},{
							'key': `${globalAppConfig.basename}${match.path}/#strToObj`,
				            'href': `${globalAppConfig.basename}${match.path}/#strToObj`,
				            'title': 'strToObj'
						},{
							'key': `${globalAppConfig.basename}${match.path}/#objToStr`,
				            'href': `${globalAppConfig.basename}${match.path}/#objToStr`,
				            'title': 'objToStr'
						},{
							'key': `${globalAppConfig.basename}${match.path}/#redirectUrl`,
				            'href': `${globalAppConfig.basename}${match.path}/#redirectUrl`,
				            'title': 'redirectUrl'
						},{
							'key': `${globalAppConfig.basename}${match.path}/#makeTree`,
				            'href': `${globalAppConfig.basename}${match.path}/#makeTree`,
				            'title': 'makeTree'
						},{
							'key': `${globalAppConfig.basename}${match.path}/#findTreeParent`,
				            'href': `${globalAppConfig.basename}${match.path}/#findTreeParent`,
				            'title': 'findTreeParent'
						},{
							'key': `${globalAppConfig.basename}${match.path}/#getLang`,
				            'href': `${globalAppConfig.basename}${match.path}/#getLang`,
				            'title': 'getLang'
						},{
							'key': `${globalAppConfig.basename}${match.path}/#strReplace`,
				            'href': `${globalAppConfig.basename}${match.path}/#strReplace`,
				            'title': 'strReplace'
						},{
							'key': `${globalAppConfig.basename}${match.path}/#getJsonAttr`,
				            'href': `${globalAppConfig.basename}${match.path}/#getJsonAttr`,
				            'title': 'getJsonAttr'
						},{
							'key': `${globalAppConfig.basename}${match.path}/#sort`,
				            'href': `${globalAppConfig.basename}${match.path}/#sort`,
				            'title': 'sort'
						},{
							'key': `${globalAppConfig.basename}${match.path}/#clone`,
				            'href': `${globalAppConfig.basename}${match.path}/#clone`,
				            'title': 'clone'
						},{
							'key': `${globalAppConfig.basename}${match.path}/#changeStyleCssVal`,
				            'href': `${globalAppConfig.basename}${match.path}/#changeStyleCssVal`,
				            'title': 'changeStyleCssVal'
						},{
							'key': `${globalAppConfig.basename}${match.path}/#assertObjType`,
				            'href': `${globalAppConfig.basename}${match.path}/#assertObjType`,
				            'title': 'assertObjType'
						},{
							'key': `${globalAppConfig.basename}${match.path}/#arrayPrototype`,
				            'href': `${globalAppConfig.basename}${match.path}/#arrayPrototype`,
				            'title': 'arrayPrototype'
						}
					]} />
				</div>

				<ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'sample.general.function')} zkJsUtils ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}`}>
					<SyntaxHighlighter id="all-func" language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
						{[
							"queryURL         // 查询获取 url 中的参数，",
							"base64Decode     // 64 编码解密",
							"removeObjUnAttr  // 删除对象一个属性",
							"isEmpty          // 对象是否是空",
							"strToObj         // json 字符串或json 字符串数组 转 json对象，",
							"objToStr         // json对象 转 json字符串，",
							"redirectUrl      // url 重定向",
							"makeTree         // 做成树状结构",
							"findTreeParent   // 递归查找 父节点",
							"getLang          // 国际化转换",
							"strReplace       // 字符串 按参数名 {argName} 替换成对象的值",
							"getJsonAttr      // 取 JSON 字符中的某个属性",
							"sort             // 排序",
							"clone            // 深度拷贝一个对象或数组",
						].join('\n')}
					</SyntaxHighlighter>
				</ZKContentFormat>
				<ZKContentFormat title = {`方法 ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}`} >
					<div id="queryURL">
						<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
							{[
								"/** 获取 url 中的参数；",
								" * @href: 为url;",
								" * @paramName: 为参数名;",
								" * @return: 返回参数值，不存在时返回 null ",
								" */",
								"queryURL:f_queryURL(href, paramName) "
							].join('\n')}
						</SyntaxHighlighter>
					</div>
					<div id="base64Decode">
						<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
							{[
								"/** 64 解码",
								" * @str: 待解码的字符串；",
								" * @return: 解码字符串；",
								" */",
								"base64Decode:f_Base64Decode(str)	"
							].join('\n')}
						</SyntaxHighlighter>
					</div>
					<div id="removeObjUnAttr">
						<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
							{[
								"/** 删除对象 undefined 属性",
								" * @obj: 待处理对象;",
								" * @return: 处理后的对象;",
								" */",
								"removeObjUnAttr:f_removeObjUnAttr(obj)"
							].join('\n')}
						</SyntaxHighlighter>
					</div>
					<div id="isEmpty">
						<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
							{[
								"/** 判断一个对象是否为空",
							    " * @obj: 待判断的对象;",
							    " * @isExtend: 默认为 true; 扩展判断，true-时，'' 返回 true;",
							    " * @return: 返回：null-true、undefined-true",
							    " */",
								"isEmpty:f_isEmpty(obj, isExtend=true)",
							].join('\n')}
						</SyntaxHighlighter>
					</div>
					<div id="strToObj">
						<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
							{[
								"/** json 字符串转为 json 对象 ",
								" * @str: 需要转的字符串或字符串数组;",
								" * @return: 转成后的json 对象 或对象数组；",
								" */",
								"strToObj:f_strToObj(str)"
							].join('\n')}
						</SyntaxHighlighter>
					</div>
					<div id="objToStr">
						<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
							{[
								"/** json 对象 转为 json 字符串",
								" * @obj: 需要转的 json 对象; ",
								" * @return: 转成后的 json 字符串; ",
								" */",
								"objToStr:f_objToStr(obj)"
							].join('\n')}
						</SyntaxHighlighter>
					</div>
					<div id="redirectUrl">
						<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
							{[
								"/** url 重定向 ",
								" * @location: 请求 location; location.pathname 为请求地址字符串；",
								" * @replace: 跳转函数;",
								" * @redirectUrl: 重定向地址;",
								" * @routesRedirectSwitch: 重定向开关;",
								" * @openRoutes: 开放的 url;",
								" * @noUserRoutes:  不需要用户的 url;",
								" * @return: void ",
								" */",
								"redirectUrl:f_redirectUrl(location, replace, redirectUrl, routesRedirectSwitch, openRoutes, noUserRoutes)	"
							].join('\n')}
						</SyntaxHighlighter>
					</div>
					<div id="makeTree">
						<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
							{[
								"/** 做成树状结构",
								" * @objList: 数据对象数组，对象包含：id, parentId 两个属性；处理完后对象会增加一个 children 属性，无子节点是此属性为空；",
								" * @parentId: 根结点的 id;",
								" * @return: 做成树状结构后的数组 ",
								" */",
								"makeTree:f_makeTree(objList, parentId)"
							].join('\n')}
						</SyntaxHighlighter>
					</div>
					<div id="findTreeParent">
						<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
							{[
								"/** 递归查找 父节点;",
								" * @pObjs: 数据对象数组; 对象包含 id, parentId，children 三个属性；",
								" * @childId: 子节点的 id;",
								" * @return: 查出的所有父节点的数组，数组中包含子节点本身。 ",
								" */",
								"findTreeParent:f_findTreeParent(pObjs, childId)"
							].join('\n')}
						</SyntaxHighlighter>
					</div>
					<div id="getLang">
						<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
							{[
								"/** 国际化转换，将国际化标识转在本项目中对应的格式 ",
								" * @lang: 待转换的标识; ",
								" * @return: 转换后的标识; ",
								" */",
								"getLang:f_getLang(lang)	"
							].join('\n')}
						</SyntaxHighlighter>
					</div>
					<div id="strReplace">
						<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
							{[
								"/** 字符串 按参数名 {argName} 替换成对象的值 ",
								" * @msg: 源字符串; ",
								" * @opt: 替换的参数名与参数值的键值对 object; ",
								" * @return: 替换后的字符串; ",
								" */",
								"strReplace:f_strReplace(msg, opt)"
							].join('\n')}
						</SyntaxHighlighter>
						<InputNumber style={{ width: '200px' }} onChange={(v) => {
							this.setState({ lableValue: zkJsUtils.strReplace(" 将此字符串中参数替换成输入的值：{nb}", { nb: v }) })
						}} />{this.state.lableValue}
						<br /><br />
					</div>
					<div id="getJsonAttr">
						<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
							{[
								"/** 不推荐使用，将会移除此方法；取 json 字符串 或 json 对象中的某个属性 ",
								" * @objStr: 源 json 对象或json 字符串；",
								" * @attrName: 目标属性名；",
								" * @return: 目标属性对应的值；",
								" */",
								"getJsonAttr:f_getJsonAttr(objStr, attrName)	"
							].join('\n')}
						</SyntaxHighlighter>
					</div>
					<div id="sort">
						<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
							{[
								"/** 排序函数 ",
								" * @items：源数据对象数组；",
								" * @flag：排序标识 大于 0 升序， 反之降序；默认大于 0 升序;",
								" * @compareFunc：排序函数，默认按对象的 sort 字段的数字排序，可自定义实现传入；",
								" * @optChildren：是否级联操作排序子点，0-不排序子结点；1-排序子结点；默认为 1;",
								" * @return: 结果数组；",
								" */",
								"sort:f_sort(items, flag=1, compareFunc, optChildren=1)"
							].join('\n')}
						</SyntaxHighlighter>
					</div>
					<div id="clone">
						<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
							{[
								"/** 深度拷贝一个对象或数组 ",
								" * @obj: 源数组或对象；",
								" * @return: 深度拷贝的结果数组或对象；",
								" */",
								"clone:f_clone(obj)"
							].join('\n')}
						</SyntaxHighlighter>
					</div>
					<div id="changeStyleCssVal">
						<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
							{[
								"/** 修改页面中的样式变量值",
							    " * @obj: 变量值映射",
							    " * @keys: 修改的 css 变量名， 不带 '--'",
								" */",
								"changeStyleCssVal: f_changeStyleCssVal(valMap, keys=[])"
							].join('\n')}
						</SyntaxHighlighter>
					</div>
					<div id="assertObjType">
						<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
							{[
								"/** 判断变量的数据类型是否是指定类型 ",
								" * @obj: 变量, 非 Null、Undefined，obj 为 Null、Undefined 是，返回 false;",
								" * @type: js 的数据类型: Number-数字; Date-日期; String-字符串; Boolean-布尔; Function-函数; RegExp-正则表达式; Array-数组; Object-对象; Symbol-",
								" * @return: 结果, true-是; false-不是；",
								" */",
								"assertObjType:f_assertObjType(obj, type)"
							].join('\n')}
						</SyntaxHighlighter>
						{f_assertObjTypeContent()}
					</div>
				</ZKContentFormat>
				<ZKContentFormat title = {`数组对象属性扩展 ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}`} >
					<div id="arrayPrototype" >
						<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
							{[
								"// 查询元素，不存在返回 -1; 存在 返回其位置",
								"Array.prototype.indexOf = function(val) ",
								"// 移除指定元素",
								"Array.prototype.remove = function(val) ",
								"// 替换指定元素",
								"Array.prototype.replace = function(val,sub)",
								"// 统计数据某个值的个数；f_compare 为比较函数，返回0为相等，默认用 == 比较",
								"Array.prototype.countValue = function(val, f_compare) ",
								"// 数组去重，不递归; f_compare 为比较函数，返回0为相等，默认用 == 比较",
								"Array.prototype.removeSameValue = function(f_compare) ",
							].join('\n')}
						</SyntaxHighlighter>
					</div>
				</ZKContentFormat>
				<br />
			</ZKContentFormat>
		)
	}
}

export default injectIntl(CInitJsUtilsDemo);


