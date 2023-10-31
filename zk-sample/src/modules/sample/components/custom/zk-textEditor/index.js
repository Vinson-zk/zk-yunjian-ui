/**
 *
 * @Author: Vinson
 * @Date: 2020-08-16 08:59:04
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-12-05 11:46:44
 */

import React from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import { zkTools, ZKCustomComponents } from "zkFramework";
const { zkToolsMsg } = zkTools;
const { ZKTextEditor } = ZKCustomComponents;

class CInitZKTextEditorDemo extends React.Component {

  constructor(props) {
		super(props)
		// this.state = {};
	}


  handleUpload = (param)=>{
    const serverURL = "/api/file/uploadImg";
    const xhr = new XMLHttpRequest();
    const fd = new FormData();

    const successFn = () => {
      const res = JSON.parse(xhr.responseText);
      param.success({
        url: `/api/file/getImg?name=${res.data[0]}`
      });
    };

    const progressFn = event => {
      // 上传进度发生变化时调用param.progress
      param.progress((event.loaded / event.total) * 100);
    };

    const errorFn = () => {
      // 上传发生错误时调用param.error
      param.error({
        msg: "unable to upload."
      });
    };

    xhr.upload.addEventListener("progress", progressFn, false);
    xhr.addEventListener("load", successFn, false);
    xhr.addEventListener("error", errorFn, false);
    xhr.addEventListener("abort", errorFn, false);

    fd.append("file", param.file);
    xhr.open("POST", serverURL, true);
    xhr.send(fd);
  };

  render() {
    let { intl } = this.props;

    const editorProps = {
      defaultValue: '<p>Hello World<p>',
      defaultMediaItems: [
        {
          type: "IMAGE",
          url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        }
      ],
      onChange: editorState => {
        console.log(editorState.toHTML())
      },
      contentStyle: {
        height: '6em'
      }
    }

    return (
      <div className={styles.sample_detail_panel}>
        <div className={styles.sample_detail_section}>
          <h2>1、{zkToolsMsg.msgFormatByIntl(intl, 'sample.components.custom.textEditor')}&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}</h2>
          <div className="clearfix">
            {/* <font color="red">ZKTextEditor 还未完样例；</font> */}
            <ZKTextEditor {...editorProps} />
          </div>
        </div>
        <div className={styles.sample_detail_section}>
          <h2>2、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</h2>
          <div>
            ZKTextEditor 参数：
            <br />
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
                  <td>onChange</td><td>false</td><td>编辑器内容发生变化的回调,返回一个editorState对象</td><td>function(editorState)</td><td>false</td>
                </tr>
                <tr>
                  <td>onUpload</td><td>false</td><td>自定义媒体库上传函数,如不定义，默认上传到'/api/file/uploadImg',且只支持图片格式</td><td>function(param)</td><td>无</td>
                </tr>
                <tr>
                  <td>debounce</td><td>false</td><td>onChange函数防抖，单位ms</td><td>Number</td><td>1000</td>
                </tr>
                <tr>
                  <td>defaultValue</td><td>false</td><td>初始内容。</td><td>string||editorState</td><td>无</td>
                </tr>
                <tr>
                  <td>defaultMediaItems</td><td>false</td><td>媒体库初始内容</td><td>mediaItem[]</td><td>无</td>
                </tr>
                <tr>
                  <td>value</td><td>false</td><td>编辑器内容</td><td>string||editorState</td><td>无</td>
                </tr>
              </tbody>
            </table>
            <div style={{ color: "red" }}>
              注：其它更多参数请查看&nbsp;
              <a href="https://www.yuque.com/braft-editor/be/gz44tn" target="_blank" rel="noopener noreferrer">braft-editor 文档</a>
            </div>
            <br />
            editorState 对象方法：
            <br />
            <table className={styles.sample_detail_section_table}>
              <thead>
                <tr>
                  <th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.param')}</th>
                  <th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>toHTML()</td><td>输出HTML字符串</td>
                </tr>
                <tr>
                  <td>toRAW()</td><td>输出一个RAW对象的json字符串,RAW对象是表达富文本数据的一种结构</td>
                </tr>
                <tr>
                  <td>toText()</td><td>输出一个纯文本字符串,丢失所有格式和媒体</td>
                </tr>
              </tbody>
            </table>
            <br />
            mediaItem 对象的属性：
            <br />
            <table className={styles.sample_detail_section_table}>
              <thead>
                <tr>
                  <th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.param')}</th>
                  <th>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>url</td><td>媒体内容的地址</td>
                </tr>
                {/*<tr>
                    <td>type</td>
                    <td>媒体对象的类型（'IMAGE' || 'VEDIO' || 'AUDIO'）</td>
                </tr>*/}
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.sample_detail_section}>
          <h2>3、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}</h2>
          <div>
            <SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
              {[
                "参考框架样例代码",
              ].join('\n')}
            </SyntaxHighlighter>
          </div>
        </div>
        <br />
      </div>
    )
  }
}

export default injectIntl(CInitZKTextEditorDemo);
