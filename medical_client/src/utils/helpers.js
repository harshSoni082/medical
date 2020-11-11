import axios from 'axios';
import Cookies from 'js-cookie';

axios.defaults.baseURL = '/';
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.xsrfCookieName = 'csrftoken'

let HELPERS = {
    isLoggedIn: () => {
        return localStorage.getItem('isLoggedIn');
    },

    request: config => {
        return axios.request(config)
            .then(response => {
                return response
            })
            .catch(error => {
                return error
            })
    }
}

export default HELPERS;