/*
* @Author: Vinson
* @Date:   2021-03-07 01:23:55
* @Last Modified by: vinson
* @Last Modified time: 2023-09-06 10:07:07
* 
* 
* 
*/

import React from 'react';
import { injectIntl } from 'react-intl';
import { Collapse } from 'antd';

import Antd4Icon from './antd4Icon.js';

import { zkToolsMsg } from '../../../tools';
import styles from "./styles.less";

// 方向性图标 Directional Icons
const getIconPanelDirectional = (f_onAntd4IconClick) => {
  return (
    <div className={styles.icon_panel}>
      <div onClick={() => f_onAntd4IconClick("StepBackwardOutlined")} >
        <Antd4Icon icon = "StepBackwardOutlined" />
        <br />
        <p>StepBackwardOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("StepForwardOutlined")} >
        <Antd4Icon icon = "StepForwardOutlined" />
        <br />
        <p>StepForwardOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FastBackwardOutlined")} >
        <Antd4Icon icon = "FastBackwardOutlined" />
        <br />
        <p>FastBackwardOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FastForwardOutlined")} >
        <Antd4Icon icon = "FastForwardOutlined" />
        <br />
        <p>FastForwardOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ShrinkOutlined")} >
        <Antd4Icon icon = "ShrinkOutlined" />
        <br />
        <p>ShrinkOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ArrowsAltOutlined")} >
        <Antd4Icon icon = "ArrowsAltOutlined" />
        <br />
        <p>ArrowsAltOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("DownOutlined")} >
        <Antd4Icon icon = "DownOutlined" />
        <br />
        <p>DownOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("UpOutlined")} >
        <Antd4Icon icon = "UpOutlined" />
        <br />
        <p>UpOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("LeftOutlined")} >
        <Antd4Icon icon = "LeftOutlined" />
        <br />
        <p>LeftOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("RightOutlined")} >
        <Antd4Icon icon = "RightOutlined" />
        <br />
        <p>RightOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("CaretUpOutlined")} >
        <Antd4Icon icon = "CaretUpOutlined" />
        <br />
        <p>CaretUpOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("CaretDownOutlined")} >
        <Antd4Icon icon = "CaretDownOutlined" />
        <br />
        <p>CaretDownOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("CaretLeftOutlined")} >
        <Antd4Icon icon = "CaretLeftOutlined" />
        <br />
        <p>CaretLeftOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("CaretRightOutlined")} >
        <Antd4Icon icon = "CaretRightOutlined" />
        <br />
        <p>CaretRightOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("UpCircleOutlined")} >
        <Antd4Icon icon = "UpCircleOutlined" />
        <br />
        <p>UpCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("DownCircleOutlined")} >
        <Antd4Icon icon = "DownCircleOutlined" />
        <br />
        <p>DownCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("LeftCircleOutlined")} >
        <Antd4Icon icon = "LeftCircleOutlined" />
        <br />
        <p>LeftCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("RightCircleOutlined")} >
        <Antd4Icon icon = "RightCircleOutlined" />
        <br />
        <p>RightCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("DoubleRightOutlined")} >
        <Antd4Icon icon = "DoubleRightOutlined" />
        <br />
        <p>DoubleRightOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("DoubleLeftOutlined")} >
        <Antd4Icon icon = "DoubleLeftOutlined" />
        <br />
        <p>DoubleLeftOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("VerticalLeftOutlined")} >
        <Antd4Icon icon = "VerticalLeftOutlined" />
        <br />
        <p>VerticalLeftOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("VerticalRightOutlined")} >
        <Antd4Icon icon = "VerticalRightOutlined" />
        <br />
        <p>VerticalRightOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("VerticalAlignTopOutlined")} >
        <Antd4Icon icon = "VerticalAlignTopOutlined" />
        <br />
        <p>VerticalAlignTopOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("VerticalAlignMiddleOutlined")} >
        <Antd4Icon icon = "VerticalAlignMiddleOutlined" />
        <br />
        <p>VerticalAlignMiddleOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("VerticalAlignBottomOutlined")} >
        <Antd4Icon icon = "VerticalAlignBottomOutlined" />
        <br />
        <p>VerticalAlignBottomOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ForwardOutlined")} >
        <Antd4Icon icon = "ForwardOutlined" />
        <br />
        <p>ForwardOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("BackwardOutlined")} >
        <Antd4Icon icon = "BackwardOutlined" />
        <br />
        <p>BackwardOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("RollbackOutlined")} >
        <Antd4Icon icon = "RollbackOutlined" />
        <br />
        <p>RollbackOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("EnterOutlined")} >
        <Antd4Icon icon = "EnterOutlined" />
        <br />
        <p>EnterOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("RetweetOutlined")} >
        <Antd4Icon icon = "RetweetOutlined" />
        <br />
        <p>RetweetOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("SwapOutlined")} >
        <Antd4Icon icon = "SwapOutlined" />
        <br />
        <p>SwapOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("SwapLeftOutlined")} >
        <Antd4Icon icon = "SwapLeftOutlined" />
        <br />
        <p>SwapLeftOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("SwapRightOutlined")} >
        <Antd4Icon icon = "SwapRightOutlined" />
        <br />
        <p>SwapRightOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ArrowUpOutlined")} >
        <Antd4Icon icon = "ArrowUpOutlined" />
        <br />
        <p>ArrowUpOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ArrowDownOutlined")} >
        <Antd4Icon icon = "ArrowDownOutlined" />
        <br />
        <p>ArrowDownOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ArrowLeftOutlined")} >
        <Antd4Icon icon = "ArrowLeftOutlined" />
        <br />
        <p>ArrowLeftOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ArrowRightOutlined")} >
        <Antd4Icon icon = "ArrowRightOutlined" />
        <br />
        <p>ArrowRightOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("PlayCircleOutlined")} >
        <Antd4Icon icon = "PlayCircleOutlined" />
        <br />
        <p>PlayCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("UpSquareOutlined")} >
        <Antd4Icon icon = "UpSquareOutlined" />
        <br />
        <p>UpSquareOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("DownSquareOutlined")} >
        <Antd4Icon icon = "DownSquareOutlined" />
        <br />
        <p>DownSquareOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("LeftSquareOutlined")} >
        <Antd4Icon icon = "LeftSquareOutlined" />
        <br />
        <p>LeftSquareOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("RightSquareOutlined")} >
        <Antd4Icon icon = "RightSquareOutlined" />
        <br />
        <p>RightSquareOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("LoginOutlined")} >
        <Antd4Icon icon = "LoginOutlined" />
        <br />
        <p>LoginOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("LogoutOutlined")} >
        <Antd4Icon icon = "LogoutOutlined" />
        <br />
        <p>LogoutOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("MenuFoldOutlined")} >
        <Antd4Icon icon = "MenuFoldOutlined" />
        <br />
        <p>MenuFoldOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("MenuUnfoldOutlined")} >
        <Antd4Icon icon = "MenuUnfoldOutlined" />
        <br />
        <p>MenuUnfoldOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("BorderBottomOutlined")} >
        <Antd4Icon icon = "BorderBottomOutlined" />
        <br />
        <p>BorderBottomOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("BorderHorizontalOutlined")} >
        <Antd4Icon icon = "BorderHorizontalOutlined" />
        <br />
        <p>BorderHorizontalOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("BorderInnerOutlined")} >
        <Antd4Icon icon = "BorderInnerOutlined" />
        <br />
        <p>BorderInnerOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("BorderOuterOutlined")} >
        <Antd4Icon icon = "BorderOuterOutlined" />
        <br />
        <p>BorderOuterOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("BorderLeftOutlined")} >
        <Antd4Icon icon = "BorderLeftOutlined" />
        <br />
        <p>BorderLeftOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("BorderRightOutlined")} >
        <Antd4Icon icon = "BorderRightOutlined" />
        <br />
        <p>BorderRightOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("BorderTopOutlined")} >
        <Antd4Icon icon = "BorderTopOutlined" />
        <br />
        <p>BorderTopOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("BorderVerticleOutlined")} >
        <Antd4Icon icon = "BorderVerticleOutlined" />
        <br />
        <p>BorderVerticleOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("PicCenterOutlined")} >
        <Antd4Icon icon = "PicCenterOutlined" />
        <br />
        <p>PicCenterOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("PicLeftOutlined")} >
        <Antd4Icon icon = "PicLeftOutlined" />
        <br />
        <p>PicLeftOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("PicRightOutlined")} >
        <Antd4Icon icon = "PicRightOutlined" />
        <br />
        <p>PicRightOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("RadiusBottomleftOutlined")} >
        <Antd4Icon icon = "RadiusBottomleftOutlined" />
        <br />
        <p>RadiusBottomleftOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("RadiusBottomrightOutlined")} >
        <Antd4Icon icon = "RadiusBottomrightOutlined" />
        <br />
        <p>RadiusBottomrightOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("RadiusUpleftOutlined")} >
        <Antd4Icon icon = "RadiusUpleftOutlined" />
        <br />
        <p>RadiusUpleftOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("RadiusUprightOutlined")} >
        <Antd4Icon icon = "RadiusUprightOutlined" />
        <br />
        <p>RadiusUprightOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FullscreenOutlined")} >
        <Antd4Icon icon = "FullscreenOutlined" />
        <br />
        <p>FullscreenOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FullscreenExitOutlined")} >
        <Antd4Icon icon = "FullscreenExitOutlined" />
        <br />
        <p>FullscreenExitOutlined</p>
      </div>
    </div>
  )
}

