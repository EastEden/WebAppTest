const express = require('express'),
  router = express.Router();

/* Get all contacts
 * Since we have to get all the users everytime we entre the webapp,
 * As a result, we can deal with all the informations in the frontend.
 * I will only implement the get all contact API.
 */
router.get('/list', function(req, res) {

  let sql = `SELECT * FROM persons`;

  db.query(sql, function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      data,
      message: "Contact lists retrieved successfully"
    })
  })
});

// Create new contact
router.post('/new', function(req, res) {
  let sql = `INSERT INTO persons(LastName, FirstName, Phone, Email, Pic) VALUES (?)`;
  let values = [
    req.body.LastName,
    req.body.FirstName,
    req.body.Phone,
    req.body.Email,
    req.body.Pic
  ];

  if(!req.body.LastName || !req.body.FirstName || !req.body.Phone || !req.body.Pic){
    res.json({
      message: "Information INVALID"
    }).status(400);
    return;
  }
  console.log(values);

  db.query(sql, [values], function(err, data, fields) {
    if (err) throw err;
    res.json({
      status: 200,
      message: "New contact added successfully"
    })
  })
  
});

router.delete('/delete/:id', (req,res) => {
  let sql = `DELETE FROM persons WHERE Personid = ` + req.params.id;
  db.query(sql,(err,data,fields) => {
    if(err) throw err;
    res.status(200).json({message: "Delete Success"});
  })
})

module.exports = router;