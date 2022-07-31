import { RequestWithData } from "./RequestWithData.js";

export class Post extends RequestWithData {
    constructor(baseUrl, login, token) {
        super('POST', baseUrl, login, token);
    }
}