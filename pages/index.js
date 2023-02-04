import {fetchPlatformAction, GameList} from "@/modules/GameList";
import {wrapper} from "@/modules/GameList/store";
import {fetchGamesAction} from "@/modules/GameList";
import MainLayout from "../layout/MainLayout";


export default function Home({}) {
    return (
        <MainLayout>
            <GameList/>
        </MainLayout>
    )
}


export const getServerSideProps =
    wrapper.getServerSideProps((store) => {
        return async (context) => {
            const dispatch = store.dispatch;
            console.log(context.query)
            await dispatch(await fetchGamesAction(context.query));
            await dispatch(await fetchPlatformAction());
            const games = store.getState().game.games;
            return {
                props: {games},
            }
        };
    });