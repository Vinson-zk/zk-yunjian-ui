/*
* @Author: Vinson
* @Date:   2023-06-18 23:16:07
* @Last Modified by: runoob
* @Last Modified time: 2023-12-11 10:46:56
*/


import React, { Component } from 'react';

class CInitIndex extends Component {

    constructor(props) {
        super(props);
    }

    static getDerivedStateFromProps(props, state) {
        return true;
    }

    render() {
        
        // <div className = {zkStyles.zk_footer} >opyright © Vinson 2</div>
        return (
            <div>hello react</div>
        )
    }

}

export default CInitIndex;






