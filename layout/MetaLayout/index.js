import React from 'react';
import Head from 'next/head';

const MetaLayout = (
    {
        children,
        title,
        description,
        keywords
    }) => {
    return (
        <>
            <Head>
                <title>{title || 'Библиотека игры'}</title>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta httpEquiv="Content-Language" content="ru-RU" />
                <meta name="robots" content="index, follow" />
                <meta
                    name="description"
                    content={description || 'Библиотека игр'}
                />
                <meta
                    name="keywords"
                    content={keywords || 'библиотека игры, игры, библиотека'}
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            {children && <div className="page">{children}</div>}
        </>
    );
};

export default MetaLayout;