"use strict";

const User = require("../../models/User");
const output = {
    home : (req, res) => {
    res.render('home/index');
    },
    login : (req, res) => {
    res.render('home/login');
    },
    signup : (req, res) => {
        res.render('home/signup');
    },
    inquiry : (req, res) => {
        res.render('home/inquiry');
    },
};
const process = {    
    login: (req,res)=>{
        const user = new User(req.body);  // 수정된 부분
        const response = user.login();
        console.log(response);
        return res.json(response);
        /*
        const id = req.body.id,
        psword=req.body.psword;

        const users = UserStorage.getUsers("id","psword");
        
        console.log(users);
        
        if(users.id.includes(id)){
            const idx = users.id.indexOf(id); // user를 users로 바꿉니다.
            if(users.psword[idx]===psword){
                return res.json({
                    success: true,
                });
            }
        }
        return res.json({
            success: false,
            msg: "로그인에 실패하셨습니다.",
        });
        */
    }
}
module.exports = {
    output,
    process,
};
