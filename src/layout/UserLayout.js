import React from "react";

import {  Outlet ,useNavigate} from "react-router-dom";
import "../App.css";
import logo from"../assets/images/logo.svg"

import {ShoppingCartOutlined} from '@ant-design/icons'
import {Badge,Avatar} from 'antd'
import { useAppContext } from "../component/ContextApi";

const App = () => {
  const{appState}=useAppContext()

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
    {
      name: "Dashboard",
      link: "/Dashboard",
    },
    {name:"Cart",
    link:"/Cart"},{
      name:"Details",
      link:"/Details"
    }
  
  ];

  const authinfo = [
    {
      name: "SignIn",
      link: "/auth/SignIn",
    },
    {
      name: "SignUp",
      link: "/auth/SignUp",
    },
  ];

  return (
    
        <div className="h-screen w-screen">
          <nav className=" h-1/8  w-screen rounded shadow flex justify-around items-center">
            
          <div className='logo h-12  w-12 ml-20 m-2 '>
              <img src={logo}alt="Logo" />
            </div>
            <div className="flex h-full w-1/2 justify-end gap-8" >
                {iteminfo.map((item)=>(
                  <div key={item.link}>
                    <button onClick={()=>handleClick(item.link)}>{item.name} </button>
                    </div>
                ))}
            </div>
            <div className="flex w-1/2 justify-end gap-5 mr-24 ">
              <div>
               
                <Badge count={[...new Set(appState.cart)].length}>
                <Avatar
        icon={<ShoppingCartOutlined />}
        shape="square"
        size="small"
        onClick={()=>handleClick("/Cart")}
      />
    </Badge>
              </div>
            {authinfo.map((item)=>(
              <div key={item.link}>
                <button onClick={()=>{handleClick(item.link)}}>{item.name}</button></div>
            ))}
            </div>
            

          </nav>
  
          <div>
              <Outlet/>

            </div>
        
         </div>
   
  );
};

export default App;
