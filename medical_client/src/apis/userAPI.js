import HELPERS from 'utils/helpers';

const USER_API = {
    getUserDetails = () => {
        return HELPERS.request({
            url: `/users/details/`,
            method: 'GET',
        })
    }
}