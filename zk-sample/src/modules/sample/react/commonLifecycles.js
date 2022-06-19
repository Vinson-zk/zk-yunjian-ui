/*
* @Author: Vinson
* @Date:   2022-03-28 15:10:20
* @Last Modified by:   Vinson
* @Last Modified time: 2022-03-28 23:32:11
* 
* 
* 
*/


import React from 'react';
import {Prompt} from 'react-router-dom';
import { injectIntl } from 'react-intl';
import { connect } from 'dva';
// import { Modal } from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';

import { zkTools, ZKOriginalComponents, ZKCustomComponents } from "zkFramework";
import { docco } from '../helper';
import styles from "../styles.less";

import img  from "../../../assets/picture/react-16.4.jpg";

const { ZKButton } = ZKOriginalComponents;
const { ZKLogo } = ZKCustomComponents;
const { zkToolsNavAndMenu, zkToolsMsg } = zkTools;

class CInitReactCommonLifecycles extends React.Component {

    // 1、构造函数
    constructor(props) {
        super(props);
        this.state = {
            isBlock:true, // 是否需要提示离开此页面
            componentState: 0,
        }
        console.log("[^_^:20181115-2309-001] CReactDva:React-Lifecycle constructor 构造函数 ", props);

        props.history.listen(location=>{ // 当路由地址变化时：location.pathname != props.location.pathname
            console.log("[^_^:20200831-1622-001] CReactDva:React-Lifecycle props.history.listen: ", location.pathname, props.location.pathname);
        });
    }

    // 2、调用render方法之前调用，无论是在初始安装还是后续更新。它应该返回一个更新状态的对象，或者返回null以不更新任何状态。
    static getDerivedStateFromProps(props, state) {
        console.log("[^_^:20181115-2309-002] CReactDva:React-Lifecycle getDerivedStateFromProps ", props.location.pathname)
        return true;
    }

    // 3、更新时调用，此方法仅作为性能优化存在。不要依赖它来“防止”渲染
    shouldComponentUpdate(nextProps, nextState) {
        console.log("[^_^:20181115-2309-003] CReactDva:React-Lifecycle shouldComponentUpdate ", nextProps.location.pathname, this.props.location.pathname)
        return true;
    }

