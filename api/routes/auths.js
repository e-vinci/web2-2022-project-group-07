const express = require('express');
const { Users } = require('../models/users');

const router = express.Router();
const userModel = new Users();

/* GET users listing. */
router.get('/', (req, res) => {
  res.json({ users: [{ name: 'e-baron' }] });
});

router.post('/register', async function (req, res, next) {
  if (
    !req.body ||
    (req.body.hasOwnProperty('username') && req.body.username.length === 0) ||
    (req.body.hasOwnProperty('password') && req.body.password.length === 0)
  )
    return res.status(400).end();

    const authenticatedUser = await userModel.register(req.body.username, req.body.password);

    if(!authenticatedUser)return res.status(409).end();

    return res.json(authenticatedUser);
});

router.post('/profil', async function (req, res, next) {
  if (
    !req.body ||
    (req.body.hasOwnProperty('username') && req.body.username.length === 0) ||
    (req.body.hasOwnProperty('password') && req.body.password.length === 0)
  )
    return res.status(400).end();

    const authenticatedUser = await userModel.register(req.body.username, req.body.password);

    if(!authenticatedUser)return res.status(409).end();

    return res.json(authenticatedUser);
});

/* login a user : POST /auths/login*/
router.post('/login', async function (req, res, next) {
  if (
    !req.body ||
    (req.body.hasOwnProperty('username') && req.body.username.length === 0) ||
    (req.body.hasOwnProperty('password') && req.body.password.length === 0)
  )
    return res.status(400).end();

  const authenticatedUser = await userModel.login(req.body.username, req.body.password);

  if (!authenticatedUser) return res.status(401).end();

  return res.json(authenticatedUser);
});

module.exports = router;
