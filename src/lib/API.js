/* eslint-disable indent */

import ezFetch from 'ez-fetch';

const API_URL = 'https://nsswebsite.prashanthbhonagiri.now.sh/api';
// const API_URL = 'http://localhost:3000/api/users';

export default {
    getDonars() {
        return ezFetch.get(`${API_URL}/donars`);
    },
    getDonarswithBG(query) {
        return ezFetch.get(`${API_URL}/donars${query}`);
    }

};
