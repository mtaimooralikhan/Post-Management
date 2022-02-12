import React from "react";

import { Col, Row } from "antd";
import editicon from "../../../assets/img/editicon.png";
import deleteicon from "../../../assets/img/deleteicon.png";
import "./PostItem.css";
import { useDispatch } from "react-redux";
import {deletePost} from "../../../redux/actions"
import { useHistory } from "react-router";

export default function PostItem({item}) {
    const dispatch = useDispatch();
    const history = useHistory();
    const ondeleteHandler =()=>{
        console.log("work");
        dispatch(deletePost({
            "id" :item.id,
        }))
    }
  return (
   
      <Col
        xs={22}
        sm={22}
        md={18}
        lg={8}
        xl={8}
        key={item.id}
        className="giglisting-container"
      
      >
        <div style={{ padding: "3%" }}>
          <Row >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
                width: "50%",
              }}
            >
              <div>
                <img
                  src={editicon}
                  alt="editicon"
                  style={{ width: "20px", height: "20px", marginTop: "2%" }}
                  onClick={()=>{
                      history.push({
                        pathname:'/post',
                          state:{
                            id: item.id,
                            userId: item.userId,  
                            title: item.title,
                            body : item.body,
                          }  
                        })
                  }}
                
                />
              </div>
              <div>
                <img
                  src={deleteicon}
                  alt="deleteicon"
                  style={{ width: "20px", height: "20px" , }}
                  onClick={()=>ondeleteHandler()   }
                />
              </div>
            </div>
          </Row>
          <div className="giglisting-head">ID {item.id}</div>
          <div className="giglisting-head">User ID {item.userId}</div>
          <div className="giglisting-profileDivider"></div>
          <div className="giglisting-txt">
            <div>Title: {item.title}</div>
            <div>Body :{item.body}</div>
          </div>
         
        </div>
      </Col>
    
  );
}
