/*
* @Author: Vinson
* @Date:   2021-03-30 11:54:23
* @Last Modified by:   Vinson
* @Last Modified time: 2022-01-26 14:49:48
* 
* 
* 
*/

import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'dva';
import { Icon } from "antd";

import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKSpin, ZKInput, ZKSelect, ZKInputNumber, ZKRadio, ZKModal } = ZKOriginalComponents;
const { ZKDetailGrid, ZKEditForm, ZKInputJson, ZKIcon } = ZKCustomComponents;

const { zkToolsMsg, zkToolsNavAndMenu } = zkTools;

class CInitFuncModuleDetail extends Component {

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

  render() {

    let { mFuncModule, intl, loading } = this.props;
    let { optEntity = {} } = mFuncModule;

    let spinning = loading.effects['mFuncModule/getFuncModule'];

    return (
      <ZKSpin spinning={spinning === true} >
        <ZKDetailGrid >
          <ZKDetailGrid.Row>
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.funcModule.labelName')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              {optEntity.labelName}
            </ZKDetailGrid.ColValue>
          </ZKDetailGrid.Row>
          <ZKDetailGrid.Row>
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.funcModule.moduleName')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              {optEntity.moduleName}
            </ZKDetailGrid.ColValue>
          </ZKDetailGrid.Row>
          <ZKDetailGrid.Row>
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.funcModule.modulePrefix')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              {optEntity.modulePrefix}
            </ZKDetailGrid.ColValue>
          </ZKDetailGrid.Row>
          <ZKDetailGrid.Row>
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.funcModule.packagePrefix')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              {optEntity.packagePrefix}
            </ZKDetailGrid.ColValue>
          </ZKDetailGrid.Row>
          <ZKDetailGrid.Row>
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.funcModule.isRemovePrefix')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              {optEntity.isRemovePrefix==true?zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.yes'):zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.no')}
            </ZKDetailGrid.ColValue>
          </ZKDetailGrid.Row>
          <ZKDetailGrid.Row>
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.funcModule.tableNamePrefix')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              {optEntity.tableNamePrefix}
            </ZKDetailGrid.ColValue>
          </ZKDetailGrid.Row>
          <ZKDetailGrid.Row>
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.funcModule.colNamePrefix')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              {optEntity.colNamePrefix}
            </ZKDetailGrid.ColValue>
          </ZKDetailGrid.Row>
          <ZKDetailGrid.Row>
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.funcModule.dbType')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              {optEntity.dbType}
            </ZKDetailGrid.ColValue>
          </ZKDetailGrid.Row>
          <ZKDetailGrid.Row>
            <ZKDetailGrid.ColLabel>{zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.funcModule.url')}:</ZKDetailGrid.ColLabel>
            <ZKDetailGrid.ColValue>
              {optEntity.url}
            </ZKDetailGrid.ColValue>
          </ZKDetailGrid.Row>
        </ZKDetailGrid>
      </ZKSpin>
    )
  }

  // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        let { location, dispatch, match, mFuncModule } = this.props;
    let { params } = match;
    // 地址栏改变了 
    if (mFuncModule.pathname != location.pathname ) {
      let optEntity = location.state ? location.state.optEntity : {};
      if (optEntity && optEntity.pkId && optEntity.pkId == params.pkId) {
        dispatch({ type: 'mFuncModule/setState', payload: { optEntity: optEntity, pathname: location.pathname } });
      } else {
        dispatch({ type: 'mFuncModule/setState', payload: { pathname: location.pathname } });
        dispatch({ type: 'mFuncModule/getFuncModule', payload: { pkId: params.pkId } });
      }
    }
    }

    // 6、修改时；更新发生后立即调用。初始渲染不会调用此方法。
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    // 卸载时；在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅
    componentWillUnmount() {
    // let { mFuncModule, dvaApp } = this.props;
    // zkToolsNavAndMenu.unRegisterModel(dvaApp, [mFuncModule]);
    }
}

export default injectIntl(connect(({ mFuncModule, loading }) => ({ mFuncModule, loading }))(CInitFuncModuleDetail));

