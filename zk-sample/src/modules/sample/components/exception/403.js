/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 17:15:58
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-14 20:42:09
 */


import React from 'react';

import { ZKException } from "zkFramework";

const FInitDemo403 = ()=>{
	return <ZKException errCode={403} errMsg = "消息传入时国际化" />
}

export default FInitDemo403;
