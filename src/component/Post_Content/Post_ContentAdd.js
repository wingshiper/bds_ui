import React from 'react';
import { Breadcrumb, Layout, Menu, Form, Input, Row, Col, Button } from 'antd';
import { Post_Content_Service } from './service/Post_Content.Service';
// Khai báo component 
import Slidebar from '../../common/Slidebar'
import UploadPicture from '../../common/UploadPicture';
const { Header, Content, Sider } = Layout;
const { TextArea } = Input;

class PostContentAdd extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Post_Title : '',
            Post_SubTitle: '',
            Post_Content: '',
            Post_Image: [],
        }
        
        this.onContentChange = this.onContentChange.bind(this)
        this.onTitleChange = this.onTitleChange.bind(this)
        this.onSubTitleChange = this.onSubTitleChange.bind(this)

    }

    
    handleOk() {
        const selectModel = {
            Post_Title: this.state.Post_Title,
            Post_SubTitle: this.state.Post_SubTitle,
            Post_Content: this.state.Post_Content,
            Post_Image: this.state.Post_Image

        }
        Promise.all([Post_Content_Service.create(selectModel)]).then(result => {
            // To do
        })
    }

    onTitleChange(e) {
        this.setState({
            Post_Title: e.target.value,
        })
    }

    onSubTitleChange(e) {
        this.setState({
            Post_SubTitle: e.target.value,
        })
    }

    onContentChange(e) {
        this.setState({
           Post_Content: e.target.value
        })
    }

    render() {
        console.log(this.state)
        const styleButton = {
            marginLeft: '185px',
            float: 'left',
            width: '100%'
        }
        const styleText = {
            height: '100px'
        }
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
                    <Form
                        name="basic"
                        labelCol={{ span: 4}}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        autoComplete="off"
                    >
                       <Form.Item
                            label="Tiêu đề"
                            name="Tiêu đề"
                        >
                            <Input  />
                        </Form.Item>

                        <Form.Item
                            label="Tiêu đề phụ"
                            name="Tiêu đề phụ"
                        >
                            <Input  />
                        </Form.Item>
                        <Form.Item
                            label="Nội dung bài viết"
                            name="Nội dung bài viết"
                        >
                            <TextArea style={styleText} />
                        </Form.Item>
                        <UploadPicture />
                        <Row  style={styleButton} >
                            <Form.Item wrapperCol={{ offset: 8, span: 4 }}>
                                <Button type="primary" htmlType="submit"  onClick={this.handleOk}>
                                    Lưu
                                </Button>
                            </Form.Item>

                              
                        </Row>
                      
                       
                        
                    </Form>
                    </Content>
                </Layout>
            </Layout>
    </Layout>
        )
    }
}

export default PostContentAdd