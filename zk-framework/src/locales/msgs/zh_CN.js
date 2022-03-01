const messages = {

	// 全局未知错误信息
	"global.app.msg.success": "成功!",
	"global.app.msg.warning": "未知警告!",
	"global.app.msg.error": "未知错误!",
	"global.app.msg.error.connect.failed": "连接服务器失败!",
	"global.app.msg.error.500": "启禀主公！您要找的文臣武将睡着了！",
	"global.app.msg.error.404": "启禀主公！您要找的文臣武将不知道跑哪去了！",
	"global.app.msg.error.403": "启禀主公！您还需要多读书才有权限求见贤能！",
	"global.app.msg.loading": "等待 ... ... ",
	"global.app.msg.info": "未知消息",
	"global.app.msg.fail": "失败",
	"global.app.msg.beforeunload": "离开当前页后，所编辑的数据将不可恢复",
	"global.app.msg.leave":"确认离开此页面？",
	"global.app.msg.leave.save":"您确定要放弃编辑的内容，离开此页面？",

	// 全局标签
	"global.app.lable.platform": "平台",

	// 全局名称定义
	"global.app.user.nickname": "游客",
	"global.app.info.Unknown": "未知",
	"global.app.info.talbe.total": "总",
	"global.app.info.talbe.total.rowNum": "序号",
	"global.app.info.demo": "示例",
	"global.app.info.declare": "说明",
	"global.app.info.code": "代码",
	"global.app.info.yes": "是",
	"global.app.info.no": "否",
	"global.app.info.man": "男",
	"global.app.info.woman": "女",
	"global.app.info.required": "必须",
	"global.app.info.param": "参数",
	"global.app.info.type": "类型",
	"global.app.info.default": "默认",
	"global.app.info.column.name": "字段名",
	"global.app.info.show": "显示",
	"global.app.info.hide": "隐藏",
	"global.app.info.all": "全部",
	"global.app.info.enable": "启用",
	"global.app.info.disabled": "禁用",

	// 单位全部名
	"global.unit.name.k": "千",
	"global.unit.name.w": "万",
	"global.unit.name.bn": "亿",

	// 全局操作名称
	"global.opt.name._key_name": "操作",
	"global.opt.name._key_settings": "设置",
	"global.opt.name._key_add": "新增",
	"global.opt.name._key_add_child": "添加子项",
	"global.opt.name._key_edit": "修改",
	"global.opt.name._key_del": "删除",
	"global.opt.name._key_login": "登录",
	"global.opt.name._key_logout": "退出",
	"global.opt.name._key_search": "查询",
	"global.opt.name._key_reset": "重置",
	"global.opt.name._key_select": "请选择",
	"global.opt.name._key_back": "返回",
	"global.opt.name._key_ok": "确定",
	"global.opt.name._key_cancel": "取消",
	"global.opt.name._key_save": "保存",
	"global.opt.name._key_submit": "提交",
	"global.opt.name._key_next": "下一个",
	"global.opt.name._key_view": "查看",
	"global.opt.name._key_detail": "详情",
	"global.opt.name._key_expanding": "展开",
	"global.opt.name._key_compact": "收起",
	"global.opt.name._key_version_info": "版本信息",
	"global.opt.name._key_dependenceInfos_info": "依赖信息",
	"global.opt.name._key_copy": "复制",
	"global.opt.name._key_icon.select": "选择图标",
	"global.opt.name._key_icon.select.opt": "单击图标选择",

	// 全局提示名称
	"global.alert.name._key_newMsg": "未读({num})",

	// 全局提示消息
	"global.message.select.data": "请选择数据！",
	"global.message.edit.exit": "您确定要放弃编辑，离开页面？",
	"global.message.edit.reset": "您确定要重置编辑内容？",
	"global.message.no.data": "暂无数据",
	"global.message.no.select.data": "没有选择数据",

	// 全局确认框内容
	"global.popconfirm.title.success": "成功",
	"global.popconfirm.title.info": "提示",
	"global.popconfirm.title.warning": "警告",
	"global.popconfirm.title.error": "错误",
	"global.popconfirm.title.confirm": "确认",
	"global.popconfirm.name.okText": "确认",
	"global.popconfirm.name.cancelText": "取消",
	"global.popconfirm.content.delete": "您确认要删除吗？",
	"global.popconfirm.title.fail": "失败",

	// 全局输入校验
	"global.data.validate.not.null":"不能为空",
	"global.data.validate.url":"请输入正确的 URL",
	"global.data.validate.boolean":"请输入布尔类型",
	"global.data.validate.string":"请输入字符类型",
	"global.data.validate.string.min":"输入字符串长度不能超过 {min}",
	"global.data.validate.string.max":"输入字符串长度不能超过 {max}",
	"global.data.validate.string.rang":"输入字符串长度须介于 {min} 到 {max} 之间",
	"global.data.validate.number":"请输入数字",
	"global.data.validate.number.min":"输入的数字不能小于 {min}",
	"global.data.validate.number.max":"输入的数字不能大于  {max}",
	"global.data.validate.number.rang":"输入的数字须介于 {min} 到 {max} 之间",
	"global.data.validate.integer":"请输入整数",
	"global.data.validate.integer.min":"请输入不小: {min} 的整数",
	"global.data.validate.integer.max":"请输入不大于: {max} 的整字",
	"global.data.validate.integer.rang":"请输入 {min} 到 {max} 之间的整数",
	"global.data.validate.object":"非法输入",
	"global.data.validate.enum":"请输入以下：{value} 选项之一",
	"global.data.validate.email":"请输入有效的邮箱地址",
	"global.data.validate.pattern":"非法输入",
	"global.data.validate.username":"请输入有效用户名[用户名只能是字母、下划线、数字；且必须以字母或下划开头]",
	"global.data.validate.phone":"请输入有效电话号码",

}

/** import 引入时；以下写法都可以 */
// module.exports = messages;
export default messages;


