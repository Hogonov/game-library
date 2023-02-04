import React from 'react';
import styles from './index.module.scss'
import MainLayout from "@/layout/MainLayout";
const Loader = () => (<MainLayout>
        <div className={styles.loader}>
            <div className={styles.spinner}/>
        </div>
</MainLayout>

);

export default Loader;