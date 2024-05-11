import { Form, Input } from 'antd'
import './App.css'

function App() {


  return (
    <>
     
     <Form>
     <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>
     </Form>
    </>
  )
}

export default App
