import React from 'react';
import '../css/app.css';
import modelAdmin  from '../component/admin/model/admin.model' 
import { Link } from 'react-router-dom'
import { Layout } from 'antd'
console.log(Link)
const { Header } = Layout
class Slidebar extends React.Component {
    render() {
        return (
            <ul className="Slider">
                {modelAdmin.map(data => {
                    return(
                        <li  key={data.key}>
                            <Link to={data.link} className="SliderItem" >{data.name}</Link>
                        </li>
                    )
                })}
            </ul>
        )
      
    }
}

export default Slidebar;