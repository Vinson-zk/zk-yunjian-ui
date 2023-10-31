/**
 *
 * @Author: Vinson
 * @Date: 2020-08-16 08:57:56
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-12-05 11:46:44
 */

import React from 'react';
import { injectIntl } from 'react-intl';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { Button } from "antd";

import zkJsUtils from "zkJsUtils";
import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { zkToolsMsg } = zkTools;
const { ZKPermission, ZKOptRow } = ZKCustomComponents;
const { ZKPopconfirm } = ZKOriginalComponents;

import { docco } from '../../../helper';
import stylesSample from "../../../styles.less";
import styles from './styles.less';

const FInitZKPermissionDemo = ({ intl }) => {

  let userInfo = { permissions: ['p1', 'p2', 'p4:p5'], roles: ["r1", "r2"] };

  const f_getTestPSChilds = () => {
    let psChilds = [];
    let keyIndex = 1;
    psChilds.push("f-01、不显示有意味有 BUG 无权限设置：");
    psChilds.push(<Button key={"b-1-" + keyIndex}>显示按钮</Button>);

    ++keyIndex;
    psChilds.push(<br key={"br-1-" + keyIndex} />);
    psChilds.push("f-02、不显示有意味有 BUG 【r1】：");
    psChilds.push(<Button key={"b-" + keyIndex} role="r1">r1，显示按钮</Button>);

    ++keyIndex;
    psChilds.push(<br key={"br-1-" + keyIndex} />);
    psChilds.push("f-03、不显示有意味有 BUG 【p4:p5】：");
    psChilds.push(<Button key={"b-" + keyIndex} permission="p4:p5">p4:p5，显示按钮</Button>);

    ++keyIndex;
    psChilds.push(<br key={"br-1-" + keyIndex} />);
    psChilds.push("f-04、不显示有意味有 BUG 【r2，p1】：");
    psChilds.push(<Button key={"b-" + keyIndex} role="r2" permission="p1">r2 p1，显示按钮</Button>);

    ++keyIndex;
    psChilds.push(<br key={"br-1-" + keyIndex} />);
    psChilds.push("f-05、不显示有意味有 BUG 【r3，p2】：");
    psChilds.push(<Button key={"b-" + keyIndex} role="r3" permission="p2">r3 p2，显示按钮</Button>);

    ++keyIndex;
    psChilds.push(<br key={"br-1-" + keyIndex} />);
    psChilds.push("f-06、不显示有意味有 BUG 【r2，p6】：");
    psChilds.push(<Button key={"b-" + keyIndex} role="r2" permission="p6">r2 p6，显示按钮</Button>);

    ++keyIndex;
    psChilds.push(<br key={"br-1-" + keyIndex} />);
    psChilds.push("f-07、显示有意味有 BUG 【r3】：");
    psChilds.push(<Button key={"b-" + keyIndex} role="r3" >r3，显示就意味存在 BUG</Button>);

    ++keyIndex;
    psChilds.push(<br key={"br-1-" + keyIndex} />);
    psChilds.push("f-08、显示有意味有 BUG 【p6】：");
    psChilds.push(<Button key={"b-" + keyIndex} permission="p6">p6，显示就意味存在 BUG</Button>);

    ++keyIndex;
    psChilds.push(<br key={"br-1-" + keyIndex} />);
    psChilds.push("f-09、显示有意味有 BUG 【r3，p6】：");
    psChilds.push(<Button key={"b-" + keyIndex} role="r3" permission="p6">r3 p6，显示就意味存在 BUG</Button>);
    return psChilds;
  }

  return (
    <div className={stylesSample.sample_detail_panel}>
      <div className={stylesSample.sample_detail_section}>
        <h2>1、{zkToolsMsg.msgFormatByIntl(intl, 'sample.components.custom.permission')}&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.demo')}</h2>
        <div><font color="red">ZKPermission 还未完样例；</font>
          <div>
            <div className={styles.permission_div} >
              <ZKPermission {...userInfo}  >
                无子组件；拥有权限:  {zkJsUtils.objToStr(userInfo)}
              </ZKPermission>
              <br />
              <ZKPermission {...userInfo}  >
                <font className={styles.permission_font} >无子组件；拥有权限:  {zkJsUtils.objToStr(userInfo)}</font>
              </ZKPermission>
            </div>
            <div className={styles.permission_div} >
              <ZKPermission {...userInfo} >
                <font className={styles.permission_font} >拥有权限:  {zkJsUtils.objToStr(userInfo)}</font>
                <br />
			        		原生-01、不显示有意味有 BUG 无权限设置：
									<Button >显示按钮</Button>
                <br />
									原生-02、不显示有意味有 BUG 【r1】：
									<Button role="r1">r1，显示按钮</Button>
                <br />
									原生-03、不显示有意味有 BUG 【p4:p5】：
									<Button permission="p4:p5">p4:p5，显示按钮</Button>
                <br />
									原生-04、不显示有意味有 BUG 【r2，p1】：
									<Button role="r2" permission="p1">r2 p1，显示按钮</Button>
                <br />
									原生-05、不显示有意味有 BUG 【r3，p2】：
									<Button role="r3" permission="p2">r3 p2，显示按钮</Button>
                <br />
									原生-06、不显示有意味有 BUG 【r2，p6】：
									<Button role="r2" permission="p6">r2 p6，显示按钮</Button>
                <br />
									原生-07、显示有意味有 BUG 【r3】：
									<Button role="r3" >r3，显示就意味存在 BUG</Button>
                <br />
									原生-08、显示有意味有 BUG 【p6】：
									<Button permission="p6">p6，显示就意味存在 BUG</Button>
                <br />
									原生-09、显示有意味有 BUG 【r3，p6】：
									<Button role="r3" permission="p6">r3 p6，显示就意味存在 BUG</Button>
              </ZKPermission>
            </div>
            <div className={styles.permission_div} >
              <ZKPermission {...userInfo} >
                <font className={styles.permission_font} >一些一级权限按钮; 拥有权限:  {zkJsUtils.objToStr(userInfo)}</font>
                <br />
                {f_getTestPSChilds()}
              </ZKPermission>
            </div>
            <div className={styles.permission_div} >
              <ZKPermission {...userInfo} >
                <font className={styles.permission_font} >一些多级子组件权限按钮; 拥有权限:  {zkJsUtils.objToStr(userInfo)}
                  <br />一级子组件权限按钮
			        				</font>
                <br />
                {f_getTestPSChilds()}
                <div className={styles.permission_div} >
                  <font className={styles.permission_font} >二级子组件权限按钮</font>
                  <br />
                  {f_getTestPSChilds()}
                  <div className={styles.permission_div} >
                    <font className={styles.permission_font} >三级子组件权限按钮</font>
                    <br />
                    {f_getTestPSChilds()}
                  </div>
                </div>
              </ZKPermission>
            </div>

            <div className={styles.permission_div} >
              <ZKPermission permissions={['edit', 'delete']} >
                <font className={styles.permission_font} >
                  操作行，有 修改 删除 权限，无 测试1 的权限
			        				</font>
                <br />
                <ZKOptRow >
                  <ZKOptRow.OptGroup isAutoPurseUp={true}>
                    <ZKOptRow.OptGroup.OptItem permission={['edit']} icon="edit" children="g0-修改" onClick={(e) => { console.log('----- g0-修改 ', e) }} />
                    <ZKOptRow.OptGroup.OptItem permission={['test']} icon="tags" children="g0-测试" onClick={(e) => { console.log('----- g0-测试 ', e) }} />
                    <ZKPopconfirm type="delete" >
                      <ZKOptRow.OptGroup.OptItem permission={['delete']} icon="dete" children="g0-删除" onClick={(e) => { console.log('----- g0-删除', e) }} />
                    </ZKPopconfirm>
                  </ZKOptRow.OptGroup>

                  <ZKOptRow.OptGroup.OptItem permission={['edit']} icon="edit" children="g1-修改" onClick={(e) => { console.log('----- g1-修改 ', e) }} />

                  <ZKOptRow.OptGroup.OptItem permission={['test']} icon="tags" children="g1-测试" onClick={(e) => { console.log('----- g1-测试 ', e) }} />

                  <ZKPopconfirm type="delete" >
                    <ZKOptRow.OptGroup.OptItem permission={['delete']} icon="dete" children="g1-删除" onClick={(e) => { console.log('----- g1-删除', e) }} />
                  </ZKPopconfirm>

                  <ZKOptRow.OptGroup isAutoPurseUp={false}>
                    <ZKOptRow.OptGroup.OptItem permission={['edit']} icon="edit" children="g3-修改" onClick={(e) => { console.log('----- g3-修改 ', e) }} />
                    <ZKOptRow.OptGroup.OptItem permission={['test']} icon="tags" children="g3-测试" onClick={(e) => { console.log('----- g3-测试 ', e) }} />
                    <ZKPopconfirm type="delete" >
                      <ZKOptRow.OptGroup.OptItem permission={['delete']} icon="dete" children="g3-删除" onClick={(e) => { console.log('----- g3-删除', e) }} />
                    </ZKPopconfirm>
                  </ZKOptRow.OptGroup>

                </ZKOptRow>
              </ZKPermission>
            </div>
            <br />
          </div>
        </div>
      </div>
      <div className={stylesSample.sample_detail_section}>
        <h2>2、{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')} </h2>
        <div>
          ZKPermission, 权限判断组件;
				          	<SyntaxHighlighter language='jsx' style={docco} className={`${styles.zk_SyntaxHighlighter}`}>
            {[
              "递归判断子节点的权限",
              "1、先判断子组件是否需要角色或权限；如果都不需要，显示子节点;",
              "2、先判断子组件是否有需要的 角色或权限，两都满足其一即显示子节点; 都不满足不显示子节点;",
              "3、递归判断子节点的权限；",
            ].join('\n')
            }
          </SyntaxHighlighter>
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
                <td>roles</td>
                <td>false</td>
                <td>用户信息，角色代码字符串数组；表示当前拥有哪些角色代码；示例: ["r1", "r2"]</td>
                <td>PropTypes.arrayOf(PropTypes.string)</td>
                <td>[]</td>
              </tr>
              <tr>
                <td>permissions</td>
                <td>false</td>
                <td>用户信息，权限代码字符串数组；表示当前拥有哪些权限代码；示例: ['p1', 'p2', 'p4:p5']</td>
                <td>PropTypes.arrayOf(PropTypes.string)</td>
                <td>[]</td>
              </tr>
              <tr>
                <td>children</td>
                <td>true</td>
                <td>子节点，子节点 item 包含一个 permission 和 role 属性；表示：此组件需求什么权限代码或角色代码；这俩属性经权限判断组件 ZKPermission 处理后，不会下传给 item；且，些两者只有符合其一则视为有权限；</td>
                <td>PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired</td>
                <td>无</td>
              </tr>
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

export default injectIntl(FInitZKPermissionDemo);
