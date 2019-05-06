'use strict';

const jwt = require('jsonwebtoken');
const config = require('../../config');

module.exports = (req, res, next) => {
  const token = req.query.token;

  if (!token) {
    return res.json({
      error: 'This endpoint requires a token'
    });
  }

  jwt.verify(token || '', config.JWTSecret, (err, data) => {
    if (err) {
      return res.json({
        error: 'Invalid token'
      });
    }

    const { dinosaurId } = data;
    req.dinosaurId = dinosaurId;
    next();
  });
};
