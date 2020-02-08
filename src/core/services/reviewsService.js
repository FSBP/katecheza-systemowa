import axios from "axios";
import { environment } from "../../environment/environment";

const service = '/reviews';

export const reviewsService = {
    getReviews: () => {
        return axios.get(environment.apiUrl + service + '/getReviews');
    },
    addReview: (review, rate, date) => {
        return axios.post(environment.apiUrl + service + '/addReview', {
            review,
            rate,
            date
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
};
