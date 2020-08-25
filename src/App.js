import React from 'react';
import MyHeader from './Components/Header';
import AppContext from './Context/AppContext';
import AppStore from './Store/AppStore';
import Wrapper from './Templates/Wrapper';
import { Row, Col, Space } from 'antd';

function App(props) {
    return (
        <AppContext.Provider value={AppStore}>
            <MyHeader />
            {props.children}
            <Wrapper style={{ backgroundColor: '#222', color: '#fff' }}>
                <Row style={{ padding: 20 }}>
                    <Col sm={24} md={12}>
                        Copyright © {new Date().getFullYear()}{' '}
                        {AppStore.title + ' S.L.'}
                    </Col>
                    <Col sm={24} md={12} align="center">
                        <Space size="middle">
                            <span>{AppStore.phone}</span>
                            <span>&bull;</span>
                            <span>{AppStore.email}</span>
                        </Space>
                    </Col>
                </Row>
            </Wrapper>
        </AppContext.Provider>
    );
}

export default App;
