/*
* @Author: Vinson
* @Date:   2022-04-17 15:51:01
* @Last Modified by: runoob
* @Last Modified time: 2023-09-24 01:18:08
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
const { ZKTree } = ZKOriginalComponents;
const { zkToolsMsg } = zkTools;

class CInitZKTreeferDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
    // props.dispatch({type: 'xxx/xxx', payload:{}})
  }

  render() {
    let { intl } = this.props;

    const treeData = [{
	    title: 'parent 1',
	    key: '0-0',
	    children: [
	      {
	        title: 'parent 1-0',
	        key: '0-0-0',
	        disabled: true,
	        children: [
	          {
	            title: 'leaf',
	            key: '0-0-0-0',
	            disableCheckbox: true,
	          },
	          {
	            title: 'leaf',
	            key: '0-0-0-1',
	          },
	        ],
	      },
	      {
	        title: 'parent 1-1',
	        key: '0-0-1',
	        children: [{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-1-0' }],
	      },
	    ],
	},];

    const onSelect = (selectedKeys, info) => {
	    console.log('[^_^:20220417-1621-001] selected', selectedKeys, info);
	};

	const onCheck = (checkedKeys, info) => {
	    console.log('[^_^:20220417-1621-001] onCheck', checkedKeys, info);
	};

    return (
      <ZKContentFormat className={styles.sample_detail_panel} >
        <ZKContentFormat title = {`${zkToolsMsg.msgFormatByIntl(intl, 'sample.components.original.tree')} ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}`}>
          <ZKTree
            checkable
            defaultExpandedKeys={['0-0-0', '0-0-1']}
            defaultSelectedKeys={['0-0-0', '0-0-1']}
            defaultCheckedKeys={['0-0-0', '0-0-1']}
            onSelect={onSelect}
            onCheck={onCheck}
            treeData={treeData}
            listStyle={{
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
                "ZKTree 原生态封装组件：暂不做处理；",
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

export default injectIntl(CInitZKTreeferDemo);



