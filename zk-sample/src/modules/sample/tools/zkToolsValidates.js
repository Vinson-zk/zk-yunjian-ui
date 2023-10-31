/**
 *
 * @Author: Vinson
 * @Date: 2020-08-25 12:01:45
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-12-05 11:46:42
 */

import React from 'react';
import { injectIntl } from 'react-intl';
import { Form, Input, Button, InputNumber } from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';

// import SchemaValidator from 'async-validator';

import { docco } from '../helper';
import styles from "../styles.less";
import { zkTools, ZKOriginalComponents, ZKCustomComponents } from "zkFramework";
const { ZKAnchor } = ZKOriginalComponents;
const { ZKInputJson } = ZKCustomComponents;
const { zkToolsMsg, zkToolsValidates } = zkTools;

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 12 },
    },
};
const FInitForm = ({ intl }) => {

    let [form] = Form.useForm();

    const f_click = e => {
        form.validateFields().then(values => {
            console.log("[^_^:20210307-2046-001] FInitToolsValidatesDemo.Form.values: ", values);
        }).catch(errorInfo => {
            console.log("[^_^:20210307-2046-002] FInitToolsValidatesDemo.Form.errorInfo: ", errorInfo);
        });
    }
    const f_clickErr = e => {
        form.setFields([{ "f-notNull": { "errors": [new Error("测试错误输入不能为空")]}}]);
    }
    return (
        <Form form = {form} {...formItemLayout}>
            <Form.Item name = "f-zkInputJson" label="zkInputJson" rules = {[
                        // zkToolsValidates.notNull(intl, "object"),
                        // {
                        //     type: 'object',
                        //     required: true,
                        //     // defaultField:{ type: 'string', min:2, max: 5, required: false, message:" defaultField " },
                        //     // fields: {
                        //     //     "zh-CN": { type: 'string', min:2, max: 5, required: false, message:" zh error " },
                        //     //     "en-US": { type: 'string', min:2, max: 5, required: false, message:" en error " },
                        //     // },
                        // },
                        // {
                        //     validator: async (rule, value, callback)=>{
                        //         console.log("=== 0-1 ", rule);
                        //         console.log("=== 0-2 ", value);
                                
                        //         try{
                        //             let v = new SchemaValidator({
                        //                 "f-zkInputJson":{
                        //                     type: 'object',
                        //                     required: true,
                        //                     fields: {
                        //                         "zh-CN": { type: 'string', min:2, max: 5, required: true, message:" zh error " },
                        //                         "en-US": { type: 'string', min:2, max: 5, required: true, message:" en error " },
                        //                     },
                        //                     message:"not null"
                        //                 }
                        //             })
                                    
                        //             await v.validate({"f-zkInputJson":value?value:{} }).catch(({ errors, fields })=>{
                        //                 console.log("=== 1 ", errors);
                        //                 console.log("=== 2 ", fields);
                        //                 if(errors){
                        //                     let errMsg = "errMsg: ";
                        //                     for(let err of errors){
                        //                         errMsg += err.field + ": " + err.message + "; "
                        //                     }
                        //                     throw new Error(errMsg);
                        //                 }
                        //             });                                    
                        //             // callback();
                        //         }catch(err){
                        //             // console.error(err);
                        //             // callback(err);
                        //             throw err;
                        //         }
                        //     }
                        // }
                        
                        zkToolsValidates.object(
                            intl, 
                            {"zh-CN":{"name":"中文"}, "en-US":{"name":"English"}}, 
                            // zkToolsValidates.string(intl, 1, 8), 
                            undefined,
                            {
                                "zh-CN":zkToolsValidates.string(intl, 1, 8, true),
                                "en-US":zkToolsValidates.string(intl, 1, 3, true),
                            }
                        ),
                    ]}>
                <ZKInputJson styleType="compact" primaryAttr={"zh-CN"} attrs={{"zh-CN":{"name":"中文"}, "en-US":{"name":"English"}}} />
            </Form.Item>
            <Form.Item name = "f-notNull" label="不能为空" rules = {[zkToolsValidates.notNull(intl)]} >
                <Input placeholder="不能为空" />
            </Form.Item>
            <Form.Item name = 'f-string' label="string" rules = {[zkToolsValidates.string(intl, 2, 8, false)]} >
                <Input placeholder="string" />
            </Form.Item>
            <Form.Item name = 'f-num' label="数字" rules = {[zkToolsValidates.number(intl, 2, 8, false)]} >
                <InputNumber placeholder="数字" />
            </Form.Item>
            <Form.Item name = "f-url" label="url" rules = {[zkToolsValidates.url(intl)]} >
                <Input placeholder="url" />
            </Form.Item>
            <Form.Item name = "f-enum" label="enum" rules = {[zkToolsValidates.enum(intl, ["enum-1", "enum-2"])]} >
                <Input placeholder="enum" />
            </Form.Item>
            <Form.Item name = 'f-email' label="email" rules = {[zkToolsValidates.email(intl)]} >
                <Input placeholder="email" />
            </Form.Item>
            <Form.Item name = 'f-validate' label="自定义较验" rules = {[zkToolsValidates.validator((rule, value) => {
                if (value && value.startsWith("err")) {
                    return " 自定义较验 " + value;
                }
                return null;
            })]} >
                <Input placeholder="自定义较验, 输入 err 开头，引发校验错误" />
            </Form.Item>
            <Form.Item name = 'f-username' label="username" rules = {[zkToolsValidates.username(intl)]} >
                <Input placeholder="username" />
            </Form.Item>
            <Form.Item name = 'f-phone' label="phone" rules = {[zkToolsValidates.phone(intl, false)]} >
                <Input placeholder="phone" />
            </Form.Item>
            <Form.Item>
                <Button onClick={f_click}>Test</Button>&nbsp;&nbsp;
                <Button onClick={f_clickErr}>Test-Err</Button>
            </Form.Item>
        </Form>
    );
}

