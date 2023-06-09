var express = require('express');
var router = express.Router();
var db = require("../db");

/* GET home page. */
router.get('/', async function(req, res, next) {
  var version = Math.random() > 0.5 ? "A" : "B";

  await db(async function(client) {
    var collection = await client.db("test").collection("visits");

    await collection.insertOne({
      visitTime: new Date(),
      version
    });
  });

  res.render('index', {
    version
  });
});

module.exports = router;
