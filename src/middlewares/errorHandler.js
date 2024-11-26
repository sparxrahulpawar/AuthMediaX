module.exports = function (err, req, res, next) {
  console.error("Internal Server Error", err);
  res.status(500).send({ message: err.message || "Internal Server Error" });
};
