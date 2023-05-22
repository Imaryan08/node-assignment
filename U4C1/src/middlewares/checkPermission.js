module.exports = checkPermission = (req, res, next) => {
  if (req.baseUrl === "/authors" || req.baseUrl === "/libraries")
    req.permission = true;
//   else req.permission = false;

  next();
};
