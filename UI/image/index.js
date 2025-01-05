import React, { useState, useEffect } from 'react';
import baseStyles from './index.module.scss';
import Image from 'next/image';
import pic404 from '@/public/404.jpg';

export const CustomImage = (props) => {
    const {
        src,
        width = 300,
        height = 200,
        alt = 'image',
        styles = '',
        quality,
    } = props;

    const [processedSrc, setProcessedSrc] = useState(src);

    useEffect(() => {
        if (typeof src === 'string') {
            setProcessedSrc(src);
        } else if (typeof src === 'object') {
            setProcessedSrc(src);
        } else {
            setProcessedSrc(pic404);
        }
    }, [src]);

    return (
        <Image
            className={`${baseStyles.main} ${styles}`}
            src={processedSrc}
            width={width}
            height={height}
            alt={alt}
            placeholder="blur"
            blurDataURL="data:image/png;base64,..."
            quality={quality}
            {...props}
        />
    );
};
