import { Block, View } from '@tarojs/components'
import React from 'react'
import Taro from '@tarojs/taro'
import {
  ConfigProvider,
  ShareSheet,
  Calendar,
  Skeleton,
  DropdownItem,
  DropdownMenu,
  GridItem,
  Grid,
  IndexAnchor,
  IndexBar,
  Circle,
  Overlay,
  Picker,
  CollapseItem,
  Collapse,
  Rate,
  DatetimePicker,
  TreeSelect,
  Transition,
  Toast,
  Tag,
  TabbarItem,
  Tabbar,
  Tabs,
  Tab,
  Switch,
  Uploader,
  SwipeCell,
  SubmitBar,
  Sticky,
  Steps,
  Stepper,
  Slider,
  SidebarItem,
  Sidebar,
  Search,
  Row,
  RadioGroup,
  Radio,
  Progress,
  Popup,
  Panel,
  Notify,
  NoticeBar,
  NavBar,
  Loading,
  Image,
  Icon,
  GoodsActionButton,
  GoodsActionIcon,
  GoodsAction,
  Field,
  Empty,
  Divider,
  Dialog,
  CountDown,
  Col,
  CheckboxGroup,
  Checkbox,
  CellGroup,
  Cell,
  Card,
  Button,
  Area,
  ActionSheet,
  toast,
} from '@antmjs/vantui'

import DemoBlock from '../../components/demo-block/index'
import './index.scss'

export default class Index extends React.Component {
  constructor() {
    super()
  }

  state = {
    active1: [0],
    active2: 0,
    active3: [],
    active4: [],
    title1: '有赞微商城',
    title2: '有赞零售',
    title3: '有赞美业',
    content1: '提供多样店铺模板，快速搭建网上商城',
    content2:
      '网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失',
    content3: '线上拓客，随时预约，贴心顺手的开单收银',
  }

  onChange = (event) => {
    const { key } = event.currentTarget.dataset
    this.setState({
      [key]: event.detail,
    })
  }

  onOpen = (event) => {
    toast(`展开: ${event.detail}`)
  }

  onClose = (event) => {
    toast(`关闭: ${event.detail}`)
  }

  render() {
    const {
      active1,
      title1,
      content1,
      title2,
      content2,
      title3,
      content3,
      active2,
      active3,
      active4,
    } = this.state
    return (
      <Block>
        <DemoBlock title="基础用法">
          <Collapse value={active1} data-key="active1" onChange={this.onChange}>
            <CollapseItem title={title1}>{content1}</CollapseItem>
            <CollapseItem title={title2}>{content2}</CollapseItem>
            <CollapseItem title={title3} disabled>
              {content3}
            </CollapseItem>
          </Collapse>
        </DemoBlock>
        <DemoBlock title="手风琴">
          <Collapse
            value={active2}
            data-key="active2"
            accordion
            onChange={this.onChange}
          >
            <CollapseItem title={title1}>{content1}</CollapseItem>
            <CollapseItem title={title2}>{content2}</CollapseItem>
            <CollapseItem title={title3}>{content3}</CollapseItem>
          </Collapse>
        </DemoBlock>
        <DemoBlock title="事件监听">
          <Collapse
            value={active3}
            data-key="active3"
            onChange={this.onChange}
            onOpen={this.onOpen}
            onClose={this.onClose}
          >
            <CollapseItem title={title1}>{content1}</CollapseItem>
            <CollapseItem title={title2}>{content2}</CollapseItem>
            <CollapseItem title={title3}>{content3}</CollapseItem>
          </Collapse>
        </DemoBlock>
        <DemoBlock title="自定义标题内容">
          <Collapse value={active4} data-key="active4" onChange={this.onChange}>
            <CollapseItem
              renderTitle={
                <Block>
                  <View>
                    {title1}
                    <Icon
                      name="question-o"
                      customClass="van-icon-question"
                    ></Icon>
                  </View>
                </Block>
              }
            >
              {content1}
            </CollapseItem>
            <CollapseItem title={title2} value="内容" icon="shop-o">
              {content2}
            </CollapseItem>
          </Collapse>
        </DemoBlock>
        <Toast id="van-toast"></Toast>
      </Block>
    )
  }
}