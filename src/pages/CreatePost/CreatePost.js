import React, {useState} from 'react'
import { Input, Button,Col, Row ,Form, message} from "antd";
import { SearchOutlined, ArrowLeftOutlined,LoadingOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';
// import history from "../../../routes/history"; 
import { createPost } from '../../redux/actions'; 

export default function CreatePost() {
  const location = useLocation();
  const dispatch = useDispatch();

  const [userId, setuserId] = useState()
  const [title, setTitle] = useState('')
  const [body, setbody] = useState('')
  
  const onFinish=()=>{

    dispatch(createPost({
    
      "userId": userId,
      "title": title,
      "body" : body
    }))
    message.success("Post created successfully!")
  }

  return (
    <>
      <h1>Create Post</h1>
      
      <div>
      <Form

      onFinish={onFinish}
    >
      <Form.Item
        label="UserId"
        rules={[{ required: true, message: 'Please input your userid!' }]}
      >
        <Input value={userId} onChange={(e)=>setuserId(e.target.value)}/>
      </Form.Item>

      <Form.Item
        label="Title"
      
        rules={[{ required: true, message: 'Please input your Title!' }]}
      >
         <Input value={title} onChange={(e)=>setTitle(e.target.value)}/>
      </Form.Item>

      <Form.Item
        label="Body"
      
        rules={[{ required: true, message: 'Please input your Body!' }]}
      >
         <Input value={body} onChange={(e)=>setbody(e.target.value)}/>
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
