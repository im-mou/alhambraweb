// Header
import React, { useContext } from 'react';
import AppContext from '../../Context/AppContext';
import { Row, Col, Image } from 'antd';

const styles = {
    topmenu: {
        backgroundColor: '#444',
        color: '#fff',
        fontWeight: 'bold',
        padding: 20,
    },
    navbar: {
        backgroundColor: '#fff',
        padding: '5px 20px',
        minHeight: 100,
    },
    logo: {
        background: 'grey',
        height: 50,
        width: 200,
    },
};

function TopMenu() {
    const context = useContext(AppContext);
    return (
        <Row style={styles.topmenu} justify="space-between">
            <Col xs={12}>[icon] {context.email}</Col>
            <Col align="right" xs={12}>
                [icon] Llámanos: {context.phone}
            </Col>
        </Row>
    );
}

function NavBar() {
    const context = useContext(AppContext);
    return (
        <Row align="middle" style={styles.navbar}>
            <Col xs={6}>
                <Col style={styles.logo}>logo</Col>
            </Col>
            <Col xs={18}>
                <Row gutter={[48, 0]}>
                    <Col>Inicio</Col>
                    <Col>Servicios</Col>
                    <Col>Empresa</Col>
                    <Col>Clientes</Col>
                </Row>
            </Col>
        </Row>
    );
}

const Header = (props) => {
    return (
        <>
            <TopMenu />
            <NavBar />
        </>
    );
};

export default Header;
