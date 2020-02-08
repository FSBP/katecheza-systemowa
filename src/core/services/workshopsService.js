import axios from "axios";
import { environment } from "../../environment/environment";

const service = '/workshops';

export const workshopsService = {
    getWorkshops: () => {
        return axios.get(environment.apiUrl + service + '/getWorkshops');
    },

    workshopsEnrollUser: (
        courseId,
        firstName,
        lastName,
        email,
        phone,
        address,
        info
    ) => {
        return axios.post(environment.apiUrl + service + '/workshopsEnrollUser', {
            courseId,
            firstName,
            lastName,
            email,
            phone,
            address,
            info
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
};
