import React from 'react';
import { Row, Col } from 'antd';

function Wrapper(props) {
    const { id, children, ...other } = props;
    return (
        <div id={id || null}>
            <Row
                justify="center"
                align="middle"
                style={{ padding: 10 }}
                {...other}
            >
                <Col xs={24} lg={20} xl={16}>
                    {children}
                </Col>
            </Row>
        </div>
    );
}

export default Wrapper;
