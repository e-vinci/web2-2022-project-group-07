const express = require('express');
const { Users } = require('../models/users');

const router = express.Router();
const userModel = new Users();

router.get('/username', async function (req, res) {
    if (
        !req.body ||
        (req.body.hasOwnProperty('id') && req.body.id.length === 0) ||
        (req.body.hasOwnProperty('username') && req.body.username.length === 0)
      )
        return res.status(400).end();
    
      const user = await userModel.getOneById(req.body.id);
    
      if (!user) return res.status(401).end();
    
      return res.json(user);
});

module.exports = router;