// 提示建议性图标 Suggested Icons
const getIconPanelSuggested = (f_onAntd4IconClick) => {
  return (
    <div className={styles.icon_panel}>
      <div onClick={() => f_onAntd4IconClick("QuestionOutlined")} >
        <Antd4Icon icon = "QuestionOutlined" />
        <br />
        <p>QuestionOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("QuestionCircleOutlined")} >
        <Antd4Icon icon = "QuestionCircleOutlined" />
        <br />
        <p>QuestionCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("PlusOutlined")} >
        <Antd4Icon icon = "PlusOutlined" />
        <br />
        <p>PlusOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("PlusCircleOutlined")} >
        <Antd4Icon icon = "PlusCircleOutlined" />
        <br />
        <p>PlusCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("PauseOutlined")} >
        <Antd4Icon icon = "PauseOutlined" />
        <br />
        <p>PauseOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("PauseCircleOutlined")} >
        <Antd4Icon icon = "PauseCircleOutlined" />
        <br />
        <p>PauseCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("MinusOutlined")} >
        <Antd4Icon icon = "MinusOutlined" />
        <br />
        <p>MinusOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("MinusCircleOutlined")} >
        <Antd4Icon icon = "MinusCircleOutlined" />
        <br />
        <p>MinusCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("PlusSquareOutlined")} >
        <Antd4Icon icon = "PlusSquareOutlined" />
        <br />
        <p>PlusSquareOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("MinusSquareOutlined")} >
        <Antd4Icon icon = "MinusSquareOutlined" />
        <br />
        <p>MinusSquareOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("InfoOutlined")} >
        <Antd4Icon icon = "InfoOutlined" />
        <br />
        <p>InfoOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("InfoCircleOutlined")} >
        <Antd4Icon icon = "InfoCircleOutlined" />
        <br />
        <p>InfoCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ExclamationOutlined")} >
        <Antd4Icon icon = "ExclamationOutlined" />
        <br />
        <p>ExclamationOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ExclamationCircleOutlined")} >
        <Antd4Icon icon = "ExclamationCircleOutlined" />
        <br />
        <p>ExclamationCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("CloseOutlined")} >
        <Antd4Icon icon = "CloseOutlined" />
        <br />
        <p>CloseOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("CloseCircleOutlined")} >
        <Antd4Icon icon = "CloseCircleOutlined" />
        <br />
        <p>CloseCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("CloseSquareOutlined")} >
        <Antd4Icon icon = "CloseSquareOutlined" />
        <br />
        <p>CloseSquareOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("CheckOutlined")} >
        <Antd4Icon icon = "CheckOutlined" />
        <br />
        <p>CheckOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("CheckCircleOutlined")} >
        <Antd4Icon icon = "CheckCircleOutlined" />
        <br />
        <p>CheckCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("CheckSquareOutlined")} >
        <Antd4Icon icon = "CheckSquareOutlined" />
        <br />
        <p>CheckSquareOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ClockCircleOutlined")} >
        <Antd4Icon icon = "ClockCircleOutlined" />
        <br />
        <p>ClockCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("WarningOutlined")} >
        <Antd4Icon icon = "WarningOutlined" />
        <br />
        <p>WarningOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("IssuesCloseOutlined")} >
        <Antd4Icon icon = "IssuesCloseOutlined" />
        <br />
        <p>IssuesCloseOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("StopOutlined")} >
        <Antd4Icon icon = "StopOutlined" />
        <br />
        <p>StopOutlined</p>
      </div>
    </div>
  )
}

