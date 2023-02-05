import React from 'react';
import baseStyles from './index.module.scss';
import { useRouter } from 'next/router';

const ButtonLink = ({ children, params, styles = '', disabled = false, props, href }) => {
  const router = useRouter();
  const onClick = (event) => {
    if (href) {
      router.push(href);
    } else {
      router.push({
        pathname: '/',
        query: { ...router.query, [params.name]: params.value }
      });
    }
  };

  return <button className={`${baseStyles.button} ${styles}`}
                 onClick={onClick}
                 disabled={disabled}
                 {...props}
  >
    {children}
  </button>;
};

export default ButtonLink;