exports.basicAuth = (req, res, next) => {
    if (req.headers['authorization'] === "Basic dGVzdDE6dGVzdDE=") {
        next();
    } else {
        res.status(401);
        res.json({ error: true, message: 'Improper authorization' });
    }
};