// 编辑类图标 Editor Icons
const getIconPanelEditor = (f_onAntd4IconClick) => {
  return (
    <div className={styles.icon_panel}>
      <div onClick={() => f_onAntd4IconClick("EditOutlined")} >
        <Antd4Icon icon = "EditOutlined" />
        <br />
        <p>EditOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FormOutlined")} >
        <Antd4Icon icon = "FormOutlined" />
        <br />
        <p>FormOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("CopyOutlined")} >
        <Antd4Icon icon = "CopyOutlined" />
        <br />
        <p>CopyOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ScissorOutlined")} >
        <Antd4Icon icon = "ScissorOutlined" />
        <br />
        <p>ScissorOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("DeleteOutlined")} >
        <Antd4Icon icon = "DeleteOutlined" />
        <br />
        <p>DeleteOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("SnippetsOutlined")} >
        <Antd4Icon icon = "SnippetsOutlined" />
        <br />
        <p>SnippetsOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("DiffOutlined")} >
        <Antd4Icon icon = "DiffOutlined" />
        <br />
        <p>DiffOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("HighlightOutlined")} >
        <Antd4Icon icon = "HighlightOutlined" />
        <br />
        <p>HighlightOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("AlignCenterOutlined")} >
        <Antd4Icon icon = "AlignCenterOutlined" />
        <br />
        <p>AlignCenterOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("AlignLeftOutlined")} >
        <Antd4Icon icon = "AlignLeftOutlined" />
        <br />
        <p>AlignLeftOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("AlignRightOutlined")} >
        <Antd4Icon icon = "AlignRightOutlined" />
        <br />
        <p>AlignRightOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("BgColorsOutlined")} >
        <Antd4Icon icon = "BgColorsOutlined" />
        <br />
        <p>BgColorsOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("BoldOutlined")} >
        <Antd4Icon icon = "BoldOutlined" />
        <br />
        <p>BoldOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ItalicOutlined")} >
        <Antd4Icon icon = "ItalicOutlined" />
        <br />
        <p>ItalicOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("UnderlineOutlined")} >
        <Antd4Icon icon = "UnderlineOutlined" />
        <br />
        <p>UnderlineOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("StrikethroughOutlined")} >
        <Antd4Icon icon = "StrikethroughOutlined" />
        <br />
        <p>StrikethroughOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("RedoOutlined")} >
        <Antd4Icon icon = "RedoOutlined" />
        <br />
        <p>RedoOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("UndoOutlined")} >
        <Antd4Icon icon = "UndoOutlined" />
        <br />
        <p>UndoOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ZoomInOutlined")} >
        <Antd4Icon icon = "ZoomInOutlined" />
        <br />
        <p>ZoomInOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ZoomOutOutlined")} >
        <Antd4Icon icon = "ZoomOutOutlined" />
        <br />
        <p>ZoomOutOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ColorsOutlined")} >
        <Antd4Icon icon = "ColorsOutlined" />
        <br />
        <p>ColorsOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("SizeOutlined")} >
        <Antd4Icon icon = "SizeOutlined" />
        <br />
        <p>SizeOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("LineHeightOutlined")} >
        <Antd4Icon icon = "LineHeightOutlined" />
        <br />
        <p>LineHeightOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("DashOutlined")} >
        <Antd4Icon icon = "DashOutlined" />
        <br />
        <p>DashOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("SmallDashOutlined")} >
        <Antd4Icon icon = "SmallDashOutlined" />
        <br />
        <p>SmallDashOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("SortAscendingOutlined")} >
        <Antd4Icon icon = "SortAscendingOutlined" />
        <br />
        <p>SortAscendingOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("SortDescendingOutlined")} >
        <Antd4Icon icon = "SortDescendingOutlined" />
        <br />
        <p>SortDescendingOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("DragOutlined")} >
        <Antd4Icon icon = "DragOutlined" />
        <br />
        <p>DragOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("OrderedListOutlined")} >
        <Antd4Icon icon = "OrderedListOutlined" />
        <br />
        <p>OrderedListOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("UnorderedListOutlined")} >
        <Antd4Icon icon = "UnorderedListOutlined" />
        <br />
        <p>UnorderedListOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("RadiusSettingOutlined")} >
        <Antd4Icon icon = "RadiusSettingOutlined" />
        <br />
        <p>RadiusSettingOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ColumnWidthOutlined")} >
        <Antd4Icon icon = "ColumnWidthOutlined" />
        <br />
        <p>ColumnWidthOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ColumnHeightOutlined")} >
        <Antd4Icon icon = "ColumnHeightOutlined" />
        <br />
        <p>ColumnHeightOutlined</p>
      </div>
    </div>

  )
}

// 数据类图标 Data Icons
const getIconPanelData = (f_onAntd4IconClick) => {
  return (
    <div className={styles.icon_panel}>
      <div onClick={() => f_onAntd4IconClick("AreaChartOutlined")} >
        <Antd4Icon icon = "AreaChartOutlined" />
        <br />
        <p>AreaChartOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("PieChartOutlined")} >
        <Antd4Icon icon = "PieChartOutlined" />
        <br />
        <p>PieChartOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("BarChartOutlined")} >
        <Antd4Icon icon = "BarChartOutlined" />
        <br />
        <p>BarChartOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("DotChartOutlined")} >
        <Antd4Icon icon = "DotChartOutlined" />
        <br />
        <p>DotChartOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("LineChartOutlined")} >
        <Antd4Icon icon = "LineChartOutlined" />
        <br />
        <p>LineChartOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("RadarChartOutlined")} >
        <Antd4Icon icon = "RadarChartOutlined" />
        <br />
        <p>RadarChartOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("HeatMapOutlined")} >
        <Antd4Icon icon = "HeatMapOutlined" />
        <br />
        <p>HeatMapOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FallOutlined")} >
        <Antd4Icon icon = "FallOutlined" />
        <br />
        <p>FallOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("RiseOutlined")} >
        <Antd4Icon icon = "RiseOutlined" />
        <br />
        <p>RiseOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("StockOutlined")} >
        <Antd4Icon icon = "StockOutlined" />
        <br />
        <p>StockOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("BoxPlotOutlined")} >
        <Antd4Icon icon = "BoxPlotOutlined" />
        <br />
        <p>BoxPlotOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FundOutlined")} >
        <Antd4Icon icon = "FundOutlined" />
        <br />
        <p>FundOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("SlidersOutlined")} >
        <Antd4Icon icon = "SlidersOutlined" />
        <br />
        <p>SlidersOutlined</p>
      </div>
    </div>
  )
}

