/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 17:34:12
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-17 07:51:29
 */

import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import { zkTools, ZKOriginalComponents } from "zkFramework";
const { zkToolsMsg } = zkTools;
const { ZKTransfer } = ZKOriginalComponents;

class CInitZKTransferDemo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      targetKeys: [],
      selectedKeys: [],
      disabled: false,
    }
    // props.dispatch({type: 'xxx/xxx', payload:{}})
  }

  componentDidMount() {
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      mockData.push({
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        disabled: i % 3 < 1,
      });
    }

    const oriTargetKeys = mockData
      .filter(item => +item.key % 3 > 1)
      .map(item => item.key);
    this.setState({ selectedKeys: oriTargetKeys, targetKeys: mockData })
  }

  static getDerivedStateFromProps(props, state) {
    // TODO props.dispatch({type: 'xxx/xxx', payload:{}})
    return true;
  }

  render() {
    let { intl } = this.props;

    const locale = {
      notFoundContent: zkToolsMsg.msgFormatByIntl(intl, "global.message.no.select.data"),
      searchPlaceholder: zkToolsMsg.msgFormatByIntl(intl, "global.opt.name._key_search")
    }

    // 穿梭框的onChange
    const handleChange = targetKeys => {
      this.setState({ selectedKeys: targetKeys });
    };

    return (
      <div className={styles.sample_detail_panel}>
        <div className={styles.sample_detail_section}>
          <h2>1、{zkToolsMsg.msgFormatByIntl(intl, 'sample.components.original.transfer')}&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}</h2>
          <div>
            <ZKTransfer
              name="www"
              dataSource={this.state.targetKeys}
              showSearch
              listStyle={{
                width: 400,
                height: 450,
                textAlign: "left"
              }}
              // searchPlaceholder={ zkToolsMsg.msgFormatByIntl(intl, "ad.tag.search" )}  早期版本使用
              titles={['Source', 'Target']}
              targetKeys={this.state.selectedKeys}
              render={item => item && item.title}
              onChange={handleChange}
              locale={locale}
            // notFoundContent={intl.formatMessage({
            //     id: "transfer.notFoundContent"
            // })}  早期版本使用
            >
            </ZKTransfer>
          </div>
        </div>
        <div className={styles.sample_detail_section}>
          <h2>2、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')} </h2>
          <div>
            <SyntaxHighlighter language='jsx' style={docco}>
              {[
                "ZKTransfer 原生态封装组件：暂不做处理",
                "接受原生属性。"
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

export default injectIntl(CInitZKTransferDemo);


