import React from 'react';
import MyHeader from './Components/Header';
import AppContext from './Context/AppContext';
import AppStore from './Store/AppStore';

import { Layout, Row, Col } from 'antd';
const { Footer, Content } = Layout;

function App() {
    return (
        <AppContext.Provider value={AppStore}>
            <Layout>
                <Content>
                    <MyHeader />
                </Content>
                <Row justify="center">
                    <Col
                        xs={24}
                        lg={20}
                        xl={16}
                        style={{ backgroundColor: 'red' }}
                    >
                        <Content>Content</Content>
                    </Col>
                </Row>
                <Footer>Footer</Footer>
            </Layout>
        </AppContext.Provider>
    );
}

export default App;
