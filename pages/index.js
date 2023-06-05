import { wrapper, fetchGamesAction, fetchPlatformAction, GameList } from '@/modules/GameList';
import MainLayout from '@/layout/MainLayout';
import React from 'react';


export default function Home({}) {

    return (
        <MainLayout>
            <GameList />
        </MainLayout>
    );
}


export const getServerSideProps =
  wrapper.getServerSideProps((store) => {
      return async (context) => {
          const dispatch = store.dispatch;
          await dispatch(await fetchGamesAction(context.query));
          await dispatch(await fetchPlatformAction());
          const games = store.getState().game.games;
          return {
              props: { games }
          };
      };
  });