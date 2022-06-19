/*
* @Author: Vinson
* @Date:   2021-06-24 23:12:24
* @Last Modified by:   Vinson
* @Last Modified time: 2022-05-11 14:44:06
* 
* 
* 
*/

import cLogin from './login/index.js';
import cForgotPassword from './forgotPassword/index.js';
import cErrCodeException from './exception/errCodeException';

const _login = { onEnter: undefined, component: cLogin, models: [] };
const _forgot_password = { onEnter: undefined, component: cForgotPassword, models: [] };
const _errCodeException = { onEnter: undefined, component: cErrCodeException, models: [] };


export default {
	_login, _forgot_password, _errCodeException
}


