import React from 'react';
import styles from './index.module.scss';
import ButtonLink from '../buttonLink';
import { Arrow } from '../arrow';

const Pagination = ({ totalPages, currentPage }) => {
  const pages = [];
  let i = currentPage > 1 ? currentPage - 1 : 1;
  for (; i <= totalPages && pages.length < 3; i++) {
    pages.push(i);
  }
  return (
    <div className={styles.main}>
      <div className={styles.controls}>
        {currentPage !== 1 && (
          <ButtonLink styles={styles.button}
                      params={{ name: 'page', value: +currentPage - 1 }}
          ><Arrow direction={'left'} /></ButtonLink>
        )}
        {pages.map(number => <ButtonLink
            styles={`${styles.button} ${number === +currentPage ? styles.currentPage : ''}`}
            key={number}
            params={{ name: 'page', value: number }}
            disabled={number === +currentPage}
          >{number}</ButtonLink>
        )}
        {currentPage !== totalPages && (
          <ButtonLink styles={styles.button}
                      params={{ name: 'page', value: +currentPage + 1 }}
          ><Arrow direction={'right'} /></ButtonLink>
        )}
      </div>
    </div>
  );
};

export default Pagination;