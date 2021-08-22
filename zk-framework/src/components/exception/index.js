/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 10:25:56
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-12 14:17:57
 */

import React from 'react';
import PropTypes from 'prop-types';

import CException500 from './zk-500';
import CException404 from './zk-404';
import CException403 from './zk-403';

const FInitException = ({ errCode, ...props }) => {

	switch (errCode) {
		case 500:
			return <CException500 {...props} />
			break;
		case 403:
			return <CException403 {...props} />
			break;
		case 404:
			return <CException404 {...props} />
			break;
		default:
			return <CException404 {...props} />
			break;
	}
	// return <div>11</div>
}

// 定义属性
FInitException.propTypes = {
	errCode: PropTypes.oneOf([500, 404, 403]),  // 错误码，异常码
	errMsg: PropTypes.string // 详细消息，403 时会显示。
}

// 定义属性默认值
FInitException.defaultProps = {
	errCode: 404,  // 错误码，异常码
	errMsg: '' // 详细消息，403 时会显示。
}

export default FInitException;