import React from 'react';
import AppStore from '../Store/AppStore';
import Wrapper from '../Templates/Wrapper';
import SectionBlock from '../Templates/SectionBlock';
import Carousel from '../Components/Carousel';
import styles from './Pages.module.sass';
import { Typography, Row, Col, Card, Button } from 'antd';
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
            <Col>{props.icon}</Col>
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

const HomePage = (props) => {
    return (
        <div className={styles.homepage}>
            <Carousel />

            <Wrapper className={styles.accentSection}>
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
            
            <Wrapper className={styles.secondarySection}>
                <Title level={2}>Sobre Nosotros</Title>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus a purus cursus, congue lacus a, imperdiet felis.
                    Duis viverra ornare sem. Praesent dapibus dolor id nisi
                    porta aliquet.
                </Paragraph>
                <Paragraph>
                    Sed mi massa, efficitur a mattis vel, dictum sed erat. Cras
                    tempus ipsum eu velit ultricies feugiat a ac lectus. Quisque
                    bibendum tempor mattis. Mauris dolor mi, rutrum vitae auctor
                    sit amet, lacinia vitae justo. Mauris sed sapien sit amet mi
                    pulvinar tempor. Suspendisse pharetra lorem magna.
                </Paragraph>
                <Row align="center" style={{ marginTop: 60 }}>
                    <Button
                        danger
                        type="primary"
                        icon={<FilePdfOutlined />}
                        size="large"
                    >
                        Descarga nuestro CV
                    </Button>
                </Row>
            </Wrapper>
            
            <Wrapper className={styles.tercearySection}>
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
        
        </div>
    );
};

export default HomePage;
