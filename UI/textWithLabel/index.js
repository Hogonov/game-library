import React from 'react';
import baseStyles from './index.module.scss';

export const TextWithLabel = (props) => {
    const { label, text, styles = '' } = props;
    return (
        <div
            className={`${baseStyles.main} ${styles}`}
        >
            <div className={baseStyles.label}>{label}</div>
            <div className={baseStyles.text}>{text}</div>
        </div>
    );
};