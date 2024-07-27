/**
 *
 * @Author: Vinson
 * @Date: 2020-08-11 22:29:22
 * @Last Modified by: runoob
 * @Last Modified time: 2023-09-21 22:21:05
 */

import React from 'react';

import styles from "./styles.less";

const FInitLogo = ({ logoImgUrl }) => {

    return <div className={styles.zk_logo}>{logoImgUrl ? (<img src={logoImgUrl} />) : ''}</div>
}

export default FInitLogo;


