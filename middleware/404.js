const notFound = (req, res, next) => {
    res.status(404).json({ msg: "Route Doesn't exist" });
}

module.exports = notFound;