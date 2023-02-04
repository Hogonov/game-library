import {gameSlice} from "../slices/gameSlice";
import {fetchGames} from "../../api/fetchGames";

/**
 * @param queryParams: параметры для запроса
 * @param ctx: контекст получаемый в getServerSideProps, ...
 * */
export const fetchGamesAction = (
    queryParams,
    ctx
) => {
    const {limit = '25', page = 1, ordering, search, status, platforms} = queryParams;

    const urlParams = {limit, page, ordering, status, platforms};
    if (search !== undefined) urlParams.search = search

    return async (dispatch) => {
        try {
            dispatch(gameSlice.actions.fetchingGame());
            const response = await fetchGames({urlParams})

            dispatch(gameSlice.actions.fetchGameSuccess(response.results));
            dispatch(gameSlice.actions.setTotalGames(response.count));
            dispatch(gameSlice.actions.setTotalPages(response.count / limit));
            dispatch(gameSlice.actions.setPage(page));
            dispatch(gameSlice.actions.setLimit(limit));
        } catch (e) {
            dispatch(
                gameSlice.actions.fetchGameError(
                    'Произошла ошибка при загрузке игр'
                )
            );
        }
    };
};
