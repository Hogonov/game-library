import React, { useState } from 'react';
import baseStyles from './index.module.scss';
import Image from 'next/image';
import pic404 from '@/public/404.jpg';

export const CustomImage = (props) => {
    const   {
        src,
        width = 300,
        height = 200,
        alt = 'image',
        styles = '',
        quality,
    } = props;

    const keyStr =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

    const triplet = (e1, e2, e3) =>
        keyStr.charAt(e1 >> 2) +
    keyStr.charAt(((e1 & 3) << 4) | (e2 >> 4)) +
    keyStr.charAt(((e2 & 15) << 2) | (e3 >> 6)) +
    keyStr.charAt(e3 & 63);

    const rgbDataURL = (r, g, b) =>
        `data:image/jpg;base64,R0lGODlhAQABAPAA${
            triplet(255, r, g) + triplet(b, 255, 255)
        }/yH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==`;

    const [srcLocal, setSrcLocal] = useState(src);

    return <Image className={`${baseStyles.main} ${styles}`}
        src={srcLocal}
        width={width}
        height={height}
        alt={alt}
        onError={() => setSrcLocal(pic404)}
        quality={quality}
        placeholder="blur"
        blurDataURL={rgbDataURL(114, 114, 114)}
        {...props}
    />;
};