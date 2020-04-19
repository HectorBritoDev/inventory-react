const baseURL = 'http://inventory.test/api';
const client_name = "Laravel Password Grant Client";
const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
}

const _constructUrl = (url) => {
    return `${baseURL}${url}`;
}

const get = (url, access_token) => fetch(_constructUrl(url), {
    method: 'GET',
    headers: { ...headers, Authorization: `Bearer ${access_token}` },
}).then(response => {

    if (response.ok) {
        return response.json();
    } else {
        throw new Error(Response.statusText);
    }
});

const post = (url, formData) => fetch(_constructUrl(url), {
    method: 'POST',
    body: JSON.stringify({ ...formData, client_name }),
    headers
}).then(response => {
    if (response.ok) {
        return response.json();
    } else {
        throw new Error(response.statusText);
    }
});

export default { get, post };