// 品牌和标识 Brand and Logos
const getIconPanelBrandAndLogos = (f_onAntd4IconClick) => {
  return (
    <div className={styles.icon_panel}>
      <div onClick={() => f_onAntd4IconClick("AndroidOutlined")} >
        <Antd4Icon icon = "AndroidOutlined" />
        <br />
        <p>AndroidOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("AppleOutlined")} >
        <Antd4Icon icon = "AppleOutlined" />
        <br />
        <p>AppleOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("WindowsOutlined")} >
        <Antd4Icon icon = "WindowsOutlined" />
        <br />
        <p>WindowsOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("IeOutlined")} >
        <Antd4Icon icon = "IeOutlined" />
        <br />
        <p>IeOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ChromeOutlined")} >
        <Antd4Icon icon = "ChromeOutlined" />
        <br />
        <p>ChromeOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("GithubOutlined")} >
        <Antd4Icon icon = "GithubOutlined" />
        <br />
        <p>GithubOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("AliwangwangOutlined")} >
        <Antd4Icon icon = "AliwangwangOutlined" />
        <br />
        <p>AliwangwangOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("DingdingOutlined")} >
        <Antd4Icon icon = "DingdingOutlined" />
        <br />
        <p>DingdingOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("WeiboSquareOutlined")} >
        <Antd4Icon icon = "WeiboSquareOutlined" />
        <br />
        <p>WeiboSquareOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("WeiboCircleOutlined")} >
        <Antd4Icon icon = "WeiboCircleOutlined" />
        <br />
        <p>WeiboCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("TaobaoCircleOutlined")} >
        <Antd4Icon icon = "TaobaoCircleOutlined" />
        <br />
        <p>TaobaoCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("Html5Outlined")} >
        <Antd4Icon icon = "Html5Outlined" />
        <br />
        <p>Html5Outlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("WeiboOutlined")} >
        <Antd4Icon icon = "WeiboOutlined" />
        <br />
        <p>WeiboOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("TwitterOutlined")} >
        <Antd4Icon icon = "TwitterOutlined" />
        <br />
        <p>TwitterOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("WechatOutlined")} >
        <Antd4Icon icon = "WechatOutlined" />
        <br />
        <p>WechatOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("YoutubeOutlined")} >
        <Antd4Icon icon = "YoutubeOutlined" />
        <br />
        <p>YoutubeOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("AlipayCircleOutlined")} >
        <Antd4Icon icon = "AlipayCircleOutlined" />
        <br />
        <p>AlipayCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("TaobaoOutlined")} >
        <Antd4Icon icon = "TaobaoOutlined" />
        <br />
        <p>TaobaoOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("SkypeOutlined")} >
        <Antd4Icon icon = "SkypeOutlined" />
        <br />
        <p>SkypeOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("QqOutlined")} >
        <Antd4Icon icon = "QqOutlined" />
        <br />
        <p>QqOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("MediumWorkmarkOutlined")} >
        <Antd4Icon icon = "MediumWorkmarkOutlined" />
        <br />
        <p>MediumWorkmarkOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("GitlabOutlined")} >
        <Antd4Icon icon = "GitlabOutlined" />
        <br />
        <p>GitlabOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("MediumOutlined")} >
        <Antd4Icon icon = "MediumOutlined" />
        <br />
        <p>MediumOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("LinkedinOutlined")} >
        <Antd4Icon icon = "LinkedinOutlined" />
        <br />
        <p>LinkedinOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("GooglePlusOutlined")} >
        <Antd4Icon icon = "GooglePlusOutlined" />
        <br />
        <p>GooglePlusOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("DropboxOutlined")} >
        <Antd4Icon icon = "DropboxOutlined" />
        <br />
        <p>DropboxOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FacebookOutlined")} >
        <Antd4Icon icon = "FacebookOutlined" />
        <br />
        <p>FacebookOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("CodepenOutlined")} >
        <Antd4Icon icon = "CodepenOutlined" />
        <br />
        <p>CodepenOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("CodeSandboxOutlined")} >
        <Antd4Icon icon = "CodeSandboxOutlined" />
        <br />
        <p>CodeSandboxOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("AmazonOutlined")} >
        <Antd4Icon icon = "AmazonOutlined" />
        <br />
        <p>AmazonOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("GoogleOutlined")} >
        <Antd4Icon icon = "GoogleOutlined" />
        <br />
        <p>GoogleOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("CodepenCircleOutlined")} >
        <Antd4Icon icon = "CodepenCircleOutlined" />
        <br />
        <p>CodepenCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("AlipayOutlined")} >
        <Antd4Icon icon = "AlipayOutlined" />
        <br />
        <p>AlipayOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("AntDesignOutlined")} >
        <Antd4Icon icon = "AntDesignOutlined" />
        <br />
        <p>AntDesignOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("AntCloudOutlined")} >
        <Antd4Icon icon = "AntCloudOutlined" />
        <br />
        <p>AntCloudOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("AliyunOutlined")} >
        <Antd4Icon icon = "AliyunOutlined" />
        <br />
        <p>AliyunOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ZhihuOutlined")} >
        <Antd4Icon icon = "ZhihuOutlined" />
        <br />
        <p>ZhihuOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("SlackOutlined")} >
        <Antd4Icon icon = "SlackOutlined" />
        <br />
        <p>SlackOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("SlackSquareOutlined")} >
        <Antd4Icon icon = "SlackSquareOutlined" />
        <br />
        <p>SlackSquareOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("BehanceOutlined")} >
        <Antd4Icon icon = "BehanceOutlined" />
        <br />
        <p>BehanceOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("BehanceSquareOutlined")} >
        <Antd4Icon icon = "BehanceSquareOutlined" />
        <br />
        <p>BehanceSquareOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("DribbbleOutlined")} >
        <Antd4Icon icon = "DribbbleOutlined" />
        <br />
        <p>DribbbleOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("DribbbleSquareOutlined")} >
        <Antd4Icon icon = "DribbbleSquareOutlined" />
        <br />
        <p>DribbbleSquareOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("InstagramOutlined")} >
        <Antd4Icon icon = "InstagramOutlined" />
        <br />
        <p>InstagramOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("YuqueOutlined")} >
        <Antd4Icon icon = "YuqueOutlined" />
        <br />
        <p>YuqueOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("AlibabaOutlined")} >
        <Antd4Icon icon = "AlibabaOutlined" />
        <br />
        <p>AlibabaOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("YahooOutlined")} >
        <Antd4Icon icon = "YahooOutlined" />
        <br />
        <p>YahooOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("RedditOutlined")} >
        <Antd4Icon icon = "RedditOutlined" />
        <br />
        <p>RedditOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("SketchOutlined")} >
        <Antd4Icon icon = "SketchOutlined" />
        <br />
        <p>SketchOutlined</p>
      </div>
    </div>
  )
}

