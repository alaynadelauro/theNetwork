import { AppState } from '../AppState';
import { Ad } from '../models/Ad';
import { logger } from '../utils/Logger';
import Pop from "../utils/Pop.js"
import { api } from "./AxiosService.js";

class AddService {
    async getAdds() {
        try {
            const res = await api.get('api/ads')
            logger.log(res.data)
            AppState.ads = res.data.map(pojo => new Ad(pojo))
        } catch (error) {
            logger.log(error)
            Pop.error(error)
        }
    }
}

export const addService = new AddService()