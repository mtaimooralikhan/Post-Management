import React from 'react';
import { Col, Row, Typography, Button, Divider } from 'antd'
import './HomeCategoryCard.css'

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
                <h2 className={'title'} >{props.title}<span  strong className="counter">{props.count}</span></h2>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} xl={13} className={'searchContainer'} >
                    {
                        props.searchBar
                    }
                </Col>
                <Col xs={18} sm={18} md={19} lg={4} xl={4} className={'dropdown'} >
                    {
                        props.dropdown
                    }
                </Col>
                <Col xs={6} sm={6} md={5} lg={2} xl={2}   >
                    {
                        props.buttonClear
                    }
                </Col>
                
            </Row>
            <Divider />
            <Row style={{ width: '100%', height: '90%' }}>
                {

                    props.items


                }
            </Row>
           
            <Row  justify="center" align="middle">
                {props.elementBottom}
            </Row>
        </Col>
    )
}

export default HomeCategoryCard;