// 网站通用图标 Application Icons
const getIconPanelApplication = (f_onAntd4IconClick) => {
  return (
    <div className={styles.icon_panel}>
      <div onClick={() => f_onAntd4IconClick("AccountBookOutlined")} >
        <Antd4Icon icon = "AccountBookOutlined" />
        <br />
        <p>AccountBookOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("AimOutlined")} >
        <Antd4Icon icon = "AimOutlined" />
        <br />
        <p>AimOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("AlertOutlined")} >
        <Antd4Icon icon = "AlertOutlined" />
        <br />
        <p>AlertOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ApartmentOutlined")} >
        <Antd4Icon icon = "ApartmentOutlined" />
        <br />
        <p>ApartmentOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ApiOutlined")} >
        <Antd4Icon icon = "ApiOutlined" />
        <br />
        <p>ApiOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("AppstoreAddOutlined")} >
        <Antd4Icon icon = "AppstoreAddOutlined" />
        <br />
        <p>AppstoreAddOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("AppstoreOutlined")} >
        <Antd4Icon icon = "AppstoreOutlined" />
        <br />
        <p>AppstoreOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("AudioOutlined")} >
        <Antd4Icon icon = "AudioOutlined" />
        <br />
        <p>AudioOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("AudioMutedOutlined")} >
        <Antd4Icon icon = "AudioMutedOutlined" />
        <br />
        <p>AudioMutedOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("AuditOutlined")} >
        <Antd4Icon icon = "AuditOutlined" />
        <br />
        <p>AuditOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("BankOutlined")} >
        <Antd4Icon icon = "BankOutlined" />
        <br />
        <p>BankOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("BarcodeOutlined")} >
        <Antd4Icon icon = "BarcodeOutlined" />
        <br />
        <p>BarcodeOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("BarsOutlined")} >
        <Antd4Icon icon = "BarsOutlined" />
        <br />
        <p>BarsOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("BellOutlined")} >
        <Antd4Icon icon = "BellOutlined" />
        <br />
        <p>BellOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("BlockOutlined")} >
        <Antd4Icon icon = "BlockOutlined" />
        <br />
        <p>BlockOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("BookOutlined")} >
        <Antd4Icon icon = "BookOutlined" />
        <br />
        <p>BookOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("BorderOutlined")} >
        <Antd4Icon icon = "BorderOutlined" />
        <br />
        <p>BorderOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("BorderlessTableOutlined")} >
        <Antd4Icon icon = "BorderlessTableOutlined" />
        <br />
        <p>BorderlessTableOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("BranchesOutlined")} >
        <Antd4Icon icon = "BranchesOutlined" />
        <br />
        <p>BranchesOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("BugOutlined")} >
        <Antd4Icon icon = "BugOutlined" />
        <br />
        <p>BugOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("BuildOutlined")} >
        <Antd4Icon icon = "BuildOutlined" />
        <br />
        <p>BuildOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("BulbOutlined")} >
        <Antd4Icon icon = "BulbOutlined" />
        <br />
        <p>BulbOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("CalculatorOutlined")} >
        <Antd4Icon icon = "CalculatorOutlined" />
        <br />
        <p>CalculatorOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("CalendarOutlined")} >
        <Antd4Icon icon = "CalendarOutlined" />
        <br />
        <p>CalendarOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("CameraOutlined")} >
        <Antd4Icon icon = "CameraOutlined" />
        <br />
        <p>CameraOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("CarOutlined")} >
        <Antd4Icon icon = "CarOutlined" />
        <br />
        <p>CarOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("CarryOutOutlined")} >
        <Antd4Icon icon = "CarryOutOutlined" />
        <br />
        <p>CarryOutOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("CiCircleOutlined")} >
        <Antd4Icon icon = "CiCircleOutlined" />
        <br />
        <p>CiCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("CiOutlined")} >
        <Antd4Icon icon = "CiOutlined" />
        <br />
        <p>CiOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ClearOutlined")} >
        <Antd4Icon icon = "ClearOutlined" />
        <br />
        <p>ClearOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("CloudDownloadOutlined")} >
        <Antd4Icon icon = "CloudDownloadOutlined" />
        <br />
        <p>CloudDownloadOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("CloudOutlined")} >
        <Antd4Icon icon = "CloudOutlined" />
        <br />
        <p>CloudOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("CloudServerOutlined")} >
        <Antd4Icon icon = "CloudServerOutlined" />
        <br />
        <p>CloudServerOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("CloudSyncOutlined")} >
        <Antd4Icon icon = "CloudSyncOutlined" />
        <br />
        <p>CloudSyncOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("CloudUploadOutlined")} >
        <Antd4Icon icon = "CloudUploadOutlined" />
        <br />
        <p>CloudUploadOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ClusterOutlined")} >
        <Antd4Icon icon = "ClusterOutlined" />
        <br />
        <p>ClusterOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("CodeOutlined")} >
        <Antd4Icon icon = "CodeOutlined" />
        <br />
        <p>CodeOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("CoffeeOutlined")} >
        <Antd4Icon icon = "CoffeeOutlined" />
        <br />
        <p>CoffeeOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("CommentOutlined")} >
        <Antd4Icon icon = "CommentOutlined" />
        <br />
        <p>CommentOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("CompassOutlined")} >
        <Antd4Icon icon = "CompassOutlined" />
        <br />
        <p>CompassOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("CompressOutlined")} >
        <Antd4Icon icon = "CompressOutlined" />
        <br />
        <p>CompressOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ConsoleSqlOutlined")} >
        <Antd4Icon icon = "ConsoleSqlOutlined" />
        <br />
        <p>ConsoleSqlOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ContactsOutlined")} >
        <Antd4Icon icon = "ContactsOutlined" />
        <br />
        <p>ContactsOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ContainerOutlined")} >
        <Antd4Icon icon = "ContainerOutlined" />
        <br />
        <p>ContainerOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ControlOutlined")} >
        <Antd4Icon icon = "ControlOutlined" />
        <br />
        <p>ControlOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("CopyrightOutlined")} >
        <Antd4Icon icon = "CopyrightOutlined" />
        <br />
        <p>CopyrightOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("CreditCardOutlined")} >
        <Antd4Icon icon = "CreditCardOutlined" />
        <br />
        <p>CreditCardOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("CrownOutlined")} >
        <Antd4Icon icon = "CrownOutlined" />
        <br />
        <p>CrownOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("CustomerServiceOutlined")} >
        <Antd4Icon icon = "CustomerServiceOutlined" />
        <br />
        <p>CustomerServiceOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("DashboardOutlined")} >
        <Antd4Icon icon = "DashboardOutlined" />
        <br />
        <p>DashboardOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("DatabaseOutlined")} >
        <Antd4Icon icon = "DatabaseOutlined" />
        <br />
        <p>DatabaseOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("DeleteColumnOutlined")} >
        <Antd4Icon icon = "DeleteColumnOutlined" />
        <br />
        <p>DeleteColumnOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("DeleteRowOutlined")} >
        <Antd4Icon icon = "DeleteRowOutlined" />
        <br />
        <p>DeleteRowOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("DeliveredProcedureOutlined")} >
        <Antd4Icon icon = "DeliveredProcedureOutlined" />
        <br />
        <p>DeliveredProcedureOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("DeploymentUnitOutlined")} >
        <Antd4Icon icon = "DeploymentUnitOutlined" />
        <br />
        <p>DeploymentUnitOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("DesktopOutlined")} >
        <Antd4Icon icon = "DesktopOutlined" />
        <br />
        <p>DesktopOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("DingtalkOutlined")} >
        <Antd4Icon icon = "DingtalkOutlined" />
        <br />
        <p>DingtalkOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("DisconnectOutlined")} >
        <Antd4Icon icon = "DisconnectOutlined" />
        <br />
        <p>DisconnectOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("DislikeOutlined")} >
        <Antd4Icon icon = "DislikeOutlined" />
        <br />
        <p>DislikeOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("DollarCircleOutlined")} >
        <Antd4Icon icon = "DollarCircleOutlined" />
        <br />
        <p>DollarCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("DollarOutlined")} >
        <Antd4Icon icon = "DollarOutlined" />
        <br />
        <p>DollarOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("DownloadOutlined")} >
        <Antd4Icon icon = "DownloadOutlined" />
        <br />
        <p>DownloadOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("EllipsisOutlined")} >
        <Antd4Icon icon = "EllipsisOutlined" />
        <br />
        <p>EllipsisOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("EnvironmentOutlined")} >
        <Antd4Icon icon = "EnvironmentOutlined" />
        <br />
        <p>EnvironmentOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("EuroCircleOutlined")} >
        <Antd4Icon icon = "EuroCircleOutlined" />
        <br />
        <p>EuroCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("EuroOutlined")} >
        <Antd4Icon icon = "EuroOutlined" />
        <br />
        <p>EuroOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ExceptionOutlined")} >
        <Antd4Icon icon = "ExceptionOutlined" />
        <br />
        <p>ExceptionOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ExpandAltOutlined")} >
        <Antd4Icon icon = "ExpandAltOutlined" />
        <br />
        <p>ExpandAltOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ExpandOutlined")} >
        <Antd4Icon icon = "ExpandOutlined" />
        <br />
        <p>ExpandOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ExperimentOutlined")} >
        <Antd4Icon icon = "ExperimentOutlined" />
        <br />
        <p>ExperimentOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ExportOutlined")} >
        <Antd4Icon icon = "ExportOutlined" />
        <br />
        <p>ExportOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("EyeOutlined")} >
        <Antd4Icon icon = "EyeOutlined" />
        <br />
        <p>EyeOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("EyeInvisibleOutlined")} >
        <Antd4Icon icon = "EyeInvisibleOutlined" />
        <br />
        <p>EyeInvisibleOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FieldBinaryOutlined")} >
        <Antd4Icon icon = "FieldBinaryOutlined" />
        <br />
        <p>FieldBinaryOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FieldNumberOutlined")} >
        <Antd4Icon icon = "FieldNumberOutlined" />
        <br />
        <p>FieldNumberOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FieldStringOutlined")} >
        <Antd4Icon icon = "FieldStringOutlined" />
        <br />
        <p>FieldStringOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FieldTimeOutlined")} >
        <Antd4Icon icon = "FieldTimeOutlined" />
        <br />
        <p>FieldTimeOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FileAddOutlined")} >
        <Antd4Icon icon = "FileAddOutlined" />
        <br />
        <p>FileAddOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FileDoneOutlined")} >
        <Antd4Icon icon = "FileDoneOutlined" />
        <br />
        <p>FileDoneOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FileExcelOutlined")} >
        <Antd4Icon icon = "FileExcelOutlined" />
        <br />
        <p>FileExcelOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FileExclamationOutlined")} >
        <Antd4Icon icon = "FileExclamationOutlined" />
        <br />
        <p>FileExclamationOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FileOutlined")} >
        <Antd4Icon icon = "FileOutlined" />
        <br />
        <p>FileOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FileGifOutlined")} >
        <Antd4Icon icon = "FileGifOutlined" />
        <br />
        <p>FileGifOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FileImageOutlined")} >
        <Antd4Icon icon = "FileImageOutlined" />
        <br />
        <p>FileImageOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FileJpgOutlined")} >
        <Antd4Icon icon = "FileJpgOutlined" />
        <br />
        <p>FileJpgOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FileMarkdownOutlined")} >
        <Antd4Icon icon = "FileMarkdownOutlined" />
        <br />
        <p>FileMarkdownOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FilePdfOutlined")} >
        <Antd4Icon icon = "FilePdfOutlined" />
        <br />
        <p>FilePdfOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FilePptOutlined")} >
        <Antd4Icon icon = "FilePptOutlined" />
        <br />
        <p>FilePptOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FileProtectOutlined")} >
        <Antd4Icon icon = "FileProtectOutlined" />
        <br />
        <p>FileProtectOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FileSearchOutlined")} >
        <Antd4Icon icon = "FileSearchOutlined" />
        <br />
        <p>FileSearchOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FileSyncOutlined")} >
        <Antd4Icon icon = "FileSyncOutlined" />
        <br />
        <p>FileSyncOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FileTextOutlined")} >
        <Antd4Icon icon = "FileTextOutlined" />
        <br />
        <p>FileTextOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FileUnknownOutlined")} >
        <Antd4Icon icon = "FileUnknownOutlined" />
        <br />
        <p>FileUnknownOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FileWordOutlined")} >
        <Antd4Icon icon = "FileWordOutlined" />
        <br />
        <p>FileWordOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FileZipOutlined")} >
        <Antd4Icon icon = "FileZipOutlined" />
        <br />
        <p>FileZipOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FilterOutlined")} >
        <Antd4Icon icon = "FilterOutlined" />
        <br />
        <p>FilterOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FireOutlined")} >
        <Antd4Icon icon = "FireOutlined" />
        <br />
        <p>FireOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FlagOutlined")} >
        <Antd4Icon icon = "FlagOutlined" />
        <br />
        <p>FlagOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FolderAddOutlined")} >
        <Antd4Icon icon = "FolderAddOutlined" />
        <br />
        <p>FolderAddOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FolderOutlined")} >
        <Antd4Icon icon = "FolderOutlined" />
        <br />
        <p>FolderOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FolderOpenOutlined")} >
        <Antd4Icon icon = "FolderOpenOutlined" />
        <br />
        <p>FolderOpenOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FolderViewOutlined")} >
        <Antd4Icon icon = "FolderViewOutlined" />
        <br />
        <p>FolderViewOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ForkOutlined")} >
        <Antd4Icon icon = "ForkOutlined" />
        <br />
        <p>ForkOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FormatPainterOutlined")} >
        <Antd4Icon icon = "FormatPainterOutlined" />
        <br />
        <p>FormatPainterOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FrownOutlined")} >
        <Antd4Icon icon = "FrownOutlined" />
        <br />
        <p>FrownOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FunctionOutlined")} >
        <Antd4Icon icon = "FunctionOutlined" />
        <br />
        <p>FunctionOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FundProjectionScreenOutlined")} >
        <Antd4Icon icon = "FundProjectionScreenOutlined" />
        <br />
        <p>FundProjectionScreenOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FundViewOutlined")} >
        <Antd4Icon icon = "FundViewOutlined" />
        <br />
        <p>FundViewOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("FunnelPlotOutlined")} >
        <Antd4Icon icon = "FunnelPlotOutlined" />
        <br />
        <p>FunnelPlotOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("GatewayOutlined")} >
        <Antd4Icon icon = "GatewayOutlined" />
        <br />
        <p>GatewayOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("GifOutlined")} >
        <Antd4Icon icon = "GifOutlined" />
        <br />
        <p>GifOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("GiftOutlined")} >
        <Antd4Icon icon = "GiftOutlined" />
        <br />
        <p>GiftOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("GlobalOutlined")} >
        <Antd4Icon icon = "GlobalOutlined" />
        <br />
        <p>GlobalOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("GoldOutlined")} >
        <Antd4Icon icon = "GoldOutlined" />
        <br />
        <p>GoldOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("GroupOutlined")} >
        <Antd4Icon icon = "GroupOutlined" />
        <br />
        <p>GroupOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("HddOutlined")} >
        <Antd4Icon icon = "HddOutlined" />
        <br />
        <p>HddOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("HeartOutlined")} >
        <Antd4Icon icon = "HeartOutlined" />
        <br />
        <p>HeartOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("HistoryOutlined")} >
        <Antd4Icon icon = "HistoryOutlined" />
        <br />
        <p>HistoryOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("HomeOutlined")} >
        <Antd4Icon icon = "HomeOutlined" />
        <br />
        <p>HomeOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("HourglassOutlined")} >
        <Antd4Icon icon = "HourglassOutlined" />
        <br />
        <p>HourglassOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("IdcardOutlined")} >
        <Antd4Icon icon = "IdcardOutlined" />
        <br />
        <p>IdcardOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ImportOutlined")} >
        <Antd4Icon icon = "ImportOutlined" />
        <br />
        <p>ImportOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("InboxOutlined")} >
        <Antd4Icon icon = "InboxOutlined" />
        <br />
        <p>InboxOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("InsertRowAboveOutlined")} >
        <Antd4Icon icon = "InsertRowAboveOutlined" />
        <br />
        <p>InsertRowAboveOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("InsertRowBelowOutlined")} >
        <Antd4Icon icon = "InsertRowBelowOutlined" />
        <br />
        <p>InsertRowBelowOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("InsertRowLeftOutlined")} >
        <Antd4Icon icon = "InsertRowLeftOutlined" />
        <br />
        <p>InsertRowLeftOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("InsertRowRightOutlined")} >
        <Antd4Icon icon = "InsertRowRightOutlined" />
        <br />
        <p>InsertRowRightOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("InsuranceOutlined")} >
        <Antd4Icon icon = "InsuranceOutlined" />
        <br />
        <p>InsuranceOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("InteractionOutlined")} >
        <Antd4Icon icon = "InteractionOutlined" />
        <br />
        <p>InteractionOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("KeyOutlined")} >
        <Antd4Icon icon = "KeyOutlined" />
        <br />
        <p>KeyOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("LaptopOutlined")} >
        <Antd4Icon icon = "LaptopOutlined" />
        <br />
        <p>LaptopOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("LayoutOutlined")} >
        <Antd4Icon icon = "LayoutOutlined" />
        <br />
        <p>LayoutOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("LikeOutlined")} >
        <Antd4Icon icon = "LikeOutlined" />
        <br />
        <p>LikeOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("LineOutlined")} >
        <Antd4Icon icon = "LineOutlined" />
        <br />
        <p>LineOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("LinkOutlined")} >
        <Antd4Icon icon = "LinkOutlined" />
        <br />
        <p>LinkOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("Loading3QuartersOutlined")} >
        <Antd4Icon icon = "Loading3QuartersOutlined" />
        <br />
        <p>Loading3QuartersOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("LoadingOutlined")} >
        <Antd4Icon icon = "LoadingOutlined" />
        <br />
        <p>LoadingOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("LockOutlined")} >
        <Antd4Icon icon = "LockOutlined" />
        <br />
        <p>LockOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("MacCommandOutlined")} >
        <Antd4Icon icon = "MacCommandOutlined" />
        <br />
        <p>MacCommandOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("MailOutlined")} >
        <Antd4Icon icon = "MailOutlined" />
        <br />
        <p>MailOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ManOutlined")} >
        <Antd4Icon icon = "ManOutlined" />
        <br />
        <p>ManOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("MedicineBoxOutlined")} >
        <Antd4Icon icon = "MedicineBoxOutlined" />
        <br />
        <p>MedicineBoxOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("MehOutlined")} >
        <Antd4Icon icon = "MehOutlined" />
        <br />
        <p>MehOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("MenuOutlined")} >
        <Antd4Icon icon = "MenuOutlined" />
        <br />
        <p>MenuOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("MergeCellsOutlined")} >
        <Antd4Icon icon = "MergeCellsOutlined" />
        <br />
        <p>MergeCellsOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("MessageOutlined")} >
        <Antd4Icon icon = "MessageOutlined" />
        <br />
        <p>MessageOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("MobileOutlined")} >
        <Antd4Icon icon = "MobileOutlined" />
        <br />
        <p>MobileOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("MoneyCollectOutlined")} >
        <Antd4Icon icon = "MoneyCollectOutlined" />
        <br />
        <p>MoneyCollectOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("MonitorOutlined")} >
        <Antd4Icon icon = "MonitorOutlined" />
        <br />
        <p>MonitorOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("MoreOutlined")} >
        <Antd4Icon icon = "MoreOutlined" />
        <br />
        <p>MoreOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("NodeCollapseOutlined")} >
        <Antd4Icon icon = "NodeCollapseOutlined" />
        <br />
        <p>NodeCollapseOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("NodeExpandOutlined")} >
        <Antd4Icon icon = "NodeExpandOutlined" />
        <br />
        <p>NodeExpandOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("NodeIndexOutlined")} >
        <Antd4Icon icon = "NodeIndexOutlined" />
        <br />
        <p>NodeIndexOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("NotificationOutlined")} >
        <Antd4Icon icon = "NotificationOutlined" />
        <br />
        <p>NotificationOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("NumberOutlined")} >
        <Antd4Icon icon = "NumberOutlined" />
        <br />
        <p>NumberOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("OneToOneOutlined")} >
        <Antd4Icon icon = "OneToOneOutlined" />
        <br />
        <p>OneToOneOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("PaperClipOutlined")} >
        <Antd4Icon icon = "PaperClipOutlined" />
        <br />
        <p>PaperClipOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("PartitionOutlined")} >
        <Antd4Icon icon = "PartitionOutlined" />
        <br />
        <p>PartitionOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("PayCircleOutlined")} >
        <Antd4Icon icon = "PayCircleOutlined" />
        <br />
        <p>PayCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("PercentageOutlined")} >
        <Antd4Icon icon = "PercentageOutlined" />
        <br />
        <p>PercentageOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("PhoneOutlined")} >
        <Antd4Icon icon = "PhoneOutlined" />
        <br />
        <p>PhoneOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("PictureOutlined")} >
        <Antd4Icon icon = "PictureOutlined" />
        <br />
        <p>PictureOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("PlaySquareOutlined")} >
        <Antd4Icon icon = "PlaySquareOutlined" />
        <br />
        <p>PlaySquareOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("PoundCircleOutlined")} >
        <Antd4Icon icon = "PoundCircleOutlined" />
        <br />
        <p>PoundCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("PoundOutlined")} >
        <Antd4Icon icon = "PoundOutlined" />
        <br />
        <p>PoundOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("PoweroffOutlined")} >
        <Antd4Icon icon = "PoweroffOutlined" />
        <br />
        <p>PoweroffOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("PrinterOutlined")} >
        <Antd4Icon icon = "PrinterOutlined" />
        <br />
        <p>PrinterOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ProfileOutlined")} >
        <Antd4Icon icon = "ProfileOutlined" />
        <br />
        <p>ProfileOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ProjectOutlined")} >
        <Antd4Icon icon = "ProjectOutlined" />
        <br />
        <p>ProjectOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("PropertySafetyOutlined")} >
        <Antd4Icon icon = "PropertySafetyOutlined" />
        <br />
        <p>PropertySafetyOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("PullRequestOutlined")} >
        <Antd4Icon icon = "PullRequestOutlined" />
        <br />
        <p>PullRequestOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("PushpinOutlined")} >
        <Antd4Icon icon = "PushpinOutlined" />
        <br />
        <p>PushpinOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("QrcodeOutlined")} >
        <Antd4Icon icon = "QrcodeOutlined" />
        <br />
        <p>QrcodeOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ReadOutlined")} >
        <Antd4Icon icon = "ReadOutlined" />
        <br />
        <p>ReadOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ReconciliationOutlined")} >
        <Antd4Icon icon = "ReconciliationOutlined" />
        <br />
        <p>ReconciliationOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("RedEnvelopeOutlined")} >
        <Antd4Icon icon = "RedEnvelopeOutlined" />
        <br />
        <p>RedEnvelopeOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ReloadOutlined")} >
        <Antd4Icon icon = "ReloadOutlined" />
        <br />
        <p>ReloadOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("RestOutlined")} >
        <Antd4Icon icon = "RestOutlined" />
        <br />
        <p>RestOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("RobotOutlined")} >
        <Antd4Icon icon = "RobotOutlined" />
        <br />
        <p>RobotOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("RocketOutlined")} >
        <Antd4Icon icon = "RocketOutlined" />
        <br />
        <p>RocketOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("RotateLeftOutlined")} >
        <Antd4Icon icon = "RotateLeftOutlined" />
        <br />
        <p>RotateLeftOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("RotateRightOutlined")} >
        <Antd4Icon icon = "RotateRightOutlined" />
        <br />
        <p>RotateRightOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("SafetyCertificateOutlined")} >
        <Antd4Icon icon = "SafetyCertificateOutlined" />
        <br />
        <p>SafetyCertificateOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("SafetyOutlined")} >
        <Antd4Icon icon = "SafetyOutlined" />
        <br />
        <p>SafetyOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("SaveOutlined")} >
        <Antd4Icon icon = "SaveOutlined" />
        <br />
        <p>SaveOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ScanOutlined")} >
        <Antd4Icon icon = "ScanOutlined" />
        <br />
        <p>ScanOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ScheduleOutlined")} >
        <Antd4Icon icon = "ScheduleOutlined" />
        <br />
        <p>ScheduleOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("SearchOutlined")} >
        <Antd4Icon icon = "SearchOutlined" />
        <br />
        <p>SearchOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("SecurityScanOutlined")} >
        <Antd4Icon icon = "SecurityScanOutlined" />
        <br />
        <p>SecurityScanOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("SelectOutlined")} >
        <Antd4Icon icon = "SelectOutlined" />
        <br />
        <p>SelectOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("SendOutlined")} >
        <Antd4Icon icon = "SendOutlined" />
        <br />
        <p>SendOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("SettingOutlined")} >
        <Antd4Icon icon = "SettingOutlined" />
        <br />
        <p>SettingOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ShakeOutlined")} >
        <Antd4Icon icon = "ShakeOutlined" />
        <br />
        <p>ShakeOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ShareAltOutlined")} >
        <Antd4Icon icon = "ShareAltOutlined" />
        <br />
        <p>ShareAltOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ShopOutlined")} >
        <Antd4Icon icon = "ShopOutlined" />
        <br />
        <p>ShopOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ShoppingCartOutlined")} >
        <Antd4Icon icon = "ShoppingCartOutlined" />
        <br />
        <p>ShoppingCartOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ShoppingOutlined")} >
        <Antd4Icon icon = "ShoppingOutlined" />
        <br />
        <p>ShoppingOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("SisternodeOutlined")} >
        <Antd4Icon icon = "SisternodeOutlined" />
        <br />
        <p>SisternodeOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("SkinOutlined")} >
        <Antd4Icon icon = "SkinOutlined" />
        <br />
        <p>SkinOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("SmileOutlined")} >
        <Antd4Icon icon = "SmileOutlined" />
        <br />
        <p>SmileOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("SolutionOutlined")} >
        <Antd4Icon icon = "SolutionOutlined" />
        <br />
        <p>SolutionOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("SoundOutlined")} >
        <Antd4Icon icon = "SoundOutlined" />
        <br />
        <p>SoundOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("SplitCellsOutlined")} >
        <Antd4Icon icon = "SplitCellsOutlined" />
        <br />
        <p>SplitCellsOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("StarOutlined")} >
        <Antd4Icon icon = "StarOutlined" />
        <br />
        <p>StarOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("SubnodeOutlined")} >
        <Antd4Icon icon = "SubnodeOutlined" />
        <br />
        <p>SubnodeOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("SwitcherOutlined")} >
        <Antd4Icon icon = "SwitcherOutlined" />
        <br />
        <p>SwitcherOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("SyncOutlined")} >
        <Antd4Icon icon = "SyncOutlined" />
        <br />
        <p>SyncOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("TableOutlined")} >
        <Antd4Icon icon = "TableOutlined" />
        <br />
        <p>TableOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("TabletOutlined")} >
        <Antd4Icon icon = "TabletOutlined" />
        <br />
        <p>TabletOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("TagOutlined")} >
        <Antd4Icon icon = "TagOutlined" />
        <br />
        <p>TagOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("TagsOutlined")} >
        <Antd4Icon icon = "TagsOutlined" />
        <br />
        <p>TagsOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("TeamOutlined")} >
        <Antd4Icon icon = "TeamOutlined" />
        <br />
        <p>TeamOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ThunderboltOutlined")} >
        <Antd4Icon icon = "ThunderboltOutlined" />
        <br />
        <p>ThunderboltOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ToTopOutlined")} >
        <Antd4Icon icon = "ToTopOutlined" />
        <br />
        <p>ToTopOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("ToolOutlined")} >
        <Antd4Icon icon = "ToolOutlined" />
        <br />
        <p>ToolOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("TrademarkCircleOutlined")} >
        <Antd4Icon icon = "TrademarkCircleOutlined" />
        <br />
        <p>TrademarkCircleOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("TrademarkOutlined")} >
        <Antd4Icon icon = "TrademarkOutlined" />
        <br />
        <p>TrademarkOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("TransactionOutlined")} >
        <Antd4Icon icon = "TransactionOutlined" />
        <br />
        <p>TransactionOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("TranslationOutlined")} >
        <Antd4Icon icon = "TranslationOutlined" />
        <br />
        <p>TranslationOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("TrophyOutlined")} >
        <Antd4Icon icon = "TrophyOutlined" />
        <br />
        <p>TrophyOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("UngroupOutlined")} >
        <Antd4Icon icon = "UngroupOutlined" />
        <br />
        <p>UngroupOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("UnlockOutlined")} >
        <Antd4Icon icon = "UnlockOutlined" />
        <br />
        <p>UnlockOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("UploadOutlined")} >
        <Antd4Icon icon = "UploadOutlined" />
        <br />
        <p>UploadOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("UsbOutlined")} >
        <Antd4Icon icon = "UsbOutlined" />
        <br />
        <p>UsbOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("UserAddOutlined")} >
        <Antd4Icon icon = "UserAddOutlined" />
        <br />
        <p>UserAddOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("UserDeleteOutlined")} >
        <Antd4Icon icon = "UserDeleteOutlined" />
        <br />
        <p>UserDeleteOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("UserOutlined")} >
        <Antd4Icon icon = "UserOutlined" />
        <br />
        <p>UserOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("UserSwitchOutlined")} >
        <Antd4Icon icon = "UserSwitchOutlined" />
        <br />
        <p>UserSwitchOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("UsergroupAddOutlined")} >
        <Antd4Icon icon = "UsergroupAddOutlined" />
        <br />
        <p>UsergroupAddOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("UsergroupDeleteOutlined")} >
        <Antd4Icon icon = "UsergroupDeleteOutlined" />
        <br />
        <p>UsergroupDeleteOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("VerifiedOutlined")} >
        <Antd4Icon icon = "VerifiedOutlined" />
        <br />
        <p>VerifiedOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("VideoCameraAddOutlined")} >
        <Antd4Icon icon = "VideoCameraAddOutlined" />
        <br />
        <p>VideoCameraAddOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("VideoCameraOutlined")} >
        <Antd4Icon icon = "VideoCameraOutlined" />
        <br />
        <p>VideoCameraOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("WalletOutlined")} >
        <Antd4Icon icon = "WalletOutlined" />
        <br />
        <p>WalletOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("WhatsAppOutlined")} >
        <Antd4Icon icon = "WhatsAppOutlined" />
        <br />
        <p>WhatsAppOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("WifiOutlined")} >
        <Antd4Icon icon = "WifiOutlined" />
        <br />
        <p>WifiOutlined</p>
      </div>
      <div onClick={() => f_onAntd4IconClick("WomanOutlined")} >
        <Antd4Icon icon = "WomanOutlined" />
        <br />
        <p>WomanOutlined</p>
      </div>
    </div>
  )
}

