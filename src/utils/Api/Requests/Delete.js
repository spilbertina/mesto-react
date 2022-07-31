import { RequestWithData } from "./RequestWithData.js";

export class Delete extends RequestWithData {
    constructor(baseUrl, login, token) {
        super('DELETE', baseUrl, login, token);
    }

    query(path) {
        return this._query(path);
    }
}