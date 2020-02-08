import axios from "axios";
import { environment } from "../../environment/environment";

const service = '/news';

export const newsService = {
    getNews: () => {
        return axios.get(environment.apiUrl + service + '/getNews');
    }
};
