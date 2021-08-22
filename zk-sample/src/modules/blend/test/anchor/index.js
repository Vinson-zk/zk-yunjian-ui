/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 16:48:05
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-29 14:29:34
 */

import React from 'react';
import { Anchor } from 'antd';

const { Link } = Anchor;

// ReactDOM.render(
//   <Anchor>
//     <Link href="#components-anchor-demo-basic" title="Basic demo" />
//     <Link href="#components-anchor-demo-static" title="Static demo" />
//     <Link href="#API" title="API">
//       <Link href="#Anchor-Props" title="Anchor Props" />
//       <Link href="#Link-Props" title="Link Props" />
//     </Link>
//   </Anchor>,
//   mountNode
// );

class CInitAnchorDemo extends React.Component{
	
	constructor(props){
		super(props)
		this.state={
			lableValue:"", // 字符串中参数替换时做显示用
		}
	}

	render() {

		let { match } = this.props;

		let basename = `${globalAppConfig.basename}`;
		
		basename = basename?"/" + basename:""

		return (
			<div id="try-anchor-div">
				<Anchor affix={false} getContainer={()=>document.getElementById("try-anchor-div")} showInkInFixed={true} bounds={10}  >
					<Link href={`${basename}${match.path}#components-anchor-demo-basic`} title="Basic demo" />
					<Link href={`${basename}${match.path}#components-anchor-demo-static`} title="Static demo" />
					<Link href={`${basename}${match.path}#API`} title="API">
					  <Link href={`${basename}${match.path}#Anchor-Props`} title="Anchor Props" />
					  <Link href={`${basename}${match.path}#Link-Props`} title="Link Props" />
					</Link>
				</Anchor><br />
				<div id="components-anchor-demo-basic" style={{"height":"300px", "border":"1px solid #f00"}} >
					components-anchor-demo-basic
				</div>
				<br />
				<div id="components-anchor-demo-static" style={{"height":"300px", "border":"1px solid #f00"}} >
					components-anchor-demo-static
				</div>
				<br />
				<div id="API" style={{"height":"500px", "border":"1px solid #f00"}} >
					API
					<br />
					<br />
					<br />
					<div id="Anchor-Props" style={{"height":"200px", "border":"1px solid #f00"}} >
						Anchor-Props
					</div>
					<br />
					<div id="Link-Props" style={{"height":"200px", "border":"1px solid #f00"}} >
						Link-Props
					</div>
				</div>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				end
			</div>
		)
	}
}

export default CInitAnchorDemo;