/*
* @Author: Vinson
* @Date:   2021-06-24 23:12:24
* @Last Modified by:   Vinson
* @Last Modified time: 2021-06-30 20:58:46
* 
* 
* 
*/

import cLogin from './login/index.js';
import cForgotPassword from './forgotPassword/index.js';

const _login = { onEnter: undefined, component: cLogin, models: [] };
const _forgot_password = { onEnter: undefined, component: cForgotPassword, models: [] };


export default {
	_login, _forgot_password
}


