import React from "react";
import { message, Badge } from "antd";
import { adminMenu, userMenu } from "../Data/data";
import "../styles/LayoutStyles.css";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Layout, Menu, theme } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const LayoutMain = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();
  // Rendering menu list

  const sidebarMenu = user?.isAdmin ? adminMenu : userMenu;
  // Logout function
  const logouthandler = () => {
    localStorage.clear();
    message.success("Logout SuccesFull");
    navigate("/login");
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <div className="main container-fluid">
      <Layout>
        <Sider
          theme="light"
          width="230"
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <h3 className="heading pt-3 pb-0 mb-0">Doc App</h3>
          <hr />
          <ul className="menu nav flex-column mb-auto">
            {sidebarMenu.map((menu) => {
              const isActive = location.pathname === menu.path;
              return (
                <>
                  <div className={`menu-item ${isActive && "active"}`}>
                    <i className={menu.icon}></i>
                    <Link className="link" to={menu.path}>
                      {menu.name}
                    </Link>
                  </div>
                </>
              );
            })}
            <div className={`menu-item`} onClick={logouthandler}>
              <i className="fa fa-right-from-bracket"></i>
              <Link className="link" to="/login">
                Logout
              </Link>
            </div>
          </ul>
        </Sider>
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer }}>
            <div className="header-content">
              <Badge count={user && user.notification.length}>
                <i className="fa fa-bell"></i>
              </Badge>

              <Link to="/profile">{user?.name}</Link>
            </div>
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              <div className="body">{children}</div>
            </div>
          </Content>

          <Footer style={{ textAlign: "center" }}>
            Doc App ©2023 Created by pandey
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default LayoutMain;
