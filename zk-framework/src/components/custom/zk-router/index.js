/**
 *
 * @Author: Vinson
 * @Date: 2020-08-11 16:32:48
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-02-28 12:49:14
 */

import React, { Component } from 'react';
import PropTypes from "prop-types";
import { router as dvaRouter } from 'dva'; // hashHistory, browserHistory 没有了 require("dva").router

import zkJsUtils from "zkJsUtils";

// console.log("[^_^:20210228-1213-001] dvaRouter: ", dvaRouter);
const { Route, Redirect } = dvaRouter

/**
路由属性说明：
官网说明：
When true, will only match if the path matches the location.pathname exactly.<Route exact path="/one" component={About} />
path	location.pathname	exact	matches?
/one	/one/two	        true	no
/one	/one/two	        false	yes

一、exact 绝对匹配的路径才会加载路由组件；
	1、同级路径中如果有路由A 的路径与其他任意路由路径的前面部分相同，则需要加此路由A 需要加 exact 关键字，才能加载其他路由
	2、如果路由嵌套有子路由，则不能加 exact 才能显示出嵌套的子路由
*/

/**
 * 权限鉴定路由，render 方式的路由组件，使用 render 返回路由组件，并可以设置组件属性；
 * @param {object} component 路由对应的组件
 * @param {object} propsToComponent 需要给路由组件 添加的属性对象；
 * @param {object} onEnter 路由拦截钩子，当返回不为空时，会跳转到返回值的路由；
 * @param {object} rest 路由的属性，同 Route 的属性
 * @return {object} dva 路由
 */
const FInitPrivateRoute = ({ component: Component, propsToComponent, onEnter, ...rest }) => {
	return (
		<Route {...rest}
			render={(props) => {
				// console.log("[^_^:20181024-1523-001] 路由组件的属性：", rest, propsToComponent, props);
				// return <Component {...props} {...propsToComponent} />

				let enterRult = undefined
				if (onEnter instanceof Function) {
					enterRult = onEnter.call(this, props.location);
				}
				// console.log("[^_^:20181024-1523-002] 路由组件的属性：", enterRult, Component);

				if (zkJsUtils.isEmpty(enterRult)) {
					return <Component {...props} {...propsToComponent} />
				} else {
					// return <Redirect to={{pathname: "/login", state: { from: props.location } }} />
					return <Redirect to={enterRult} from={props.location} />
				}
			}}
		/>
	)
}

// 定义属性
FInitPrivateRoute.propTypes = {
	...Route.propTypes,                  // 路由属性，同 Route 的属性
	propsToComponent: PropTypes.object,   // 传给子组件的属性
	onEnter: PropTypes.func,            // 进入的判定函数，路由钩子
}
// 定义属性默认值
FInitPrivateRoute.defaultProps = {
	propsToComponent: {},
	onEnter: undefined,
}

export default {
	...dvaRouter,
	ZKPrivateRoute: FInitPrivateRoute  // 权限鉴定路由，添加了，onEnter 路径钩子；以及 propsToComponent 需要给路由组件 添加的属性对象；
}


