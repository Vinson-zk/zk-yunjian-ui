/*
* @Author: Vinson
* @Date:   2021-03-30 11:54:11
* @Last Modified by:   Vinson
* @Last Modified time: 2022-06-25 10:05:16
* 
* 
* 
*/

import React, { Component } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'dva';
import { Icon } from "antd";

import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";
const { ZKSpin, ZKInput, ZKSelect, ZKInputNumber, ZKRadio, ZKModal, ZKRow, ZKCol } = ZKOriginalComponents;
const { ZKEditForm, ZKInputJson, ZKIcon } = ZKCustomComponents;
const { zkToolsMsg, zkToolsValidates, zkToolsNavAndMenu } = zkTools;

class CInitFuncModuleEdit extends Component {

  formRef = React.createRef();

  // 1、构造函数
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    }
  }

  /** 保存 */
  f_save = (values, form, callbackFunc) => {
    this.props.dispatch({
      type: 'mFuncModule/editFuncModule', 
      payload: values, 
      callback: (errors) => {
        if(errors){
          this.setState({loading: true});
        }
        callbackFunc(errors);
      }
    });
  };

  render() {

    let { dispatch, mFuncModule, intl, loading, location } = this.props;
    let { optEntity } = mFuncModule;

    if(optEntity &&  Object.keys(optEntity).length == 0){
      optEntity.driver = 'com.mysql.jdbc.Driver';
      optEntity.dbType = 'mysql';
    }

    let spinning = this.state.loading || loading.effects['mFuncModule/editFuncModule'] || loading.effects['mFuncModule/getFuncModule'];
    return (optEntity != null && mFuncModule.pathname == location.pathname) && (
      <ZKSpin spinning={spinning === true} >
        <ZKEditForm ref = {this.formRef} data={optEntity}
          saveFunc={this.f_save}
          resetFunc={() => { this.setState({ areaOneKey: undefined }); }}
        >
          <ZKEditForm.Item name = "labelName" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.funcModule.labelName')} rules = {[zkToolsValidates.notNull(intl), zkToolsValidates.string(intl, 0, 64)]} >
            <ZKInput style={{'width': '100%'}} />
          </ZKEditForm.Item>
          <ZKEditForm.Item name = "moduleName" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.funcModule.moduleName')} rules = {[zkToolsValidates.notNull(intl), zkToolsValidates.string(intl, 0, 64)]} >
            <ZKInput style={{'width': '100%'}} />
          </ZKEditForm.Item>
          <ZKEditForm.Item name = "modulePrefix" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.funcModule.modulePrefix')} rules = {[zkToolsValidates.notNull(intl), zkToolsValidates.string(intl, 0, 64)]} >
            <ZKInput style={{'width': '100%'}} />
          </ZKEditForm.Item>
          <ZKEditForm.Item name = "packagePrefix" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.funcModule.packagePrefix')} rules = {[zkToolsValidates.notNull(intl), zkToolsValidates.string(intl, 0, 64)]} >
            <ZKInput style={{'width': '100%'}} />
          </ZKEditForm.Item>
          <ZKEditForm.Item name = "isRemovePrefix" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.funcModule.isRemovePrefix')} rules = {[zkToolsValidates.notNull(intl, "boolean")]} >
            <ZKSelect>
              <ZKSelect.Option value={true}>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.yes')}</ZKSelect.Option>
              <ZKSelect.Option value={false}>{zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.no')}</ZKSelect.Option>
            </ZKSelect>
          </ZKEditForm.Item>
          <ZKEditForm.Item name = "tableNamePrefix" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.funcModule.tableNamePrefix')} rules = {[zkToolsValidates.string(intl, 0, 64)]} >
            <ZKInput style={{'width': '100%'}} />
          </ZKEditForm.Item>
          <ZKEditForm.Item name = "colNamePrefix" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.funcModule.colNamePrefix')} rules = {[zkToolsValidates.string(intl, 0, 64)]} >
            <ZKInput style={{'width': '100%'}} />
          </ZKEditForm.Item>
          <ZKEditForm.Item name = "driver" label={zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.funcModule.driver')} rules = {[zkToolsValidates.notNull(intl), zkToolsValidates.string(intl, 0, 128)]}>
            <ZKInput style={{'width': '100%'}} />
          </ZKEditForm.Item>
          <ZKEditForm.Item name = "dbType" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.funcModule.dbType')}  rules = {[zkToolsValidates.notNull(intl), zkToolsValidates.string(intl, 0, 32)]} >
            <ZKInput style={{'width': '100%'}} />
          </ZKEditForm.Item>
          <ZKRow><ZKCol span = {24} >
            <ZKEditForm.Item labelCol = {{span: 5}} wrapperCol = {{span:15}} name = "url" label={zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.funcModule.url')} rules = {[zkToolsValidates.notNull(intl), zkToolsValidates.string(intl, 0, 128)]}>
              <ZKInput style={{'width': '100%'}} />
            </ZKEditForm.Item>
          </ZKCol></ZKRow>
          <ZKEditForm.Item name = "username" label={zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.funcModule.username')} rules = {[zkToolsValidates.notNull(intl), zkToolsValidates.string(intl, 0, 64)]}>
            <ZKInput style={{'width': '100%'}} />
          </ZKEditForm.Item>
          <ZKEditForm.Item name = "password" label={zkToolsMsg.msgFormatByIntl(intl, 'zk.codeGen.funcModule.password')} rules = {[zkToolsValidates.notNull(intl), zkToolsValidates.string(intl, 0, 64)]}>
            <ZKInput style={{'width': '100%'}} />
          </ZKEditForm.Item>
        </ZKEditForm>
      </ZKSpin>
    )
  }

  // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
  componentDidMount() {
    let { location, match, dispatch, mFuncModule } = this.props;
    let { params } = match;

    // 地址栏改变了 
    if (mFuncModule.pathname != location.pathname) {
      let optEntity = location.state ? location.state.optEntity : undefined;
      if (optEntity && optEntity.pkId && optEntity.pkId == params.pkId) {
        dispatch({ type: 'mFuncModule/setState', payload: { optEntity: optEntity, pathname: location.pathname } });
      } else {

        dispatch({ type: 'mFuncModule/setState', payload: { pathname: location.pathname, optEntity:optEntity } });
        if("_new" != params.pkId){
          dispatch({ type: 'mFuncModule/getFuncModule', payload: { pkId: params.pkId } });
        }
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

// {onValuesChange:(props, changedValues, allValues) =>{
//   console.log("--- ", props, changedValues, allValues)
// }}

export default injectIntl(connect(({ mFuncModule, loading }) => ({ mFuncModule, loading }))(CInitFuncModuleEdit));


