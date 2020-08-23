import React from 'react';
import { Typography, Row, Col } from 'antd';
const { Title, Text } = Typography;

const SectionBlock = (props) => (
    <Col sm={24} md={props.span || 8}>
        <Row gutter={[0, 24]}>
            <Col span={24} align="center">
                {props.icon}
            </Col>
            <Col span={24} align="center">
                <small>
                    <Text style={{ color: '#fff', fontWeight: 'normal' }}>
                        {props.preheader}
                    </Text>
                </small>
                <Title
                    level={3}
                    style={{
                        color: '#fff',
                        fontWeight: '400',
                        margin: '5px 0 0 0',
                    }}
                >
                    {props.text}
                </Title>
            </Col>
        </Row>
    </Col>
);


export default SectionBlock;
