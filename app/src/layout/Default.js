import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import style from '../styles/custom.css'
import { Layout, LocaleProvider, Menu, Row, Col } from 'antd'
import enUS from 'antd/lib/locale-provider/en_US';
const { Header, Content, Footer } = Layout;

const DefaultLayout = (Child) =>
    class Default extends PureComponent {
        render() {
            return (
                <LocaleProvider locale={enUS}>
                    <Layout>
                        <Header>
                            <Row gutter={0}>
                                <Col md={{ span: 24, offset: 0 }} lg={{ span: 12, offset: 6 }}>
                                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '32px', marginTop: '16px' }}>
                                        <Menu.Item key="1">
                                            <Link to="/">Home</Link>
                                        </Menu.Item>
                                    </Menu>
                                </Col>
                            </Row>
                        </Header>
                        <Content style={{ margin: '9px 16px 0' }}>
                            <div style={{ padding: 24 }}>
                                <Child { ...this.props } />
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>
                            Copyright &copy; 2017 - iTunes SPA
                        </Footer>
                    </Layout>
                </LocaleProvider>
            )
        }
    }

export default DefaultLayout