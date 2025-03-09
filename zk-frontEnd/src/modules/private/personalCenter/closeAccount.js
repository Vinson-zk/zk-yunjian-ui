/*
 * @Author: Vinson
 * @CreateDate: 
 * @LastEditors: Vinson
 * @LastEditTime: 2025-02-10 20:30:46
 * @Description: 
 */

import React, { useState } from 'react';
// import { injectIntl } from 'react-intl';
// import { connect } from 'dva';
// import { Scrollbars } from 'react-custom-scrollbars';

import { zkTools, ZKOriginalComponents } from "zkFramework";   
const { ZKSpin, ZKForm, ZKModal, ZKInput, ZKDivider } = ZKOriginalComponents;
// const { ZKIcon } = ZKCustomComponents;
const { zkToolsMsg, zkToolsValidates } = zkTools;     
// const { ZKSpin, ZKForm, ZKModal, ZKInput, ZKInputNumber, ZKRow, ZKCol, ZKSelect, ZKButton, ZKUpload, ZKCard, ZKDivider } = ZKOriginalComponents;
// const { ZKEditForm, ZKInputJson, ZKDateFormatPicker, ZKIcon, ZKSmartUpload, ZKDetailGrid } = ZKCustomComponents;
// const { ZKDictSelect } = ZKBusinessComponents;
// const { zkToolsAuth, zkToolsMsg, zkToolsValidates, zkToolsNavAndMenu } = zkTools;

import zkJsUtils from 'zkJsUtils';
// import locales from "../../../locales/index";

// import zkStyles from 'zkFramework/style/zk.styles.less';
// import frontEndStyles from '../../frontEnd.styles.less';
import privateStyles from '../private.styles.less';


const FInitCloseAccount = ({ isShow, intl, loading, dispatch, mApp, onSetFlag })=>{
    const [form] = ZKForm.useForm();

    let { user } = mApp;

    let f_handleOk = e=>{
        f_closeAccount();
    }

    let f_handleCancel = e=>{
        onSetFlag(false);
    }

    let f_closeAccount = ()=>{
        dispatch({
            'type': 'mPrivateApp/closeAccount',
            callBackOk: res=>{ f_handleCancel(); },
            callBackErr: res=>{},
        });
    }

    let spinning = loading.effects['mPrivateApp/CloseAccount'];

    return <ZKModal title={zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.close.account')} open={isShow}
              onOk={f_handleOk}
              onCancel={f_handleCancel}
              okButtonProps = {{loading: spinning}}
              cancelButtonProps = {{loading: spinning}}
              width = {660}
    >
        <ZKSpin spinning={spinning === true} >
            {`${user.nickname}[${user.account}]`}
            <ZKDivider className = {privateStyles.personal_center_divider} />
            <h3>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.tips.close.account.title')}
            </h3>
            <span style = {{"line-highight": "22px"}} >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.tips.close.account.content.1')}
            </span>
            <br />
            <span style = {{"line-highight": "22px"}} >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.tips.close.account.content.2')}
            </span>
            <br />
            <br />
        </ZKSpin>
    </ZKModal>
}

export default FInitCloseAccount;










