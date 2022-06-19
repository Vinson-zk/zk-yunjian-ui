/*
* @Author: Vinson
* @Date:   2022-05-11 14:33:49
* @Last Modified by:   Vinson
* @Last Modified time: 2022-05-11 15:43:05
* 
* 
* 
*/

import React from 'react';

import { ZKException } from "zkFramework";

const FInitException = props=>{
	let { location, match, dispatch } = props;
    let { params } = match;
    let errCode = params.errCode||404;

	// errCode={500}
	return <ZKException {...props} errCode={errCode} />
}

// FInitException.defaultProps = {
//     errCode: 404
// }

export default FInitException;
