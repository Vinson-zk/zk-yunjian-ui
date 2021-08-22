/*
* @Author: Vinson
* @Date:   2021-03-07 01:48:32
* @Last Modified by:   Vinson
* @Last Modified time: 2021-03-17 11:37:43
* 
* 
* 
*/

import React from 'react';
import * as Antd4Icon from '@ant-design/icons';

const FInitAntd4Icon = ({icon, ...props})=>{
	try{
		if(icon){
			if(Antd4Icon[icon]){
				return React.createElement(Antd4Icon[icon], {...props});
			}else{
				throw "Icon [" + icon + "] doesn't exist!";
			}
		}else{
			// if(console){
			// 	console.error("[>_<:20210315-2323-001] FInitAntd4Icon 图标为空: ", icon);
			// }
			return "";
		}
		
	}catch(err){
		if(console){
			console.error("[>_<:20210307-1539-001] FInitAntd4Icon 图标异常: ", err);
		}
		return "";
	}
  
}

export default FInitAntd4Icon;