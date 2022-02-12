import React, {useState} from 'react'
import { Input, Button,Col, Row ,Form} from "antd";
import { SearchOutlined, ArrowLeftOutlined,LoadingOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
// import history from "../../../routes/history"; 
import { updatePost } from '../../redux/actions'; 

export default function CreatePost() {
  const location = useLocation();
  const dispatch = useDispatch();

  const [userId, setuserId] = useState(location.state.userId)
  const [title, setTitle] = useState(location.state.title)
  const [body, setbody] = useState(location.state.body)
  
  const onFinish=()=>{
    dispatch(updatePost({
      "id": location.state.id,
      "userId": userId,
      "title": title,
      "body" : body
    }))
  }

  return (
    <>
      <h1>Update Post</h1>
      
      <div>
      <Form

      onFinish={onFinish}
    >
      <Form.Item
        label="UserId"
        rules={[{ required: true, message: 'Please input your userid!' }]}
      >
        <Input value={userId} onChange={(val)=>setuserId(val)}/>
      </Form.Item>

      <Form.Item
        label="Title"
      
        rules={[{ required: true, message: 'Please input your Title!' }]}
      >
         <Input value={title} onChange={(val)=>setTitle(val)}/>
      </Form.Item>

      <Form.Item
        label="Body"
      
        rules={[{ required: true, message: 'Please input your Body!' }]}
      >
         <Input value={body} onChange={(val)=>setbody(val)}/>
      </Form.Item>
     

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form.Item>
    </Form>
      </div>
    </>
  )
}