    // 4、 类组件中唯一必需的方法, 返回 JSX 元素
    render() {

        const { dispatch, mReactDva = {}, dvaApp, intl } = this.props;
        console.log("[^_^:20181115-2309-004] CReactDva:React-Lifecycle render ")

        const changeCompoentState = () => {
            console.log("[^_^:20181116-2341-001] changeCompoentState");
            this.setState({ componentState: this.state.componentState + 1 })
        }

        return (
            <div className={styles.sample_detail_panel}>
                <h1> react 组件生命周期学习 {zkToolsMsg.msgFormatByIntl(intl, 'global.app.info.declare')}</h1>
                <div className={styles.sample_detail_section}>
                    <SyntaxHighlighter language='jsx' style={docco}>
                        {[
                            "react 组件生命周期学习；官网组件生命周期说明图，此图说明的是 React 16.4 以上的版本的生命周期；",
                        ].join('\n')
                    }
                    </SyntaxHighlighter>
                    官网查看地址：<a href='https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram'>https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram</a>
                	<img src = {img} style = {{width:'100%'}} />
                </div>
                <div className={styles.sample_detail_section}>
                    <h2>组件状态-componentState</h2>
                    <div>
                        <SyntaxHighlighter language='jsx' style={docco}>
                            {[
                                "组件状态-componentState:",
                                "组件状态发生了变化，请查看 console 日志中的生命周期打印结果：",
                                this.state.componentState
                            ].join('\n')}
                        </SyntaxHighlighter>
                        <ZKButton onClick={e => { changeCompoentState() }}>changeCompoentState</ZKButton>
                    </div>
                </div>
                <div className={styles.sample_detail_section}>
                    <h2>Mounting</h2>
                    <div>
                        <SyntaxHighlighter language='jsx' style={docco}>
                            {[
                                "constructor()",
                                "",
                            ].join('\n')}
                        </SyntaxHighlighter>
                        <SyntaxHighlighter language='jsx' style={docco}>
                            {[
                                "static getDerivedStateFromProps()",
                                "",
                            ].join('\n')}
                        </SyntaxHighlighter>
                        <SyntaxHighlighter language='jsx' style={docco}>
                            {[
                                "render()",
                                "",
                            ].join('\n')}
                        </SyntaxHighlighter>
                        <SyntaxHighlighter language='jsx' style={docco}>
                            {[
                                "componentDidMount()",
                                "",
                            ].join('\n')}
                        </SyntaxHighlighter>
                    </div>
                </div>
                <div className={styles.sample_detail_section}>
                    <h2>Updating</h2>
                    <div>
                        <SyntaxHighlighter language='jsx' style={docco}>
                            {[
                                "static getDerivedStateFromProps()",
                                "",
                            ].join('\n')}
                        </SyntaxHighlighter>
                        <SyntaxHighlighter language='jsx' style={docco}>
                            {[
                                "shouldComponentUpdate()",
                                "",
                            ].join('\n')}
                        </SyntaxHighlighter>
                        <SyntaxHighlighter language='jsx' style={docco}>
                            {[
                                "render()",
                                "",
                            ].join('\n')}
                        </SyntaxHighlighter>
                        <SyntaxHighlighter language='jsx' style={docco}>
                            {[
                                "getSnapshotBeforeUpdate()",
                                "",
                            ].join('\n')}
                        </SyntaxHighlighter>
                        <SyntaxHighlighter language='jsx' style={docco}>
                            {[
                                "componentDidUpdate()",
                                "",
                            ].join('\n')}
                        </SyntaxHighlighter>
                    </div>
                </div>
                <div className={styles.sample_detail_section}>
                    <h2>Unmounting</h2>
                    <div>
                        <SyntaxHighlighter language='jsx' style={docco}>
                            {[
                                "componentWillUnmount()",
                                "",
                            ].join('\n')}
                        </SyntaxHighlighter>
                    </div>
                </div>
            </div>
        )
    }

    // 5、在最近呈现的输出被提交; 例如DOM之前调用。
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[^_^:20181115-2309-005] CReactDva:React-Lifecycle getSnapshotBeforeUpdate ");
        return true;
    }

    // 6、创建时；安装组件（插入树中）后立即调用；此方法是设置任何订阅的好地方。如果您这样做，请不要忘记取消订阅componentWillUnmount()。
    componentDidMount() {
        console.log("[^_^:20181115-2309-006.1] CReactDva:React-Lifecycle componentDidMount ");
    }

    // 6、修改时；更新发生后立即调用。初始渲染不会调用此方法。
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("[^_^:20181115-2309-006.2] CReactDva:React-Lifecycle componentDidUpdate ", prevProps.location.pathname, this.props.location.pathname);
    }

    // 6、卸载时；在卸载和销毁组件之前立即调用。在此方法中执行任何必要的清理，例如使计时器无效，取消网络请求或清除在其中创建的任何订阅
    componentWillUnmount() {
        console.log("[^_^:20181115-2309-006.3] CReactDva:React-Lifecycle componentWillUnmount ", this.props);
    }

    // 7、在后代组件抛出错误后调用此生命周期。它接收作为参数抛出的错误，并应返回值以更新状态。
    static getDerivedStateFromError(error) {
        console.log("[^_^:20181115-2309-007] CReactDva:React-Lifecycle getDerivedStateFromError ");
    }

    // 8、在后代组件抛出错误后调用此生命周期
    componentDidCatch(error, info) {
        console.log("[^_^:20181115-2309-008] CReactDva:React-Lifecycle componentDidCatch ");
    }

}

// export default CInitReactDva;
export default injectIntl(connect(({  }) => ({  }))(CInitReactCommonLifecycles));


