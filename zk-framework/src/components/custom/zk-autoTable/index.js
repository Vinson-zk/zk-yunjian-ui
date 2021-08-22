/**
 *
 * @Author: Vinson
 * @Date: 2020-08-11 11:19:39
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-11 11:21:49
 */

import React, { Component } from 'react';
// import PropTypes from 'prop-types';

class CInitAutoTable extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    // props.dispatch({type: 'xxx/xxx', payload:{}})
  }

  static getDerivedStateFromProps(props, state) {
    // TODO props.dispatch({type: 'xxx/xxx', payload:{}})
    return true
  }

  render() {
    return (<div>AutoTable</div>);
  }

}

export default CInitAutoTable;

