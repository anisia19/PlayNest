import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '359a9dabdcd541cabd210a49dd085b3d'
    }
})