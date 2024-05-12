import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ConfigProvider, Layout, Menu, Col } from 'antd';
import App from './App';
import './index.css';
import Logo from './images/logo.svg';

const { Header, Content } = Layout;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <ConfigProvider theme={{ hashed: false }}>
    <Layout>
      <Header className='centered-navbar'>
        <Col xs={12} sm={8} md={6} lg={4} xl={3}>
          <img alt='logo' src={Logo} />
        </Col>
        <Col xs={12} sm={16} md={18} lg={20} xl={21}>
          <Menu theme="dark" mode="horizontal" />
        </Col>
      </Header>
      <Content className='content-wrapper'>
        <App />
      </Content>
    </Layout>
  </ConfigProvider>
);