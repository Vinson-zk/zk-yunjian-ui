/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 11:08:52
 * @Last Modified by: vinson
 * @Last Modified time: 2025-02-06 15:56:06
 */

import React from 'react';
// import PropTypes from 'prop-types';

import ZKIcon from '../zk-icon';

import { ZKRow, ZKCol } from '../../original';
import styles from "./styles.less";

/////////////////////////////////////////////////////
// title
/////////////////////////////////////////////////////
const FInitTitle = props=>{
	return <div className = {styles.zk_detail_grid_title} {...props} />
}
const FInitOpt = props=>{
	return <div className = {styles.zk_detail_grid_title_opt} {...props} />
}
const FInitTitleRow = props=>{
	return <div className = {styles.zk_detail_grid_title_row} {...props} />
}
FInitTitleRow.Title = FInitTitle;
FInitTitleRow.Opt = FInitOpt;

/////////////////////////////////////////////////////
// row lable value
/////////////////////////////////////////////////////

const FInitDetailRow = props => {
	return <ZKRow {...props} />
}
FInitDetailRow.defaultProps = {
	gutter: 24,
	align: "bottom",
	className: styles.zk_detail_grid_row
}

const FInitDetailLabel = props => {
	return <ZKCol {...props} />
}
FInitDetailLabel.defaultProps = {
	span: 3,
	offset: 2,
	className: styles.zk_detail_grid_col_label
}

const FInitDetailValue = props => {
	return <ZKCol {...props} />
}
FInitDetailValue.defaultProps = {
	span: 5,
	offset: 0,
	className: styles.zk_detail_grid_col_content
}

/////////////////////////////////////////////////////
// 
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
						<FInitTitle><ZKIcon.AntdIcon icon = "BarsOutlined" /> &nbsp; {title}</FInitTitle>
					</FInitTitleRow>
				):""}
				{children}
			</div>
		)
	}
}

CInitDetailGrid.defaultProps = {
	title: "",
	className: styles.zk_detail_grid_panel,
}

CInitDetailGrid.TitleRow = FInitTitleRow;
CInitDetailGrid.Row = FInitDetailRow;
CInitDetailGrid.ColLeft = FInitDetailLabel;
CInitDetailGrid.ColRight = FInitDetailValue;
CInitDetailGrid.ColLabel = FInitDetailLabel;
CInitDetailGrid.ColValue = FInitDetailValue;


export default CInitDetailGrid;

