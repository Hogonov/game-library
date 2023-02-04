import {API} from "@/api";

export const fetchPlatforms = async () => {
    try {
        const response = await API().api.get('/api/platforms/lists/parents', {
            params: {...API().defaultParams}
        })
        return response.data
    } catch (e) {
        throw e
    }
}