const express = require('express');
const { Users } = require('../models/users');

const router = express.Router();
const userModel = new Users();

router.patch('/scoreReflexe', async function (req, res, next) {
  if (!req.body || (req.body.hasOwnProperty('time-text') && req.body.scoreReflexe === ''))
    return res.status(400).end();
  /* continue change for reflexe game*/
  const user = await userModel.getOneByUsername(req.body.username);
  console.log(user.scoreReflexe);
  console.log(req.body.scoreReflexe);
  if (user.scoreReflexe <= req.body.scoreReflexe) {
    return res.json(user);
  } else {
    const updatedUser = await userModel.updateOne(req.body.username, req.body);

    if (!updatedUser) return res.status(409).end();

    return res.json(updatedUser);
  }
});

/*DEMANDER AU PROF SI JE PEUX VERIFIER LE SCORE ICI (ANCIEN SCORE <= NOUVEAU SCORE) */
router.put('/scoreFastClick', async function (req, res, next) {
  if (!req.body || (req.body.hasOwnProperty('time-text') && req.body.score === ''))
    return res.status(400).end();
  /* continue change for faskclick game*/

  const updatedUser = await userModel.updateOne(req.body.username, req.body);

  if (!updatedUser) return res.status(409).end();

  return res.json(updatedUser);
});

module.exports = router;

/*router.post('/scoreAimClick', async function (req, res, next) {
    if (
      !req.body ||
      (req.body.hasOwnProperty('time-text') && req.body.score === '')
    )
      return res.status(400).end();
      const authenticatedUser = await userModel.register(req.body.username, req.body.password);
  
      if(!authenticatedUser)return res.status(409).end();
  
      return res.json(authenticatedUser);
  });*/

/*router.post('/scoreTracking', async function (req, res, next) {
    if (
      !req.body ||
      (req.body.hasOwnProperty('time-text') && req.body.score === '')
    )
      return res.status(400).end();
       const authenticatedUser = await userModel.register(req.body.username, req.body.password);
  
      if(!authenticatedUser)return res.status(409).end();
  
      return res.json(authenticatedUser);
  });*/
