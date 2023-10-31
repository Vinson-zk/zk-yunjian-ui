/**
 * 一些项目公共方法，暂未使用
 * @Author: Vinson
 * @Date: 2020-08-11 16:07:22
 * @Last Modified by: vinson
 * @Last Modified time: 2023-09-04 23:10:29
 */

/**
 * 取页面右边内容栏的滚动条 DIV；一般在锚点设置容器DIV 时使用；
 * @return {object} dom 节点对象
 */
const f_getContenScrollbarsDiv = () => {
  return document.getElementById("right-content").children[0];
}

// 取记录的用户操作时的分页数量
const f_getPageSize = ()=>{
  let pageSize = localStorage.getItem(globalAppConfig.localKey.pageSize) || 10;
  return pageSize*1;
}

// 设置记录的用户操作时的分页数量
const f_setPageSize = (pageSize=10)=>{
  return localStorage.setItem(globalAppConfig.localKey.pageSize, pageSize);
}

// 将响应的分页数据，转为 Table 的分页数据
const f_convertResPage=(resPage)=>{
  return {
    "current": pageData.pageNo,
    "total": pageData.totalCount,
    "pageSize": pageData.pageSize,
  }
}
// 分页请求参数转换
const f_convertPageParam=(pagination={})=>{
  let pageParams = {};
  pageParams[globalAppConfig.transferKey.page.pageNo] = (pagination.current||1)-1;
  pageParams[globalAppConfig.transferKey.page.pageSize] = pagination.pageSize||10;
  return pageParams;
}

//
const f_convertSortParam=(filter, sorter)=>{
  filter = filter || {};
  if(sorter && sorter.field){
    filter[globalAppConfig.transferKey.sorter.column] = sorter.field;
    if(sorter.order === "descend"){ // ascend descend
      filter[globalAppConfig.transferKey.sorter.mode] = "DESC";
    }else{
      filter[globalAppConfig.transferKey.sorter.mode] = "ASC";
    }
  }else{
    if(filter){
      delete filter[globalAppConfig.transferKey.sorter.column];
      delete filter[globalAppConfig.transferKey.sorter.mode];
    }
  }
  return filter;
}

// 请求的公共处理函数，特殊处理，请自行定义
const f_resPublicDispose = res=>{
  let filterCodes = ["zk.000002"];
  if(filterCodes.includes(res.code)){
    return true;
  } 
  return false
}

export default {
  getContenScrollbarsDiv: f_getContenScrollbarsDiv,    // 取页面右边内容栏的滚动条 DIV；一般在锚点设置容器DIV 时使用；
  getPageSize: f_getPageSize,   // 取记录的用户操作时的分页数量；
  setPageSize: f_setPageSize,   // 设置记录的用户操作时的分页数量
  // convertResPage:f_convertResPage, // 将响应的分页数据，转为 Table 的分页数据
  convertPageParam: f_convertPageParam,
  convertSortParam: f_convertSortParam,
  resPublicDispose: f_resPublicDispose, //
}
