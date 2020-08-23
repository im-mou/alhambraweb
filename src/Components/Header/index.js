// Header
import React, { useContext } from 'react';
import Routes from '../../Store/Routes';
import { Link } from 'react-router-dom';
import AppContext from '../../Context/AppContext';
import { useLocation } from 'react-router-dom';
import styles from './Header.module.sass';
import cx from 'classnames';
import Wrapper from '../../Templates/Wrapper';
import { Row, Col, Typography, Menu, Dropdown, Button } from 'antd';
import { MenuOutlined, MailFilled, PhoneFilled } from '@ant-design/icons';

const { Title } = Typography;
const routesEntries = Object.entries(Routes);

function TopMenu() {
    const context = useContext(AppContext);
    return (
        <Wrapper className={styles.topmenu}>
            <Row justify="space-between">
                <Col xs={12}>
                    <MailFilled /> {context.email}
                </Col>
                <Col align="right" xs={12}>
                    <PhoneFilled /> Llámanos: {context.phone}
                </Col>
            </Row>
        </Wrapper>
    );
}

function NavBar() {
    const context = useContext(AppContext);

    let location = useLocation();

    let pageName = routesEntries.filter(
        ([_, { $, link }]) => link === location.pathname
    );
    pageName = pageName[0][1];

    const menu = (
        <Menu>
            {routesEntries.map(([name, data], k) => (
                <Menu.Item key={k}>
                    <Link to={data.link}>{data.title}</Link>
                </Menu.Item>
            ))}
        </Menu>
    );

    return (
        <Wrapper className={styles.navbar}>
            <Row justify="space-between" align="middle">
                <Col xs={1} md={0}>
                    <Dropdown overlay={menu}>
                        <Button>
                            <MenuOutlined />
                        </Button>
                    </Dropdown>
                </Col>
                <Col xs={18} md={8}>
                    <Title className={styles.logo} level={4}>
                        {context.title}<span style={{color:'#006b26aa', marginLeft:2}}>.</span>
                    </Title>
                </Col>
                <Col xs={0} md={16}>
                    <Row gutter={[48, 0]} justify="end">
                        {routesEntries.map(([name, data], k) => (
                            <Col
                                key={k}
                                className={cx(styles.menu, {
                                    [styles.menuactive]:
                                        pageName.title === data.title,
                                })}
                            >
                                <Link to={data.link}>{data.title}</Link>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Wrapper>
    );
}

const Header = (props) => {
    return (
        <div className={cx(styles.header, styles.homepage)}>
            <TopMenu />
            <NavBar />
        </div>
    );
};

export default Header;
