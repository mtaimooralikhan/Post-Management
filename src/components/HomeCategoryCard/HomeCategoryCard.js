import React from 'react';
import { Col, Row, Typography, Button, Divider } from 'antd'
import './HomeCategoryCard.css'
import history from '../../routes/history';

const { Title, Text } = Typography;
const HomeCategoryCard = props => {
    return (
        <Col
            lg={{
                span: 20,
                offset: 2,
            }}
            md={{
                span: 18,
                offset: 3,
            }}
            xs={22}
            className={'home-category-card-container'}
        >
            <Row justify="center" align="middle"  className={'NavBar'} >

                <Col xs={24} sm={24} md={24} lg={6} xl={5}  className={'titleBar'} >
                <h2 className={'title'} >{props.title}</h2>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={13} className={'searchContainer'} >
                    {
                        props.searchBar
                    }
                </Col>
                
            </Row>
            <Divider />
            <Row>
                <Button style={{background:'red', color:'white'}} onClick={()=>{history.push('./createpost')}}>Create a post</Button>
            </Row>
            <Row style={{ width: '100%', height: '90%' }}>
                {

                    props.items


                }
            </Row>
           
            
        </Col>
    )
}

export default HomeCategoryCard;
