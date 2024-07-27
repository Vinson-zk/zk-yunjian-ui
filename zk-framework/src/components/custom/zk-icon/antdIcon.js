/*
* @Author: Vinson
* @Date:   2021-03-07 01:48:32
* @Last Modified by: runoob
* @Last Modified time: 2023-09-21 00:05:16
* 
* 
* 
*/

import React from 'react';
import * as AntdIcon from '@ant-design/icons';

const FInitAntdIcon = ({icon, ...props})=>{
	try{
		if(icon){
			if(AntdIcon[icon]){
				return React.createElement(AntdIcon[icon], {...props});
			}else{
				throw "Icon [" + icon + "] doesn't exist!";
			}
		}else{
			// if(console){
			// 	console.error("[>_<:20210315-2323-001] FInitAntdIcon 图标为空: ", icon);
			// }
			return "";
		}
		
	}catch(err){
		if(console){
			console.error("[>_<:20210307-1539-001] FInitAntdIcon 图标异常: ", err);
		}
		return "";
	}
  
}

export default FInitAntdIcon;