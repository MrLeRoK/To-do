import React from 'react';
import { Layout, theme } from 'antd';
import Menu from "~/components/Menu/Menu";

const { Header, Content, Footer, Sider } = Layout;

const siderStyle: React.CSSProperties = {
    overflow: 'auto',
    height: '100vh',
    position: 'sticky',
    insetInlineStart: 0,
    top: 0,
    bottom: 0,
    scrollbarWidth: 'thin',
    scrollbarGutter: 'stable',
};

// const items: MenuProps['items'] = [
//     UserOutlined,
//     VideoCameraOutlined,
//     UploadOutlined,
//     BarChartOutlined,
//     CloudOutlined,
//     AppstoreOutlined,
//     TeamOutlined,
//     ShopOutlined,
// ].map((icon, index) => ({
//     key: String(index + 1),
//     // icon: React.createElement(icon),
//     label: `nav ${index + 1}`,
// }));

const App: React.FC = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    // const add = async () => {
    //     await setDoc(doc(db, "cities", "LA"), {
    //         name: "Los Angeles",
    //         state: "CA",
    //         country: "USA"
    //     });
    // }

    return (
        <Layout hasSider>
            <Sider style={siderStyle}>
                <div className="demo-logo-vertical" />
                <Menu/>
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }} />
                <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                    <div
                        style={{
                            padding: 24,
                            textAlign: 'center',
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <p>long content</p>
                        {
                            // indicates very long content
                            Array.from({ length: 100 }, (_, index) => (
                                <React.Fragment key={index}>
                                    {index % 20 === 0 && index ? 'more' : '...'}
                                    <br />
                                </React.Fragment>
                            ))
                        }
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default App;
