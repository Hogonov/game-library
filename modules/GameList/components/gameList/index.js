import { useSelector } from 'react-redux';
import { GameItem } from '@/components/GameItem';
import React, { memo } from 'react';
import styles from './index.module.scss';
import Pagination from '@/UI/Pagination';
import { Dropdown } from '@/UI/dropdown';
import ButtonLink from '@/UI/buttonLink';
import Loader from '@/UI/loader';
import { GamesNotFound } from '../gamesNotFound';

const GameListComponent = () => {
    const { games, currentPage, totalPages } = useSelector((state) => state.game);
    const { platformsList } = useSelector((state) => state.platform);
    const ratingSortOptions = [
        { name: 'Рейтинг по возрастанию', href: 'rating' },
        { name: 'Рейтинг по убыванию', href: '-rating' }
    ];
    const releasedSortOptions = [
        { name: 'Дата релиза по возрастанию', href: 'released' },
        { name: 'Дата релиза по убыванию', href: '-released' }
    ];

    return (<>
        <div className={styles.main}>
            <div className={styles.controlBlock}>
                <div className={styles.sortBlock}>
                    <Dropdown items={platformsList} />
                    <Dropdown items={ratingSortOptions} />
                    <Dropdown items={releasedSortOptions} />
                    <ButtonLink href={'/'} styles={styles.resetButton}>Сбросить</ButtonLink>
                </div>
                <Pagination totalPages={totalPages} currentPage={currentPage} />
            </div>
            <Loader>
                <div className={styles.itemsBlock}>
                    {games.length < 1 && <GamesNotFound />}
                    {games.map((game, index) => {
                        return <GameItem key={index}
                            game={game} />;
                    })}

                </div>
            </Loader>
        </div>
    </>);
};

GameListComponent.displayName = 'GameList';

export const GameList = memo(GameListComponent);
