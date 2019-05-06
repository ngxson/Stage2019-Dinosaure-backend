'use strict';

const jwt = require('jsonwebtoken');
const config = require('../../config');

module.exports = (req, res, next) => {
  const token = req.query.token;

  if (!token) {
    return next();
  }

  jwt.verify(token || '', config.JWTSecret, (err, data) => {
    if (err) {
      return next();
    }

    const { dinosaurId } = data;
    req.dinosaurId = dinosaurId;
    next();
  });
};
