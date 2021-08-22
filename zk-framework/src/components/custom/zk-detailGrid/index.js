/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 11:08:52
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-31 08:22:45
 */

import React from 'react';
// import PropTypes from 'prop-types';

import ZKIcon from '../zk-icon';

import { ZKRow, ZKCol } from '../../original';
import styles from "./styles.less";

const FInitTitle = props=>{
	return <div className = {styles.detail_title} {...props} />
}
const FInitOpt = props=>{
	return <div className = {styles.detail_title_opt} {...props} />
}
const FInitTitleRow = props=>{
	return <div className = {styles.detail_title_row} {...props} />
}
FInitTitleRow.Title = FInitTitle;
FInitTitleRow.Opt = FInitOpt;

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
const FInitDetailRow = props => {
	return <ZKRow {...props} />
}
FInitDetailRow.defaultProps = {
	gutter: 24,
	align: "bottom",
	className: styles.detail_row
}

const FInitDetailColLeft = props => {
	return <ZKCol {...props} />
}
FInitDetailColLeft.defaultProps = {
	span: 9,
	className: styles.detail_col_lable
}

const FInitDetailColRight = props => {
	return <ZKCol {...props} />
}
FInitDetailColRight.defaultProps = {
	span: 15,
	className: styles.detail_col_content
}

/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
class CInitDetailGrid extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		let { children, title, ...props } = this.props;

		return (
			<div {...props} >
				{title? (
					<FInitTitleRow>
						<FInitTitle><ZKIcon.Antd4Icon icon = "BarsOutlined" /> &nbsp; {title}</FInitTitle>
					</FInitTitleRow>
				):""}
				{children}
			</div>
		)
	}
}

CInitDetailGrid.defaultProps = {
	title: "",
	className: styles.detail_panel,
}

CInitDetailGrid.TitleRow = FInitTitleRow;
CInitDetailGrid.Row = FInitDetailRow;
CInitDetailGrid.ColLeft = FInitDetailColLeft;
CInitDetailGrid.ColRight = FInitDetailColRight;

export default CInitDetailGrid;

