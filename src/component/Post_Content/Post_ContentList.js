import React from 'react';
import {  Layout, Input, Table } from 'antd';
import { columns } from './model/Post_Content.model'
// Khai báo component 
import Slidebar from '../../common/Slidebar'
console.log(columns)
const { Header, Content, Sider } = Layout;
const { TextArea } = Input;
class PostContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            Post_Title : '',
            Post_Content: '',
            Post_Image: '',
        }
        this.onNameChange=this.onNameChange.bind(this);
        this.onPhoneNumberChange=this.onPhoneNumberChange.bind(this);
        this.onAddressesChange=this.onAddressesChange.bind(this);
        this.onTypeChange=this.onTypeChange.bind(this);
        this.onBranchChange=this.onBranchChange.bind(this);
        this.onEmailChange=this.onEmailChange.bind(this);
        this.onDescriptionChange=this.onDescriptionChange.bind(this);
        this.handleOk=this.handleOk.bind(this);



    }

    
    handleOk() {
        const selectModel = {
            Conpany_Name : this.state.Company_Name,
            Company_Address: this.state.Company_Address,
            Company_Email: this.state.Company_Email,
            Company_PhoneNumber: this.state.Company_PhoneNumber,
            Company_Type: this.state.Company_Type,
            Company_Branch: this.state.Company_Branch,
            Description: this.state.Description,
        }
        Promise.all([]).then(result => {
            // To do
        })
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
                    }}>
                    
                    <Table columns={columns} />

                    </Content>
                </Layout>
            </Layout>
    </Layout>
        )
    }
}

export default PostContent