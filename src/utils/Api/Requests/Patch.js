import { RequestWithData } from "./RequestWithData.js";

export class Patch extends RequestWithData {
    constructor(baseUrl, login, token) {
        super('PATCH', baseUrl, login, token);
    }
}