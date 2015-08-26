var express = require('express');
var router = express.Router();
var puppies =[{name: 'light', age: 9}, {name: 'lottie', age: 4}];


router.get('/form', function(req, res, next){
  res.render('form');
});

// 1 -- CRUD Create, Read, Update, Destroy -- REST

//2 -- Setup/Test Routes

//GET all puppies
router.get('/', function(req, res, next) {
  res.json( puppies );
});

//GET single puppy
router.get('/puppies/:id', function(req, res, next){
  console.log(req.params);
  res.json(puppies[req.params.id-1]);
});

//POST a single puppy
router.post('/', function(req, res, next){
  var new_puppy = {name: req.body.name, age: req.body.age};
  puppies.push(new_puppy);
  res.json( puppies );
});


//PUT single puppy
router.put('/puppies/:id', function(req, res, next){
  var current_puppy = puppies[req.params.id];
  current_puppy.name = req.body.name;
  current_puppy.age = req.body.age;
  res.json(puppies);
});

//DELETE single puppy
router.delete('/puppy/:id', function(req, res, next){
  puppies.splice((req.params.id-1), 1);
  res.json(puppies);
});







module.exports = router;
