import React from 'react';
import { useState } from 'react';
import { Form, Input, Button } from 'antd';

function Register() {
    const [firstName, setFirst] = useState("");
    const [lastName, setLast] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

const CreateUser = async (user) => {
    setFirst(user.firstname)
    setLast(user.lastname)
    setEmail(user.email)
    setPassword(user.password)
    const data = await fetch('http://localhost:8081/api/auth/signup/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email,
            firstName,
            lastName,
            password
          }),
        })

    const result = await data.json()

    console.log(result)
}

    return (
        <Form onFinish={CreateUser}>
            <Form.Item 
                label="Eesnimi" 
                name="firstname" 
                rules={[{ 
                    required: true, 
                    message: "Palun sisestage eesnimi!" 
                }]}
            >
                <Input />
            </Form.Item>
            <Form.Item 
                label="Perekonnanimi" 
                name="lastname" 
                rules={[{ 
                    required: true, 
                    message: "Palun sisestage perekonnanimi!" 
                }]}
            >
                <Input />
            </Form.Item>
            <Form.Item 
                label="E-mail" 
                name="email" 
                rules={[{ 
                    required: true, 
                    message: "Palun sisestage e-maili aadress!" 
                }]}
            >
                <Input />
            </Form.Item>
            <Form.Item 
                label="Salasõna" 
                name="password" 
                rules={[{ 
                    required: true, 
                    message: "Palun sisestage eesnimi!" 
                }]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Registreeru
                </Button>
            </Form.Item>
        </Form>
    );
}

export default Register;