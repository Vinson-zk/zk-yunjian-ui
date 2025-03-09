/*
* @Author: Vinson
* @Date:   2021-06-24 23:12:24
* @Last Modified by: vinson
* @Last Modified time: 2025-01-25 17:27:27
* 
*/

import mPublicApp from "./model.js";
import cLogin from './login/index.js';
import cRegisterCompany from './register/enterpriseCompany/registerCompany.js';
import cCompanyAuditIng from './register/enterpriseCompany/companyAuditIng.js';
import cRegisterPersonal from './register/personalUser/registerPersonalUser.js';
import cForgotPassword from './forgotPassword/forgotPassword.js';
// import cErrCodeException from './exception/errCodeException';

const _login = { onEnter: undefined, component: cLogin, models: [mPublicApp] };
const _registerCompany = { onEnter: undefined, component: cRegisterCompany, models: [mPublicApp] };
const _companyAuditIng = { onEnter: undefined, component: cCompanyAuditIng, models: [mPublicApp] };
const _registerPersonal = { onEnter: undefined, component: cRegisterPersonal, models: [mPublicApp] };
const _forgotPassword = { onEnter: undefined, component: cForgotPassword, models: [mPublicApp] };
// const _errCodeException = { onEnter: undefined, component: cErrCodeException, models: [] };

export default {
	_login, 
	_registerCompany, _companyAuditIng,
	_registerPersonal,
	_forgotPassword,
	//  _errCodeException
}


