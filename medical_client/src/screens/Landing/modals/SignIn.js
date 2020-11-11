import React, { Component } from 'react';
import { Modal, Form, Input, Button } from 'antd';
import { UserOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: this.props.visible,
        }
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
    };

    render() {
        return (
            <div>
                <Modal
                    title="Sign In"
                    visible={this.state.visible}
                    okText= 'Sign In'
                    cancelText= 'Cancel'
                    onOk={this._submit}
                    onCancel={this.handleCancel.bind(this)}
                    okButtonProps={ this._submit }
                    width = {400}
                    destroyOnClose= {true}
                    footer={[
                        <Button type="primary" form="signin_form" key="submit" htmlType="submit">
                            Sign In
                        </Button>
                        ]}
                    >
                        <Form name='signin_form' onFinish={this._submit}>
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

export default SignIn;