"use strict";

class UserStorage{
    static #users ={
        id :["1234","2345"],
        psword:["1234","2345"],
        key:[true,false],
    };
    static getUsers(...fields){
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field)=>{
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    } 
    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        const userInfo = Object.keys(users).reduce((newUser,info) => {
            newUser[info]=users[info][idx];
            return newUser;
        },{});
        return userInfo;
    }
}
module.exports = UserStorage;