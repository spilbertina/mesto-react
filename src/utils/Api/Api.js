import { Get } from "./Requests/Get.js";
import { Patch } from "./Requests/Patch.js";
import { Post } from "./Requests/Post.js";
import { Put } from './Requests/Put.js'
import { Delete } from './Requests/Delete.js'

export class Api {
    constructor(baseUrl, login, token) {
        this._baseUrl = baseUrl;
        this._login = login;
        this._token = token;

        this._get = new Get(this._baseUrl, this._login, this._token);
        this._patch = new Patch(this._baseUrl, this._login, this._token);
        this._post = new Post(this._baseUrl, this._login, this._token);
        this._put = new Put(this._baseUrl, this._login, this._token);
        this._delete = new Delete(this._baseUrl, this._login, this._token)
    }

    getInitialCards() {
        return this._get.query('cards');
    }

    getUserInfo() {
        return this._get.query('users/me');
    }

    updateUserInfo(data) {
        return this._patch.query('users/me', data);
    }

    addCard(data) {
        return this._post.query('cards', data);
    }

    updateAvatar(data) {
        return this._patch.query('users/me/avatar', data);
    }

    setLike(cardId) {
        return this._put.query(`cards/${cardId}/likes`);
    }

    deleteLike(cardId) {
        return this._delete.query(`cards/${cardId}/likes`);
    }

    deleteCard(cardId) {
        return this._delete.query(`cards/${cardId}`);
    }
}
