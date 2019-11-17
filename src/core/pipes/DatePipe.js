import Vue from 'vue';
import moment from 'moment';

export default Vue.filter('datePipe', value => {
    return moment(value).format('DD-MM-YYYY');
});


