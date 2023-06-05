import React from 'react';
import baseStyles from './index.module.scss';

export const TextLabelBlock = (props) => {
    const { children, label, color = '', styles } = props;
    return (
        <div
            className={`${baseStyles.main} ${baseStyles[color]} ${styles}`}
        >
            <div className={baseStyles.label}>{label}</div>
            <div className={baseStyles.text}>{children}</div>
        </div>
    );
};