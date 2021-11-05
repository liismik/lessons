import React from 'react';
import { useState } from 'react';
import { Form, Input, Button } from 'antd';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const LogUserIn = async (user) => {
        setEmail(user.email)
        setPassword(user.password)

        console.log(user)
    }

    return (
        <Form onFinish={LogUserIn}>
            <Form.Item 
                label="E-mail" 
                name="email" 
                rules={[{ 
                    required: true
                }]}
             >
                 <Input />
            </Form.Item>
            <Form.Item 
                label="Salasõna"
                name="password"
                rules={[{
                    required: true
                }]}
            >
                <Input />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Logi sisse
                </Button>
            </Form.Item>
        </Form>
    );
}

export default Login;