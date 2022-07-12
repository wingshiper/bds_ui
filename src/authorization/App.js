import React from 'react';
import { BrowserRouter ,Routes, Route, Link } from 'react-router-dom';
// Khai báo component
import Admin from '../component/admin/admin'
import CompanyInfor from '../component/Company_Information/CompanyInfor'
import PostContent from '../component/Post_Content/Post_ContentList'
import PostContentAdd from '../component/Post_Content/Post_ContentAdd'
class App extends React.Component {
  render () {
    return(
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Admin />}/>
            <Route path="/company" element={<CompanyInfor />} />
            <Route path="/Post_Content" element={<PostContent/>} />
            <Route path="/Post_ContentAdd" element={<PostContentAdd />}/>
          </Routes>
      </BrowserRouter>
        
        
    )
  }
}

export default App;