/**
 *
 * @Author: Vinson
 * @Date: 2021-02-16 21:13:37
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-05-09 23:46:29
 */

// sysRes
import msg_sysResNav from "./msg/res/sysNav/en_US";
import msg_sysResMenu from "./msg/res/sysMenu/en_US";
import msg_sysResDictType from "./msg/res/sysResDictType/en_US";
import msg_sysResDict from "./msg/res/sysResDict/en_US";
import msg_sysResApplicationSystem from "./msg/res/sysResApplicationSystem/en_US";
import msg_sysResRequestChannel from "./msg/res/sysResRequestChannel/en_US";
import msg_sysResFuncApi from "./msg/res/sysResFuncApi/en_US";
// sysSettings
import msg_sysSetItem from "./msg/settings/sysSetItem/en_US";
import msg_sysSetCollection from "./msg/settings/sysSetCollection/en_US";
// sysOrg
import msg_sysOrgCompany from "./msg/org/sysOrgCompany/en_US";
import msg_sysOrgDept from "./msg/org/sysOrgDept/en_US";
import msg_sysOrgRank from "./msg/org/sysOrgRank/en_US";
import msg_sysOrgRole from "./msg/org/sysOrgRole/en_US";
import msg_sysOrgUser from "./msg/org/sysOrgUser/en_US";
import msg_sysOrgUserType from "./msg/org/sysOrgUserType/en_US";
// sysAuth
import msg_sysAuthDefined from "./msg/auth/sysAuthDefined/en_US";


export default {
    projectName: "zkSystem",
    name: "English",
    locale: "en-US",
    messages: {
        ...msg_sysResNav, ...msg_sysResMenu, ...msg_sysResDictType, ...msg_sysResDict, ...msg_sysResFuncApi, 
        ...msg_sysResApplicationSystem, ...msg_sysResRequestChannel, 

        ...msg_sysSetItem, ...msg_sysSetCollection,

        ...msg_sysOrgCompany, ...msg_sysOrgDept, ...msg_sysOrgRank, ...msg_sysOrgRole, ...msg_sysOrgUser, ...msg_sysOrgUserType,

        ...msg_sysAuthDefined
    }
}