const logger = (req, res, next) => {
  console.log(req.baseUrl);
  next();
};

module.exports = logger;
