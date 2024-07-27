/*
* @Author: Vinson
* @Date:   2022-04-28 17:25:58
* @Last Modified by: runoob
* @Last Modified time: 2023-09-24 14:01:36
* 
* 
* 
*/

import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKContentFormat } = ZKCustomComponents;
const { ZKTreeSelect } = ZKOriginalComponents;
const { zkToolsMsg } = zkTools;

class CInitZKTreeSelectferDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
    // props.dispatch({type: 'xxx/xxx', payload:{}})
  }

  render() {
    let { intl } = this.props;

    const treeData = [{
      key: '0-0',
      value: '0-0',
	    title: 'parent 1',
      checkable: true,
	    children: [
	      {
          key: '0-0-0',
          value: '0-0-0',
	        title: 'parent 1-0',
          selectable: true,
          checkable: true,
	        disabled: true,
	        children: [
	          {
              key: '0-0-0-0',
              value: '0-0-0-0',
	            title: 'leaf',
	            disableCheckbox: true,
	          },
	          {
              key: '0-0-0-1',
              value: '0-0-0-1',
	            title: 'leaf',
	          },
	        ],
	      },
	      {
          key: '0-0-1',
          value: '0-0-1',
	        title: 'parent 1-1',
          selectable: true,
          checkable: true,
	        children: [{ key: '0-0-1-0', value: '0-0-1-0', title: <span style={{ color: '#1890ff' }}>sss</span> }],
	      },
	    ],
	  },];

    const onSelect = (selectedKeys, info) => {
      console.log('[^_^:20220417-1621-001] selected', selectedKeys, info);
    };

    return (
      <ZKContentFormat className={styles.sample_detail_panel} >
        <ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'sample.components.original.treeSelect')} ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}`}>
          <ZKTreeSelect
            treeCheckable={true}
            treeDefaultExpandedKeys={['0-0-0', '0-0-1']}
            onSelect={onSelect}
            treeData={treeData}
            dropdownStyle={{
              width: 400,
              height: 450,
              textAlign: "left"
            }}
          />
          <br /><br />
        </ZKContentFormat>
        <ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}`} >
          <SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
            {[
              "ZKTreeSelect 原生态封装组件：暂不做处理；",
              "接受原生属性。",
            ].join('\n')}
          </SyntaxHighlighter>
        </ZKContentFormat>
        <ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}`}>
          <SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
            {[
              "参考框架样例代码",
            ].join('\n')}
          </SyntaxHighlighter>
        </ZKContentFormat>
        <br />
      </ZKContentFormat>
    );
  }

}

export default injectIntl(CInitZKTreeSelectferDemo);



