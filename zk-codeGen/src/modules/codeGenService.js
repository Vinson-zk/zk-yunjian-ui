/**
 *
 * @Author: Vinson
 * @Date: 2021-02-14 12:23:01
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-03-29 18:18:45
 */

import { zkTools } from 'zkFramework';
const { zkToolsAjax } = zkTools;

import menus from "../../mock/data.codeGen.menus.js";

export async function getMenus(){
    return {
        code: "zk.0",
        msg: "",
        data: menus.menus
    }
}