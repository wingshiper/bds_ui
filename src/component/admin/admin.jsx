import React from 'react';
import 'antd/dist/antd.css';
import '../../css/app.css';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu } from 'antd';
// Khai báo component
import Slidebar from '../../common/Slidebar.jsx'
const { Header, Content, Sider } = Layout;

class Admin extends React.Component {
    

    
    
    render(){
        return (
          <Layout>
            <Header className="header">
               
            </Header>
            <Layout>
            <Sider width={200} className="site-layout-background">
                <Slidebar />
            </Sider>
            <Layout
                style={{
                padding: '0 24px 24px',
                }}
            >
                <Content
                className="site-layout-background"
                style={{
                    padding: 24,
                    margin: 0,
                    minHeight: 680,
                }}
                >
                Content
                </Content>
            </Layout>
            </Layout>
    </Layout>
        )
        
    }
};

export default Admin;