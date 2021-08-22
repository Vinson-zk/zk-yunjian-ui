/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 12:44:33
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-17 07:33:53
 */

import React from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { docco } from '../../../helper';
import styles from "../../../styles.less";
import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { zkToolsMsg } = zkTools;
const { ZKVersionInfo } = ZKCustomComponents;
const { ZKButton, ZKModal } = ZKOriginalComponents;

/*** 版本信息 ***/
import versionInfo from '../../../../../../package.json';

import zkFrameworkInfo from 'zkFramework/package.json';
import zkPackageInfo from 'zkPackage/package.json';
const dependenceInfos = [zkPackageInfo, zkFrameworkInfo,
  {...zkPackageInfo, detailPanel: (<div>自定义的版本信息明细</div>)}, zkFrameworkInfo, zkPackageInfo, zkFrameworkInfo, zkPackageInfo,
  zkFrameworkInfo, zkPackageInfo, zkFrameworkInfo, zkPackageInfo, zkFrameworkInfo
];

const FInitZKVersionInfoDemo = ({ intl }) => {

  const f_modalVersionInfo = () => {
    ZKModal.info({
      title: zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_version_info'),
      content: <ZKVersionInfo intl={intl} versionInfo={{ ...versionInfo, detailPanel: (<div>自定义的版本信息明细</div>) }} dependenceInfos={dependenceInfos} />,
      className: styles.versionInfo_modal
    });
  }

  return (
    <div className={styles.sample_detail_panel}>
      <div className={styles.sample_detail_section}>
        <h2>1、{zkToolsMsg.msgFormatByIntl(intl, 'sample.components.custom.versionInfo')}&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}</h2>
        <div>
          <ZKVersionInfo intl={intl} versionInfo={versionInfo} dependenceInfos={dependenceInfos} />
          <br />
          <ZKButton onClick={f_modalVersionInfo}>VersionInfo</ZKButton>
        </div>
      </div>
      <div className={styles.sample_detail_section}>
        <h2>2、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')} </h2>
        <div>
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
              <tr><td>intl</td><td>true</td><td>intl react-intl injectIntl 国际化对象;</td><td>PropTypes.object</td><td></td></tr>
              <tr><td>versionInfo</td><td>true</td><td>当前项目的 package.json</td><td>PropTypes.object</td><td></td></tr>
              <tr><td>versionInfo.name</td><td>true</td><td>当前项目的 package.json</td><td>PropTypes.string</td><td></td></tr>
              <tr><td>versionInfo.version</td><td>true</td><td>当前项目的 package.json</td><td>PropTypes.string</td><td></td></tr>
              <tr><td>versionInfo.author</td><td>false</td><td>当前项目的 package.json</td><td>PropTypes.string</td><td></td></tr>
              <tr><td>versionInfo.license</td><td>false</td><td>当前项目的 package.json</td><td>PropTypes.string</td><td></td></tr>
              <tr><td>versionInfo.description</td><td>false</td><td>当前项目的 package.json</td><td>PropTypes.string</td><td></td></tr>
              <tr><td>versionInfo.detailPanel</td><td>false</td><td>版本信息明细，可以外面传入，可以是字符串，dom 节点</td><td>PropTypes.object</td><td>默认组合显示 package.json 中的：author、license、description</td></tr>
              <tr><td>dependenceInfos</td><td>true</td><td>依赖项目的 项目的 package.json 数组; <font color="red">对象内容同 versionInfo </font></td><td>PropTypes.arrayOf(PropTypes.object)</td><td></td></tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.sample_detail_section}>
        <h2>3、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.code')}</h2>
        <div>
          <SyntaxHighlighter language='jsx' style={docco}>
            {[
              "参考框架样例代码:",
            ].join('\n')}
          </SyntaxHighlighter>
        </div>
      </div>
      <br />
    </div>
  )
}

export default injectIntl(FInitZKVersionInfoDemo);
