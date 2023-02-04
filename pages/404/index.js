import Link from 'next/link';

import styles from './404.module.css';

export default function Error() {
  return (
      <div className="container">
        <div className={`${styles.font404} ${styles.textCenter}`}>Ошибка 404!</div>
        <div className={`${styles.textCenter} ${styles.font404Text}`}>
          Запрашиваемая страница не найдена.
        </div>
        <div className={`${styles.textCenter} ${styles.font404TextMini}`}>
          Проверьте адрес, или перейдите на{' '}
          <Link title="главную страницу сайта" href="/">
            <b>главную страницу сайта</b>
          </Link>
        </div>
      </div>
  );
}
