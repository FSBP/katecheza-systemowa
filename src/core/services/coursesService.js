import axios from "axios";
import { environment } from "../../environment/environment";

const service = '/courses';

export const coursesService = {
    getCourses: () => {
        return axios.get(environment.apiUrl + service + '/getCourses');
    },

    enrollUser: (
        courseId,
        firstName,
        lastName,
        email,
        phone,
        address,
        education,
        info
    ) => {
        return axios.post(environment.apiUrl + service + '/enrollUser', {
            courseId,
            firstName,
            lastName,
            email,
            phone,
            address,
            education,
            info
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
};
