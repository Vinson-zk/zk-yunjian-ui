/**
 *
 * @Author: Vinson
 * @Date: 2020-08-11 22:29:22
 * @Last Modified by: vinson
 * @Last Modified time: 2025-02-05 16:01:21
 */

import React from 'react';

import styles from "./styles.less";

const FInitLogo = ({ logoImgUrl, ...props }) => {

    return <div className={`${styles.zk_logo} ${styles.zk_logo_click}`} {...props}>
    	{logoImgUrl ? (<img src={logoImgUrl} />) : ''}
    </div>
}

export default FInitLogo;


