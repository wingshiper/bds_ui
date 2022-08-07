import React from 'react';
import { Layout, Space, Button, Table } from 'antd';
import { Post_Content_Service } from './service/Post_Content.Service';
import jsonQuery from 'json-query'
// Khai báo component 
import Slidebar from '../../common/Slidebar'
import { columns } from './model/Post_Content.model'
import 'draft-js/dist/Draft.css';
const { Header, Content, Sider } = Layout;
class PostContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: []
        }
    }

    handleAfterSearch = () =>{
        console.log(123)
        const searchModel = {

        }
        const searchOptions = {

        }
        Promise.all([Post_Content_Service.search(1,10)])
            .then(result => {
            console.log(result)
            })
    }

    handleAdd(){
        window.location.assign('http://localhost:3000/Post_ContentAdd')
    }

    handleConfirmDelte() {

    }

    handleDelete() {
        
    }

    handleUpdate() {
        window.location.assign('http://localhost:3000/Post_ContentUpdate')
    }

    render() {
        const styleButton = {
            marginLeft: '185px',
            float: 'left',
            width: '100%'
        }
        const styleText = {
            height: '100px'
        }
        const editorState = null
        return (
            <Layout>
                <Header className="header"></Header>
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
                            <Table
                                columns={columns}
                            // dataSource={data}
                            />
                            <Space style={{ width: '100%' }}>
                                <Button type="primary" onClick={this.handleAfterSearch} >
                                        Tìm kiếm
                                    </Button>
                                <Button type="primary" onClick={this.handleAdd}>
                                    Thêm
                                </Button>
                                <Button type="primary" onClick={this.handleUpdate}>
                                    Chỉnh Sửa
                                </Button>
                                <Button type="primary" onClick={this.handleDelete}>
                                    Xóa
                                </Button>
                                <Button type="primary" />
                            </Space>

                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default PostContent