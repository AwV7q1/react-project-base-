import {Outlet} from "react-router-dom";
import {Breadcrumb, Layout, Menu, theme} from "antd";
import {Link} from 'react-router-dom'


const { Header, Content, Footer } = Layout;
const items = new Array(3).fill(null).map((_, index) => ({
    key: index + 1,
    label: `nav ${index + 1}`,
}));
const listBreadcrumb = [
    {
        title: <Link to={'/'}>Report</Link>,
    },
    {
        title: <Link to={'/statistic'}>Statistic</Link>,
    },
]


const Application = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Header
                style={{
                    display: 'flex',
                    alignItems: 'center',
                }}
            >
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
                    style={{
                        flex: 1,
                        minWidth: 0,
                    }}
                />
            </Header>
            <Content
                style={{
                    padding: '0 48px',

                }}
            >
                <Breadcrumb
                    items={listBreadcrumb}
                    style={{
                        padding: '16px 0',
                    }}
                />
                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        height: 'calc(100dvh - 188px)',
                        padding: 24,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet/>
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>

    );
};

export default Application;