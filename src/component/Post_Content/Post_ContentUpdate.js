import React, { Component, Fragment } from "react";
import {
  EditorState,
  ContentState,
  convertToRaw,
  convertFromHTML
} from "draft-js";
import { Layout, Form, Input, Button } from 'antd';
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Post_Content_Service } from "./service/Post_Content.Service";
// Component
import Slidebar from '../../common/Slidebar'

const { Header, Content, Sider } = Layout;

class PostContentUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
        dataSource: [],
      editorState: EditorState.createEmpty()
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onSubTitleChange = this.onSubTitleChange.bind(this);
    this.onEditorStateChange = this.onEditorStateChange.bind(this);
    this.handleOk = this.handleOk.bind(this);
  }

  componentDidMount() {
    if (this.props.defaultValue) {
      this.setState({
        editorState: EditorState.createWithContent(
          ContentState.createFromBlockArray(
            convertFromHTML(this.props.defaultValue)
          )
        )
      });
    }
  }

  handleOk(e) {
    e.preventDefault();
    const selectModel = {
      title: this.state.dataSource.title,
      sub_title: this.state.dataSource.sub_title,
      content: this.state.dataSource.content
    }
    console.log(Post_Content_Service)
    Promise.all([Post_Content_Service.update(selectModel)])
      .then(result => {
        console.log(result)
      })
  }

  onTitleChange(e) {
    const title = e.target.value
    this.setState({
      title: title
    })
  }

  onSubTitleChange(e) {
    const subTitle = e.target.value
    this.setState({
      sub_title: subTitle
    })
  }

  onEditorStateChange = editorState => {
    const html = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    this.setState({
      content: html,
      editorState: editorState
    })
  };

  render() {
    const { editorState, dataSource } = this.state;
    const styleContent = {
      padding: 24,
      margin: 0,
      minHeight: 680,
    }
    const styleButton = {
      marginLeft: '200px',
      float: 'left',
      // width: '100%'
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
              style={styleContent}
            >

              <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 16 }}
              >
                <Form.Item
                  label="Ti??u ?????"
                  name="Ti??u ?????"
                >
                  <Input onChange={this.onTitleChange}  defaultValue={dataSource.title}/>
                </Form.Item>

                <Form.Item
                  label="Ti??u ????? ph???"
                  name="Ti??u ????? ph???"
                >
                  <Input onChange={this.onSubTitleChange} defaultValue={dataSource.sub_title}/>
                </Form.Item>

                <Form.Item
                  label="N???i dung b??i vi???t"
                  name="N???i dung b??i vi???t"
                >
                  <Editor
                    style={{
                      boxShadow: "10px 20px 30px"
                    }}
                    editorState={editorState}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={this.onEditorStateChange}
                    defaultValue={dataSource.content}
                  />
                </Form.Item>
                <Form.Item>
                  <Button style={styleButton} onClick={this.handleOk} type="primary">Submit</Button>
                </Form.Item>

              </Form>

            </Content>
          </Layout>
        </Layout>
      </Layout>

    );
  }
}
export default PostContentUpdate;