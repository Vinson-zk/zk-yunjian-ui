/**
 *
 * @Author: Vinson
 * @Date: 2020-08-13 20:47:21
 * @Last Modified by:   Vinson
 * @Last Modified time: 2022-12-06 11:16:42
 */


// import router from "./router/zh_CN"
// import sample from "./sample/zh_CN"

const router = require('./router/zh_CN');
const sample = require('./example/zh_CN');

const msg = {
    "sample.table.col1":"列1",
    "sample.table.col2":"列2",
	"sample.table.col3":"列3",
    "sample.table.col4":"列4",
	"sample.table.col5":"列5",
    "sample.table.col6":"列6",
	"sample.table.col7":"列7",
	
	"sample.components.original.anchor":"ZKAnchor 锚点",
	"sample.components.original.button":"ZKButton 按钮",
	"sample.components.original.col":"ZKCol 列",
	"sample.components.original.datePicker":"ZKDatePicker 日期选择",
	"sample.components.original.form":"ZKForm 表单",
	"sample.components.original.input":"ZKInput 输入框",
	"sample.components.original.inputNumber":"ZKInputNumber 数字输入框",
	"sample.components.original.modal":"ZKModal 模态框",
	"sample.components.original.popconfirm":"ZKPopconfirm 确认提示",
	"sample.components.original.radio":"ZKRadio 单先框",
	"sample.components.original.row":"ZKRow 行",
	"sample.components.original.select":"ZKSelect 选择框",
	"sample.components.original.spin":"ZKSpin 檬板",
	"sample.components.original.switch":"ZKSwitch 开头",
	"sample.components.original.talbe":"ZKTable 表格",
	"sample.components.original.transfer":"穿梭框",
	"sample.components.original.tree":"树形控件",
	"sample.components.original.treeSelect":"树形选择",

	"sample.components.custom.autoMenu":"ZKAutoMenu 菜单",
	"sample.components.custom.autoTable":"ZKAutoTable 自动表格",
	"sample.components.custom.breadcrumb":"ZKBreadcrumb 面包屑",
	"sample.components.custom.dateFormatPicker":"ZKDateFormatPicker 日期格式",
	"sample.components.custom.detailGrid":"ZKDetailGrid 明细页面行例",
	"sample.components.custom.editForm":"ZKEditForm 编辑",
	"sample.components.custom.icon":"图标",
	"sample.components.custom.inputJson":"ZKInputJson 编辑JSON",
	"sample.components.custom.languageSelect":"ZKLanguageSelect 国际化",
	"sample.components.custom.logo":"ZKLogo",
	"sample.components.custom.navigation":"ZKNavigation 导航栏",
	"sample.components.custom.optRow":"ZKOptRow 操作行",
	"sample.components.custom.pageSelect": "ZKPageSelect 下拉分页",
	"sample.components.custom.permission":"ZKPermission 权限",
	"sample.components.custom.router":"ZKRouter 路由",
	"sample.components.custom.scrollTable":"ZKScrollTable 滚动条表格",
	"sample.components.custom.searchRow":"ZKSearchRow 查询行",
	"sample.components.custom.sider":"ZKSider 滑块",
	"sample.components.custom.popoverPanel":"弹窗菜单",
	"sample.components.custom.textEditor":"ZKTextEditor 富文本框",
	"sample.components.custom.touchControl":"触控点",
	"sample.components.custom.upload":"ZKUpload 上传",
	"sample.components.custom.userDropDown":"ZKUserDropDown 用户下拉框",
	"sample.components.custom.versionInfo":"ZKVersionInfo 版本信息",
	"sample.components.custom.editJsonArray":"ZKEditJsonArray Json 数组编辑",


	"sample.general.function":"公共方法或配置",
	"sample.business.example":"业务样例"
}

module.exports = Object.assign(msg, router, sample);