/*
* @Author: Vinson
* @Date:   2021-03-11 18:13:59
* @Last Modified by:   Vinson
* @Last Modified time: 2022-12-06 08:49:31
* 
* 
* 
*/

import React from 'react';
// import { Table } from 'antd';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { Scrollbars } from 'react-custom-scrollbars';

import $ from 'zkJquery';

import { zkToolsMsg, zkToolsUtils } from '../../../tools';
import { ZKTable } from '../../original';
import styles from './styles.less';

/*** 滚动条 滚动条添加样式 */
const f_scrollAddClass = (scrollNode, tableDom)=>{
	if(tableDom){
		// 滚去条不在最左边
    	if(scrollNode.getScrollLeft() != 0){
    		if(!$(tableDom).hasClass("ant-table-ping-left")){
    			$(tableDom).addClass("ant-table-ping-left");
    		}
    	}else{
    		$(tableDom).removeClass("ant-table-ping-left");
    	}

    	if((scrollNode.getScrollLeft() + scrollNode.getClientWidth()) != scrollNode.getScrollWidth()){
    		if(!$(tableDom).hasClass("ant-table-ping-right")){
    			$(tableDom).addClass("ant-table-ping-right");
    		}
    	}else{
    		$(tableDom).removeClass("ant-table-ping-right");
    	}
	}	    	
}

/*** 滚动条 计算 表头联动 */
const f_calcScrollLink = (scrollNode, loction)=>{

	// console.log("[^_^:20210312-1252-001] scrollbars.scrollLeft ", scrollNode.scrollLeft());  // undefined 
	// console.log("[^_^:20210312-1252-001] scrollbars.getScrollWidth ", scrollNode.getScrollWidth());
	// console.log("[^_^:20210312-1252-001] scrollbars.getScrollLeft ", scrollNode.getScrollLeft());
	// console.log("[^_^:20210312-1252-001] scrollbars.getScrollLeftForOffset ", scrollNode.getScrollLeftForOffset());
	// console.log("[^_^:20210312-1252-001] scrollbars.getClientWidth ", scrollNode.getClientWidth());
	// clientWidth 770; scrollWidth 787; scrollLeft 0
	// clientWidth 770; scrollWidth 787; scrollLeft 0

 	// scroll 节点为的 dom
	let scrollDom = scrollNode.container;

	// 滚去条联动表头为，scroll 节点 的父节点的前一个节点
	let targetDom = scrollDom ? scrollDom.parentElement : undefined;
	targetDom = targetDom ? targetDom.previousSibling : undefined;
	// console.log("[^_^:20210312-1252-001] targetDom ", targetDom);
	// 滚去条联动
	if(targetDom){
		if(loction.x){
			targetDom.scrollLeft = loction.x;
		}

		if(loction.y){
			targetDom.scrollTop = loction.y;
		}
	}

	// 表格节点
	let tableDom = targetDom ? targetDom.parentElement : undefined;
	tableDom = tableDom ? tableDom.parentElement : undefined;
	f_scrollAddClass(scrollNode, tableDom);
}

// 生成随机字符串
const f_randomId = ()=>{
	return Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
}

/*** 滚动条优化表格 */
class CInitScrollTable extends React.Component {

	scrollbarsRef = React.createRef();

	tableId = f_randomId();

	constructor(props) {
		super(props);
		this.state = {
			scrollY: 400
		}
	}

	// 滚动结束，记下滚动位置
    handleScrollStop = () => {
        if (this.scrollbarsRef.current){
            this.scrollTop = this.scrollbarsRef.current.getScrollTop();
        }
    };

    onScrollbars = (e)=>{
    	// console.log("[^_^:20210312-1252-001] onScrollbars: ", this.scrollbarsRef);
    	if(this.scrollbarsRef.current){
    		let sc = this.scrollbarsRef.current;
	    	f_calcScrollLink(sc, {x: e.target.scrollLeft });
    	}else{
    		if(console){
    			console.error("[>_<:20210312-1326-001] react-custom-scrollbars 滚去条引用不存在。")
    		}
    	}
    }

