var express = require('express');
var router = express.Router();
var db = require("../db");

router.get('/', async function(req, res, next) {
  await db(async function(client) {
    var collection = await client.db("test").collection("clicks");

    await collection.insertOne({
      userId: req.query.visitor_id,
      clickDate: new Date(),
      clickVersion: "B"
    });
  });

  res.send('Version B of the API');
});

module.exports = router;
