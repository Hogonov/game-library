import React from 'react';
import MetaLayout from '@/layout/MetaLayout';
import Header from '@/components/Header';
import styles from './index.module.scss';
const MainLayout = (
    {
        children,
        title,
        description,
        keywords
    }) => {

    return (
        <MetaLayout title={title} description={description} keywords={keywords}>
            <Header />
            <div className={styles.main}
                style={{ paddingBottom: '40px' }}>
                {children}
            </div>
        </MetaLayout>
    );
};

export default MainLayout;