	render(){
		if(this.props.scroll){
			let _this = this;
			let { autoHeight, scroll, className, components, ...itemProps } = _this.props;
			
			let scrollY = 0;
			if(autoHeight){
				// 自动高度
				scrollY = this.state.scrollY;
				scroll.y = this.state.scrollY;
			}else{
				scrollY = _this.props.scroll.y;
			}

			let scrollBarsProps = {};
			let scrollBarsStyle = {}
			let tableHiddenScroolClassName = '';

			if(scrollY){
				scrollBarsStyle['height'] = '30vh';
				if(!isNaN(scrollY)){
					scrollBarsStyle['height'] = scrollY;
				}
				tableHiddenScroolClassName += ' ' + styles.s_scrollbars_table_y_hidden;
			}else{
				scrollBarsProps['autoHeight'] = true;
				scrollBarsProps['autoHeightMax'] = 900;
			}
			if(_this.props.scroll.x){
				scrollBarsStyle['width'] = 'auto';
				// if(!isNaN(this.state.scroll.x)){
				// 	scrollBarsStyle['width'] = this.state.scroll.x;
				// }
				tableHiddenScroolClassName += ' ' + styles.s_scrollbars_table_x_hidden;
			}
			// console.log("[^_^:20210312-1705-001] scrollBarsProps:", scrollBarsProps, scrollBarsStyle);

			// 用react-custom-scrollbars包裹住表格内容
	        const renderTableComponents = (tableProps)=>{
	            // console.log("[^_^:20210312-0942-001] renderTableComponents: ", tableProps);
	            const { style, children } = tableProps;
	            return (
	                <Scrollbars ref = { _this.scrollbarsRef } className = {styles.s_body_scrollbars} { ...scrollBarsProps } style = {scrollBarsStyle}
	                	onScroll = { _this.onScrollbars } onScrollStop = { _this.handleScrollStop } >
	                    <table style = { style }>{ children }</table>
	                </Scrollbars>
	            )
	        }

	        // const renderVirtualList = (rawData, ps) => {
	        // 	console.log("[^_^:20210312-0942-001] renderVirtualList: ", rawData, ps);
	        // 	return rawData;
	        // }

	        const tableComponent = {
	        	...components,
	        	// body: renderVirtualList,
	        	table: renderTableComponents,
	        }

			return (autoHeight ?
				(<div id = {this.tableId} className = {`${styles.s_scrollbars_table_div}`} >
					<ZKTable { ...itemProps } scroll = {scroll} className = {`${styles.s_scrollbars_table} ${styles.s_flex} ${tableHiddenScroolClassName} ${className}`} components = { tableComponent } sticky = {true} />
				</div>)
				: (<ZKTable { ...itemProps } scroll = {scroll} className = {`${styles.s_scrollbars_table} ${tableHiddenScroolClassName} ${className}`} components = { tableComponent } sticky = {true} />)
			)
		}else{
			return <ZKTable { ...this.props } />
		}
	}

	// 计算表格填满时的高度
	calcTableHeight = ()=>{
		// 取 table dom
		let scrollY = 600;

		let tableDiv = $(`#${this.tableId}`);
		let tableDom = $('.ant-table', tableDiv);
		// console.log("[^_^: 20220415-1918-001] dom:", tableDiv, tableDom);
		// console.log("[^_^: 20220415-1918-002] ZKTable.clientHeight:", tableDiv[0].clientHeight, tableDom[0].parentElement.clientHeight, tableDom[0].clientHeight);
		// console.log("[^_^: 20220415-1918-003] ZKTable.calcTableHeight:", ZKTable.calcTableHeight(tableDom[0]));

		if(tableDom[0]){
			if(this.props.pagination){
				if(this.props.pagination.position && (this.props.pagination.position instanceof Array)){
					scrollY = ZKTable.calcTableHeight(tableDom[0], this.props.pagination.position.length);
				}else{
					scrollY = ZKTable.calcTableHeight(tableDom[0], 1);
				}
			}else{
				scrollY = ZKTable.calcTableHeight(tableDom[0], 0);
			}
		}
		// console.log("[^_^: 20220415-1918-004] scrollY:", scrollY);
		this.setState({ scrollY: scrollY });
	}

	componentWillUnmount(){
		if(this.props.scroll && this.props.autoHeight){
        	window.removeEventListener('resize', this.calcTableHeight);
        }
    }
	componentDidMount() {
        //  覆盖 ant design 自带滚动条样式
        // document.querySelector('.ant-table-scroll > .ant-table-body').styles.overflow='hidden';
        // 滚动条组件ref，重新设置滚动位置
        // this.scrollbarsRef = React.createRef();

        if(this.props.scroll && this.props.autoHeight){
        	this.calcTableHeight();
			window.addEventListener('resize', this.calcTableHeight);
        }

   //      if(this.scrollbarsRef.current){

		 //    // scroll 节点为的 dom
			// let scrollDom = this.scrollbarsRef.current.container;

			// // 滚去条联动表头为，scroll 节点 的父节点的前一个节点
			// let targetDom = scrollDom ? scrollDom.parentElement : undefined;
			// targetDom = targetDom ? targetDom.previousSibling : undefined;

   //      	// console.log("==== ", scrollDom.firstChild);

   //      	$(targetDom).scroll(()=>{
   //      		console.log("[^_^:20210330-1538-001] scroll 表头滚动，scrollLeft：", targetDom.scrollLeft);
   //      		scrollDom.firstChild.scrollLeft = targetDom.scrollLeft;
   //      	})
   //      }

    }
    // 组件重新渲染，重新设置滚动条的位置
	componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.scrollbarsRef.current){
        	f_calcScrollLink(this.scrollbarsRef.current, {x: 0});
            this.scrollbarsRef.current.scrollTop(this.scrollTop);
        }
        /*** 禁不到父节点的滚去条 ***/
   //      if (this.scrollbarsRef.current && this.props.scroll){
		 //        	// scroll 节点为的 dom
			// let scrollDom = this.scrollbarsRef.current.container;
			// if(scrollDom){
			// 	// scroll 节点 的父节点
			// 	let targetDom = scrollDom ? scrollDom.parentElement : undefined;
			// 	console.log("----- ", targetDom)
			// 	if(!this.props.scroll.y){
			// 		targetDom.style.overflow['overflow-y']='hidden';
			// 	}
			// 	if(!this.props.scroll.x){
			// 		targetDom.style.overflow['overflow-x']='hidden';
			// 	}
			// }
   //      }
    }
}

// 定义属性
CInitScrollTable.propTypes = {
    ...ZKTable.propTypes,
	autoHeight: PropTypes.bool,
}
// 定义属性默认值 
CInitScrollTable.defaultProps = {
	...ZKTable.defaultProps,
	autoHeight: false
}


CInitScrollTable.calcTableHeight = ZKTable.calcTableHeight;

export default CInitScrollTable;


