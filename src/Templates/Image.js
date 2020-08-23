// Header
import React from 'react';
import { Image } from 'antd';

const MyImage = (props) => {
    const { src, ...other } = props;
    return <Image {...other} src={`/resources/images/${props.src}`} />;
};

export default MyImage;