const FInitToolsValidatesDemo = ({ intl, match }) => {

    return (
        <div className={styles.sample_detail_panel}>
            <div className={styles.sample_detail_top_affix} >
                <ZKAnchor>
                    <ZKAnchor.Link href={`${globalAppConfig.basename}${match.path}/#notNull`} title="notNull" ></ZKAnchor.Link>
                    <ZKAnchor.Link href={`${globalAppConfig.basename}${match.path}/#string`} title="string" ></ZKAnchor.Link>
                    <ZKAnchor.Link href={`${globalAppConfig.basename}${match.path}/#number`} title="number" ></ZKAnchor.Link>
                    <ZKAnchor.Link href={`${globalAppConfig.basename}${match.path}/#integer`} title="integer" ></ZKAnchor.Link>
                    <ZKAnchor.Link href={`${globalAppConfig.basename}${match.path}/#enum`} title="enum" ></ZKAnchor.Link>
                    <ZKAnchor.Link href={`${globalAppConfig.basename}${match.path}/#email`} title="email" ></ZKAnchor.Link>
                    <ZKAnchor.Link href={`${globalAppConfig.basename}${match.path}/#url`} title="url" ></ZKAnchor.Link>
                    <ZKAnchor.Link href={`${globalAppConfig.basename}${match.path}/#pattern`} title="pattern" ></ZKAnchor.Link>
                    <ZKAnchor.Link href={`${globalAppConfig.basename}${match.path}/#validator`} title="validator" ></ZKAnchor.Link>
                    <ZKAnchor.Link href={`${globalAppConfig.basename}${match.path}/#username`} title="username" ></ZKAnchor.Link>
                    <ZKAnchor.Link href={`${globalAppConfig.basename}${match.path}/#phone`} title="phone" ></ZKAnchor.Link>
                </ZKAnchor>
            </div>
            <h1>{zkToolsMsg.msgFormatByIntl(intl, 'sample.general.function')} zkToolsValidates {zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</h1>
            <div className={styles.sample_detail_section}>
                <SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
                    {[
                        "notNull      // 不能为空",
                        "string       // 字符串",
                        "number       // 数字",
                        "integer      // 整数",
                        "enum         // 枚举 enum",
                        "email        // email ",
                        "url          // URL",
                        "pattern      // 正则匹配",
                        "validator    // 自定义校验",
                        "/*** */",
                        "username    // 用户名/登录名",
                        "phone        // 手机号",
                    ].join('\n')}
                </SyntaxHighlighter>
            </div>
            <div className={styles.sample_detail_section}>
                <h2>方法&nbsp;&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</h2>
                <div id="notNull">
                    <SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
                        {[
                            "/** ",
                            " * 不能为空",
                            " * @param {object} intl 国际化语言对象",
                            " * @param {string} type 选传 校验数据类型；默认 string",
                            " * @param {function} transform 选传 校验前转换字段值; 示例：(value)=>{ return value.trim();}",
                            " * @param {string} msg 错误时的消息；不传时使用默认 global.data.validate.not.null 的国际化值",
                            " * @return {object} antd form 字段中 rules 的校验对象；",
                            " */",
                            "notNull: f_notNull(intl, transform, msg) "
                        ].join('\n')}
                    </SyntaxHighlighter>
                </div>
                <div id="string">
                    <SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
                        {[
                            "/**  ",
                            " * 字符串  ",
                            " * @param {object} intl 国际化语言对象  ",
                            " * @param {int} min 字符串最小长度；不传时，不限制；  ",
                            " * @param {int} max 字符串最大长度；不传时，不限制；  ",
                            " * @param {boolean} required 是否必须；默认为 false；  ",
                            " * @param {function} transform 选传 校验前转换字段值; 示例：(value)=>{ return value.trim();}",
                            " * @param {string} msg 错误时的消息；不传时使用默认 global.data.validate.string/.min/.max/.rang 的国际化值  ",
                            " * @return {object} antd form 字段中 rules 的校验对象；  ",
                            " */  ",
                            "string: f_string(intl, min, max, required=false, transform, msg)  ",
                        ].join('\n')}
                    </SyntaxHighlighter>
                </div>
                <div id="number">
                    <SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
                        {[
                            "/**  ",
                            " * 数字  ",
                            " * @param {object} intl 国际化语言对象  ",
                            " * @param {int} min 最小值；不传时，不限制；  ",
                            " * @param {int} max 最大值；不传时，不限制；  ",
                            " * @param {boolean} required 是否必须；默认为 false  ",
                            " * @param {function} transform 选传 校验前转换字段值; 示例：(value)=>{ return value.trim();}",
                            " * @param {string} msg 错误时的消息；不传时使用默认 global.data.validate.number/.min/.max/.rang 的国际化值  ",
                            " * @return {object} antd form 字段中 rules 的校验对象；  ",
                            " */  ",
                            "number: f_number(intl, min, max, required=false, transform, msg)  ",
                        ].join('\n')}
                    </SyntaxHighlighter>
                </div>
                <div id="integer">
                    <SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
                        {[
                            "/**  ",
                            " * 整数  ",
                            " * @param {object} intl 国际化语言对象  ",
                            " * @param {int} min 最小值；不传时，不限制；  ",
                            " * @param {int} max 最大值；不传时，不限制；  ",
                            " * @param {boolean} required 是否必须；默认为 false  ",
                            " * @param {function} transform 选传 校验前转换字段值; 示例：(value)=>{ return value.trim();}",
                            " * @param {string} msg 错误时的消息；不传时使用默认 global.data.validate.integer/.min/.max/.rang 的国际化值  ",
                            " * @return {object} antd form 字段中 rules 的校验对象；  ",
                            " */  ",
                            "integer: f_integer(intl, min, max, required=false, transform, msg)  ",
                        ].join('\n')}
                    </SyntaxHighlighter>
                </div>
                <div id="enum">
                    <SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
                        {[
                            "/**  ",
                            " * 枚举 enum  ",
                            " * @param {object} intl 国际化语言对象  ",
                            " * @param {Array.of(object)} enums 允许的枚举值  ",
                            " * @param {boolean} required 是否必须；默认为 false；  ",
                            " * @param {function} transform 选传 校验前转换字段值; 示例：(value)=>{ return value.trim();}",
                            " * @param {string} msg 错误时的消息；不传时使用默认 global.data.validate.enum 的国际化值  ",
                            " * @return {object} antd form 字段中 rules 的校验对象；  ",
                            " */  ",
                            "enum: f_enum(intl, enums=[], required=false, transform, msg)  ",
                        ].join('\n')}
                    </SyntaxHighlighter>
                </div>
                <div id="email">
                    <SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
                        {[
                            "/**  ",
                            " * 邮箱  ",
                            " * @param {object} intl 国际化语言对象  ",
                            " * @param {boolean} required 是否必须；默认为 false；  ",
                            " * @param {function} transform 选传 校验前转换字段值; 示例：(value)=>{ return value.trim();}",
                            " * @param {string} msg 错误时的消息；不传时使用默认 global.data.validate.email 的国际化值  ",
                            " * @return {object} antd form 字段中 rules 的校验对象；  ",
                            " */  ",
                            "email: f_email(intl, required=false, transform, msg)  ",
                        ].join('\n')}
                    </SyntaxHighlighter>
                </div>
                <div id="url">
                    <SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
                        {[
                            "/**  ",
                            " * URL  ",
                            " * @param {object} intl 国际化语言对象  ",
                            " * @param {boolean} required 是否必须；默认为 false；  ",
                            " * @param {function} transform 选传 校验前转换字段值; 示例：(value)=>{ return value.trim();}",
                            " * @param {string} msg 错误时的消息；不传时使用默认 global.data.validate.url 的国际化值  ",
                            " * @return {object} antd form 字段中 rules 的校验对象；  ",
                            " */  ",
                            "url: f_url(intl, required=false, transform, msg)  ",
                        ].join('\n')}
                    </SyntaxHighlighter>
                </div>
                <div id="pattern">
                    <SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
                        {[
                            "/**  ",
                            " * 正则匹配  ",
                            " * @param {object} intl 国际化语言对象  ",
                            " * @param {string} pattern 正则表达式；",
                            " * @param {boolean} required 是否必须；默认为 false；  ",
                            " * @param {function} transform 选传 校验前转换字段值; 示例：(value)=>{ return value.trim();}",
                            " * @param {string} msg 错误时的消息；不传时使用默认 global.data.validate.pattern 的国际化值  ",
                            " * @return {object} antd form 字段中 rules 的校验对象；  ",
                            " */  ",
                            "pattern: f_pattern(intl, pattern, required=false, transform, msg)  ",
                        ].join('\n')}
                    </SyntaxHighlighter>
                </div>
                <div id="validator">
                    <SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
                        {[
                            "/**  ",
                            " * 自定义校验  ",
                            " * @param {function}} f_validator(rule, value) 自定义校验函数；返回错误消息，未返回错误消息时，认为无错误；  ",
                            " * @return {object} antd form 字段中 rules 的校验对象；  ",
                            " */  ",
                            "validator: f_validator(f_validator)  ",
                        ].join('\n')}
                    </SyntaxHighlighter>
                </div>
                <div id="username">
                    <SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
                        {[
                            "/**  ",
                            " * 用户名/登录名  ",
                            " * @param {object} intl 国际化语言对象  ",
                            " * @param {boolean} required 是否必须；默认为 false；  ",
                            " * @param {function} transform 选传 校验前转换字段值; 示例：(value)=>{ return value.trim();}",
                            " * @param {string} msg 错误时的消息；不传时使用默认 global.data.validate.username 的国际化值  ",
                            " * @return {object} antd form 字段中 rules 的校验对象；  ",
                            " */  ",
                            "username: f_username(intl, required=false, transform, msg)  ",
                        ].join('\n')}
                    </SyntaxHighlighter>
                </div>
                <div id="phone">
                    <SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
                        {[
                            "/**  ",
                            " * 手机/电话  ",
                            " * @param {object} intl 国际化语言对象  ",
                            " * @param {boolean} required 是否必须；默认为 false；  ",
                            " * @param {function} transform 选传 校验前转换字段值; 示例：(value)=>{ return value.trim();}",
                            " * @param {string} msg 错误时的消息；不传时使用默认 global.data.validate.phone 的国际化值  ",
                            " * @return {object} antd form 字段中 rules 的校验对象；  ",
                            " */  ",
                            "phone: f_phone(intl, required=false, transform, msg)  ",
                        ].join('\n')}
                    </SyntaxHighlighter>
                </div>
            </div>
            <div className={styles.sample_detail_section}>
                <h2>3、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}</h2>
				<div>
					<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
						{[
							"查看《antd Form 校验示例》源码",
						].join('\n')}
					</SyntaxHighlighter>
				</div>
                <h2><font color="red">*</font> antd Form 校验示例</h2>
                <FInitForm intl={intl} />
            </div>
        </div>
    )
}

export default injectIntl(FInitToolsValidatesDemo);
