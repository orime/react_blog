import React, {useEffect, useState} from 'react'
import '../static/style/components/header.css'
import { Row, Col, Icon, Menu } from "antd";
import Router from 'next/router'
import Link from 'next/link'
import axios from 'axios'
import servicePath from "../config/apiUrl";

const Header = () => {
  const [navArray, setNavArray] = useState([])
  useEffect(() => {
    // 声明获取数据的函数(异步方法)
    const fetchData = async () => {
      const result = await axios(servicePath.getTypeInfo)
         .then((res) => {
           // setNavArray(res.data.data)
           return res.data.data
         }).catch((err) => {
           console.log(err)
         })
      setNavArray(result)
    }
    // 执行该函数获取数据
    fetchData()
  }, []) // deps为空表示第一次进入组件会变化
  const handleClick = (e)=>{
    if(e.key==0){
      Router.push('/index')
    }else{
      Router.push('/list?id='+e.key)
    }
  }
  return (
     <div className='header'>
       <Row type='flex' justify='center'>
         <Col  xs={24} sm={24} md={10} lg={15} xl={12}>
           <span className='header-logo'>技术专家</span>
           <span className='header-txt'>专注前端开发，每年100集免费视频</span>
         </Col>
         <Col className='menu-div' xs={0} sm={0} md={14} lg={8} xl={6}>
           <Menu mode='horizontal' onClick={handleClick}>
             <Menu.Item key='0'>
               <Icon type='home' />
               首页
             </Menu.Item>
             {
               navArray.map((item) => {
                 return (
                    <Menu.Item key={item.Id}>
                      <Icon type={item.icon} />
                      {item.typeName}
                    </Menu.Item>
                 )
               })
             }
           </Menu>
         </Col>
       </Row>

     </div>
  )
}

export default Header
