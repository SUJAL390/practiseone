import React from "react";
import { Layout, theme, ConfigProvider, Image } from "antd";
import {  Outlet ,useNavigate} from "react-router-dom";
import "../App.css";
import logo from '../image/ucl.png';

const { Header, Content, Footer } = Layout;

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const navigate=useNavigate();
  const handleClick=(link)=>{
    navigate(link);
  }

  const iteminfo = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

  const authinfo = [
    {
      name: "Login",
      link: "/login",
    },
    {
      name: "Register",
      link: "/register",
    },
  ];

  return (
    <ConfigProvider
      theme={{
        components: {
          Layout: {
            headerBg: '#50b8f3',
            headerColor: '#FFFFFF',
            headerHeight: 40,
            fontSize: '#50b8f3'
          },
        },
      }}
    >
      <Layout>
        <Header
          style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="header">
            <div className='logo'>
              <Image src={logo} alt="Logo" />
            </div>

            <div className="iteminfo">
              {iteminfo.map((item) => (
                <div key={item.link}>
                <button onClick={()=>handleClick(item.link)}>{item.name}</button>
              </div>
              ))}
            </div>

            <div className="authinfo">
              {authinfo.map((item) => (
                <div key={item.link}>
                  <button onClick={()=>handleClick(item.link)}>{item.name}</button>
                </div>
              ))}
            </div>
          </div>
        </Header>
        <Content
          style={{
            padding: "0 48px",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 380,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
