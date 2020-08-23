// Header
import React from 'react';
import { Banners } from '../../Store/AppStore';
import Image from '../../Templates/Image';
import styles from './Carousel.module.sass';

import { Carousel } from 'antd';

const Banner = (props) => {
    return (
        <div className={styles.carousel}>
            <Image width="100%" src={props.src} />
        </div>
    );
};

function MyCarousel() {
    return (
        <Carousel autoplay>
            {Banners.map((banner, k) => (
                <Banner key={k} src={banner} />
            ))}
        </Carousel>
    );
}

export default MyCarousel;
