/*
* @Author: Vinson
* @Date:   2022-04-17 15:51:01
* @Last Modified by:   Vinson
* @Last Modified time: 2022-04-17 16:56:54
* 
* 
* 
*/


import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import { zkTools, ZKOriginalComponents } from "zkFramework";
const { zkToolsMsg } = zkTools;
const { ZKTree } = ZKOriginalComponents;

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
      <div className={styles.sample_detail_panel}>
        <div className={styles.sample_detail_section}>
          <h2>1、{zkToolsMsg.msgFormatByIntl(intl, 'sample.components.original.tree')}&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}</h2>
          <div>
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
          </div>
            <br /><br />
        </div>
        <div className={styles.sample_detail_section}>
          <h2>2、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')} </h2>
          <div>
            <SyntaxHighlighter language='jsx' style={docco}>
              {[
                "ZKTree 原生态封装组件：暂不做处理；",
                "接受原生属性。",
              ].join('\n')}
            </SyntaxHighlighter>
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
    );
  }

}

export default injectIntl(CInitZKTreeferDemo);



