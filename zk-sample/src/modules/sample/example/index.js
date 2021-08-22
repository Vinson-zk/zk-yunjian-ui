/**
 *
 * @Author: Vinson
 * @Date: 2020-08-14 16:42:24
 * @Last Modified by: Vinson
 * @Last Modified time: 2020-08-17 15:39:16
 */

import React from 'react';
import { injectIntl } from 'react-intl';

import styles from "../styles.less";
import { zkTools, ZKCustomComponents } from "zkFramework";

const { ZKRouter } = ZKCustomComponents;
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
      <li key={`${item.id}-li-link`} >
        <Link key={`${item.id}-link`} to={`${match.path}/${item.path}`}>{zkToolsNavAndMenu.getMenuName(item, intl)}</Link>
      </li>
    )
  })

  return (
    <Switch>
      <Route exact path={`${match.path}`} render={() => {
        return (
          <div className={styles.sample_detail_panel}>
            <h1>{zkToolsMsg.msgFormatByIntl(intl, 'sample.business.example')} zkJsEvent {zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</h1>
            <div className={styles.sample_detail_section} >
              <ul>
                {liLinks}
              </ul>
            </div>
          </div>
        )
      }} />
      {routers || []}
    </Switch>
  )
}

export default injectIntl(FInitExampleIndex);
