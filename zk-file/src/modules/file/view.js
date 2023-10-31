/*
* @Author: Vinson
* @Date:   2022-12-13 08:55:44
* @Last Modified by:   Vinson
* @Last Modified time: 2022-12-13 18:08:13
*/


import React, { Component } from 'react';
import { connect } from 'dva';
import { injectIntl } from 'react-intl';
import { Scrollbars } from 'react-custom-scrollbars';

import { zkTools, ZKOriginalComponents } from 'zkFramework';
import styles from './styles.less';
const { zkToolsUtils, zkToolsMsg } = zkTools;
const { ZKDrawer, ZKEmpty } = ZKOriginalComponents;

class CInitFileView extends Component {
	constructor(props) {
        super(props);
        this.state = {
            spinning: false,
        };
    };

    render() {
        let { mApp, mFileDirectory, dispatch, intl, loading } = this.props;
        return (
        	<div className = { `${styles.zk_file_div} ${styles.zk_file_empty_div}` }>
        		<ZKEmpty className = { `${styles.zk_file_div_empty}`} />
        	</div>
        )
    }
}

export default injectIntl(connect(({ mApp, mFile, loading }) => ({ mApp, mFile, loading }))(CInitFileView));



