import React from "react";

import { Col, Row } from "antd";
import editicon from "../../../assets/img/editicon.png";
import deleteicon from "../../../assets/img/deleteicon.png";
import "./PostItem.css";
import { useDispatch } from "react-redux";
import {deletePost} from "../../../redux/actions"
import { useHistory } from "react-router";

export default function PostItem(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const ondeleteHandler =()=>{
        console.log("work");
        dispatch(deletePost({
            "id" :props.id,
        }))
    }
  return (
   
      <Col
        xs={22}
        sm={22}
        md={18}
        lg={8}
        xl={8}
        key={props.id}
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
                        pathname:'/updatepost',
                          state:{
                            id: props.id,
                            userId: props.userId,  
                            title: props.title,
                            body : props.body,
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
          <div className="giglisting-head">ID {props.id}</div>
          <div className="giglisting-head">User ID {props.userId}</div>
          <div className="giglisting-profileDivider"></div>
          <div className="giglisting-txt">
            <div>Title: {props.title}</div>
            <div>Body :{props.body}</div>
          </div>
         
        </div>
      </Col>
    
  );
}
