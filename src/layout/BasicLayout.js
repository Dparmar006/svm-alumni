import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined
} from '@ant-design/icons'
import { Link } from 'react-router-dom'

const { Header, Sider, Content } = Layout

const BasicLayout = ({ children }) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const toggle = () => {
    setSidebarCollapsed(!sidebarCollapsed)
  }

  return (
    <Layout>
      <Sider trigger={toggle} collapsible collapsed={sidebarCollapsed}>
        <div className='logo'>
          {sidebarCollapsed ? <h1>H</h1> : <h1>Hello</h1>}
        </div>
        <Menu theme='dark' mode='inline'>
          <Menu.Item key='1' icon={<UserOutlined />}>
            <Link to={'/'}>Dashboard</Link>
          </Menu.Item>
          <Menu.Item key='1' icon={<UserOutlined />}>
            Alumni
          </Menu.Item>
          <Menu.Item key='2' icon={<VideoCameraOutlined />}>
            Almani requests
          </Menu.Item>
          <Menu.Item key='3' icon={<UploadOutlined />}>
            Industries
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className='site-layout'>
        <Header className='site-layout-background' style={{ padding: 0 }}>
          {React.createElement(
            sidebarCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: toggle
            }
          )}
        </Header>
        <Content
          className='site-layout-background'
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280
          }}
        >
          <div className='page-content'>{children}</div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default BasicLayout
