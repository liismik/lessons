import { Form, Input, Button } from 'antd';

function Register() {

  const handleSubmit = async (values) => {

    const user = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      password: values.password
    }

    const res = await fetch('http://localhost:8081/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
          body: JSON.stringify(user),
      })

      if (res.ok) {
        console.log("Success! User registered!")
      }
  }

  return(
    <>
      <Form
        onFinish={handleSubmit}
        style={{ textAlign:'right', width:'400px' }}
      >
        <Form.Item 
          label="First Name"
          name="firstName"
          rules={[{
            required: true
          }]}
        >
        <Input />
        </Form.Item>
        <Form.Item 
          label="Last Name"
          name="lastName"
          rules={[{
            required: true
          }]}
        >
        <Input />
        </Form.Item>
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

        <Form.Item 
          label="Confirm Password"
          name="confirm"
          rules={[{
            required: true
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
    </>
  )
}

export default Register;
