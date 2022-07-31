export class Request {
    constructor(method, baseUrl, login, token) {
        this._baseUrl = baseUrl;
        this._login = login;

        this._settings = {
            method: method,
            headers: {
                authorization: token
            }
        };
    }
    _makeUrl(path) {
        return `${this._baseUrl}/${this._login}/${path}`;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        else {
            return Promise.reject(`Ошибка ${res.status}`);
        }
    }

    _query(path) {
        return fetch(this._makeUrl(path), this._settings)
            .then(res =>
                this._checkResponse(res)
            )
    }
}
