import React, { Component } from 'react';
import { Modal, Form, Input, Button } from 'antd';
import { UserOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: this.props.visible,
        }
        console.log('in consttructor');
    }

    _submit = () => {
        alert("Not Implemented");
    }
    handleCancel = () => {
        this.setState({
            visible: false,
        })
        this.props.callback(false);
        Modal.destroyAll();
    }

    render() {
        return (
            <div>
                <Modal
                    title="Sign Up"
                    visible={this.state.visible}
                    okText= 'Sign Up'
                    cancelText= 'Cancel'
                    onOk={this._submit}
                    onCancel={this.handleCancel.bind(this)}
                    okButtonProps={ this._submit }
                    width = {400}
                    destroyOnClose= {true}
                    footer={[
                        <Button type="primary" form="signup_form" key="submit" htmlType="submit">
                            Sign Up
                        </Button>
                        ]}
                    >
                        <Form name='signup_form' onFinish={this._submit}>
                            <Form.Item
                                name="first_name"
                                rules={[{ required: true, message: 'Please input first name!' }]}
                            >
                                <Input size="large" placeholder="First Name" prefix={<UserOutlined />} />
                            </Form.Item>

                            <Form.Item
                                name="last_name"
                                rules={[{ required: true, message: 'Please input last name!' }]}
                            >
                                <Input size="large" placeholder="Last Name" prefix={<UserOutlined />} />
                            </Form.Item>

                            <Form.Item
                                name="email"
                                rules={[{ required: true, message: 'Please input email!' }]}
                            >
                                <Input size="large" placeholder="Email" prefix={<UserOutlined />} />
                            </Form.Item>
                            
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input UserName!' }]}
                            >
                                <Input size="large" placeholder="UserName" prefix={<UserOutlined />} />
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input Password!' }]}
                            >
                                <Input size="large" placeholder="Password" type="password" prefix={<EyeInvisibleOutlined />} />
                            </Form.Item>
                        </Form>
                </Modal>
            </div>
        );
    }
}

export default SignUp;