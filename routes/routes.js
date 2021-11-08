const e=require('express');
const r=e.Router();
const c=require('../controllers/controllers');

r.get('/say-something',c.saySomething);

module.exports=r;