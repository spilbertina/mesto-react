import { Request } from "./Request.js";

export class RequestWithData extends Request {
    constructor(method, baseUrl, login, token) {
        super(method, baseUrl, login, token);
        this._settings.headers['Content-Type'] = 'application/json';
    }

    query(path, data) {
        this._settings.body = JSON.stringify(data);
        return this._query(path);
    }
}