/**
 *
 * @Author: Vinson
 * @Date: 2020-08-11 22:29:22
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-12 09:45:35
 */

import React from 'react';

import styles from "./styles.less";

const FInitLogo = ({ logoImgUrl }) => {

    return <div className={styles.logo}>{logoImgUrl ? (<img src={logoImgUrl} />) : ''}</div>
}

export default FInitLogo;


