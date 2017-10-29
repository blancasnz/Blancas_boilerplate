const router = require('express').Router();
const puppies = require('./puppies');

router.use('/puppies', puppies);


router.use((req, res, next) => {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
})


module.exports = router;
