import { API_URL } from '../../../config'
export const Post_Content_Service = {
    create,
    update,
    deleteModel,
    getById,
    search
}

function create(model) {
    // const auth = null;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', auth);
    const requestOptions = {
        headers,
        method: 'POST',
        body: JSON.stringify(model)
    };
    return fetch(`${API_URL}/api/v1/tin-tuc/create`, requestOptions).then(handleResponse);
}

function update(model) {
    // const auth = null;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', auth);
    const requestOptions = {
        headers,
        method: 'POST',
        body: JSON.stringify(model)
    };
    return fetch(`${API_URL}/api/v1/tin-tuc/update`, requestOptions).then(handleResponse);
}

function search(model) {
    const searchModel = {
        page: model.page ? model.page : 1,
        limite: model.limite ? model.limite : 10
    }
    // const auth = null;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // headers.append('Authorization', auth);
    const requestOptions = {
        headers,
        method: 'POST',
        body: JSON.stringify(searchModel)
    };
    return fetch(`${API_URL}/api/v1/tin-tuc`, requestOptions).then(handleResponse);
}

function getById() {

}



function deleteModel(ids) {
    if (!isNullOrUndefined(ids)) {
        if (ids.length > 0) {
            // const auth = null;
            const headers = new Headers();
            headers.append('Content-Type', 'application/json');
            // headers.append('Authorization', auth);
            const requestOptions = {
                headers,
                method: 'POST',
                body: JSON.stringify({ ids })
            };
            return fetch(`${API_URL}/api/v1/tin-tuc/${ids}`, requestOptions).then(handleResponse);
        }
    } else {
        return false;
    }
}

function handleResponse(response) {
    const responseStatusCode = 401;
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === responseStatusCode) {
                window.location.reload(true);
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}

function isNullOrUndefined(ids) {
    if (typeof ids === 'undefined' || typeof ids === null) 
        return true;
    return false;
}