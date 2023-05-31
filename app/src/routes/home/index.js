"use strict";

const express = require('express');
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get('/',ctrl.output.home);
router.get('/login',ctrl.output.login);
router.get('/signup',ctrl.output.signup);
router.get('/inquiry',ctrl.output.inquiry);
router.post('/login',ctrl.process.login);

module.exports = router;