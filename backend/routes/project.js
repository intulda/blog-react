const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/detail/:projectId', async (req, res, next) => {
  console.log('req.params.projectId', req.params.projectId);
  try {
    const dataBuffer = fs.readFileSync(`./public/resource/${req.params.projectId}.json`);
    const jsonData = dataBuffer.toString();
    res.status(200).json(jsonData);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

module.exports = router;