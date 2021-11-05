import { Form, Input, Button } from 'antd';
import { useContext, useState } from "react";
import { Context } from "../store";
import { loginUser } from '../store/actions';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [state, dispatch] = useContext(Context)

  const handleSubmit = async (e) => {
    setEmail(e.email)
    setPassword(e.password)

    const userData = {
      email: e.email,
      password: e.password
    }

    const res = await fetch('http://localhost:8081/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData),
    })
    
    const returnData = await res.json()

    if(returnData.token) {
      console.log("Successfully logged in")
      dispatch(loginUser(returnData))
    }
  }

  return(
    <>
      <Form
        onFinish={handleSubmit}
        style={{ textAlign:'right', width:'300px' }}
      >
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
          label="Password"
          name="password"
          rules={[{
            required: true
          }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Logi sisse
          </Button>
        </Form.Item>

      </Form>
    </>
  )
}

export default Login;