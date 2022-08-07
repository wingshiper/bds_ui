import React, { Component } from "react";
import {
  EditorState,
  ContentState,
  convertToRaw,
  convertFromHTML
} from "draft-js";
import { Layout, Form, Input, Button } from 'antd';
import { Editor } from '@tinymce/tinymce-react';
import draftToHtml from "draftjs-to-html";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Post_Content_Service } from "./service/Post_Content.Service";
// Component
import Slidebar from '../../common/Slidebar'
import tinymce from "tinymce";

const { Header, Content, Sider } = Layout;
class PostContentAdd extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef()
    this.state = {
      title: "",
      sub_title: "",
      content: "",
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onSubTitleChange = this.onSubTitleChange.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
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
      title: this.state.title,
      sub_title: this.state.sub_title,
      content: this.state.content
    }
    Promise.all([Post_Content_Service.create(selectModel)])
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

  handleEditorChange(e){
    const content = e.target.getContent()
    this.setState({
      content: content
    })
  }

  render() {
    const styleContent = {
      padding: 24,
      margin: 0,
      minHeight: 680,
    }
    const styleButton = {
      marginLeft: '200px',
      float: 'left',
    }
    const uploadFileImage = (blobInfo, progress) => new Promise((resolve, reject) => {
      console.log(blobInfo.filename())
      const xhr = new XMLHttpRequest();
      xhr.withCredentials = false;
      xhr.open('POST', 'postAcceptor.php');
      console.log(xhr)
    
      xhr.upload.onprogress = (e) => {
        progress(e.loaded / e.total * 100);
      };
    
      xhr.onload = () => {
       
        const json = JSON.parse(xhr.responseText);
    
        if (!json || typeof json.location != 'string') {
          reject('Invalid JSON: ' + xhr.responseText);
          return;
        }
    
        resolve(json.location);
      };
    
      xhr.onerror = () => {
        reject('Image upload failed due to a XHR Transport error. Code: ' + xhr.status);
      };
      const fileData = blobInfo.blob()
      const filename = blobInfo.filename()
      fileData.thumbUri = blobInfo.base64()
      const formData = new FormData();
      formData.append('file', fileData, filename);
      xhr.send(formData);
    });
    
   
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
                  label="Tiêu đề"
                  name="Tiêu đề"
                >
                  <Input onChange={this.onTitleChange} />
                </Form.Item>

                <Form.Item
                  label="Tiêu đề phụ"
                  name="Tiêu đề phụ"
                >
                  <Input onChange={this.onSubTitleChange} />
                </Form.Item>

                <Form.Item
                  label="Nội dung bài viết"
                  name="Nội dung bài viết"
                >
                  <Editor
                    // onInit={(evt, editor) => editorRef.current = editor}
                    onChange={this.handleEditorChange}

                    apiKey='YOUR_API_KEY'
                    id="editor"
                    init={{
                      height: 500,
                      plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample  charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
                      editimage_cors_hosts: ['picsum.photos'],
                      toolbar_sticky: true,
                      autosave_ask_before_unload: true,
                      autosave_interval: '30s',
                      autosave_prefix: '{path}{query}-{id}-',
                      autosave_restore_when_empty: false,
                      autosave_retention: '2m',
                      image_advtab: true,
                      importcss_append: true,
                      images_upload_handler: uploadFileImage,
                      // image_uploadtab: true,
                      height: 600,
                      file_picker_types: 'image',
                      file_picker_callback: (cb, value, meta) => {
                        const input = document.createElement('input');
                        input.setAttribute('type', 'file');
                        input.setAttribute('accept', 'image/*');
                        input.addEventListener('change', (e) => {
                          const file = e.target.files[0];
                          const reader = new FileReader();
                          reader.addEventListener('load', () => {
                            const id = 'blobid' + (new Date()).getTime();
                            const blobCache = window.tinymce.activeEditor.editorUpload.blobCache;
                            const base64 = reader.result.split(',')[1];
                            const blobInfo = blobCache.create(id, file, base64);
                            blobCache.add(blobInfo);
                            cb(blobInfo.blobUri(), { title: file.name });
                          });
                          reader.readAsDataURL(file);
                        });

                        input.click();
                      },
                      image_caption: true,
                      quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
                      noneditable_class: 'mceNonEditable',
                      toolbar_mode: 'sliding',
                      content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
                    }}
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
export default PostContentAdd;