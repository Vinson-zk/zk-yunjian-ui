/**
 *
 * @Author: Vinson
 * @Date: 2020-08-12 10:27:18
 * @Last Modified by: runoob
 * @Last Modified time: 2023-09-19 13:44:23
 */


import React from 'react';
import { injectIntl } from 'react-intl';
import { router } from 'dva';
const { withRouter } = router;

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
		<div className={styles.zk_e_panel} >
			<div className={styles.zk_e_box} >
				<div className={styles.zk_e_imgBlock}>
					<div className={`${styles.zk_e_imgEle} ${styles.zk_e_img_bg_404}`} />
				</div>
				<div className={styles.zk_e_content}>
					<p><font className={styles.zk_e_title} >404</font></p>
					<p><font className={styles.zk_e_declare} > {zkToolsMsg.msgFormatByIntl(intl, 'global.app.msg.error.404')} </font></p>
					<p><ZKButton type="primary" onClick={e => history.goBack()} > {zkToolsMsg.msgFormatByIntl(intl, 'global.opt.name._key_back')} </ZKButton></p>
				</div>
			</div>
		</div>
	)
})

export default injectIntl(FInitException404);
