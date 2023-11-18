const authenticateUser = (req, res, next) => {
    if (!req.session.authUser) {
        return res.status(401).json({ message: "Unauthorized access. Please log in." });
    }
    next();
};

module.exports = {
    authenticateUser,
}