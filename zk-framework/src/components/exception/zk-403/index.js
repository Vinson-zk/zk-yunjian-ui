/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 10:27:04
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-02-16 22:56:58
 */


import React from 'react';
import { injectIntl } from 'react-intl';
import { withRouter } from 'dva/router';

import styles from "../styles.less";
import { zkToolsMsg } from '../../../tools';
import { ZKButton } from '../../original';

class CInitException403 extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			detail: false
		}
	}

	render() {

		let { intl, match, history, location, errMsg = "" } = this.props

		return (
			<div className={styles.exception_panel} >
				<div className={styles.e_box} >
					<div className={styles.e_imgBlock}>
						<div className={`${styles.e_imgEle} ${styles.img_bg_403}`} />
					</div>
					<div className={styles.e_content}>
						<p><font className={styles.e_title} >403</font></p>
						<p><font className={styles.e_declare} > {zkToolsMsg.msgFormatByIntl(intl, 'global.app.msg.error.403')} </font></p>
						<p>
							<ZKButton type="primary" onClick={e => history.goBack()} > {zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_back')} </ZKButton>
							<ZKButton onClick={e => this.setState({ detail: !this.state.detail })} > {zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_detail')} </ZKButton>
						</p>
						{this.state.detail == true ? (<p className={styles.e_detail}><font>{errMsg}</font></p>) : ""}
					</div>
				</div>
			</div>
		)
	}
}

export default injectIntl(withRouter(CInitException403));
