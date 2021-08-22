/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 10:27:18
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-02-16 22:57:00
 */


import React from 'react';
import { injectIntl } from 'react-intl';
import { withRouter } from 'dva/router';

import styles from "../styles.less";
import { zkToolsMsg } from '../../../tools';
import { ZKButton } from '../../original';

// class CInitException404 extends React.Component {

// 	render(){
// 		return <div>404</div>
// 	}
// }

// export default CInitException404

const FInitException404 = withRouter(({ intl, match, history, location }) => {

	return (
		<div className={styles.exception_panel} >
			<div className={styles.e_box} >
				<div className={styles.e_imgBlock}>
					<div className={`${styles.e_imgEle} ${styles.img_bg_404}`} />
				</div>
				<div className={styles.e_content}>
					<p><font className={styles.e_title} >404</font></p>
					<p><font className={styles.e_declare} > {zkToolsMsg.msgFormatByIntl(intl, 'global.app.msg.error.404')} </font></p>
					<p><ZKButton type="primary" onClick={e => history.goBack()} > {zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_back')} </ZKButton></p>
				</div>
			</div>
		</div>
	)
})

export default injectIntl(FInitException404);
