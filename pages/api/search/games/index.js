import {API} from "@/api";

const handler = async (req, res) => {
    try {
        const response = await API().api.get('/api/games',
            {params: req.query}
        );
        return res.status(200).json(response.data);
    } catch (e) {
        if (e?.response) return res.status(e.response.status).json(e.response.data);
        else return res.status(500).json(e);
    }
}
export default handler