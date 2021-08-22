/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 17:15:49
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-14 20:42:00
 */

import React from 'react';

import { ZKException } from "zkFramework";

const FInitDemo404 = ()=>{
	// return <div>404</div>
	return <ZKException errCode={404} />
}

export default FInitDemo404;
