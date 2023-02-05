import React from 'react';
import Link from 'next/link';
import styles from './index.module.scss';
import { TextWithLabel } from '@/UI/textWithLabel';
import { CustomImage } from '@/UI/image';

export const GameItem = ({ game }) => {
  const url = 'https://media.rawg.io/media/crop/600/400/games/' + game.background_image?.split('/games/')[1];
  return (<Link className={styles.main} href={`/game/${game.id}`}>
    <div className={styles.name}>{game.name}</div>
    <TextWithLabel styles={styles.gameInfo} label={'Дата релиза:'} text={game.released} />
    <TextWithLabel styles={styles.gameInfo} label={'Рейтинг:'} text={game.rating} />
    <CustomImage styles={styles.image} src={url} width="300" height="200" alt={game.id} />
  </Link>);
};