/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 16:42:24
 * @Last Modified by: runoob
 * @Last Modified time: 2023-09-23 23:06:40
 */

import React from 'react';
import { injectIntl } from 'react-intl';

import styles from "../styles.less";
import { zkTools, ZKCustomComponents } from "zkFramework";
const { ZKContentFormat, ZKRouter } = ZKCustomComponents;
const { zkToolsMsg, zkToolsNavAndMenu } = zkTools;
const { Switch, Link, Route } = ZKRouter;

let routers = null;

const FInitExampleIndex = ({ match, dvaApp, menus = [], dynamicImportHelper, intl }) => {

  if (routers == null) {
    routers = zkToolsNavAndMenu.getRoutesByMenus(dvaApp, match.path, menus || [], dynamicImportHelper);
  }
  let liLinks = [];
  menus.forEach(item => {
    liLinks.push(
      <li key={`${item.pkId}-li-link`} >
        <Link key={`${item.pkId}-link`} to={`${match.path}/${item.path}`}>{zkToolsNavAndMenu.getMenuName(item, intl)}</Link>
      </li>
    )
  })

  return (
    <Switch>
      <Route exact path={`${match.path}`} render={() => {
        return (
          <ZKContentFormat className={styles.sample_detail_panel} >
            <ZKContentFormat className={styles.sample_detail_section} title = {`${zkToolsMsg.msgFormatByIntl(intl, 'sample.business.example')} ${zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}`}>
              <ul>
                {liLinks}
              </ul>
            </ZKContentFormat>
            <br />
          </ZKContentFormat>
        )
      }} />
      {routers || []}
    </Switch>
  )
}

export default injectIntl(FInitExampleIndex);
