import React from 'react';
import RoutesList from '../Store/Routes';
import AppStore, {
    clientes,
    precios,
    dataExperiencia,
    dataServicios,
    aboutUsText,
} from '../Store/AppStore';
import Wrapper from '../Templates/Wrapper';
import SectionBlock from '../Templates/SectionBlock';
import Carousel from '../Components/Carousel';
import styles from './Pages.module.sass';
import { Typography, Row, Col, Card, Button, List } from 'antd';
import {
    ClockCircleOutlined,
    MailFilled,
    PhoneOutlined,
    FilePdfOutlined,
    ThunderboltTwoTone,
    FireTwoTone,
    ControlTwoTone,
    ToolTwoTone,
    ShopTwoTone,
    FilterTwoTone,
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;
const { Meta } = Card;

const MyCard = (props) => (
    // title, icon, description, children
    <Col xs={24} md={12}>
        <Card style={{ minHeight: 300 }}>
            <Col>{props.icon || null}</Col>
            <Col>
                <Meta
                    title={
                        <Text className={styles.cardTitle}>{props.title}</Text>
                    }
                    description={props.description || ''}
                />
                <Paragraph style={{ paddingTop: 35 }}>
                    <Text type="secondary">{props.children}</Text>
                </Paragraph>
            </Col>
        </Card>
    </Col>
);

const MySmallCard = ({ title, description }) => (
    <Col xs={24} sm={12} md={8}>
        <Card className={styles.smallCard}>
            <Meta title={title} description={description} />
        </Card>
    </Col>
);

const HomePage = (props) => {
    return (
        <div className={styles.homepage}>
            <Carousel id={RoutesList.HOMEPAGE.link} />

            <Wrapper
                id={RoutesList.CONTACTO.link}
                className={styles.accentSection}
            >
                <Row align="center" gutter={24}>
                    <SectionBlock
                        preheader="Contáctanos por correo"
                        text={AppStore.email}
                        icon={<MailFilled style={{ fontSize: 60 }} />}
                    />
                    <SectionBlock
                        preheader="Llámanos ahora para pedir presupuesto"
                        text={AppStore.phone}
                        icon={<PhoneOutlined style={{ fontSize: 60 }} />}
                    />
                    <SectionBlock
                        preheader="Nuestro Horario"
                        text={AppStore.horario}
                        icon={<ClockCircleOutlined style={{ fontSize: 60 }} />}
                    />
                </Row>
            </Wrapper>

            <Wrapper
                id={RoutesList.EMPRESA.link}
                className={styles.secondarySection}
            >
                <Title level={2}>Sobre Nosotros</Title>
                <Row justify="center" style={{ padding: '20px 0' }}>
                    <Col xs={22} md={20} lg={16}>
                        {aboutUsText.map((text, i) => (
                            <Paragraph key={i} className={styles.bigtext}>
                                {text}
                            </Paragraph>
                        ))}
                    </Col>
                </Row>
                <Row gutter={24}>
                    <Col xs={24} md={12} style={{ marginTop: 40 }}>
                        <List
                            bordered
                            size="large"
                            style={{ backgroundColor: '#fff' }}
                            header={<strong>Nuestros Servicios:</strong>}
                            dataSource={dataServicios}
                            renderItem={(item) => <List.Item>{item}</List.Item>}
                        />
                    </Col>
                    <Col xs={24} md={12} style={{ marginTop: 40 }}>
                        <List
                            bordered
                            size="small"
                            style={{ backgroundColor: '#fff' }}
                            header={
                                <strong>
                                    Nuestra experiencia está basada en:
                                </strong>
                            }
                            dataSource={dataExperiencia}
                            renderItem={(item) => <List.Item>{item}</List.Item>}
                        />
                    </Col>
                </Row>
                <Row align="center" style={{ marginTop: 60 }}>
                    <Button
                        danger
                        type="primary"
                        icon={<FilePdfOutlined />}
                        size="large"
                        target="_blank"
                        href="/ASI_CV.pdf"
                    >
                        Descarga nuestro CV
                    </Button>
                </Row>
            </Wrapper>

            <Wrapper className={styles.secondarySection}>
                <Title level={2}>Precios de administración</Title>

                <Row gutter={[24, 24]}>
                    {precios.map((el, k) => (
                        <MySmallCard key={k} {...el} />
                    ))}
                </Row>
            </Wrapper>

            <Wrapper
                id={RoutesList.SERVICIOS.link}
                className={styles.tercearySection}
            >
                <Title level={2}>Nuestros Servicios</Title>
                <Row gutter={[24, 24]}>
                    <MyCard
                        title="Instalaciones Eléctricas"
                        icon={
                            <ThunderboltTwoTone
                                twoToneColor="#048300"
                                className={styles.cardIcon}
                            />
                        }
                    >
                        Realizamos instalaciones eléctricas y proyectos de todo
                        tipo: viviendas, naves industriales, locales, piscinas,
                        etc.
                    </MyCard>
                    <MyCard
                        title="Contra incendios"
                        icon={
                            <FireTwoTone
                                twoToneColor="#048300"
                                className={styles.cardIcon}
                            />
                        }
                    >
                        Una parte fundamental de su instalación, sobretodo en
                        locales de pública concurrencia, es la instalación de
                        seguridad contra incendios. Provéase de los sistemas más
                        sofisticados de detección y actuación.
                    </MyCard>
                    <MyCard
                        title="Climatización"
                        icon={
                            <ControlTwoTone
                                twoToneColor="#048300"
                                className={styles.cardIcon}
                            />
                        }
                    >
                        Con los sistemas de climatización, calefacción y aire
                        acondicionado, hacemos más cómoda la estancia de la
                        personas en todo tipo de locales y viviendas.
                    </MyCard>
                    <MyCard
                        title="Instalaciones Hidráulicas"
                        icon={
                            <FilterTwoTone
                                twoToneColor="#048300"
                                className={styles.cardIcon}
                            />
                        }
                    >
                        En nuestro equipo contamos con los mejores profesionales
                        dedicados a la fontanería: nuevas instalaciones,
                        modificaciones, desagües, bombas, etc.
                    </MyCard>
                    <MyCard
                        title="Mantenimiento"
                        icon={
                            <ToolTwoTone
                                twoToneColor="#048300"
                                className={styles.cardIcon}
                            />
                        }
                    >
                        Además de nuevas instalaciones, realizamos
                        mantenimientos preventivos y correctivos en todo tipo de
                        instalaciones.
                    </MyCard>

                    <MyCard
                        title="Proyectos"
                        icon={
                            <ShopTwoTone
                                twoToneColor="#048300"
                                className={styles.cardIcon}
                            />
                        }
                    >
                        ¿Tiene un proyecto en mente? Nosotros lo hacemos
                        realidad: Electricidad, Fontanería, Redes, Domótica,
                        Automatización...
                    </MyCard>
                </Row>
            </Wrapper>

            <Wrapper
                id={RoutesList.CLIENTES.link}
                className={styles.secondarySection}
            >
                <Title level={2}>Nuestros Clientes</Title>

                <Row gutter={[24, 24]}>
                    {clientes.map((empresa, k) => (
                        <MySmallCard key={k} {...empresa} />
                    ))}
                </Row>
            </Wrapper>


        </div>
    );
};

export default HomePage;
