/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2024-07-09 11:51:20
* @Last Modified by: vinson
* @Last Modified time: 2025-02-06 16:19:49
*/

import React, { useState } from "react";
import { injectIntl } from 'react-intl';
import { connect } from 'dva';

import { Scrollbars } from 'react-custom-scrollbars';

import { ZKOriginalComponents, ZKCustomComponents, zkTools } from "zkFramework";
const { ZKSteps } = ZKOriginalComponents;
const { ZKIcon } = ZKCustomComponents;
const { zkToolsMsg } = zkTools;

import zkStyles from 'zkFramework/style/zk.styles.less'
import styles from './styles.less';

import CRegisterCompanyBaseInfo from './registerCompanyBaseInfo.js';
import CRegisterCompanyVerifyCode from './registerCompanyVerifyCode.js';
import CRegisterCompanyAuditInfo from './registerCompanyAuditInfo.js';

const f_getStepItems = (intl, mPublicApp, location, match, history, dispatch, loading)=>{
  let cProps = {mPublicApp, location, match, history, dispatch, loading};
  return [{
    title: zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.register.company.step.base.info'),
    content: <CRegisterCompanyBaseInfo intl = {intl} {...cProps} />,
    icon: <ZKIcon.AntdIcon icon = 'FileTextOutlined' />
  },{
    title: zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.register.company.step.verify.code'),
    content: <CRegisterCompanyVerifyCode intl = {intl} {...cProps} />,
    icon: <ZKIcon.AntdIcon icon = 'ContainerOutlined' />
  },{
    title: zkToolsMsg.msgFormatByIntl(intl, 'zk.front.end.label.register.company.step.audit.info'),
    content: <CRegisterCompanyAuditInfo intl = {intl} {...cProps} />,
    icon: <ZKIcon.AntdIcon icon = 'AuditOutlined' />
  }];
}

const FInitRegisterCompany = ({intl, mPublicApp, location, match, history, dispatch, loading})=>{

  // console.log("[^_^:20240802-0101-001] FInitRegisterCompany.location: ", location);
  // console.log("[^_^:20240802-0101-001] FInitRegisterCompany.match: ", match);
  // console.log("[^_^:20240802-0101-001] FInitRegisterCompany.history: ", history);
  // console.log("[^_^:20240802-0101-001] FInitRegisterCompany.loading: ", loading);

  let { params } = match;
  let rcStep = params.rcStep?params.rcStep:0;

	// const [current, setCurrent] = useState(0);
  let stepItems = f_getStepItems(intl, mPublicApp, location, match, history, dispatch, loading);

	return (<div className={`${zkStyles.zk_f_div_vertical_middle} ${zkStyles.zk_f_full}`}>
    <div className={styles.zk_register_company_div}>
      <div className={styles.zk_register_company_step_div}>
		    <ZKSteps current={rcStep} items={stepItems}  />
      </div>
      <div className={styles.zk_register_company_content}>
        <Scrollbars style={{ height: '100%' }}>
          {stepItems[rcStep].content}
        </Scrollbars>
      </div>
    </div>
	</div>)
}

export default injectIntl(connect(({ mApp, mPublicApp, loading }) => ({ mApp, mPublicApp, loading }))(FInitRegisterCompany));








