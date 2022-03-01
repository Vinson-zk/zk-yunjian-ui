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
import { Icon, Form } from "antd";

import locales from "../../../locales/index";
import { zkTools, ZKCustomComponents, ZKOriginalComponents } from "zkFramework";    
const { ZKSpin, ZKModal, ZKSelect, ZKInput, ZKInputNumber, ZKRow, ZKCol } = ZKOriginalComponents;
const { ZKEditForm, ZKInputJson, } = ZKCustomComponents;
const { zkToolsMsg, zkToolsValidates, zkToolsNavAndMenu } = zkTools;

class CInitSysSetItemEdit extends Component {

  formRef = React.createRef();

  // 1、构造函数
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      settingsType: !props.optEntity?0:props.optEntity.type || 0,
    }
  }
  
  /** 保存 */
  f_save = (values, form, callbackFunc) => {
    this.props.dispatch({
      type: 'mSysSetItem/editSysSetItem', 
      payload: values, 
      callback: (errors) => {
        if(!errors){
          this.setState({loading: true});
        }
        callbackFunc(errors);
      }
    });
  }

  /** 返回 JSX 元素 */
  render() {

    let { mApp, dispatch, mSysSetItem, intl, loading, location } = this.props;
    let { optEntity } = mSysSetItem;
    
    let lang = mApp.lang?mApp.lang:zkToolsMsg.getLocale();


    // ZKJson 自定义校验规则对象
    let f_makeObjRuls = required=>{
      let objRule = {};
      for(let index in locales){
        objRule[index] = zkToolsValidates.string(intl, 1, 64, required);
      }
      return objRule;
    }

    if(optEntity && !optEntity.pkId){
      // 新增时，设置默认类型为 0 平台配置;
      optEntity.type = optEntity.type || 0;
    }
    
    let spinning = this.state.loading || loading.effects['mSysSetItem/editSysSetItem'] || loading.effects['mSysSetItem/getSysSetItem'];
    return (optEntity != null && mSysSetItem.pathname == location.pathname) && (
      <ZKSpin spinning={spinning === true} >
        <ZKEditForm ref = {this.formRef} history={history} data={optEntity}
          saveFunc={this.f_save}
          resetFunc={form => { return true; }}
        >
          <ZKRow><ZKCol span={24}>
            <ZKEditForm.Item labelCol = {{span:5}} name = "type" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.settings.SysSetItem.type')} 
              rules = {[
                zkToolsValidates.notNull(intl, "integer")
              ]} 
            >
              <ZKSelect onChange={(value, option)=>{ this.setState({'settingsType': value}); }} >
                <ZKSelect.Option value={0}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.settings.SysSetItem.type.0')}</ZKSelect.Option>
                <ZKSelect.Option value={1}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.settings.SysSetItem.type.1')}</ZKSelect.Option>
                <ZKSelect.Option value={2}>{zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.settings.SysSetItem.type.2')}</ZKSelect.Option>
              </ZKSelect>
            </ZKEditForm.Item>
          </ZKCol></ZKRow>
          {
            // this.state.settingsType == 2?(
            //   <React.Fragment>
            //     <ZKEditForm.Item name = "groupCode" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.settings.SysSetItem.groupCode')}
            //       rules = {[
            //         zkToolsValidates.string(intl, 1, 64), 
            //       ]} 
            //     >
            //       <ZKInput />
            //     </ZKEditForm.Item>
            //     <ZKEditForm.Item name = "compamyCode" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.settings.SysSetItem.compamyCode')}
            //       rules = {[
            //         zkToolsValidates.string(intl, 1, 64), 
            //       ]} 
            //     >
            //       <ZKInput />
            //     </ZKEditForm.Item>
            //   </React.Fragment>
            // ):undefined
          }
          {
            this.state.settingsType == 2?(
                 <ZKEditForm.Item name = "groupCode" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.settings.SysSetItem.groupCode')}
                   rules = {[
                     zkToolsValidates.string(intl, 1, 64), 
                   ]} 
                 >
                   <ZKInput />
                 </ZKEditForm.Item>
            ):undefined
          }
          {
            this.state.settingsType == 2?(
                 <ZKEditForm.Item name = "compamyCode" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.settings.SysSetItem.compamyCode')}
                   rules = {[
                     zkToolsValidates.string(intl, 1, 64), 
                   ]} 
                 >
                   <ZKInput />
                 </ZKEditForm.Item>
            ):undefined
          }
          <ZKEditForm.Item name = "name" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.settings.SysSetItem.name')} 
            rules = {[
              zkToolsValidates.object(intl, locales, undefined, f_makeObjRuls(true), true), 
            ]} 
          >
            <ZKInputJson style={{ width: '100%' }} styleType="compact" primaryAttr={lang} attrs={locales} />
          </ZKEditForm.Item>
          <ZKEditForm.Item name = "setDesc" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.settings.SysSetItem.setDesc')} 
            rules = {[
              zkToolsValidates.object(intl, locales, undefined, f_makeObjRuls(false)), 
            ]} 
          >
            <ZKInputJson style={{ width: '100%' }} styleType="compact" primaryAttr={lang} attrs={locales} />
          </ZKEditForm.Item>
          <ZKEditForm.Item name = "code" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.settings.SysSetItem.code')} 
            rules = {[
              zkToolsValidates.string(intl, 1, 64, true), 
            ]} 
          >
            <ZKInput />
          </ZKEditForm.Item>
          <ZKRow><ZKCol span={24}>
            <ZKEditForm.Item labelCol = {{span:5}} name = "value" label = {zkToolsMsg.msgFormatByIntl(intl, 'zk.sys.settings.SysSetItem.value')} 
              rules = {[
                zkToolsValidates.string(intl, 1, 256, true), 
              ]} 
            >
              <ZKInput style = {{width:'100%'}} />
            </ZKEditForm.Item>
          </ZKCol></ZKRow>
        </ZKEditForm>
      </ZKSpin>
    )
  }

  // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
  componentDidMount() {
    let { location, match, dispatch, mSysSetItem } = this.props;
    let { params } = match;

    // 第一次进来或地址栏改变了 
    if (mSysSetItem.pathname != location.pathname) {
      let optEntity = location.state ? location.state.optEntity : undefined;
      if (optEntity && optEntity.pkId && optEntity.pkId == params.pkId) {
        dispatch({ type: 'mSysSetItem/setState', payload: { optEntity: optEntity, pathname: location.pathname } });
      } else {
        dispatch({ type: 'mSysSetItem/setState', payload: { pathname: location.pathname, optEntity:optEntity } });
        if("_new" != params.pkId){
          dispatch({ type: 'mSysSetItem/getSysSetItem', payload: { pkId: params.pkId } });
        }
      }
    }
  }

  // 6、修改时；更新发生后立即调用。初始渲染不会调用此方法。
  componentDidUpdate(prevProps, prevState, snapshot) {

  }

  // 卸载时；在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅
  componentWillUnmount() {
    // let { mSysSetItem, dvaApp } = this.props;
    // zkToolsNavAndMenu.unRegisterModel(dvaApp, [mSysSetItem]);
  }

}

// {onValuesChange:(props, changedValues, allValues) =>{
//   console.log("--- ", props, changedValues, allValues)
// }}

export default injectIntl(connect(({ mApp, mSysSetItem, loading }) => ({ mApp, mSysSetItem, loading }))(CInitSysSetItemEdit));