var express = require('express');
var router = express.Router();
var pg = require('pg');

var config = {database: 'gif'};
var pool = new pg.Pool(config);

var bodyParser = require('body-parser');
router.use(bodyParser.json());

// router.post('/', function(req, res) {
//   pool.connect(err, client, done) {
//     if(err) {
//       console.log('Error connecting to DB, err');
//       res.sendStatus(500);
//       done()
//     } else {
//       client.query(
//         "INSERT INTO gif (gif_url, comment) VALUES ($1, $2) RETURNING *;",
//         [req.body.gif_url, req.body.comment],
//         function(err, result) {
//           done();
//           if (err) {
//             console.log('Error querying DB', err);
//             res.sendStatus(500);
//           } else {
//             console.log('Got info from DB', result.rows);
//             res.send(result.rows);
//           }
//         }
//       )
//     }
//   }
// })

router.get('/', function(req, res) {
  pool.connect(err, client, done) {
    if(err) {
      console.log('Error connecting to DB, err');
      res.sendStatus(500);
      done()
    } else {
      client.query(
        'SELECT * FROM gif ORDER BY id ASC',
        function(err, result) {
          done();
          if (err) {
            console.log('Error querying DB', err);
            res.sendStatus(500);
          } else {
            console.log('Got info from DB', result.rows);
            res.send(result.rows);
          }
        }
      )
    }
  }
})

module.exports = router;
