import React, { Component } from 'react';
import { Layout, Row, Col, List } from 'antd';
import { GithubOutlined, IssuesCloseOutlined, BugOutlined } from '@ant-design/icons';

class Footer extends Component {
    render() {
        const footer_style = {
            backgroundColor: 'rgb(234, 232, 230)',
            fontFamily: 'Roboto',
            color: 'rgb(21, 23, 25)',
            paddingLeft: '5%',
            paddingRight: '5%',
        }

        const footerResourcesData = [
            'Ant Design',
            'Ant Design Pro',
            'Ant Motion',
            'ReactJs'
        ]

        const footerHelpData = [
            {name: 'GitHub', icon: <GithubOutlined />},
            {name: 'Bug Report', icon: <BugOutlined />},
            {name: 'Issues', icon: <IssuesCloseOutlined />},
        ]

        const logo = {
            className: 'logo',
            text: 'cxd',
        }

        const logo_style = {
            color: 'rgb(21, 23, 25)',
            fontSize: '10vh',
            fontFamily: 'Monoton',
            marginTop: '500px',
            marginLeft: '40%',
            // fontWeight: 700,
            // border: '2px solid white',
        }

        return (
            <Layout.Footer style={footer_style}>
                <Row gutter={[64, 32]}>
                    <Col span={8}>
                        <div>
                            <List
                                dataSource={footerResourcesData}
                                header={<b>Resources</b>}
                                grid={{xs: '500px', column: 1}}
                                renderItem={item => <List.Item>{item}</List.Item>}
                            />
                        </div>
                    </Col>
                    <Col span={8}>
                        <div>
                            <List
                                dataSource={footerHelpData}
                                header={<b>Help</b>}
                                grid={{xs: '500px', column: 1}}
                                renderItem={item => <List.Item>{item.icon}&nbsp;{item.name}</List.Item>}
                            />
                        </div>
                    </Col>

                    <Col span={8}>
                    <div className={logo.className}>
                        <span style={logo_style}>{logo.text}</span>
                    </div>
                    </Col>
                </Row>
                <hr />
                <Row gutter={[64, 0]}>
                    <Col span={24}>
                        <div style={{textAlign: 'center'}}>
                            Copyright &copy; cxd 2020
                        </div>
                    </Col>
                </Row>
            </Layout.Footer>
        );
    }
}

export default Footer;