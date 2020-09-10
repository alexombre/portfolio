import React, { useState} from 'react';
import { Avatar, Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
  Link
} from "react-router-dom";
import About from 'components/CV/About';
import Education from 'components/CV/Education';
import Skills from 'components/CV/Skills';
import Experiences from 'components/CV/Experiences';
import Hobbies from 'components/CV/Hobbies';
import me from 'assets/me.png'


const CV = () => {
  const { Header, Content, Sider } = Layout;  
  const [displayer,setDisplayer] = useState('d-block');
  return (
    <>
      <Layout>
      <Sider breakpoint="lg" collapsedWidth="0" width={200} className="site-layout-background"
        onBreakpoint={broken => {
          if (!broken)
            setDisplayer('d-block')
      }}
      onCollapse={(collapsed, type) => {
        if (!collapsed)
          setDisplayer('d-none')
        else
          setDisplayer('d-block')
      }}
        >
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          
        >   
            <div className="p-2 d-flex justify-content-center">
              <Avatar size={64}  src={me} />
            </div>
            
            <Menu.Item icon={<UserOutlined />} key="1"><Link to="/cv">A propos</Link></Menu.Item>
            <Menu.Item icon={<UserOutlined />} key="2"><Link to="/cv/experiences">Expériences</Link></Menu.Item>
            <Menu.Item icon={<UserOutlined />} key="3"><Link to="/cv/skills">Compétences</Link></Menu.Item>
            <Menu.Item icon={<UserOutlined />} key="4"><Link to="/cv/education">Formation</Link></Menu.Item>
            <Menu.Item icon={<UserOutlined />} key="5"><Link to="/cv/hobbies">Centre d'intéret</Link></Menu.Item>
            <Menu.Item icon={<UserOutlined />} key="6"><a href='' download>Télécharger</a></Menu.Item>
        </Menu>
      </Sider>
      <Layout className="vh-100">
            <Content className={displayer} style={{ margin: '24px 16px 0' }}>
              <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                <Switch>
                    <Route path="/cv/skills">
                      <Skills />
                    </Route>
                    <Route path="/cv/experiences">
                      <Experiences />
                    </Route>
                    <Route path="/cv/education">
                     <Education />
                    </Route>
                    <Route path="/cv/hobbies">
                      <Hobbies />
                    </Route>
                    <Route exact path="/cv">
                      <About />
                    </Route>
                </Switch>
              </div>
            </Content>
          </Layout>
        </Layout>
    </>
  )
  
}

export default CV