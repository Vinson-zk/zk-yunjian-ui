/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 10:27:04
 * @Last Modified by: runoob
 * @Last Modified time: 2023-09-19 13:44:18
 */


import React from 'react';
import { injectIntl } from 'react-intl';
import { router } from 'dva';
const { withRouter } = router;

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
			<div className={styles.zk_e_panel} >
				<div className={styles.zk_e_box} >
					<div className={styles.zk_e_imgBlock}>
						<div className={`${styles.zk_e_imgEle} ${styles.zk_e_img_bg_403}`} />
					</div>
					<div className={styles.zk_e_content}>
						<p><font className={styles.zk_e_title} >403</font></p>
						<p><font className={styles.zk_e_declare} > {zkToolsMsg.msgFormatByIntl(intl, 'global.app.msg.error.403')} </font></p>
						<p>
							<ZKButton type="primary" onClick={e => history.goBack()} > {zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_back')} </ZKButton>
							<ZKButton onClick={e => this.setState({ detail: !this.state.detail })} > {zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_detail')} </ZKButton>
						</p>
						{this.state.detail == true ? (<p className={styles.zk_e_detail}><font>{errMsg}</font></p>) : ""}
					</div>
				</div>
			</div>
		)
	}
}

export default injectIntl(withRouter(CInitException403));
