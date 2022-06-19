/**
 *
 * @Author: 
 * @Date: 
 * @Last 
 * @Last 
 */
import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'dva';
import { Icon } from "antd";

import locales from "../../../locales/index";
import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKSpin, ZKInput, ZKSelect, ZKInputNumber, ZKRadio, ZKModal } = ZKOriginalComponents;
const { ZKDetailGrid, ZKEditForm, ZKInputJson, ZKIcon } = ZKCustomComponents;

const { zkToolsMsg, zkToolsNavAndMenu } = zkTools;

class CInitSysOrgUserDetail extends Component {

  // 1、构造函数
  constructor(props) {
    super(props);
    this.state = {};
  }

  // 2、调用render方法之前调用，无论是在初始安装还是后续更新。它应该返回一个更新状态的对象，或者返回null以不更新任何状态。
  // static getDerivedStateFromProps(props, state) {
  //   return true;
  // }

  // 3、更新时调用，此方法仅作为性能优化存在。不要依赖它来“防止”渲染
  // shouldComponentUpdate(nextProps, nextState){
  //   console.log("[^_^:20181207-1800-002] CInitE1_Detail -> shouldComponentUpdate ", 
  //     (this.props.location == nextProps.location)) 
  //   return true;
  // }

  /** 返回 JSX 元素 */
  render() {

    let { location, mApp, mSysOrgUser, intl, loading } = this.props;
    let { optEntity } = mSysOrgUser;
    let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();

    let spinning = loading.effects['mSysOrgUser/getSysOrgUser'];

    return (optEntity != undefined && mSysOrgUser.pathname == location.pathname) && (
      <ZKSpin spinning={spinning === true} >
        <ZKDetailGrid >
          <ZKDetailGrid.Row>
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.groupCode')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              {optEntity.groupCode}
            </ZKDetailGrid.ColValue> 
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.companyId')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              {optEntity.companyId}
            </ZKDetailGrid.ColValue>
          </ZKDetailGrid.Row>
          <ZKDetailGrid.Row>
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.companyCode')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              {optEntity.companyCode==1?zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.yes'):zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.no')}
            </ZKDetailGrid.ColValue> 
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.userTypeId')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              {optEntity.userTypeId}
            </ZKDetailGrid.ColValue>
          </ZKDetailGrid.Row>
          <ZKDetailGrid.Row>
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.userTypeCode')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              {optEntity.userTypeCode}
            </ZKDetailGrid.ColValue> 
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.rankId')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              {optEntity.rankId}
            </ZKDetailGrid.ColValue>
          </ZKDetailGrid.Row>
          <ZKDetailGrid.Row>
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.rankCode')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              {optEntity.rankCode}
            </ZKDetailGrid.ColValue> 
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.deptId')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              {optEntity.deptId}
            </ZKDetailGrid.ColValue>
          </ZKDetailGrid.Row>
          <ZKDetailGrid.Row>
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.deptCode')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              {optEntity.deptCode}
            </ZKDetailGrid.ColValue> 
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.account')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              {optEntity.account}
            </ZKDetailGrid.ColValue>
          </ZKDetailGrid.Row>
          <ZKDetailGrid.Row>
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.password')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              {optEntity.password}
            </ZKDetailGrid.ColValue> 
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.pwdStatus')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              {optEntity.pwdStatus==1?zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.yes'):zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.no')}
            </ZKDetailGrid.ColValue>
          </ZKDetailGrid.Row>
          <ZKDetailGrid.Row>
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.pwdLastUpdateDate')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              {optEntity.pwdLastUpdateDate}
            </ZKDetailGrid.ColValue> 
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.status')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              {optEntity.status==1?zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.yes'):zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.no')}
            </ZKDetailGrid.ColValue>
          </ZKDetailGrid.Row>
          <ZKDetailGrid.Row>
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.familyName')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              {optEntity.familyName}
            </ZKDetailGrid.ColValue> 
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.secondName')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              {optEntity.secondName}
            </ZKDetailGrid.ColValue>
          </ZKDetailGrid.Row>
          <ZKDetailGrid.Row>
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.nickname')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              {optEntity.nickname}
            </ZKDetailGrid.ColValue> 
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.birthday')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              {optEntity.birthday}
            </ZKDetailGrid.ColValue>
          </ZKDetailGrid.Row>
          <ZKDetailGrid.Row>
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.sex')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              <ZKInputJson disabled styleType="compact" value={optEntity.sex?optEntity.sex:{}} primaryAttr={lang} attrs={locales} />
            </ZKDetailGrid.ColValue> 
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.address')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              <ZKInputJson disabled styleType="compact" value={optEntity.address?optEntity.address:{}} primaryAttr={lang} attrs={locales} />
            </ZKDetailGrid.ColValue>
          </ZKDetailGrid.Row>
          <ZKDetailGrid.Row>
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.telNum')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              {optEntity.telNum}
            </ZKDetailGrid.ColValue> 
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.phoneNum')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              {optEntity.phoneNum}
            </ZKDetailGrid.ColValue>
          </ZKDetailGrid.Row>
          <ZKDetailGrid.Row>
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.mail')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              {optEntity.mail}
            </ZKDetailGrid.ColValue> 
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.headPhoto')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              {optEntity.headPhoto}
            </ZKDetailGrid.ColValue>
          </ZKDetailGrid.Row>
          <ZKDetailGrid.Row>
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.headPhotoOriginal')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              {optEntity.headPhotoOriginal}
            </ZKDetailGrid.ColValue> 
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.qq')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              {optEntity.qq}
            </ZKDetailGrid.ColValue>
          </ZKDetailGrid.Row>
          <ZKDetailGrid.Row>
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.wechat')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              {optEntity.wechat}
            </ZKDetailGrid.ColValue> 
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.jobNum')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              {optEntity.jobNum}
            </ZKDetailGrid.ColValue>
          </ZKDetailGrid.Row>
          <ZKDetailGrid.Row>
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.joinDate')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              {optEntity.joinDate}
            </ZKDetailGrid.ColValue> 
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.leaveDate')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              {optEntity.leaveDate}
            </ZKDetailGrid.ColValue>
          </ZKDetailGrid.Row>
          <ZKDetailGrid.Row>
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.applyLeaveDate')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              {optEntity.applyLeaveDate}
            </ZKDetailGrid.ColValue> 
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.sourceCode')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              {optEntity.sourceCode}
            </ZKDetailGrid.ColValue>
          </ZKDetailGrid.Row>
          <ZKDetailGrid.Row>
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.org.SysOrgUser.sourceId')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              {optEntity.sourceId}
            </ZKDetailGrid.ColValue> 
          </ZKDetailGrid.Row>
        </ZKDetailGrid>
      </ZKSpin>
    )
  }

  // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
  componentDidMount() {
    let { location, dispatch, match, mSysOrgUser } = this.props;
    let { params } = match;
    if (mSysOrgUser.pathname != location.pathname) {
      // 第一次进来或地址栏改变了
      dispatch({ type: 'mSysOrgUser/setState', payload: { pathname: location.pathname, optEntity: undefined } });
      dispatch({ type: 'mSysOrgUser/getSysOrgUser', payload: { pkId: params.pkId }});
    }
  }

  // 6、修改时；更新发生后立即调用。初始渲染不会调用此方法。
  componentDidUpdate(prevProps, prevState, snapshot) {

  }

  // 卸载时；在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅
  componentWillUnmount() {
    // let { mSysOrgUser, dvaApp } = this.props;
    // zkToolsNavAndMenu.unRegisterModel(dvaApp, [mSysOrgUser]);
  }
}

export default injectIntl(connect(({ mApp, mSysOrgUser, loading }) => ({ mApp, mSysOrgUser, loading }))(CInitSysOrgUserDetail));