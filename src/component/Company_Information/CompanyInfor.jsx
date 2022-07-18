import React from 'react';
import { Breadcrumb, Layout, Menu, Form, Input, Row, Col, Button } from 'antd';
// Khai báo component 
import Slidebar from '../../common/Slidebar'

const { Header, Content, Sider } = Layout;
const { TextArea } = Input;
class CompanyInfor extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Conpany_Name: '',
            Company_Address: '',
            Company_Email: '',
            Company_PhoneNumber: '',
            Company_Type: '',
            Company_Branch: '',
            Description: '',
        }
        this.onNameChange = this.onNameChange.bind(this);
        this.onPhoneNumberChange = this.onPhoneNumberChange.bind(this);
        this.onAddressesChange = this.onAddressesChange.bind(this);
        this.onTypeChange = this.onTypeChange.bind(this);
        this.onBranchChange = this.onBranchChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.handleOk = this.handleOk.bind(this);



    }


    handleOk() {
        const selectModel = {
            Conpany_Name: this.state.Company_Name,
            Company_Address: this.state.Company_Address,
            Company_Email: this.state.Company_Email,
            Company_PhoneNumber: this.state.Company_PhoneNumber,
            Company_Type: this.state.Company_Type,
            Company_Branch: this.state.Company_Branch,
            Description: this.state.Description,
        }
        Promise.all([])
    }
    onNameChange(e) {
        this.setState({ Conpany_Name: e.target.value });
    }
    onAddressesChange(e) {
        this.setState({ Conpany_Address: e.target.value });
    }

    onPhoneNumberChange(e) {
        this.setState({ Company_PhoneNumber: e.target.value });

    }
    onBranchChange(e) {
        this.setState({ Company_Branch: e.target.value });

    }

    onTypeChange(e) {
        this.setState({ Conpany_Type: e.target.value });
    }

    onEmailChange(e) {
        this.setState({ Conpany_Email: e.target.value });

    }
    onDescriptionChange(e) {
        this.setState({ Description: e.target.value });

    }
    render() {
        const styleContent = {
            padding: '24px',

        }
        const styleButton = {
            marginLeft: '175px',
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
                                labelCol={{ span: 4 }}
                                wrapperCol={{ span: 16 }}
                                initialValues={{ remember: true }}
                                autoComplete="off"
                            >
                                <Form.Item
                                    label="Tên công ty"
                                    name="Tên công ty"
                                >
                                    <Input onChange={this.onNameChange} />
                                </Form.Item>

                                <Form.Item
                                    label="Số điện thọai"
                                    name="Số điện thọai"
                                >
                                    <Input onChange={this.onPhoneNumberChange} />
                                </Form.Item>

                                <Form.Item
                                    label="Địa chỉ"
                                    name="Địa chỉ"
                                >
                                    <Input onChange={this.onAddressesChange} />
                                </Form.Item>

                                <Form.Item
                                    label="Chi nhánh"
                                    name="Chi nhánh"
                                >
                                    <Input onChange={this.onBranchChange} />
                                </Form.Item>

                                <Form.Item
                                    label="Loại hình doanh nghiêp"
                                    name="Loại hình doanh nghiêp"
                                >
                                    <Input onChange={this.onTypeChange} />
                                </Form.Item>

                                <Form.Item
                                    label="Email"
                                    name="Email"
                                >
                                    <Input onChange={this.onEmailChange} />
                                </Form.Item>

                                <Form.Item
                                    label="Ghi chú"
                                    name="Ghi chú"
                                >
                                    <TextArea style={styleText} onChange={this.onDescriptionChange} />
                                </Form.Item>
                                <Row style={styleButton} >
                                    <Form.Item wrapperCol={{ offset: 8, span: 4 }}>
                                        <Button type="primary" htmlType="submit" onClick={this.handleOk}>
                                            Xác nhận
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

export default CompanyInfor