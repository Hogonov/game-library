import {gameSlice} from "../slices/gameSlice";
import {platformSlice} from "@/modules/GameList/store/slices/platformSlice";
import {fetchPlatforms} from "@/modules/GameList/api/fetchPlatforms";

export const fetchPlatformAction = () => {
    return async (dispatch) => {
        try {
            dispatch(platformSlice.actions.fetchingPlatform());
            const response = await fetchPlatforms()

            dispatch(platformSlice.actions.fetchPlatformSuccess(response.results));
        } catch (e) {
            dispatch(
                gameSlice.actions.fetchGameError(
                    'Произошла ошибка при загрузке игр'
                )
            );
        }
    };
};