const FInitIconPanel = ({ intl, onSelect }) => {

  const f_onAntd4IconClick = value => {
    if (onSelect) {
      onSelect(value);
    } else {
      value = "<Antd4Icon icon=\"" + value + "\" />";
      f_copy(value);
    }
  }

  // 复制到剪贴版
  const f_copy = (value)=>{
    document.designMode = 'on';
    let bool = document.execCommand('copy');
    if (!bool) {
      zkToolsMsg.alertMsg(intl, null, {
        type: "error",
        msg: zkToolsMsg.msgFormatByIntl(intl, "global.opt.name._key_copy") + ` ${value} ` + zkToolsMsg.msgFormatByIntl(intl, "global.app.msg.fail"),
      });
    } else {
      let inputEle = document.createElement('input');
      document.body.appendChild(inputEle);
      inputEle.setAttribute('value', value);
      inputEle.setAttribute('readonly', 'readonly');
      inputEle.select();
      document.execCommand('copy');
      document.body.removeChild(inputEle);

      zkToolsMsg.alertMsg(intl, null, {
        type: "success",
        msg: zkToolsMsg.msgFormatByIntl(intl, "global.opt.name._key_copy") + ` ${value} ` + zkToolsMsg.msgFormatByIntl(intl, "global.app.msg.success"),
      });
    }
    document.designMode = 'off';
  }

  return (<div className={styles.icon_panel_scroll}>
    <Collapse accordion={true} >
      <Collapse.Panel header={zkToolsMsg.msgFormatByIntl(intl, "components.custom.icon.panel.item.directional")} >
        {getIconPanelDirectional(f_onAntd4IconClick)}
      </Collapse.Panel>
      <Collapse.Panel header={zkToolsMsg.msgFormatByIntl(intl, "components.custom.icon.panel.item.suggested")} >
        {getIconPanelSuggested(f_onAntd4IconClick)}
      </Collapse.Panel>
      <Collapse.Panel header={zkToolsMsg.msgFormatByIntl(intl, "components.custom.icon.panel.item.editor")} >
        {getIconPanelEditor(f_onAntd4IconClick)}
      </Collapse.Panel>
      <Collapse.Panel header={zkToolsMsg.msgFormatByIntl(intl, "components.custom.icon.panel.item.data")} >
        {getIconPanelData(f_onAntd4IconClick)}
      </Collapse.Panel>
      <Collapse.Panel header={zkToolsMsg.msgFormatByIntl(intl, "components.custom.icon.panel.item.brandAndLogos")} >
        {getIconPanelBrandAndLogos(f_onAntd4IconClick)}
      </Collapse.Panel>
      <Collapse.Panel header={zkToolsMsg.msgFormatByIntl(intl, "components.custom.icon.panel.item.application")} >
        {getIconPanelApplication(f_onAntd4IconClick)}
      </Collapse.Panel>
    </Collapse>
  </div>);
}

export default injectIntl(FInitIconPanel);

