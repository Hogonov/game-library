import React from 'react'
import Link from "next/link";
import styles from './index.module.scss'
import ImageSlider from "@/UI/ImageSlider";
import {TextLabelBlock} from "@/UI/textLabelBlock";

export const GameCard = ({game, gameScreenshots}) => {
    return (<div className={styles.main}
                 style={{
                     backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(0, 0, 0, 1)), 
                     url(${game.background_image})`
                 }}>
        <div>
            <div className={styles.gameInfo}>
                <div className={styles.gameTitle}>{game.name}</div>
                <div className={styles.baseGameInfo}>
                    <TextLabelBlock styles={styles.baseGameInfoItem} label={'Рейтинг:'}>
                        {game.rating}
                    </TextLabelBlock>
                    <TextLabelBlock styles={styles.baseGameInfoItem} label={'Дата релиза:'}>
                        {game.released}
                    </TextLabelBlock>
                    <TextLabelBlock styles={styles.baseGameInfoItem} label={'Сайт игры:'}>
                        <Link className={styles.website} href={game.website}>{game.website}</Link>
                    </TextLabelBlock>
                </div>
                <div className={styles.description}>Описание:
                    <div dangerouslySetInnerHTML={{__html: game.description}}/>
                </div>
            </div>
        </div>
        <div>
            <ImageSlider images={[game.background_image, ...gameScreenshots]}
                         width={1920}
                         height={1080}
                         alt={game.name}
                         quality={50}
            />
        </div>
    </div>)
}