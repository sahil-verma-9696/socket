const loginSessionChecker = (req, res, next) => {
    if (req.session.authUser) {
        return res.status(401).json({ message: "session already exist" });
    }else{
        next();
    }
};

const logoutSessionChecker = (req, res, next) => {
    if (req.session.authUser) {
        console.log("middleware");
        console.log(req.session.authUser);
        next();
    }else{
        return res.status(401).json({ message: "session not exist" });
    }
};

module.exports = {
    loginSessionChecker,
    logoutSessionChecker
}