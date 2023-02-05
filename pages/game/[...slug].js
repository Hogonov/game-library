import {wrapper} from '@/modules/GameList/store';
import {fetchGameDetail, fetchGameScreenshots} from '@/modules/GameCard/api/fetchGameDetail';
import {GameCard} from '@/modules/GameCard';
import MainLayout from '@/layout/MainLayout';

const Index = ({gameData, gameScreenshots}) => {
    return (
        <MainLayout title={gameData.name} description={gameData.description}>
            <GameCard game={gameData} gameScreenshots={gameScreenshots}/>
        </MainLayout>
    );
};

export default Index;

export const getServerSideProps = 
    wrapper.getServerSideProps((store) => {
        return async (context) => {
            const id = +context.query.slug[0];
            const gameData = await fetchGameDetail({id});
            const gameScreenshots = await fetchGameScreenshots({id});
            return {
                props: {gameData, gameScreenshots: gameScreenshots.results.map(e => e.image)},
            };
        };
    });
