import { store } from '../redux/store';
const baseURL = 'http://inventory.test/api';
const client_name = "Laravel Password Grant Client";

// function access_token({ token } = store.getState().auth) {
//     return (token) ? store.getState().auth.token.access_token : '';
// }

// const headers = {
//     Accept: "application/json",
//     "Content-Type": "application/json",
// }
function headers() {
    const { token } = store.getState().auth;
    let access_token = (token) ? store.getState().auth.token.access_token : '';
    return {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: 'Bearer ' + access_token
    }
}

const _constructUrl = (url) => {
    return `${baseURL}${url}`;
}

const get = (url) => fetch(_constructUrl(url), {
    method: 'GET',
    headers: headers(),
}).then(handleResponse);

const post = (url, formData = '') => fetch(_constructUrl(url), {
    method: 'POST',
    body: JSON.stringify({ ...formData, client_name }),
    headers: headers()
}).then(handleResponse);

const put = (url, formData = '') => fetch(_constructUrl(url), {
    method: 'PUT',
    body: JSON.stringify({ ...formData, client_name }),
    headers: headers()
}).then(handleResponse);

const destroy = (url) => fetch(_constructUrl(url), {
    method: 'DELETE',
    headers: headers()
}).then(handleResponse);

function handleResponse(response) {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error(response.statusText);
    }

}



export default { get, post, put, destroy };