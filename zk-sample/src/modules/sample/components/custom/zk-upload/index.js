/**
 *
 * @Author: Vinson
 * @Date: 2020-08-16 08:59:26
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-09 10:30:23
 */

import React from 'react';
import { injectIntl } from 'react-intl';
import { PlusOutlined } from '@ant-design/icons';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import { zkTools, ZKCustomComponents } from "zkFramework";
const { zkToolsMsg } = zkTools;
const { ZKUpload } = ZKCustomComponents;

const FInitZKUploadDemo = ({ intl }) => {

  const props1 = {
    name: "file", // action: '//jsonplaceholder.typicode.com/posts/',
    action: "/api/file/uploadImg",
    headers: { authorization: "authorization-text" },
    crop: {
      aspect: 1 / 1, //  长宽比
      minWidth: 200, //  最小截取宽度,默认100
      minHeight: 200 //  最小截取高度,默认100
    },
    limits: [
      { type: "image/png,image/jpeg", message: "不是PNG" }, //  支持的文件类型
      { size: 1024 * 3, message: "超过3M" }, // 最大允许上传文件大小
      {
        condition: file => {
          return file.name.length > 12; //  上传文件名长度超过12字节
        },
        message: "来自自定义规则的消息，文件名长度超过12字节"
      }
    ],
    listType: "picture-card",
    defaultFileList: [
      {url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}
    ],
    fileMaxNum: { amount: 2, hidden: true }, // 最大允许上传文件个数,当达后隐藏上传按键
    onChange: ({ file, fileList }) => {
      console.log("[^_^:20200817-0934-001] FInitZKUploadDemo: ", file, fileList);
      // fileList=fileList.map(file=>{
      //   if(file.response){
      //     file.url = `/api/file/getImg?name=${file.response.data[0]}`
      //   }
      //   return file
      // })
    }
  };

  return (
    <div className={styles.sample_detail_panel}>
      <div className={styles.sample_detail_section}>
        <h2>1、{zkToolsMsg.msgFormatByIntl(intl, 'sample.components.custom.upload')}&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}</h2>
        <div>
          <ZKUpload {...props1}>
            <div>
              <PlusOutlined />
              <div className="ant-upload-text">Upload</div>
            </div>
          </ZKUpload>
        </div>
      </div>
      <div className={styles.sample_detail_section}>
        <h2>2、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</h2>
        <div>
          ZKUpload 参数：
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
                <td>crop</td><td>false</td><td>图片裁剪配置参数，如不设置,默认不支持裁剪，详细配置查看 Crop 参数</td><td>Boolean | Object</td><td>false</td>
              </tr>
              <tr>
                <td>limits</td><td>false</td><td>上传文件的限制条件,只有满足所有规则文件才能进入上传阶段,具体规则写法请看限制条件参数</td><td>Object[]</td><td>无</td>
              </tr>
              <tr>
                <td>fileMaxNum</td><td>false</td><td>最大允许上传文件个数,当达后隐藏上传按键</td><td>Object</td><td>无</td>
              </tr>
            </tbody>
          </table>
          <div style={{ color: "red" }}>
            注：其它更多参数请查看{" "}
            <a href="https://ant.design/components/upload-cn/" target="_blank" rel="noopener noreferrer" >antd Upload 文档</a>
          </div>
        </div>
        <br />
        <div>
          Crop 参数：
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
                <td>aspect</td><td>false</td><td>接收一个数值用来表示图片的长宽比，支持计算，如16/9,如不设置将支持任意比例</td><td>Number</td><td>无</td>
              </tr>
              <tr>
                <td>minWidth</td><td>false</td><td>接收一个数值用来表示允许裁剪的最小宽度，单位为px，如不设置默认为100px</td><td>Number</td><td>100</td>
              </tr>
              <tr>
                <td>minHeight</td><td>false</td><td>接收一个数值用来表示允许裁剪的最小高度，单位为px，如不设置默认为100px</td><td>Number</td><td>100</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <div>
          限制条件参数：
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
                <td>type(内建限制条件)</td><td>false</td><td>接收一个字符串参数来表示允许上传的文件类型，多种文件类型用,号分隔</td><td>String</td><td>无</td>
              </tr>
              <tr>
                <td>size(内建限制条件)</td><td>false</td><td>接收一个数值用来表示允许上传的文件的最大尺寸，单位为k</td><td>Number</td><td>无</td>
              </tr>
              <tr>
                <td>amount(内建限制条件)</td><td>false</td><td>接收一个数值用来表示允许上传的文件个数</td><td>Number</td><td>无</td>
              </tr>
              <tr>
                <td>hidden(内建限制条件，配合amount使用)</td><td>false</td><td>接收一个布尔值用来表示，当达到允许上传的文件个数后是否隐藏上传按键</td><td>Boolean</td><td>false</td>
              </tr>
              <tr>
                <td>message</td><td>false</td><td>接收一个字符串，用来作为不通过限制条件时的错误提示</td><td>String</td><td>无</td>
              </tr>
              <tr>
                <td>condition(自定义限制条件)</td><td>false</td><td>接收一个函数,该函数返回true时表示触发限制条件。</td><td>function(file,fileList)</td><td>无</td>
              </tr>
            </tbody>
          </table>
        </div>
        <br />
        <div>
          fileMaxNum参数：
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
                <td>amount</td><td>false</td><td>最大允许上传文件个数</td><td>number</td><td>1</td>
              </tr>
              <tr>
                <td>hidden</td><td>false</td><td>当达后隐藏上传按键</td><td>boolean</td><td>false</td>
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
              "参考框架样例代码",
            ].join('\n')}
          </SyntaxHighlighter>
        </div>
      </div>
      <br />
    </div>
  )
}

export default injectIntl(FInitZKUploadDemo);
