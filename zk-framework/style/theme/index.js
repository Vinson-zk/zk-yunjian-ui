/*
* @Author: Vinson
* @Email: binary_space@126.com
* @QQ: 1035862795
* @Wechat: 1035862795
* @Date: 2023-09-11 00:02:33
* @Last Modified by: runoob
* @Last Modified time: 2023-10-08 10:39:10
*/
const { theme } = require('antd/lib');
const { compactAlgorithm, darkAlgorithm, defaultAlgorithm, defaultConfig, defaultSeed, getDesignToken, useToken } = theme;

// theme antd
const themeAntd = require('./antd/index.js');
themeAntd.map = {...themeAntd.map, ...defaultAlgorithm({...defaultSeed, ...themeAntd.base})};

// theme default
const themeDefault = require('./default/index.js');
themeDefault.map = {...themeDefault.map, ...defaultAlgorithm({...defaultSeed, ...themeDefault.base})};
// console.log("[^_^:20230926-0021-001] themeDefault.map:", themeDefault.map);

// theme dark
const themeDark = require('./dark/index.js');
themeDark.map = {...themeDark.map, ...darkAlgorithm({...defaultSeed, ...themeDark.base}), ...{
	// 'colorText': '#fff',
	// 'colorTextBase': "#ffffff",
	// 'colorText':  "#ffffff",
	// 'colorTextBase':  "#ffffff",
	// 'colorTextDescription':  "#ffffff",
	// 'colorTextDisabled':  "#ffffff",
	// 'colorTextHeading':  "#ffffff",
	// 'colorTextLabel':  "#ffffff",
	// 'colorTextLightSolid':  "#ffffff",
	// 'colorTextPlaceholder':  "#ffffff",
	// 'colorTextQuaternary':  "#ffffff",
	// 'colorTextSecondary':  "#ffffff",
	// 'colorTextTertiary':  "#ffffff",
	// 'colorPrimaryText': "#ffffff",
	// 'colorPrimaryTextActive': "#ffffff",
	// 'colorPrimaryTextHover': "#ffffff",
	// 'colorBorder': "#ffffff",
}};
// console.log("[^_^:20230926-0021-001] themeDark.map:", themeDark.map);

// theme zk
const themeZk = require('./zk/index.js');
themeZk.map = {...themeZk.map, ...defaultAlgorithm({...defaultSeed, ...themeZk.base})};
// console.log("[^_^:20230926-0021-001] themeZk.map:", themeZk.map);

const zkTheme = {
	"antd": themeAntd,
	"default": themeDefault,
	"dark": themeDark,
	"zk": themeZk,
}

const f_changeStyleCssVal = (themeObj)=>{
	zkJsUtils.changeStyleCssVal(themeObj.map, 
	    ['colorPrimary',
	    'colorPrimaryActive',
	    'colorPrimaryBg',
	    'colorPrimaryBgHover',
	    'colorPrimaryBorder',
	    'colorPrimaryBorderHover',
	    'colorPrimaryHover',
	    'colorPrimaryText',
	    'colorPrimaryTextActive',
	    'colorPrimaryTextHover',
	    'colorBgBase',
	    'colorBgTextActive',
	    'colorBgTextHover',
	    'colorBorder',
	    'colorBorderBg',
	    'colorFill',
	    'colorHighlight',
	    'colorLink',
	    'colorLinkActive',
	    'colorLinkHover',
	    'colorText',
	    'colorTextBase',
	    'colorTextDisabled',
	    'colorTextLabel',
	    'colorWhite',
	    'colorError',
	    'colorInfo',
	    'colorSuccess',
	    'colorWarning',
	    'colorFill',
	    'colorFillAlter',
	    'colorFillContent',
	    'colorFillContentHover',
	    'colorFillQuaternary',
	    'colorFillSecondary',
	    'colorFillTertiary',
	    'fontFamily',
	    'fontSize',
	    'borderRadius',
	    'borderRadiusLG',
	    'borderRadiusOuter',
	    'borderRadiusSM',
	    'borderRadiusXS']
	);
}

let changeStyleCssVal = f_changeStyleCssVal;
export { 
	zkTheme as default,
	changeStyleCssVal 
}


