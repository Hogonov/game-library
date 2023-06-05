import React from 'react';
import styles from './index.module.scss';
import { useRouter } from 'next/router';

const Loader = ({ children }) => {
    const router = useRouter();

    const [pageLoading, setPageLoading] = React.useState(false);
    React.useEffect(() => {
        const handleStart = () => {
            setPageLoading(true);
        };
        const handleComplete = () => {
            setPageLoading(false);
        };

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);
    }, [router]);

    if (pageLoading)
        return <div className={styles.loader}>
            <div className={styles.spinner} />
        </div>;

    else return <>{children}</>;
};

export default Loader;