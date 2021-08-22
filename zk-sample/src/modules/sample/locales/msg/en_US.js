/**
 *
 * @Author: Vinson
 * @Date: 2020-08-13 20:47:33
 * @Last Modified by:   Vinson
 * @Last Modified time: 2021-06-30 19:54:53
 */


// import router from "./router/en_US"
// import sample from "./sample/en_US"

const router = require('./router/en_US');
const sample = require('./example/en_US');

const msg = {
    "sample.table.col1":"Col 1",
    "sample.table.col2":"Col 2",
	"sample.table.col3":"Col 3",
	
	"sample.components.original.anchor":"ZKAnchor",
	"sample.components.original.button":"ZKButton",
	"sample.components.original.col":"ZKCol",
	"sample.components.original.datePicker":"ZKDatePicker",
	"sample.components.original.form":"ZKForm",
	"sample.components.original.input":"ZKInput",
	"sample.components.original.inputNumber":"ZKInputNumber",
	"sample.components.original.modal":"ZKModal",
	"sample.components.original.popconfirm":"ZKPopconfirm",
	"sample.components.original.radio":"ZKRadio",
	"sample.components.original.row":"ZKRow",
	"sample.components.original.select":"ZKSelect",
	"sample.components.original.spin":"ZKSpin",
	"sample.components.original.talbe":"ZKTable",
	"sample.components.original.transfer":"ZKTransfer",

	"sample.components.custom.autoMenu":"ZKAutoMenu",
	"sample.components.custom.autoTable":"ZKAutoTable",
	"sample.components.custom.breadcrumb":"ZKBreadcrumb",
	"sample.components.custom.dateFormatPicker":"ZKDateFormatPicker",
	"sample.components.custom.detailGrid":"ZKDetailGrid",
	"sample.components.custom.editForm":"ZKEditForm",
	"sample.components.custom.icon":"Icon",
	"sample.components.custom.inputJson":"ZKInputJson",
	"sample.components.custom.languageSelect":"ZKLanguageSelect",
	"sample.components.custom.logo":"ZKLogo",
	"sample.components.custom.navigation":"ZKNavigation",
	"sample.components.custom.optRow":"ZKOptRow",
	"sample.components.custom.pageSelect": "ZKPageSelect",
	"sample.components.custom.permission":"ZKPermission",
	"sample.components.custom.router":"ZKRouter",
	"sample.components.custom.scrollTable":"ZKScrollTable",
	"sample.components.custom.searchRow":"ZKSearchRow",
	"sample.components.custom.sider":"ZKSider",
	"sample.components.custom.textEditor":"ZKTextEditor",
	"sample.components.custom.upload":"ZKUpload",
	"sample.components.custom.userDropDown":"ZKUserDropDown",
	"sample.components.custom.versionInfo":"ZKVersionInfo",

	"sample.general.function":"General purpose Function or Confing",
	"sample.business.example":"Business Example",
}

module.exports = Object.assign(msg, router, sample);